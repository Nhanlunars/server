import { Usege_history } from "../models/usege_histories";
import { Charger_type } from "../models/charger_type";
const { Op, fn, col, literal } = require("sequelize");
const db = require("./firebase");
const database = require("../models");
const sequelize = database.sequelize;

let createHistory = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.user_id ||
        !data.charger_id ||
        !data.type_id ||
        !data.start_time ||
        !data.number_start
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let typeStatus = await Charger_type.findOne({
          where: { id: data.type_id },
          raw: false,
        });
        let cost = null;
        if (
          data.number_end !== undefined &&
          data.number_end !== null &&
          data.number_end != 0
        ) {
          const quantity = data.number_end - data.number_start;
          if (quantity < 0) {
            return resolve({
              errCode: 3,
              errMessage:
                "number_end must be greater than or equal to number_start",
            });
          }
          cost = quantity * typeStatus.default_price;
        }
        // 🔍 Kiểm tra xung đột lịch/phiên sạc
        const [conflict] = await sequelize.query(
          `
        
        SELECT 1 FROM Usege_histories
        WHERE user_id = :userId AND end_time IS NULL
      `,
          {
            replacements: { userId: data.user_id },
          }
        );

        if (conflict.length > 0) {
          return resolve({
            errCode: 2,
            messages: "Bạn đã có một lịch đặt hoặc phiên sạc chưa hoàn thành.",
          });
        }
        await Usege_history.create({
          user_id: data.user_id,
          charger_id: data.charger_id,
          type_id: data.type_id,
          start_time: data.start_time,
          end_time: data.end_time || null,
          number_start: data.number_start,
          number_end: data.number_end || null,
          cost: cost,
        });

        if (typeStatus) {
          typeStatus.status = data.status;
          await typeStatus.save();
          resolve({
            errCode: 0,
            message: "Update the type status succeeds!",
          });
          if (data.status === "S1") {
            db.ref(`control${data.type_id}/leds/led1`).set(true);
            db.ref(`control${data.type_id}/leds/led2`).set(false);
            db.ref(`control${data.type_id}/leds/led3`).set(false);
            db.ref(`control${data.type_id}/leds/led4`).set(false);
          }
          if (data.status === "S2") {
            db.ref(`control${data.type_id}/leds/led1`).set(false);
            db.ref(`control${data.type_id}/leds/led2`).set(true);
            db.ref(`control${data.type_id}/leds/led3`).set(false);
            db.ref(`control${data.type_id}/leds/led4`).set(false);
          }
          if (data.status === "S3") {
            db.ref(`control${data.type_id}/leds/led1`).set(false);
            db.ref(`control${data.type_id}/leds/led2`).set(false);
            db.ref(`control${data.type_id}/leds/led3`).set(true);
            db.ref(`control${data.type_id}/leds/led4`).set(false);
          }
          if (data.status === "S4") {
            db.ref(`control${data.type_id}/leds/led1`).set(false);
            db.ref(`control${data.type_id}/leds/led2`).set(false);
            db.ref(`control${data.type_id}/leds/led3`).set(false);
            db.ref(`control${data.type_id}/leds/led4`).set(true);
          }
        } else {
          resolve({
            errCode: 1,
            message: `Type status not found!`,
          });
        }
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

/*
let getAllHistory = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await Location.findAll();       
            resolve({
                errMessage: 'Ok',
                errCode: 0,
                data
            })     
        } catch (e) {
            reject(e);
        }
    })
}*/

