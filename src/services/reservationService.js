import { Reservation } from "../models/reservation";
import { Charger_type } from "../models/charger_type";
import { Location } from "../models/location";
import { Charger } from "../models/charger";
const db = require("./firebase");

let createReservation = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.user_id ||
        !data.charger_id ||
        !data.type_id ||
        !data.start_time
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await Reservation.create({
          user_id: data.user_id,
          charger_id: data.charger_id,
          type_id: data.type_id,
          start_time: data.start_time,
          end_time: data.end_time,
          note: data.note,
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

/*let getAllReservation = () => {
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

let getAllReservations = (reservationId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let reservations = "";
      if (reservationId === "All") {
        reservations = await Reservation.findAll({
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

          // subQuery: true
        });
        console.log("🚀 ~ returnnewPromise ~ reservations:", reservations);
      }
      if (reservationId && reservationId !== "All") {
        reservations = await Reservation.findOne({
          where: { id: reservationId },
        });
      }
      resolve(reservations);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllReservationByOwnerId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let reservations = await Reservation.findAll({
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

      resolve(reservations);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteReservation = (reservationId) => {
  return new Promise(async (resolve, reject) => {
    let foundReservation = await Reservation.findOne({
      where: { id: reservationId },
    });
    if (!foundReservation) {
      resolve({
        errCode: 2,
        errMessage: `The reservation isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await Reservation.destroy({
      where: { id: reservationId },
    });
    resolve({
      errCode: 0,
      errMessage: `The reservation is delete`,
    });
  });
};

let updateReservation = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.id ||
        !data.user_id ||
        !data.charger_id ||
        !data.type_id ||
        !data.start_time
      ) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let reser = await Reservation.findOne({
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
      if (reser) {
        reser.user_id = data.user_id;
        reser.charger_id = data.charger_id;
        reser.type_id = data.type_id;
        reser.start_time = data.start_time;
        reser.end_time = data.end_time;
        reser.note = data.note;
        await reser.save();
        resolve({
          errCode: 0,
          message: "Update the reservation succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          message: `reservation's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createReservation: createReservation,
  //getAllReservation: getAllReservation,
  getAllReservations: getAllReservations,
  getAllReservationByOwnerId: getAllReservationByOwnerId,
  deleteReservation: deleteReservation,
  updateReservation: updateReservation,
};
