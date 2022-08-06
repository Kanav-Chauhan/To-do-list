const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine','ejs');
 


const iteams = ["food","money","home"];
const workItems = [];

app.get("/", function(req, res){
   
   let day = date.getDate();

    res.render("list",{workOrHome:day,nis:iteams})


})
app.post("/", function(req, res){
    var iteam = req.body.iteam
    if (req.body.button === "Work"){
        
    workItems.push(iteam);
        res.redirect("/work")
    }
    else{
        
   iteams.push(iteam)
   res.redirect("/")}
    

})

app.get("/work",function(req, res){
    res.render("list",{workOrHome:"Work",nis:workItems})
    
})

// app.post("/work",function(req, res){
   
//     res.redirect("/work")
// })


app.listen(3000,function(){
    console.log("Listening on port 3000...");
});


 // var currentDay = today.getDay();
    
    
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday" ;
    //         break;
    //     case 1:
    //         day = "Monday" ;
    //         break;
    //     case 2:
    //         day = "Tuesday" ;
    //         break;
    //     case 3:
    //         day = "Wednesday" ;
    //         break;
    //     case 4:
    //         day = "Thurday" ;
    //         break;
    //     case 5:
    //         day = "Friday" ;
    //         break;
    //     case 6:
    //         day = "Saturday" ;
    //         break;
    
    //     default:
    //         break;
    // }