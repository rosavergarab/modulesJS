const {iva, ivaVehiculos, ivaCanastaFamiliar} = require("./modules/iva");
const log = require("./modules/logs");
const faker = require("faker");

log.info(`el valor del iva es ${iva}%`);
log.info(`el valor del iva para vehiculos es ${ivaVehiculos}%`);
log.info(`el valor del iva para la canasta familiar es ${ivaCanastaFamiliar}%`);
console.log("\n\n");
log.info(faker.name.findName());