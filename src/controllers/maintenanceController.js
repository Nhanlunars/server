import maintenanceService from "../services/maintenanceService";

let createMaintenance = async (req, res) => {
    try {
        let infor = await maintenanceService.createMaintenance(req.body);
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

let getAllMaintenance = async (req, res) => {
    let id = req.body.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            maintenances: []
        })
    }
    let maintenances = await maintenanceService.getAllMaintenance(id);
    //console.log(maintenances);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        maintenances
    })
}


let getAllMaintenanceByChargerId = async (req, res) => {
    let id = req.body.charger_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            maintenances: []
        })
    }
    let maintenances = await maintenanceService.getAllMaintenanceByChargerId(id);
    //console.log(maintenances);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        maintenances
    })
}


let deleteMaintenance = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await maintenanceService.deleteMaintenance(req.body.id);

    return res.status(200).json(message);
}

let updateMaintenance = async (req, res) => {
    let data = req.body;
    let message = await maintenanceService.updateMaintenance(data);
    return res.status(200).json(message)

}



module.exports = {
    createMaintenance: createMaintenance,
    getAllMaintenance: getAllMaintenance,
    getAllMaintenanceByChargerId: getAllMaintenanceByChargerId,
    deleteMaintenance: deleteMaintenance,
    updateMaintenance: updateMaintenance
}