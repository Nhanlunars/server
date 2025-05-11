import db from "../models/index";
import {Location} from '../models/location';
const { Op } = require("sequelize");

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
            await Location.create({
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

let getAllLocation = (locationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = '';
            if (locationId === 'All') {
                users = await Location.findAll({
                    include: [{
                        association: 'user',
                        attributes: {
                        exclude: ['password', 'image']}
                        },
                    ],
                        raw: true, 
                        nest: true
                })
            }
            if (locationId && locationId !== 'All') {
                users = await Location.findOne({
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
            let users = await Location.findAll({
                    where: { user_id: userId },
                    include: [{
                        association: 'user',
                        attributes: {
                        exclude: ['password', 'image']}
                        },
                    ],
                        raw: true, 
                        nest: true
                
                })
            
            resolve(users)
        } catch (e) {
            reject(e);
        }
    })
}

let searchLocationByKeyword = (keyword) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!keyword) {
                return resolve([]);
            }

            let result = await Location.findAll({
                where: {
                    [Op.or]: [
                        { location_name: { [Op.like]: `%${keyword}%` } },
                        { address: { [Op.like]: `%${keyword}%` } },
                        { city: { [Op.like]: `%${keyword}%` } },
                        { district: { [Op.like]: `%${keyword}%` } },
                        { ward: { [Op.like]: `%${keyword}%` } },
                    ]
                },
                include: [{
                        association: 'user',
                        attributes: {
                        exclude: ['password', 'image']}
                        },
                    ],
                raw: true,
                nest: true,
            });

            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
};

let deleteLocation = (locationId) => {
    return new Promise(async (resolve, reject) => {
        let foundLocation = await Location.findOne({
            where: { id: locationId }
        })
        if (!foundLocation) {
            resolve({
                errCode: 2,
                errMessage: `The user isn't exist`
            })
        }
        //console.log('check', foundUser)
        await Location.destroy({
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
            let local = await Location.findOne({
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
    getAllLocationByUserId: getAllLocationByUserId,
    searchLocationByKeyword: searchLocationByKeyword,
    deleteLocation: deleteLocation,
    updateLocation: updateLocation

}