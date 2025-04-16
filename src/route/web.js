import express from "express";
import userController from "../controllers/userController";
import locationController from "../controllers/locationController";
import chargerController from "../controllers/chargerController";
import typeController from "../controllers/typeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) =>{
        return res.send("hello")
    });
    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUser);
    router.post('/api/create-new-user', userController.handleCreateNewUser);
    router.put('/api/edit-user', userController.handleEditUser);
    router.delete('/api/delete-user', userController.handleDeleteUser);
    router.get('/api/allcode', userController.getAllCode);


    router.post('/api/create-location', locationController.createLocation);
    router.get('/api/get-all-location', locationController.getAllLocation);
    router.get('/api/get-all-locations', locationController.handleGetAllLocation);
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
    





    return app.use("/", router);


    

}

module.exports = initWebRoutes;