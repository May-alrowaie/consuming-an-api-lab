const express = require("express")
const axios = require("axios")
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
  res.render("index.ejs")
})

app.post("/weather", async (req, res) => {
  const zipCode = req.body.zipCode
  await axios({
    method: "get",
    url: `api.openweathermap.org/data/2.5/weather?zip=[ZIP CODE],us&units=imperial&appid=[API KEY]`,
  })
    .then((response) => {
      console.log(response.data)
      res.render("../views/show.ejs", { data: response.data })
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}`)
})
