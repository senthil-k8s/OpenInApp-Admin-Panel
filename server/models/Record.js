const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  link: { type: String },
  prefix: { type: String },
  selectTags: [String],
  selectedTags: [String]
}, { timestamps: true });


module.exports =  mongoose.model("Record", RecordSchema);

