const mongoose = require('mongoose');

const { DB_NAME, DB_USERNAME, DB_PASS } = process.env;

// const DB = `mongodb+srv://${DB_USERNAME}:${DB_PASS}@cluster0.lxfpb.mongodb.net/?retryWrites=true&w=majority`
const DB = `mongodb+srv://${DB_USERNAME}:${DB_PASS}@cluster0.am8rs.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(DB, {
    UseNewUrlParser: true,
}).then(() => {
    console.log(`connection succesfull...`);
}).catch((err) => {
    console.log(`connection failed... ${err}`);
})