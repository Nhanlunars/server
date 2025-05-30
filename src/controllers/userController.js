import userService from '../services/userService';

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!',
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  //check email exits
  //copmare password
  //return userInfo
  //access token:JWT json web token

  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
    token: userData.token || null, // ✅ Thêm token trả về
  });
};

let handleGetAllUser = async (req, res) => {
  let id = req.query.id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing require parameters',
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);
  //console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    users,
  });
};

let GetAllRole = async (req, res) => {
  let roleId = req.query.roleId; //All, id
  if (!roleId) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing require parameters',
      users: [],
    });
  }
  let users = await userService.getAllRoles(roleId);
  //console.log(users);
  return res.status(200).json({
    errCode: 0,
    errMessage: 'Ok',
    users,
  });
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: 'Missing required parameters!',
    });
  }
  let message = await userService.deleteUser(req.body.id);

  return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log('Get all code error: ', e);
    return res.status(200).json({
      errCode: -1,
      errMessage: 'Error from server',
    });
  }
};

const confirmForgetPasswordController = async (req, res) => {
  const requiredFields = ['email', 'code', 'newPassword', 'confirmPassword'];
  try {
    const missingRequiredFields = [];
    requiredFields.forEach((field) => {
      if (!req.body[field]) {
        missingRequiredFields.push(field);
      }
    });

    if (missingRequiredFields.length) {
      throw new Error(`Field ${missingRequiredFields.join(', ')} is required`);
    }

    const message = await userService.confirmForgetPassword(req.body);
    return res.status(200).json({
      errCode: 0,
      errMessage: message,
    });
  } catch (error) {
    return res.status(400).json({
      errCode: -1,
      errMessage: error.message,
    });
  }
};

const forgetPasswordController = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw new Error('Email is required');
    }

    const message = await userService.forgetPassword(email);
    return res.status(200).json({
      errCode: 0,
      errMessage: message,
    });
  } catch (error) {
    console.error('ForgetPasswordController:', error);

    return res.status(400).json({
      errCode: -1,
      errMessage: error.message,
    });
  }
};

module.exports = {
  confirmForgetPasswordController,
  forgetPasswordController,
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
  GetAllRole: GetAllRole,
};
