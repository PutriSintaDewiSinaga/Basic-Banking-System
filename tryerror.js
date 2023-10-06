function takeOff(altitude) {
    if (altitude<0) {throw new Error("Ketinggian tidak valid!")}
    if(altitude>10000) {throw new Error("Ketinggian tidak valid!")}
    return `Pesawat lepas landas menuju ketinggian ${altitude} meter`;
    }

function flightSimulation(altitude) {
    try {
        return takeOff(altitude);
    } catch (error) {
        console.error(error.message);
    }
}
flightSimulation(12000)
flightSimulation(-500)
flightSimulation(800)