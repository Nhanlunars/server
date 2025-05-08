import db from "../models/index";
import { Charger_type } from "../models/charger_type";

let createType = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.charger_id || !data.type_name || !data.default_price  ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                })
            } else {
                await Charger_type.create({
                    charger_id: data.charger_id,
                    type_name: data.type_name,
                    describe: data.describe,
                    default_price: data.default_price,
                    status: data.status
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

let getAllType = (typeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let types = '';
            if (typeId === 'All') {
                types = await Charger_type.findAll({
                    include: [{
                        association: 'charger',
                        },
                    ],
                        raw: true, 
                        nest: true

                })
            }
            if (typeId && typeId !== 'All') {
                types = await Charger_type.findOne({
                    where: { id: typeId }
                })
            }
            resolve(types)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllTypeByChargerId = (chargerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let types = await Charger_type.findAll({
                    where: { charger_id: chargerId }
                })
            
            resolve(types)
        } catch (e) {
            reject(e);
        }
    })
}



let getAllTypeByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let types = await Charger_type.findAll({
                    include: [{
                        association: 'charger',
                        include:[{
                            association: 'location',
                            where: { user_id : userId },
                            
                        }],
                        //where: { user_id: chargerId }
                        },
                    ],
                        raw: true, 
                        nest: true
                })
            
            resolve(types)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteType = (typeId) => {
    return new Promise(async (resolve, reject) => {
        let foundType = await Charger_type.findOne({
            where: { id: typeId }
        })
        if (!foundType) {
            resolve({
                errCode: 2,
                errMessage: `The type isn't exist`
            })
        }
        //console.log('check', foundUser)
        await Charger_type.destroy({
            where: { id: typeId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The type is delete`
        })


    })
}

let updateType = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.type_name || !data.default_price) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let type = await Charger_type.findOne({
                where: { id: data.id },
                raw: false
            })
            if (type) {
                type.charger_id = data.charger_id;
                type.type_name = data.type_name;
                type.describe = data.describe;
                type.default_price = data.default_price;
                type.status = data.status;
                
                await type.save();
                resolve({
                    errCode: 0,
                    message: 'Update the type succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Type's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}





module.exports = {
    createType: createType,
    getAllType: getAllType,
    getAllTypeByChargerId: getAllTypeByChargerId,
    getAllTypeByUserId: getAllTypeByUserId,
    deleteType: deleteType,
    updateType: updateType

}