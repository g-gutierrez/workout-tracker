var path = require("path");

module.exports = function(app){ 
// new workout
  app.get("/exercise",function (req,res){   
      res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  app.get("/",function(req,res){    
      res.sendFile(path.join(__dirname,"../public/index.html"));
  });

// dashboard
  app.get("/stats",function(req,res){   
      res.sendFile(path.join(__dirname,"../public/stats.html"));
  });

}