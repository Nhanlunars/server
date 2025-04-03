//mport db from "../models/index";
const db = require("../models/index");
//const models = require('./src/models').default;



let createLocation = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.location_name || !data.user_id 
              //  || !data.address || !data.city || !data.district|| !data.ward || !data.lat || !data.lng 
            ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
            })
        } else {
            await db.Location.create({
                location_name: data.location_name,
                user_id: data.user_id,
                city: data.city,
                address : data.address,
                ward : data.ward,
                district : data.district,
                lng : data.lng,
                lat : data.lat,
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


let getAllLocation = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Location.findAll();       
            resolve({
                errMessage: 'Ok',
                errCode: 0,
                data
            })     
        } catch (e) {
            reject(e);
        }
    })
}

let getAllLocations = (locationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (locationId === 'All') {
                users = await db.Location.findAll({
                    

                })
            }
            if (locationId && locationId !== 'All') {
                users = await db.Location.findOne({
                    where: { id: locationId }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllLocationByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Location.findAll({
                    where: { user_id: userId }
                })
            
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteLocation = (locationId) => {
    return new Promise(async (resolve, reject) => {
        let foundLocation = await db.Location.findOne({
            where: { id: locationId }
        })
        if (!foundLocation) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Location.destroy({
            where: { id: locationId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The user is delete`
        })


    })
}

let updateLocation = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.location_name || !data.user_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let local = await db.Location.findOne({
                where: { id: data.id },
                raw: false
            })
            if (local) {
                local.location_name = data.location_name;
                local.user_id = data.user_id;
                local.address = data.address;
                local.city = data.city;
                local.district = data.district;
                local.ward = data.ward;
                local.lat = data.lat;
                local.lng = data.lng;
                if (data.avatar) {
                    local.image = data.avatar;
                }
                await local.save();
                resolve({
                    errCode: 0,
                    message: 'Update the location succeeds!'
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
    createLocation: createLocation,
    getAllLocation: getAllLocation,
    getAllLocations: getAllLocations,
    getAllLocationByUserId: getAllLocationByUserId,
    deleteLocation: deleteLocation,
    updateLocation: updateLocation

}