const Record = require("../models/Record");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const xlsx = require("node-xlsx");
const fs = require("fs");
const { Router } = require("express");
const router = Router();

router.post("/", upload.any(), async (req, res) => {
   const data = req.files;
   const workSheetsFromBuffer = xlsx.parse(
      fs.readFileSync(`${__dirname}/uploads/${req.files[0].filename}`),
   );
   const Data = workSheetsFromBuffer[0].data.slice(1).map((item) => ({
      link: item[1] || "",
      prefix: item[2] || "",
      selectTags: item[3] || "",
      selectedTags: item[4] || "",
   }));

   Data.forEach((item) => {
      const record = Record({ ...item });
      record.save();
   });
   res.status(200).send({ success: true, data: Data });
});

router.get("/", async (req, res) => {
   const data = await Record.find({});
   res.send(data);
});

module.exports = router;