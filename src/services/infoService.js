import db from "../models/index";

let createInfo = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
            })
        } else {
            await db.Owner_charger_info.create({
                user_id: data.user_id,
                bank_name: data.bank_name,
                account_number: data.account_number,
                account_name : data.account_name,
                picture : data.picture,
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

let getAllInfos = (infoId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let infos = '';
            if (infoId === 'All') {
                infos = await db.Owner_charger_info.findAll({
                })
            }
            if (infoId && infoId !== 'All') {
                infos = await db.Owner_charger_info.findOne({
                    where: { id: infoId }
                })
            }
            resolve(infos)
        } catch (e) {
            reject(e);
        }
    })
}

let getInfoByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let infos = await db.Owner_charger_info.findAll({
                    where: { user_id: userId }
                })
            
            resolve(infos)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteInfo = (infoId) => {
    return new Promise(async (resolve, reject) => {
        let foundInfo = await db.Owner_charger_info.findOne({
            where: { id: infoId }
        })
        if (!foundInfo) {
            resolve({
                errCode: 2,
                errMessage: `The info isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Owner_charger_info.destroy({
            where: { id: infoId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The info is delete`
        })


    })
}

let updateInfo = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id ) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let info = await db.Owner_charger_info.findOne({
                where: { id: data.id },
                raw: false
            })
            if (info) {
                info.user_id = data.user_id;
                info.bank_name = data.bank_name;
                info.account_number = data.account_number;
                info.account_name = data.account_name;
                info.picture = data.picture;
                await info.save();
                resolve({
                    errCode: 0,
                    message: 'Update the info succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Info's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}





module.exports = {
    createInfo: createInfo,
    getAllInfos: getAllInfos,
    getInfoByUserId: getInfoByUserId,
    deleteInfo: deleteInfo,
    updateInfo: updateInfo

}