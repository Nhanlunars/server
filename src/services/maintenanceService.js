import db from "../models/index";

let createMaintenance = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.charger_id || !data.technician_name ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                }) 
            } else {
                await db.Maintenance.create({
                    charger_id: data.charger_id,
                    type_id: data.type_id,
                    maintenance_date: data.maintenance_date,
                    completion_date : data.completion_date,
                    maintenance_type : data.maintenance_type,
                    technician_name : data.technician_name,
                    maintenance_cost : data.maintenance_cost,
                })
                resolve({
                    errCode: 0,
                    errMessage: "Ok"
                })
            }

        } catch (e) {
            reject(e);
            }
    })
}

let getAllMaintenance = (maintenanceId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let maintenances = '';
            if (maintenanceId === 'All') {
                maintenances = await db.Maintenance.findAll({
                    

                })
            }
            if (maintenanceId && maintenanceId !== 'All') {
                maintenances = await db.Maintenance.findOne({
                    where: { id: maintenanceId }
                })
            }
            resolve(maintenances)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllMaintenanceByChargerId = (chargerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let maintenances = await db.Maintenance.findAll({
                    where: { charger_id: chargerId }
                })
            
            resolve(maintenances)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteMaintenance = (maintenanceId) => {
    return new Promise(async (resolve, reject) => {
        let foundMaintenance = await db.Maintenance.findOne({
            where: { id: maintenanceId }
        })
        if (!foundMaintenance) {
            resolve({
                errCode: 2,
                errMessage: `The maintenance isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Maintenance.destroy({
            where: { id: maintenanceId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The maintenance is delete`
        })


    })
}

let updateMaintenance = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.charger_id || !data.technician_name) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let maintenance = await db.Maintenance.findOne({
                where: { id: data.id },
                raw: false
            })
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
                    message: 'Update the maintenance succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Maintenance's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createMaintenance: createMaintenance,
    getAllMaintenance: getAllMaintenance,
    getAllMaintenanceByChargerId: getAllMaintenanceByChargerId,
    deleteMaintenance: deleteMaintenance,
    updateMaintenance: updateMaintenance

}