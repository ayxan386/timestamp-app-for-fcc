const express = require("express");
const router = express.Router();

const app = express();


router.get("/:date_string", (req, res) => {
  let date = req.params.date_string;
  let d = null
  if(/\D/g.test(date))
    {
        d = new Date(date);
}
   else {
     d = new Date(Number.parseInt(date));
   }
  console.log(d);
  console.log(d.getTime());
  if (d !== "Invalid date")
    res.send({
      unix: d.getTime(),
      utc: d.toUTCString()
    });
  else {
    res.send({
      unix: "error",
      utc: "Invalid Date"
    });
  }
});


module.exports = router;