import bcrypt from 'bcryptjs';
var passwordValidator = require('password-validator');
import { User } from '../models/user';
import { Allcode } from '../models/allcode';
import { mailService } from '../providers/mailService';
import { createOpt } from './otpService';
import { OTP } from '../models/otp';
import dayjs from 'dayjs';

const salt = bcrypt.genSaltSync(10);
// Create a schema
var schema = new passwordValidator();
var checkemail = new passwordValidator();
checkemail.is().min(8).has(['@']);

// Add properties to it
schema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(50) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .digits(1) // Must have at least 2 digits
  .has()
  .not()
  .spaces(); // Should not have spaces
//.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

let hashUserPassword = (password) => {
  return new Promise(async (resoleve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resoleve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        //User already exist
        let user = await User.findOne({
          attributes: [
            'email',
            'roleId',
            'password',
            'firstName',
            'lastName',
            'id',
          ],
          where: { email: email },
          raw: true,
        });
        if (user) {
          //compare password
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = 'Ok';
            //console.log(user)
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = 'Wrong password?';
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        //return error
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system. Plz try other email!`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await User.findOne({
        where: { email: userEmail },
      });
      let check1 = checkemail.validate(userEmail);
      console.log('checkemai', check1);
      if (check1 === true) {
        if (user) {
          resolve(true);
        } else resolve(false);
      } else {
        resolve(1);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = '';
      if (userId === 'All') {
        users = await User.findAll({
          attributes: {
            exclude: ['password'],
          },
        });
      }
      if (userId && userId !== 'All') {
        users = await User.findAll({
          where: { id: userId },
          attributes: {
            exclude: ['password'],
          },
          include: [
            {
              association: 'location',
            },
          ],
          raw: true,
          nest: true,
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllRoles = (roleType) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await User.findAll({
        where: { roleId: roleType },
        attributes: {
          exclude: ['password'],
        },
      });

      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email is exist ???
      let check = await checkUserEmail(data.email);
      //console.log('kiem tra gia tri email', check)
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: 'Your email is already in used, Plz try another email',
        });
      } else {
        if (check === 1) {
          resolve({
            errCode: 1,
            errMessage:
              'Your email is not right, email it nhat 8 ki tự, phải có @',
          });
        } else {
          let check1 = schema.validate(data.password);
          if (check1 === false) {
            resolve({
              errCode: 2,
              errMessage:
                'Your password is not right, password min 8, max 50, has uppercase, has lowercase, has digits, no space ',
            });
          } else {
            //console.log('1')
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);

            const user = User.build({
              email: data.email,
              password: hashPasswordFromBcrypt,
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              phonenumber: data.phonenumber,
              gender: data.gender,
              roleId: data.roleId,
              image: data.avatar,
              ban: data.ban,
            });

            await user.save();
            const opt = await createOpt({ user_id: user.null });

            await mailService.sendOptToUser({
              otp: opt,
              email: user.email,
              username: `${user.firstName} ${user.lastName}`,
            });

            resolve({
              errCode: 0,
              message: 'Ok',
            });
          }
        }
      }
    } catch (e) {
      console.log('🚀 ~ returnnewPromise ~ e:', e);
      reject(e);
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    let foundUser = await User.findOne({
      where: { id: userId },
    });
    if (!foundUser) {
      resolve({
        errCode: 2,
        errMessage: `The user isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await User.destroy({
      where: { id: userId },
    });
    resolve({
      errCode: 0,
      errMessage: `The user is delete`,
    });
  });
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.roleId || !data.gender) {
        resolve({
          errCode: 2,
          message: 'Missing required parameter !',
        });
      }
      let user = await User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.roleId = data.roleId;
        user.gender = data.gender;
        user.phonenumber = data.phonenumber;
        user.ban = data.ban;
        if (data.avatar) {
          user.image = data.avatar;
        }
        await user.save();
        resolve({
          errCode: 0,
          message: 'Update the user succeeds!',
        });
      } else {
        resolve({
          errCode: 1,
          message: `User's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllCodeService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: 'Missing required parameters',
        });
      } else {
        let res = {};
        let allcode = await Allcode.findAll({
          where: { type: typeInput },
        });
        res.errCode = 0;
        res.data = allcode;
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const forgetPassword = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Email not found');
  }

  const otp = await createOpt({ user_id: user.id });
  await mailService.forgotPassword({ email, otp });

  return 'OTP sent to your email';
};

const confirmForgetPassword = async ({
  email,
  code,
  newPassword,
  confirmPassword,
}) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Email not found');
  }

  if (newPassword !== confirmPassword) {
    throw new Error('New password and confirm password do not match');
  }

  const otp = await OTP.findOne({ where: { user_id: user.id, code } });

  if (!otp || otp.is_used || dayjs().isBefore(otp.expiry_date, new Date())) {
    throw new Error('Invalid or expired OTP');
  }

  const hashPassword = await bcrypt.hash(newPassword, salt);
  await user.save({ password: hashPassword });
  await otp.update({ is_used: true });

  return 'Password updated successfully';
};

module.exports = {
  forgetPassword,
  confirmForgetPassword,
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService,
  getAllRoles: getAllRoles,
};
