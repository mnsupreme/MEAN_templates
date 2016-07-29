
//Time getter function

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hour = today.getHours();
var minutes = today.getMinutes();
var ampm;

  function getTime(){

  var date;

  if(mm<10) {
      mm='0'+mm
  } 

  if(hour>12){
    hour=hour%2
    ampm='pm'
  }
  else{
    ampm ='am'
  }

  date = mm+'/'+dd+'/'+yyyy+' '+hour+' '+minutes+' '+ampm;
  return date;
}


// angular sort by creation newest to olderst<ng-repeat='' | orderBy:'created_at':true>

 this.search = function(req,res){
    Model.find({text:{$regex:req.body.text /* (returns results containing the entered string) */, $options: 'i'}}).exec(function(err, results){
      if(err){
        console.log('no matches')
        return
      }
      res.json(results)
    })
  }


this.populate = function(req,res){
  Model.find({_id: req.params.id}).populate('name of field you want to populate').exec(function(err, results){
    if(err){
      console.log(err)
      return
    }

    res.json(results)
  })

}

this.orderByDate = function(req,res){
  Model.find({}).sort('date'/* use -date for oldest to newest */).exec(function(err, results){
    if(err){
      console.log(err)
      return
    }

    res.json(results)
  })
}