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
            historys: []
        })
    }
    let historys = await historyService.getAllHistorys(id);
    //console.log(types);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        historys
    })
}

let getAllHistoryByOwnerId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            historys: []
        })
    }
    let historys = await historyService.getAllHistoryByOwnerId(id);
    //console.log(historys);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        historys
    })
} 
let getAllHistoryByUserId = async (req, res) => {
    let id = req.query.user_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            historys: []
        })
    }
    let historys = await historyService.getAllHistoryByUserId(id);
    //console.log(historys);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        historys
    })
}
let getHistoryByTypeId = async (req, res) => {
    let id = req.query.type_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            historys: []
        })
    }
    let historys = await historyService.getHistoryByTypeId(id);
    //console.log(historys);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        historys
    })
}

const getDashboardStats = async (req, res) => {
  try {
    const type = req.query.type || "day"; // day, week, month
    const result = await historyService.getRevenueStats(type);

    return res.status(200).json(result);
  } catch (e) {
    console.error("getDashboardStats error:", e);
    return res.status(500).json({
      errCode: -1,
      errMessage: "Server error"
    });
  }
}; 

const getDashboardStatsByOwnerId = async (req, res) => {
  try {
    const type = req.query ; // day, week, month
    const result = await historyService.getRevenueStatsByOwnerId(type);

    return res.status(200).json(result);
  } catch (e) {
    console.error("getDashboardStats error:", e);
    return res.status(500).json({
      errCode: -1,
      errMessage: "Server error"
    });
  }
};

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
    getAllHistoryByOwnerId: getAllHistoryByOwnerId,
    getHistoryByTypeId: getHistoryByTypeId,
    getAllHistoryByUserId: getAllHistoryByUserId,
    getDashboardStats: getDashboardStats,
    getDashboardStatsByOwnerId: getDashboardStatsByOwnerId,
    deleteHistory: deleteHistory,
    updateHistory: updateHistory
}