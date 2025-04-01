import locationServices from "../services/locationService";

let createLocation = async (req, res) => {
    try {
        let infor = await locationServices.createLocation(req.body);
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

let getAllLocation = async (req, res) => {
    try {
        
            let infor = await locationServices.getAllLocation();
            return res.status(200).json(
                infor
            )
        
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let handleGetAllLocation = async (req, res) => {
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            users: []
        })
    }
    let users = await locationServices.getAllLocations(id);
    //console.log(users);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users
    })
}

let getAllLocationByUserId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            users: []
        })
    }
    let users = await locationServices.getAllLocationByUserId(id);
    //console.log(users);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users
    })
}
let deleteLocation = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await locationServices.deleteLocation(req.body.id);

    return res.status(200).json(message);
}

let editLocation = async (req, res) => {
    let data = req.body;
    let message = await locationServices.updateLocation(data);
    return res.status(200).json(message)

}



module.exports = {
    createLocation: createLocation,
    getAllLocation: getAllLocation,
    handleGetAllLocation: handleGetAllLocation,
    getAllLocationByUserId: getAllLocationByUserId,
    deleteLocation: deleteLocation,
    editLocation: editLocation

}