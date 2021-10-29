const Population_Model = require('../models/population')
const APIFeatures  =require('../utils/APIFeatures')
exports.getAll = async(req,res)=>{
      try{
          const feature =new APIFeatures(Population_Model.find(),req.query)
              .filter()
              .sort()
              .limitFields()
              .Pagination()
             const Doc = await feature.query
             
             
          res
           .status(201)
           .json({
              status:"Sucess",
              request:req.requestTime,
              Items:Doc.length,
              data :{
                  tour:Doc
              }
          })
      }catch(err){
          console.log(err)
          res
              .status(500)
              .json({
              status:"fail",
              message:err,
              request:req.requestTime
          })
      }
}
