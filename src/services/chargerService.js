import db from "../models/index";

let createCharger = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.charger_name || !data.location_id ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                })
            } else {
                await db.Charger.create({
                    charger_name: data.charger_name,
                    model: data.model,
                    capacity: data.capacity,
                    status : data.status,
                    installation_date : data.installation_date,
                    last_maintence_date : data.last_maintence_date,
                    location_id : data.location_id,
                    image : data.image,
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

let getAllCharger = (chargerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let chargers = '';
            if (chargerId === 'All') {
                chargers = await db.Charger.findAll({
                    

                })
            }
            if (chargerId && chargerId !== 'All') {
                chargers = await db.Charger.findOne({
                    where: { id: chargerId }
                })
            }
            resolve(chargers)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllChargerByLocationId = (locationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let locations = await db.Charger.findAll({
                    where: { location_id: locationId }
                })
            
            resolve(locations)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteCharger = (chargerId) => {
    return new Promise(async (resolve, reject) => {
        let foundCharger = await db.Charger.findOne({
            where: { id: chargerId }
        })
        if (!foundCharger) {
            resolve({
                errCode: 2,
                errMessage: `The charger isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Charger.destroy({
            where: { id: chargerId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The charger is delete`
        })


    })
}

let updateCharger = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.charger_name || !data.location_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let charger = await db.Charger.findOne({
                where: { id: data.id },
                raw: false
            })
            if (charger) {
                charger.charger_name = data.charger_name;
                charger.model = data.model;
                charger.capacity = data.capacity;
                charger.status = data.status;
                charger.installation_date = data.installation_date;
                charger.last_maintence_date = data.last_maintence_date;
                charger.location_id = data.location_id;
                if (data.avatar) {
                    local.image = data.avatar;
                }
                await charger.save();
                resolve({
                    errCode: 0,
                    message: 'Update the charger succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Location's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}





module.exports = {
    createCharger: createCharger,
    getAllCharger: getAllCharger,
    getAllChargerByLocationId: getAllChargerByLocationId,
    deleteCharger: deleteCharger,
    updateCharger: updateCharger

}