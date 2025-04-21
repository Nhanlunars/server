import express from "express";
import userController from "../controllers/userController";
import locationController from "../controllers/locationController";
import chargerController from "../controllers/chargerController";
import typeController from "../controllers/typeController";
import reservationController from "../controllers/reservationController";
import historyController from "../controllers/historyController";
import infoController from "../controllers/infoController";
import feedbackController from "../controllers/feedbackController";
import deviceController from "../controllers/userDeviceController";
import maintenanceController from "../controllers/maintenanceController";
import notificationController from "../controllers/notificationController";
import otpController from "../controllers/otpController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) =>{
        return res.send("hello")
    });
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUser);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.post('/api/create-new-user1', userController.handleCreateNewUser1);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllCode);


    router.post('/api/create-location', locationController.createLocation);
    router.get('/api/get-all-location', locationController.getAllLocation);
    router.get('/api/get-all-location-by-userid', locationController.getAllLocationByUserId);
    router.delete('/api/delete-location', locationController.deleteLocation);
    router.put('/api/edit-location', locationController.editLocation);

  
    
    router.post('/api/create-charger', chargerController.createCharger);
    router.get('/api/get-all-charger', chargerController.getAllCharger);
    //router.get('/api/get-all-chargers', chargerController.handleGetAllLocation);
    router.get('/api/get-all-charger-by-locationid', chargerController.getAllChargerByLocationId);
    router.delete('/api/delete-charger', chargerController.deleteCharger);
    router.put('/api/edit-charger', chargerController.updateCharger);


    router.post('/api/create-type', typeController.createType);
    router.get('/api/get-all-type', typeController.getAllType);
    router.get('/api/get-all-type-by-chargerid', typeController.getAllTypeByChargerId);
    router.delete('/api/delete-type', typeController.deleteType);
    router.put('/api/edit-type', typeController.updateType);
    

    router.get('/api/get-all-reservation', reservationController.getAllReservations);
    router.post('/api/create-reservation', reservationController.createReservation);
    //router.get('/api/get-all-reservation-by-userid', reservationController.getAllTypeByChargerId);
    router.delete('/api/delete-reservation', reservationController.deleteReservation);
    router.put('/api/edit-reservation', reservationController.updateReservation);


    router.get('/api/get-all-history', historyController.getAllHistorys);
    router.post('/api/create-history', historyController.createHistory);
    //router.get('/api/get-all-history-by-userid', historyController.getAllTypeByChargerId);
    router.delete('/api/delete-history', historyController.deleteHistory);
    router.put('/api/edit-history', historyController.updateHistory);


    router.get('/api/get-all-info', infoController.getAllInfos);
    router.post('/api/create-info', infoController.createInfo);
    router.get('/api/get-info-by-userid', infoController.getInfoByUserId);
    router.delete('/api/delete-info', infoController.deleteInfo);
    router.put('/api/edit-info', infoController.updateInfo);


    router.get('/api/get-all-feedback', feedbackController.getAllFeedback);
    router.post('/api/create-feedback', feedbackController.createFeedback);
    router.get('/api/get-all-feedback-by-chargerid', feedbackController.getAllFeedbackByChargerId);
    router.get('/api/get-all-feedback-by-userid', feedbackController.getAllFeedbackByuserId);
    router.delete('/api/delete-feedback', feedbackController.deleteFeedback);
    router.put('/api/edit-feedback', feedbackController.updateFeedback);


    router.get('/api/get-all-device', deviceController.getAllDevice);
    router.post('/api/create-device', deviceController.createDevice);
    router.get('/api/get-all-device-by-userid', deviceController.getAllDeviceByuserId);
    router.delete('/api/delete-device', deviceController.deleteDevice);
    router.put('/api/edit-device', deviceController.updateDevice);
   
   
    router.get('/api/get-all-maintenance', maintenanceController.getAllMaintenance);
    router.post('/api/create-maintenance', maintenanceController.createMaintenance);
    router.get('/api/get-all-maintenance-by-chargerid', maintenanceController.getAllMaintenanceByChargerId);
    router.delete('/api/delete-maintenance', maintenanceController.deleteMaintenance);
    router.put('/api/edit-maintenance', maintenanceController.updateMaintenance);

    router.get('/api/get-all-notification', notificationController.getAllNotification);
    router.post('/api/create-notification', notificationController.createNotification);
    router.get('/api/get-all-notification-by-userid', notificationController.getAllNotificationByUserId);
    router.delete('/api/delete-notification', notificationController.deleteNotification);
    router.put('/api/edit-notification', notificationController.updateNotification);
   
   
    router.get('/api/get-all-otp', otpController.getAllOTP);
    router.post('/api/create-otp', otpController.createOTP);
    router.get('/api/get-all-otp-by-userid', otpController.getAllOTPByUserId);
    router.delete('/api/delete-otp', otpController.deleteOTP);
    router.put('/api/edit-otp', otpController.updateOTP);
   
   
    return app.use("/", router);


    

}

module.exports = initWebRoutes;