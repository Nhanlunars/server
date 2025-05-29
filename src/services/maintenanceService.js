const db = require("./firebase");
import { Maintenance } from "../models/maintenance";
import { Charger_type } from "../models/charger_type";

let createMaintenance = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.charger_id || !data.technician_name) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        await Maintenance.create({
          charger_id: data.charger_id,
          type_id: data.type_id,
          maintenance_date: data.maintenance_date,
          completion_date: data.completion_date,
          maintenance_type: data.maintenance_type,
          technician_name: data.technician_name,
          maintenance_cost: data.maintenance_cost,
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

let getAllMaintenance = (maintenanceId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let maintenances = "";
      if (maintenanceId === "All") {
        maintenances = await Maintenance.findAll({
          include: [
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
      if (maintenanceId && maintenanceId !== "All") {
        maintenances = await Maintenance.findOne({
          where: { id: maintenanceId },
        });
      }
      resolve(maintenances);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllMaintenanceByChargerId = (chargerId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let maintenances = await Maintenance.findAll({
        where: { charger_id: chargerId },
      });

      resolve(maintenances);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllMaintenanceByOwnerId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let maintenances = await Maintenance.findAll({
        include: [
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

      resolve(maintenances);
    } catch (e) {
      reject(e);
    }
  });
};

let deleteMaintenance = (maintenanceId) => {
  return new Promise(async (resolve, reject) => {
    let foundMaintenance = await Maintenance.findOne({
      where: { id: maintenanceId },
    });
    if (!foundMaintenance) {
      resolve({
        errCode: 2,
        errMessage: `The maintenance isn't exist`,
      });
    }
    //console.log('check', foundUser)
    await Maintenance.destroy({
      where: { id: maintenanceId },
    });
    resolve({
      errCode: 0,
      errMessage: `The maintenance is delete`,
    });
  });
};

let updateMaintenance = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.charger_id || !data.technician_name) {
        resolve({
          errCode: 2,
          message: "Missing required parameter !",
        });
      }
      let maintenance = await Maintenance.findOne({
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
      if (maintenance) {
        maintenance.charger_id = data.charger_id;
        maintenance.type_id = data.type_id;
        maintenance.maintenance_date = data.maintenance_date;
        maintenance.completion_date = data.completion_date;
        maintenance.maintenance_type = data.maintenance_type;
        maintenance.technician_name = data.technician_name;
        maintenance.maintenance_cost = data.maintenance_cost;

        await maintenance.save();
        resolve({
          errCode: 0,
          message: "Update the maintenance succeeds!",
        });
      } else {
        resolve({
          errCode: 1,
          message: `Maintenance's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createMaintenance: createMaintenance,
  getAllMaintenance: getAllMaintenance,
  getAllMaintenanceByChargerId: getAllMaintenanceByChargerId,
  getAllMaintenanceByOwnerId: getAllMaintenanceByOwnerId,
  deleteMaintenance: deleteMaintenance,
  updateMaintenance: updateMaintenance,
};
