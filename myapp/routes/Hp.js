var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/',async(req,res)=>{
    request("https://hp-api.onrender.com/api/characters",function(error,response,body){
        if(!error && response.statusCode == 200){
            const dates= JSON.parse(body);
                res.render('Hp', {name:dates[0].name,image:dates[0].image.toString(),alternate_names:dates[0].alternate_names,species:dates[0].species,
                    gender:dates[0].gender,house:dates[0].house,dateOfBirth:dates[0].dateOfBirth,yearOfBirth:dates[0].yearOfBirth,wizard:dates[0].wizard,
                    ancestry:dates[0].ancestry,eyeColour:dates[0].eyeColour,hairColour:dates[0].hairColour,wood:dates[0].wand.wood,core:dates[0].wand.core,
                    length:dates[0].wand.length,patronus:dates[0].patronus,hogwartsStudent:dates[0].hogwartsStudent,hogwartsStaff:dates[0].hogwartsStaff,actor:dates[0].actor,
                    alternate_actors:dates[0].alternate_actors,alive:dates[0].alive
                });
            }
        });    
});

module.exports = router;