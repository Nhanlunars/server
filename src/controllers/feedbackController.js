import typeService from "../services/typeService";

let createFeedback = async (req, res) => {
    try {
        let infor = await typeService.createFeedback(req.body);
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

let getAllFeedback = async (req, res) => {
    let id = req.query.id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            feedbacks: []
        })
    }
    let feedbacks = await typeService.getAllFeedback(id);
    //console.log(feedbacks);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        feedbacks
    })
}

let getAllFeedbackByChargerId = async (req, res) => {
    let id = req.query.location_id; //All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing require parameters',
            feedbacks: []
        })
    }
    let feedbacks = await typeService.getAllFeedbackByChargerId(id);
    //console.log(feedbacks);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        feedbacks
    })
}
let deleteFeedback = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters!"
        })
    }
    let message = await typeService.deleteFeedback(req.body.id);

    return res.status(200).json(message);
}

let updateFeedback = async (req, res) => {
    let data = req.body;
    let message = await typeService.updateFeedback(data);
    return res.status(200).json(message)

}



module.exports = {
    createFeedback: createFeedback,
    getAllFeedback: getAllFeedback,
    getAllFeedbackByChargerId: getAllFeedbackByChargerId,
    deleteFeedback: deleteFeedback,
    updateFeedback: updateFeedback
}