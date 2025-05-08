import db from "../models/index";
import {OTP} from '../models/otp';

let createOTP = (data) => {
    return new Promise(async (resolve, reject) => {
        try { 
            if ( !data.user_id ) {
            resolve({
                errCode: 1,
                errMessage: "Missing parameter"
                }) 
            } else {
                await OTP.create({
                    user_id: data.user_id,
                    code: data.code,
                    expiry_date: data.expiry_date,
                    is_used: data.is_used,
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

let getAllOTP = (OtpId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Otps = '';
            if (OtpId === 'All') {
                Otps = await OTP.findAll({
                    include: [{
                        association: 'user',
                        },
                    ],
                        raw: true, 
                        nest: true

                })
            }
            if (OtpId && OtpId !== 'All') {
                Otps = await OTP.findOne({
                    where: { id: OtpId }
                })
            }
            resolve(Otps)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllOTPByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Otps = await OTP.findAll({
                    where: { user_id: userId }
                })
            
            resolve(Otps)
        } catch (e) {
            reject(e);
        }
    })
}

let deleteOTP = (OtpId) => {
    return new Promise(async (resolve, reject) => {
        let foundOTP = await OTP.findOne({
            where: { id: OtpId }
        })
        if (!foundOTP) {
            resolve({
                errCode: 2,
                errMessage: `The otp isn't exist`
            })
        }
        //console.log('check', foundUser)
        await OTP.destroy({
            where: { id: OtpId }
        }
        );
        resolve({
            errCode: 0,
            errMessage: `The otp is delete`
        })


    })
}

let updateOTP = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.user_id) {
                resolve({
                    errCode: 2,
                    message: 'Missing required parameter !'
                })
            }
            let Otp = await OTP.findOne({
                where: { id: data.id },
                raw: false
            })
            if (Otp) {
                Otp.user_id = data.user_id;
                Otp.code = data.code;
                Otp.expiry_date = data.expiry_date;
                Otp.is_used = data.is_used;
                await Otp.save();
                resolve({
                    errCode: 0,
                    message: 'Update the otp succeeds!'
                });
            } else {
                resolve({
                    errCode: 1,
                    message: `Otp's not found!`
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createOTP: createOTP,
    getAllOTP: getAllOTP,
    getAllOTPByUserId: getAllOTPByUserId,
    deleteOTP: deleteOTP,
    updateOTP: updateOTP

}