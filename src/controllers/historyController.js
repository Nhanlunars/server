import historyService from "../services/historyService";

let createHistory = async (req, res) => {
    try {
        let infor = await historyService.createHistory(req.body);
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

let getAllHistorys = async (req, res) => {
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            types: []
        })
    }
    let types = await historyService.getAllHistorys(id);
    //console.log(types);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        types
    })
}
/*
let getAllTypeByChargerId = async (req, res) => {
    let id = req.query.location_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            types: []
        })
    }
    let types = await historyService.getAllTypeByChargerId(id);
    //console.log(types);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        types
    })
}*/
let deleteHistory = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await historyService.deleteHistory(req.body.id);

    return res.status(200).json(message);
}

let updateHistory = async (req, res) => {
    let data = req.body;
    let message = await historyService.updateHistory(data);
    return res.status(200).json(message)

}



module.exports = {
    createHistory: createHistory,
    getAllHistorys: getAllHistorys,
    //getAllTypeByChargerId: getAllTypeByChargerId,
    deleteHistory: deleteHistory,
    updateHistory: updateHistory
}