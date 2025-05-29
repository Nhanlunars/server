import typeService from "../services/typeService";

let createType = async (req, res) => {
    try {
        let infor = await typeService.createType(req.body);
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

let getAllType = async (req, res) => {
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            types: []
        })
    }
    let types = await typeService.getAllType(id);
    //console.log(types);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        types
    })
}
let getAllTypeByChargerId = async (req, res) => {
    let id = req.query.charger_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            types: []
        })
    }
    let types = await typeService.getAllTypeByChargerId(id);
    //console.log(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        types
    })
} 


let getAllTypeByUserId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            types: []
        })
    }
    let types = await typeService.getAllTypeByUserId(id);
    //console.log(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        types
    })
}
let deleteType = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await typeService.deleteType(req.body.id);

    return res.status(200).json(message);
}

let updateType = async (req, res) => {
    let data = req.body;
    let message = await typeService.updateType(data);
    return res.status(200).json(message)

}



module.exports = {
    createType: createType,
    getAllType: getAllType,
    getAllTypeByChargerId: getAllTypeByChargerId,
    getAllTypeByUserId: getAllTypeByUserId,
    deleteType: deleteType,
    updateType: updateType
}