let getAllHistorys = (historyId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let historys = "";
      if (historyId === "All") {
        historys = await Usege_history.findAll({
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
      if (historyId && historyId !== "All") {
        historys = await Usege_history.findOne({
          where: { id: historyId },
        });
      }
      resolve(historys);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllHistoryByOwnerId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let historys = await Usege_history.findAll({
        include: [
          {
            association: "user",
            attributes: {
              exclude: ["password", "image"],
            },
          },
          {
            //model: Charger,
            association: "charger",
            required: true,
            include: [
              {
                //model: Location,
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

      resolve(historys);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllHistoryByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let historys = await Usege_history.findAll({
        where: { user_id: userId },
        include: [
          {
            //model: Charger,
            association: "charger",
            required: true,
            include: [
              {
                //model: Location,
                association: "location",
                required: true,
              },
            ],
          },
          {
            association: "type",
          },
        ],
        order: [["createdAt", "DESC"]],
        raw: true,
        nest: true,
      });

      resolve(historys);
    } catch (e) {
      reject(e);
    }
  });
};

let getHistoryByTypeId = (typeId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let historys = await Usege_history.findOne({
        where: { type_id: typeId },

        order: [["createdAt", "DESC"]],
      });

      resolve(historys);
    } catch (e) {
      reject(e);
    }
  });
};

const getRevenueStats = async (type) => {
  try {
    let dateFormat = "%Y-%m-%d"; // default: ngày
    if (type === "month") {
      dateFormat = "%Y-%m";
    } else if (type === "week") {
      // ISO Week Format
      dateFormat = "%x-W%v";
    } else if (type === "year") {
      dateFormat = "%Y";
    }
    const stats = await Usege_history.findAll({
      attributes: [
        [
          db.sequelize.literal(`DATE_FORMAT(end_time, '${dateFormat}')`),
          "date",
        ],
        [fn("SUM", col("cost")), "total"],
      ],
      group: [literal(`DATE_FORMAT(end_time, '${dateFormat}')`)],
      order: [[literal("date"), "ASC"]],
      raw: true,
    });

    return {
      errCode: 0,
      errMessage: "OK",
      data: stats,
    };
  } catch (e) {
    console.error("getRevenueStats error:", e);
    return {
      errCode: 1,
      errMessage: "Failed to get dashboard stats",
    };
  }
};

const getRevenueStatsByOwnerId = async (data) => {
  try {
    let dateFormat = "%Y-%m-%d"; // default: ngày
    if (data.type === "month") {
      dateFormat = "%Y-%m";
    } else if (data.type === "week") {
      // ISO Week Format
      dateFormat = "%x-W%v";
    } else if (data.type === "year") {
      dateFormat = "%Y";
    }
    const stats = await Usege_history.findAll({
      include: [
        {
          //model: Charger,
          association: "charger",

          required: true,
          include: [
            {
              //model: Location,
              association: "location",
              where: { user_id: data.userId },
              required: true,
            },
          ],
        },
      ],
      attributes: [
        [
          db.sequelize.literal(`DATE_FORMAT(end_time, '${dateFormat}')`),
          "date",
        ],
        [fn("SUM", col("cost")), "total"],
      ],

      group: [literal(`DATE_FORMAT(end_time, '${dateFormat}')`)],
      order: [[literal("date"), "ASC"]],
      raw: true,
      nest: true,
    });

    return {
      errCode: 0,
      errMessage: "OK1",
      data: stats,
    };
  } catch (e) {
    console.error("getRevenueStats error1:", e);
    return {
      errCode: 1,
      errMessage: "Failed to get dashboard stats  1",
    };
  }
};

let deleteHistory = (historyId) => {
  return new Promise(async (resolve, reject) => {
    let foundHistory = await Usege_history.findOne({
      where: { id: historyId },
    });
    if (!foundHistory) {
      resolve({
        errCode: 2,
        errMessage: `The history isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await Usege_history.destroy({
      where: { id: historyId },
    });
    resolve({
      errCode: 0,
      errMessage: `The history is delete`,
    });
  });
};

let updateHistory = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("check data", data);
      if (!data.id || !data.user_id || !data.charger_id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let history = await Usege_history.findOne({
        where: { id: data.id, user_id: data.user_id },
        raw: false,
      });
      let typeStatus = await Charger_type.findOne({
        where: { id: data.type_id },
        raw: false,
      });
      if (typeStatus) {
        typeStatus.status = data.status;
        await typeStatus.save();
        resolve({
          errCode: 0,
          message: "Update the type status succeeds!",
        });
        if (data.status === "S1") {
          db.ref(`control${data.type_id}/leds/led1`).set(true);
          db.ref(`control${data.type_id}/leds/led2`).set(false);
          db.ref(`control${data.type_id}/leds/led3`).set(false);
          db.ref(`control${data.type_id}/leds/led4`).set(false);
        }
        if (data.status === "S2") {
          db.ref(`control${data.type_id}/leds/led1`).set(false);
          db.ref(`control${data.type_id}/leds/led2`).set(true);
          db.ref(`control${data.type_id}/leds/led3`).set(false);
          db.ref(`control${data.type_id}/leds/led4`).set(false);
        }
        if (data.status === "S3") {
          db.ref(`control${data.type_id}/leds/led1`).set(false);
          db.ref(`control${data.type_id}/leds/led2`).set(false);
          db.ref(`control${data.type_id}/leds/led3`).set(true);
          db.ref(`control${data.type_id}/leds/led4`).set(false);
        }
        if (data.status === "S4") {
          db.ref(`control${data.type_id}/leds/led1`).set(false);
          db.ref(`control${data.type_id}/leds/led2`).set(false);
          db.ref(`control${data.type_id}/leds/led3`).set(false);
          db.ref(`control${data.type_id}/leds/led4`).set(true);
        }
      } else {
        resolve({
          errCode: 1,
          message: `Type status not found!`,
        });
      }
      let cost = null;
      if (
        data.number_end !== undefined &&
        data.number_end !== null &&
        data.number_end !== 0
      ) {
        const quantity = data.number_end - history.number_start;
        if (quantity < 0) {
          return resolve({
            errCode: 3,
            errMessage:
              "number_end must be greater than or equal to number_start",
          });
        }
        cost = quantity * typeStatus.default_price;
      }
      if (history) {
        history.user_id = data.user_id;
        history.charger_id = data.charger_id;
        history.type_id = data.type_id;
        history.start_time = data.start_time;
        history.end_time = data.end_time;
        history.number_start = data.number_start;
        history.number_end = data.number_end;
        history.cost = cost;
        await history.save();
        resolve({
          errCode: 0,
          message: "Update the history succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          message: `History's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createHistory: createHistory,
  getAllHistorys: getAllHistorys,
  getAllHistoryByOwnerId: getAllHistoryByOwnerId,
  getHistoryByTypeId: getHistoryByTypeId,
  getAllHistoryByUserId: getAllHistoryByUserId,
  getRevenueStats: getRevenueStats,
  getRevenueStatsByOwnerId: getRevenueStatsByOwnerId,
  deleteHistory: deleteHistory,
  updateHistory: updateHistory,
};
