import db from "../models/index";

let createHistory = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id || !data.charger_id || !data.type_id || !data.start_time || !data.number_start
            ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
            })
        } else {
            await db.Usege_history.create({
                user_id: data.user_id,
                charger_id: data.charger_id,
                type_id: data.type_id,
                start_time : data.start_time,
                end_time : data.end_time,
                number_start : data.number_start,
                number_end : data.number_end,
                cost : data.cost,
            })
            let typeStatus = await db.Charger_type.findOne({
                    where: { id: data.type_id },
                    raw: false
                })
            if (typeStatus) {
                    typeStatus.status = data.status;
                    await typeStatus.save();
                    resolve({
                        errCode: 0,
                        message: 'Update the type status succeeds!'
                    });
            } else {
                    resolve({
                        errCode: 1,
                        message: `Type status not found!`
                    });
            }
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

/*
let getAllHistory = () => {
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
}*/

let getAllHistorys = (historyId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let historys = '';
            if (historyId === 'All') {
                historys = await db.Usege_history.findAll({
                })
            }
            if (historyId && historyId !== 'All') {
                historys = await db.Usege_history.findOne({
                    where: { id: historyId }
                })
            }
            resolve(historys)
        } catch (e) {
            reject(e);
        }
    })
}
/*
let getAllLocationByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let historys = await db.Location.findAll({
                    where: { user_id: userId }
                })
            
            resolve(historys)
        } catch (e) {
            reject(e);
        }
    })
}*/

let deleteHistory = (historyId) => {
    return new Promise(async (resolve, reject) => {
        let foundHistory = await db.Usege_history.findOne({
            where: { id: historyId }
        })
        if (!foundHistory) {
            resolve({
                errCode: 2,
                errMessage: `The history isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Usege_history.destroy({
            where: { id: historyId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The history is delete`
        })


    })
}

let updateHistory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.user_id || !data.charger_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let history = await db.Usege_history.findOne({
                where: { id: data.id },
                raw: false
            })
            let typeStatus = await db.Charger_type.findOne({
                where: { id: data.type_id },
                raw: false
            })
            if (typeStatus) {
                typeStatus.status = data.status;
                await typeStatus.save();
                resolve({
                    errCode: 0,
                    message: 'Update the type status succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Type status not found!`
                });
            }
            if (history) {
                history.user_id = data.user_id;
                history.charger_id = data.charger_id;
                history.type_id = data.type_id;
                history.start_time = data.start_time;
                history.end_time = data.end_time;
                history.number_start = data.number_start;
                history.number_end = data.number_end;
                history.cost = data.cost;
                await history.save();
                resolve({
                    errCode: 0,
                    message: 'Update the history succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `History's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}





module.exports = {
    createHistory: createHistory,
   // getAllLocation: getAllLocation,
    getAllHistorys: getAllHistorys,
   // getAllLocationByUserId: getAllLocationByUserId,
    deleteHistory: deleteHistory,
    updateHistory: updateHistory

}