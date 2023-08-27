const mongoose = require("mongoose")
const Schema = mongoose.Schema
const projectSchema = new mongoose.Schema({
   // ProjectId : Number,
    ProjectTitle:String,
    Technology : String,
    CompletionDate : String,
    StartDate : String,
    EstimatedHour : String,
    TotalUtilizedHour : String,
    Status :
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Status"
    }
})
module.exports = mongoose.model("Project",projectSchema)
