const mongoose = require("mongoose")
const forestSchema = mongoose.Schema({
forest_area: String,
forest_color: String,
forest_dense:Number,
})
module.exports = mongoose.model("Forest",
forestSchema)