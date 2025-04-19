import db from "../models/index";

let createReservation = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id || !data.charger_id || !data.type_id || !data.start_time
            ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
            })
        } else {
            await db.Reservation.create({
                user_id: data.user_id,
                charger_id: data.charger_id,
                type_id: data.type_id,
                start_time : data.start_time,
                end_time : data.end_time,
                status : data.status,
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


/*let getAllReservation = () => {
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

let getAllReservations = (reservationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let reservations = '';
            if (reservationId === 'All') {
                reservations = await db.Reservation.findAll({
                })
            }
            if (reservationId && reservationId !== 'All') {
                reservations = await db.Reservation.findOne({
                    where: { id: reservationId }
                })
            }
            resolve(reservations)
        } catch (e) {
            reject(e);
        }
    })
}

/*let getAllLocationByUserId = (userId) => {
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
}*/

let deleteReservation = (reservationId) => {
    return new Promise(async (resolve, reject) => {
        let foundReservation = await db.Reservation.findOne({
            where: { id: reservationId }
        })
        if (!foundReservation) {
            resolve({
                errCode: 2,
                errMessage: `The reservation isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Reservation.destroy({
            where: { id: reservationId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The reservation is delete`
        })


    })
}

let updateReservation = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.user_id || !data.charger_id || !data.type_id || !data.start_time) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let reser = await db.Reservation.findOne({
                where: { id: data.id },
                raw: false
            })
            if (reser) {
                reser.user_id = data.user_id;
                reser.charger_id = data.charger_id;
                reser.type_id = data.type_id;
                reser.start_time = data.start_time;
                reser.end_time = data.end_time;
                reser.status = data.status;
                await reser.save();
                resolve({
                    errCode: 0,
                    message: 'Update the reservation succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `reservation's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createReservation: createReservation,
    //getAllReservation: getAllReservation,
    getAllReservations: getAllReservations,
    //getAllReservationByUserId: getAllReservationByUserId,
    deleteReservation: deleteReservation,
    updateReservation: updateReservation

}