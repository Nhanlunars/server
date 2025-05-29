import { Charger_type } from "../models/charger_type";
import { Location } from "../models/location";
import { Charger } from "../models/charger";

// const express = require("express");
// const cors = require("cors");
const db = require("./firebase");

// const admin = require("firebase-admin");
// const serviceAccount = require("./serviceAccountKey.json"); // Tải từ Firebase Console

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://pcss-e2b2e-default-rtdb.firebaseio.com",
// });

// const db = admin.database();

let createType = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.charger_id || !data.type_name || !data.default_price) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await Charger_type.create({
          charger_id: data.charger_id,
          type_name: data.type_name,
          describe: data.describe,
          default_price: data.default_price,
          status: data.status,
        });

        resolve({
          errCode: 0,
          errMessage: "Ok",
        });
        if ((data.status = "S1")) {
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllType = (typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let types = "";
      if (typeId === "All") {
        types = await Charger_type.findAll({
          include: [
            {
              association: "charger",
            },
          ],
          raw: true,
          nest: true,
        });
        return resolve(types);
      }
      if (typeId && typeId !== "All") {
        types = await Charger_type.findOne({
          where: { id: typeId },
          include: [
            {
              association: "charger",
            },
          ],
        });
        // Lấy thêm dữ liệu từ Firebase
        const snapshot = await db
          .ref(`control${typeId}/pzem/energy`)
          .once("value");
        const firebaseData = snapshot.val();

        // Có thể thêm vào kết quả trả về nếu muốn
        const result = {
          ...types?.dataValues,
          energy: firebaseData,
        };

        return resolve(result);
      }
      resolve(null);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllTypeByChargerId = (chargerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let types = await Charger_type.findAll({
        where: { charger_id: chargerId },
      });

      resolve(types);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllTypeByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let types = await Charger_type.findAll({
        include: [
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
        ],
        raw: true,
        nest: true,
      });

      resolve(types);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteType = (typeId) => {
  return new Promise(async (resolve, reject) => {
    let foundType = await Charger_type.findOne({
      where: { id: typeId },
    });
    if (!foundType) {
      resolve({
        errCode: 2,
        errMessage: `The type isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await Charger_type.destroy({
      where: { id: typeId },
    });
    resolve({
      errCode: 0,
      errMessage: `The type is delete`,
    });
  });
};

let updateType = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let type = await Charger_type.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (type) {
        type.charger_id = data.charger_id;
        type.type_name = data.type_name;
        type.describe = data.describe;
        type.default_price = data.default_price;
        type.status = data.status;

        await type.save();
        resolve({
          errCode: 0,
          message: "Update the type succeeds!",
        });
        if (data.status === "S1") {
          db.ref(`control${data.id}/leds/led1`).set(true);
          db.ref(`control${data.id}/leds/led2`).set(false);
          db.ref(`control${data.id}/leds/led3`).set(false);
          db.ref(`control${data.id}/leds/led4`).set(false);
        }
        if (data.status === "S2") {
          db.ref(`control${data.id}/leds/led1`).set(false);
          db.ref(`control${data.id}/leds/led2`).set(true);
          db.ref(`control${data.id}/leds/led3`).set(false);
          db.ref(`control${data.id}/leds/led4`).set(false);
        }
        if (data.status === "S3") {
          db.ref(`control${data.id}/leds/led1`).set(false);
          db.ref(`control${data.id}/leds/led2`).set(false);
          db.ref(`control${data.id}/leds/led3`).set(true);
          db.ref(`control${data.id}/leds/led4`).set(false);
        }
        if (data.status === "S4") {
          db.ref(`control${data.id}/leds/led1`).set(false);
          db.ref(`control${data.id}/leds/led2`).set(false);
          db.ref(`control${data.id}/leds/led3`).set(false);
          db.ref(`control${data.id}/leds/led4`).set(true);
        }
      } else {
        resolve({
          errCode: 1,
          message: `Type's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createType: createType,
  getAllType: getAllType,
  getAllTypeByChargerId: getAllTypeByChargerId,
  getAllTypeByUserId: getAllTypeByUserId,
  deleteType: deleteType,
  updateType: updateType,
};
