import infoService from "../services/infoService";

let createInfo = async (req, res) => {
    try {
        let infor = await infoService.createInfo(req.body);
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

let getAllInfos = async (req, res) => {
    let id = req.body.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            infos: []
        })
    }
    let infos = await infoService.getAllInfos(id);
    //console.log(infos);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        infos
    })
}

let getInfoByUserId = async (req, res) => {
    let id = req.body.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            infos: []
        })
    }
    let infos = await infoService.getInfoByUserId(id);
    //console.log(infos);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        infos
    })
}
let deleteInfo = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await infoService.deleteInfo(req.body.id);

    return res.status(200).json(message);
}

let updateInfo = async (req, res) => {
    let data = req.body;
    let message = await infoService.updateInfo(data);
    return res.status(200).json(message)

}



module.exports = {
    createInfo: createInfo,
    getAllInfos: getAllInfos,
    getInfoByUserId: getInfoByUserId,
    deleteInfo: deleteInfo,
    updateInfo: updateInfo
}