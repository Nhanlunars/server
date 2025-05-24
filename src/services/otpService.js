import { configurations } from '../config/configuration';
import { OTP } from '../models/otp';
import dayjs from 'dayjs';
import { UtilServices } from '../utils/utilsService';

let createOpt = async ({ user_id }) => {
  if (!user_id) {
    throw new Error('user_id not found');
  }

  const optCode = UtilServices.generateCode();

  const existingOtp = await OTP.findOne({ where: { user_id, code: optCode } });

  if (existingOtp) {
    return createOpt({ user_id });
  }

  await OTP.create({
    user_id,
    code: optCode,
    expiry_date: dayjs().add(configurations.opt.expired_period, 'D').toDate(),
  });

  return optCode;
};

let getAllOTP = (OtpId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Otps = '';
      if (OtpId === 'All') {
        Otps = await OTP.findAll({
          include: [
            {
              association: 'user',
              attributes: {
                exclude: ['password', 'image'],
              },
            },
          ],
          raw: true,
          nest: true,
        });
      }
      if (OtpId && OtpId !== 'All') {
        Otps = await OTP.findOne({
          where: { id: OtpId },
        });
      }
      resolve(Otps);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllOTPByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let Otps = await OTP.findAll({
        where: { user_id: userId },
      });

      resolve(Otps);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteOTP = (OtpId) => {
  return new Promise(async (resolve, reject) => {
    let foundOTP = await OTP.findOne({
      where: { id: OtpId },
    });
    if (!foundOTP) {
      resolve({
        errCode: 2,
        errMessage: `The otp isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await OTP.destroy({
      where: { id: OtpId },
    });
    resolve({
      errCode: 0,
      errMessage: `The otp is delete`,
    });
  });
};

let updateOTP = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.user_id) {
        resolve({
          errCode: 2,
          message: 'Missing required parameter !',
        });
      }
      let Otp = await OTP.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (Otp) {
        Otp.user_id = data.user_id;
        Otp.code = data.code;
        Otp.expiry_date = data.expiry_date;
        Otp.is_used = data.is_used;
        await Otp.save();
        resolve({
          errCode: 0,
          message: 'Update the otp succeeds!',
        });
      } else {
        resolve({
          errCode: 1,
          message: `Otp's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOpt: createOpt,
  getAllOTP: getAllOTP,
  getAllOTPByUserId: getAllOTPByUserId,
  deleteOTP: deleteOTP,
  updateOTP: updateOTP,
};
