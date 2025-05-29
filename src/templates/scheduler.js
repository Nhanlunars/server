const { Charger_type } = require("../models/charger_type");
const db = require("../services/firebase");
const { Op } = require("sequelize");

export const startAutoStatusUpdate = () => {
  setInterval(async () => {
    const twentyMinutesAgo = new Date(Date.now() - 20 * 60 * 1000);

    const typesToUpdate = await Charger_type.findAll({
      where: {
        status: "S2",
        updatedAt: { [Op.lte]: twentyMinutesAgo },
      },
    });

    for (const type of typesToUpdate) {
      type.status = "S4";
      await type.save();

      db.ref(`control${type.id}/leds/led1`).set(false);
      db.ref(`control${type.id}/leds/led2`).set(false);
      db.ref(`control${type.id}/leds/led3`).set(false);
      db.ref(`control${type.id}/leds/led4`).set(true);
    }

    console.log(`[Auto Update] Updated ${typesToUpdate.length} type(s) to S4`);
  }, 60 * 1000); // Kiểm tra mỗi 1 phút
};
