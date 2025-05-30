import db from "../models/index";
import { Notification } from "../models/notification";
import { Charger_type } from "../models/charger_type";
import { Location } from "../models/location";
import { Charger } from "../models/charger";

let createNotification = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.user_id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await Notification.create({
          user_id: data.user_id,
          charger_id: data.charger_id,
          type_id: data.type_id,
          title: data.title,
          message: data.message,
          is_read: data.is_read,
        });
        resolve({
          errCode: 0,
          errMessage: "Ok",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllNotification = (notificationId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let notifications = "";
      if (notificationId === "All") {
        notifications = await Notification.findAll({
          include: [
            {
              association: "user",
              attributes: {
                exclude: ["password", "image"],
              },
            },
            {
              association: "charger",
            },
            {
              association: "type",
            },
          ],
          raw: true,
          nest: true,
        });
      }
      if (notificationId && notificationId !== "All") {
        notifications = await Notification.findOne({
          where: { id: notificationId },
        });
      }
      resolve(notifications);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllNotificationByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let notifications = await Notification.findAll({
        where: { user_id: userId },
        order: [["createdAt", "DESC"]],
      });

      resolve(notifications);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllNotificationByOwnerId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let notifications = await Notification.findAll({
        include: [
          {
            association: "user",
            attributes: {
              exclude: ["password", "image"],
            },
          },
          {
            model: Charger,
            association: "charger",
            required: true,
            include: [
              {
                model: Location,
                association: "location",
                where: { user_id: userId },
                required: true,
              },
            ],
          },
          {
            association: "type",
          },
        ],
        raw: true,
        nest: true,
      });

      resolve(notifications);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteNotification = (notificationId) => {
  return new Promise(async (resolve, reject) => {
    let foundNotification = await Notification.findOne({
      where: { id: notificationId },
    });
    if (!foundNotification) {
      resolve({
        errCode: 2,
        errMessage: `The notification isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await Notification.destroy({
      where: { id: notificationId },
    });
    resolve({
      errCode: 0,
      errMessage: `The notification is delete`,
    });
  });
};

let updateNotification = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.user_id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let notification = await Notification.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (notification) {
        notification.user_id = data.user_id;
        notification.charger_id = data.charger_id;
        notification.type_id = data.type_id;
        notification.title = data.title;
        notification.message = data.message;
        notification.is_read = data.is_read;
        await notification.save();
        resolve({
          errCode: 0,
          message: "Update the notification succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          message: `Notification's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNotification: createNotification,
  getAllNotification: getAllNotification,
  getAllNotificationByUserId: getAllNotificationByUserId,
  getAllNotificationByOwnerId: getAllNotificationByOwnerId,
  deleteNotification: deleteNotification,
  updateNotification: updateNotification,
};
