import locationService from "../services/locationService";

let createLocation = async (req, res) => {
    try {
        let infor = await locationService.createLocation(req.body);
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
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            locations: []
        })
    }
    let locations = await locationService.getAllLocation(id);
    //console.log(locations);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        locations
    })
}

let getAllLocationByUserId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            locations: []
        })
    }
    let locations = await locationService.getAllLocationByUserId(id);
    //console.log(locations);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        locations
    })
}

let handleSearchLocation = async (req, res) => {
    let keyword = req.query.keyword;

    if (!keyword) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing keyword',
            locations: []
        });
    }

    try {
        let locations = await locationService.searchLocationByKeyword(keyword);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Ok',
            locations
        });
    } catch (e) {
        console.error("Error in search:", e);
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Server error',
        });
    }
};

let deleteLocation = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await locationService.deleteLocation(req.body.id);

    return res.status(200).json(message);
}

let editLocation = async (req, res) => {
    let data = req.body;
    let message = await locationService.updateLocation(data);
    return res.status(200).json(message)

}



module.exports = {
    createLocation: createLocation,
    getAllLocation: getAllLocation,
    getAllLocationByUserId: getAllLocationByUserId,
    handleSearchLocation: handleSearchLocation,
    deleteLocation: deleteLocation,
    editLocation: editLocation
}