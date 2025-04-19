import db from "../models/index";

let createDevice = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id || !data.charger_id ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                })
            } else {
                await db.User_device.create({
                    user_id: data.user_id,
                    charger_id: data.charger_id,
                    fcm_token: data.fcm_token,
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

let getAllDevice = (deviceId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let devices = '';
            if (deviceId === 'All') {
                devices = await db.User_device.findAll({
                    

                })
            }
            if (deviceId && deviceId !== 'All') {
                devices = await db.User_device.findOne({
                    where: { id: deviceId }
                })
            }
            resolve(devices)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllDeviceByuserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let devices = await db.User_device.findAll({
                    where: { user_id: userId }
                })
            
            resolve(devices)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteDevice = (deviceId) => {
    return new Promise(async (resolve, reject) => {
        let foundDevice = await db.User_device.findOne({
            where: { id: deviceId }
        })
        if (!foundDevice) {
            resolve({
                errCode: 2,
                errMessage: `The device isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.User_device.destroy({
            where: { id: deviceId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The device is delete`
        })


    })
}

let updateDevice = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.user_id || !data.charger_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let device = await db.User_device.findOne({
                where: { id: data.id },
                raw: false
            })
            if (device) {
                device.user_id = data.user_id;
                device.charger_id = data.charger_id;
                device.fcm_token = data.fcm_token;
                
                await device.save();
                resolve({
                    errCode: 0,
                    message: 'Update the device succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Device's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createDevice: createDevice,
    getAllDevice: getAllDevice,
    getAllDeviceByuserId: getAllDeviceByuserId,
    deleteDevice: deleteDevice,
    updateDevice: updateDevice

}