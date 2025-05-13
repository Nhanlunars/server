import notificationService from "../services/notificationService";

let createNotification = async (req, res) => {
  try {
    let infor = await notificationService.createNotification(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the serverrrrr",
    });
  }
};

let getAllNotification = async (req, res) => {
  let id = req.query.id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      notifications: [],
    });
  }
  let notifications = await notificationService.getAllNotification(id);
  //console.log(notifications);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    notifications,
  });
};

let getAllNotificationByUserId = async (req, res) => {
  let id = req.query.user_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      notifications: [],
    });
  }
  let notifications = await notificationService.getAllNotificationByUserId(id);
  //console.log(notifications);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    notifications,
  });
};

let getAllNotificationByOwnerId = async (req, res) => {
  let id = req.query.user_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      notifications: [],
    });
  }
  let notifications = await notificationService.getAllNotificationByOwnerId(id);
  //console.log(notifications);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    notifications,
  });
};

let deleteNotification = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await notificationService.deleteNotification(req.body.id);

  return res.status(200).json(message);
};

let updateNotification = async (req, res) => {
  let data = req.body;
  let message = await notificationService.updateNotification(data);
  return res.status(200).json(message);
};

module.exports = {
  createNotification: createNotification,
  getAllNotification: getAllNotification,
  getAllNotificationByUserId: getAllNotificationByUserId,
  getAllNotificationByOwnerId: getAllNotificationByOwnerId,
  deleteNotification: deleteNotification,
  updateNotification: updateNotification,
};
