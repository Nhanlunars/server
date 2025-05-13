import db from "../models/index";
import { Usege_history } from "../models/usege_histories";
import { Charger_type } from "../models/charger_type";
const { Op, fn, col, literal } = require("sequelize");


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
        if (data.number_end !== undefined && data.number_end !== null && data.number_end != 0) {
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
          console.log(data.status);
          await typeStatus.save();
          resolve({
            errCode: 0,
            message: "Update the type status succeeds!",
          });
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
/*
let getAllLocationByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let historys = await Location.findAll({
                    where: { user_id: userId }
                })
            
            resolve(historys)
        } catch (e) {
            reject(e);
        }
    })
}*/

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

    /*const stats = await Usege_history.findAll({
      attributes: [
        [fn("DATE_FORMAT", col("end_time"), format), "date"],
        [fn("SUM", col("cost")), "total"]
      ],
      group: [literal(`DATE_FORMAT(end_time, '${format}')`)],
      order: [[literal(`DATE_FORMAT(end_time, '${format}')`), "ASC"]]
    });*/

    const stats = await Usege_history.findAll({
    attributes: [
      [db.sequelize.literal(`DATE_FORMAT(end_time, '${dateFormat}')`), "date"],
      [fn("SUM", col("cost")), "total"],
    ],
    group: [literal(`DATE_FORMAT(end_time, '${dateFormat}')`)],
    order: [[literal("date"), "ASC"]],
    raw: true,
  });

    return {
      errCode: 0,
      errMessage: "OK",
      data: stats
    };
  } catch (e) {
    console.error("getRevenueStats error:", e);
    return {
      errCode: 1,
      errMessage: "Failed to get dashboard stats"
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
      if (!data.id || !data.user_id || !data.charger_id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let history = await Usege_history.findOne({
        where: { id: data.id },
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
  // getAllLocationByUserId: getAllLocationByUserId,
  getRevenueStats: getRevenueStats,
  deleteHistory: deleteHistory,
  updateHistory: updateHistory,
};
