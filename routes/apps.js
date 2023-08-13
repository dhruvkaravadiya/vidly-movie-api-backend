const express = require('express')
const router = express().Router();
const apps = [
    { id: 1, name: "name 1" },
    { id: 2, name: "name 1" },
    { id: 3, name: "name 3" },
  ];
// getAll method
router.get("/", (req, res) => {
    res.send(apps);
  });
  
  // getById method
  app.get("/:id", (req, res) => {
    //first find the app with given id from req.params
    const getApp = apps.find((app) => app.id === parseInt(req.params.id));
    //if app not found then 404 error
    if (!getApp) {
      res.status(404).send(`App not found with id : ${req.params.id}`);
      return;
    }
    //return the getApp
    res.send(getApp);
  });
  
  // post method
  router.post("/",(req,res)=>{
      //If input invalid , return 400 error status code
      if(!req.body || !req.body.name || req.body.name.length < 3){
          res.status(400).send('Must contains a body with name having atleast 3 characters');
          return;
      }
  
      //Make a new App Object 
      const newApp = {
        id:apps.length + 1,
        name:req.body.name,
      }
      //and add it to array
      apps.push(newApp);
  
      //return  response (new App object)
      res.send(newApp);
  });
  
  // put method
  router.put("/:id",(req,res)=>{
    // If input invalid , return 400 error status code
    if(!req.body || !req.body.name || req.body.name.length < 3){
      res.status(400).send("Must contain a body with name having atleast 3 characters");
      return;
    }
  
    //find the app via req.params.id
    const appToUpdate = apps.find(app => app.id ===parseInt(req.params.id));
  
    //if app not found return 404 status code
    if(!appToUpdate){
      res.status(404).send(`The app with the given ID : ${req.params.id} was not found.`)
      return;
    }
  
    //if found then update the name
    appToUpdate.name = req.body.name;
   
    //return updated app 's object
    res.send(appToUpdate);
  });
  
  
  //delete method
  
  router.delete("/api/apps/:id",(req,res)=>{
    
    //first find the app id with given id  from req.params.id
    // = first way to get index
      const appToDelete = apps.find(app => app.id === parseInt(req.params.id));
      //use either
      //const deleteID = apps.indexOf(appToDelete);
      const deleteID = appToDelete.id;
    // = second way to get index
    const deleteIndex = apps.findIndex(app => app.id ===parseInt(req.params.id));
    
    //if no such app found with given id , return 400 status code
    if(!appToDelete){
      res.status(400).send(`App with id : ${req.params.id} was not found!`);
      return;
    }
  
    // shift the elements 1 index left from the deleteIndex or deleteID
    //first way using for loop
    for (let i = deleteIndex; i < apps.length - 1; i++) {
      apps[i] = apps[i + 1];
    }
    apps.pop();
  
    //second way using filter
    //apps = apps.filter(app => app!=appToDelete);
  
    //third way using splice , which takes deleteIndex 
    //and second parameter specifies the number of 
    //elements we wont to delete from the given index
    //apps.splice(deleteIndex , 1);
  
    //send array of apps
    res.send(apps);
  });
  
module.exports = router; 