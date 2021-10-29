const fs = require('fs')
const mongoose =require('mongoose')
const Population_Model =require('../models/population')

mongoose
    .connect("mongodb://localhost:27017/Population",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useUnifiedTopology:false
           
        }
     )
  .then(()=> console.log('Database Connection Sucessfully'))
  .catch((error) => console.error(error));


const Population_DATA = JSON.parse(
    fs.readFileSync('./zips.json','utf-8')

)
console.log("abc fbhgdegyfew")
const importData = async()=>{
  const data = await Population_Model.create(Population_DATA)
  console.log(data)
}

importData()




