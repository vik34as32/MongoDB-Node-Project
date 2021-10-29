const mongoose = require('mongoose');

mongoose
     .connect("mongodb://localhost:27017/Population",
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useUnifiedTopology:false
                }
           )
     .then(()=> console.log('Database Connection Sucessfully...'))
     .catch((err)=>console.log('Database are Note be connected'))
     
module.exports =mongoose     