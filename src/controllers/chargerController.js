import chargerService from "../services/chargerService";

let createCharger = async (req, res) => {
  try {
    let infor = await chargerService.createCharger(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the serverrrrr",
    });
  }
};

let getAllCharger = async (req, res) => {
  let id = req.query.id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      chargers: [],
    });
  }
  let chargers = await chargerService.getAllCharger(id);
  //console.log(chargers);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    chargers,
  });
};

let getAllChargerByUserId = async (req, res) => {
  let id = req.query.user_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      chargers: [],
    });
  }
  let chargers = await chargerService.getAllChargerByUserId(id);
  //console.log(chargers);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    chargers,
  });
};

let getAllChargerByLocationId = async (req, res) => {
  let id = req.query.location_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      chargers: [],
    });
  }
  let chargers = await chargerService.getAllChargerByLocationId(id);
  //console.log(chargers);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    chargers,
  });
};

let deleteCharger = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await chargerService.deleteCharger(req.body.id);

  return res.status(200).json(message);
};

let updateCharger = async (req, res) => {
  let data = req.body;
  let message = await chargerService.updateCharger(data);
  return res.status(200).json(message);
};

module.exports = {
  createCharger: createCharger,
  getAllCharger: getAllCharger,
  getAllChargerByUserId: getAllChargerByUserId,
  getAllChargerByLocationId: getAllChargerByLocationId,
  deleteCharger: deleteCharger,
  updateCharger: updateCharger,
};
