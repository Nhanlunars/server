import db from "../models/index";

let createNotification = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                }) 
            } else {
                await db.Notification.create({
                    user_id: data.user_id,
                    title: data.title,
                    message: data.message,
                    is_read : data.is_read,
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

let getAllNotification = (notificationId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let notifications = '';
            if (notificationId === 'All') {
                notifications = await db.Notification.findAll({
                    

                })
            }
            if (notificationId && notificationId !== 'All') {
                notifications = await db.Notification.findOne({
                    where: { id: notificationId }
                })
            }
            resolve(notifications)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllNotificationByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let notifications = await db.Notification.findAll({
                    where: { user_id: userId }
                })
            
            resolve(notifications)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteNotification = (notificationId) => {
    return new Promise(async (resolve, reject) => {
        let foundNotification = await db.Notification.findOne({
            where: { id: notificationId }
        })
        if (!foundNotification) {
            resolve({
                errCode: 2,
                errMessage: `The notification isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Notification.destroy({
            where: { id: notificationId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The notification is delete`
        })


    })
}

let updateNotification = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.user_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let notification = await db.Notification.findOne({
                where: { id: data.id },
                raw: false
            })
            if (notification) {
                notification.user_id = data.user_id;
                notification.title = data.title;
                notification.message = data.message;
                notification.is_read = data.is_read;
                await notification.save();
                resolve({
                    errCode: 0,
                    message: 'Update the notification succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Notification's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNotification: createNotification,
    getAllNotification: getAllNotification,
    getAllNotificationByUserId: getAllNotificationByUserId,
    deleteNotification: deleteNotification,
    updateNotification: updateNotification

}