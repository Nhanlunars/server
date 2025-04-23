import otpService from "../services/otpService";

let createOTP = async (req, res) => {
    try {
        let infor = await otpService.createOTP(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the serverrrrr'
        })
    }
}

let getAllOTP = async (req, res) => {
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            otps: []
        })
    }
    let otps = await otpService.getAllOTP(id);
    //console.log(otps);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        otps
    })
}


let getAllOTPByUserId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            otps: []
        })
    }
    let otps = await otpService.getAllOTPByUserId(id);
    //console.log(otps);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        otps
    })
}


let deleteOTP = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await otpService.deleteOTP(req.body.id);

    return res.status(200).json(message);
}

let updateOTP = async (req, res) => {
    let data = req.body;
    let message = await otpService.updateOTP(data);
    return res.status(200).json(message)

}



module.exports = {
    createOTP: createOTP,
    getAllOTP: getAllOTP,
    getAllOTPByUserId: getAllOTPByUserId,
    deleteOTP: deleteOTP,
    updateOTP: updateOTP
}