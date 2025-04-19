import db from "../models/index";

let createFeedback = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id || !data.charger_id ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                })
            } else {
                await db.Feedback.create({
                    user_id: data.user_id,
                    charger_id: data.charger_id,
                    type_id: data.type_id,
                    rating : data.rating,
                    comment : data.comment,
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

let getAllFeedback = (feedbackId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let feedbacks = '';
            if (feedbackId === 'All') {
                feedbacks = await db.Feedback.findAll({
                    

                })
            }
            if (feedbackId && feedbackId !== 'All') {
                feedbacks = await db.Feedback.findOne({
                    where: { id: feedbackId }
                })
            }
            resolve(feedbacks)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllFeedbackByChargerId = (chargerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let locations = await db.Feedback.findAll({
                    where: { charger_id: chargerId }
                })
            
            resolve(locations)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllFeedbackByuserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let locations = await db.Feedback.findAll({
                    where: { user_id: userId }
                })
            
            resolve(locations)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteFeedback = (feedbackId) => {
    return new Promise(async (resolve, reject) => {
        let foundFeedback = await db.Feedback.findOne({
            where: { id: feedbackId }
        })
        if (!foundFeedback) {
            resolve({
                errCode: 2,
                errMessage: `The feedback isn't exist`
            })
        }
        //console.log('check', foundUser)
        await db.Feedback.destroy({
            where: { id: feedbackId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The feedback is delete`
        })


    })
}

let updateFeedback = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.user_id || !data.charger_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let feedback = await db.Feedback.findOne({
                where: { id: data.id },
                raw: false
            })
            if (feedback) {
                feedback.user_id = data.user_id;
                feedback.charger_id = data.charger_id;
                feedback.type_id = data.type_id;
                feedback.rating = data.rating;
                feedback.comment = data.comment;
                
                await feedback.save();
                resolve({
                    errCode: 0,
                    message: 'Update the feedback succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Feedback's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createFeedback: createFeedback,
    getAllFeedback: getAllFeedback,
    getAllFeedbackByChargerId: getAllFeedbackByChargerId,
    getAllFeedbackByuserId: getAllFeedbackByuserId,
    deleteFeedback: deleteFeedback,
    updateFeedback: updateFeedback

}