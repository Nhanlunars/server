import db from "../models/index";
import { Charger } from "../models/charger";
import { where } from "sequelize";

let createCharger = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.charger_name || !data.location_id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await Charger.create({
          charger_name: data.charger_name,
          capacity: data.capacity,
          installation_date: data.installation_date,
          last_maintence_date: data.last_maintence_date,
          location_id: data.location_id,
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

let getAllCharger = (chargerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let chargers = "";
      if (chargerId === "All") {
        chargers = await Charger.findAll({
          include: [
            {
              association: "location",
            },
          ],
          raw: true,
          nest: true,
        });
      }
      if (chargerId && chargerId !== "All") {
        chargers = await Charger.findOne({
          where: { id: chargerId },
        });
      }
      resolve(chargers);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllChargerByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let chargers = await Charger.findAll({
        // where : { location_id : locationId  },
        include: [
          {
            association: "location",
            where: { user_id: userId },
          },
        ],
        //where : {location.user_id : locationId  },

        raw: true,
        nest: true,
      });

      resolve(chargers);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteCharger = (chargerId) => {
  return new Promise(async (resolve, reject) => {
    let foundCharger = await Charger.findOne({
      where: { id: chargerId },
    });
    if (!foundCharger) {
      resolve({
        errCode: 2,
        errMessage: `The charger isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await Charger.destroy({
      where: { id: chargerId },
    });
    resolve({
      errCode: 0,
      errMessage: `The charger is delete`,
    });
  });
};

let updateCharger = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.charger_name || !data.location_id) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let charger = await Charger.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (charger) {
        charger.charger_name = data.charger_name;
        charger.capacity = data.capacity;
        charger.installation_date = data.installation_date;
        charger.last_maintence_date = data.last_maintence_date;
        charger.location_id = data.location_id;
        await charger.save();
        resolve({
          errCode: 0,
          message: "Update the charger succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          message: `Charger's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createCharger: createCharger,
  getAllCharger: getAllCharger,
  getAllChargerByUserId: getAllChargerByUserId,
  deleteCharger: deleteCharger,
  updateCharger: updateCharger,
};
