const express= require("express")
const app = express();

app.get("/", (req, res) => {
  
    res.send("Howdy? ");
})

app.listen(8081, () => {
    console.log("Simple web app listening on port 8081 !")
})