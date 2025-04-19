import userDeviceService from "../services/userDeviceService";

let createDevice = async (req, res) => {
    try {
        let infor = await userDeviceService.createDevice(req.body);
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

let getAllDevice = async (req, res) => {
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            devices: []
        })
    }
    let devices = await userDeviceService.getAllDevice(id);
    //console.log(devices);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        devices
    })
}


let getAllDeviceByuserId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            devices: []
        })
    }
    let devices = await userDeviceService.getAllDeviceByuserId(id);
    //console.log(devices);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        devices
    })
}


let deleteDevice = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await userDeviceService.deleteDevice(req.body.id);

    return res.status(200).json(message);
}

let updateDevice = async (req, res) => {
    let data = req.body;
    let message = await userDeviceService.updateDevice(data);
    return res.status(200).json(message)

}



module.exports = {
    createDevice: createDevice,
    getAllDevice: getAllDevice,
    getAllDeviceByuserId: getAllDeviceByuserId,
    deleteDevice: deleteDevice,
    updateDevice: updateDevice
}