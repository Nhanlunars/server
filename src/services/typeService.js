import db from "../models/index";

let createType = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.charger_id || !data.type_name || !default_price ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                })
            } else {
                await db.Charger_type.create({
                    charger_id: data.charger_id,
                    type_name: data.type_name,
                    describe: data.describe,
                    default_price : data.default_price,
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
                types = await db.Charger_type.findAll({
                    

                })
            }
            if (typeId && typeId !== 'All') {
                types = await db.Charger_type.findOne({
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
            let types = await db.Charger_type.findAll({
                    where: { charger_id: chargerId }
                })
            
            resolve(types)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteType = (typeId) => {
    return new Promise(async (resolve, reject) => {
        let foundType = await db.Charger_type.findOne({
            where: { id: typeId }
        })
        if (!foundType) {
            resolve({
                errCode: 2,
                errMessage: `The type isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Charger_type.destroy({
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
            if (!data.id || !data.charger_name || !data.default_price) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let type = await db.Charger_type.findOne({
                where: { id: data.id },
                raw: false
            })
            if (type) {
                type.charger_id = data.charger_id;
                type.type_name = data.type_name;
                type.describe = data.describe;
                type.default_price = data.default_price;
                
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
    deleteType: deleteType,
    updateType: updateType

}