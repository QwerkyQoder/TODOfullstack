const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then((conn) => {
        console.log(`connected to host ${conn.connection.host}`)
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1)
    })
}