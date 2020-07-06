const consts = require('./consts');

const handleComplaints = complaint => {
    switch (complaint.type) {
        case consts.FINANCE: 
            console.log("Money doesn't grow on trees, you know.")
            break;
        case consts.WEATHER:
            console.log("It is the way of nature. Not much to be done.")
            break;
        default:
            console.log("It'll pass, as all things do, with time.")
    }
}

module.exports = handleComplaints