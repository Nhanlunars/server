import reservationService from "../services/reservationService";


let createReservation = async (req, res) => {
  try {
    let infor = await reservationService.createReservation(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the serverrrrr",
    });
  }
};

// let getAllReservations = async (req, res) => {
//     let id = req.query.id; //All, id
//     if (!id) {
//         return res.status(200).json({
//             errCode: 1,
//             errMessage: 'Missing require parameters',
//             reservations: []
//         })
//     }
//     let reservations = await reservationService.getAllReservations(id);
//     // console.log(reservations);
//     return res.status(200).json({
//         errCode: 0,
//         errMessage: 'Ok',
//         reservations
//     })
// }

let getAllReservations = async (req, res) => {
  let id = req.query.id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      reservations: [],
    });
  }
  let reservations = await reservationService.getAllReservations(id);
  // console.log(reservations);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    reservations,
  });
};

let getReservationByUserId = async (req, res) => {
  let id = req.query.user_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      reservations: [],
    });
  }
  let reservations = await reservationService.getReservationByUserId(id);
  //console.log(types);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    reservations,
  });
};

let getReservationByTypeId = async (req, res) => {
  let id = req.query.type_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      reservations: [],
    });
  }
  let reservations = await reservationService.getReservationByTypeId(id);
  //console.log(types);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    reservations,
  });
};

let getAllReservationByOwnerId = async (req, res) => {
  let id = req.query.user_id; //All, id
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing require parameters",
      reservations: [],
    });
  }
  let reservations = await reservationService.getAllReservationByOwnerId(id);
  //console.log(types);
  return res.status(200).json({
    errCode: 0,
    errMessage: "Ok",
    reservations,
  });
};
let deleteReservation = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameters!",
    });
  }
  let message = await reservationService.deleteReservation(req.body.id);

  return res.status(200).json(message);
};

let updateReservation = async (req, res) => {
  let data = req.body;
  let message = await reservationService.updateReservation(data);
  return res.status(200).json(message);
};

module.exports = {
  createReservation: createReservation,
  getAllReservations: getAllReservations,
  getAllReservationByOwnerId: getAllReservationByOwnerId,
  getReservationByUserId: getReservationByUserId,
  getReservationByTypeId: getReservationByTypeId,
  deleteReservation: deleteReservation,
  updateReservation: updateReservation,
};
