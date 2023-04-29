const express = require('express');
const app = express();
const Joi = require('joi');


const apps = [
    {id:1,name:"Resume Maker"},{id:2,name:"Learn Python"},{id:3,name:"Data Structuress"}
];
app.get('/',(req,res)=>{
        res.send('Hello');
    }
);

app.get('/api',(req,res)=>{
    res.send([1,2,3,4,5,6]);
});
app.get('/api/apps',(req,res)=>{
    res.send(apps);
});
// app.get('/api/:year/:month',(req,res)=>{
//     res.send(req.query);
// });
app.get('/api/:id',(req,res)=>{
    const app = apps.find(app=>app.id === parseInt(req.params.id));
    if(!app){ return res.status(404).send(`The course with given id : ${req.params.id} was not found`);
 } console.log(app);
    res.send(app);
});

//we have to add a middleware cause req.body.length is not enabled by default
app.use(express.json());

//so that we can use post
app.post('/api/apps' , (req,res)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error());
    }

    const app = {
        id:apps.length + 1,
        name:req.body.name
    };
    apps.push(app);
    res.send(app);
});

// put for edit 

app.put('/api/apps/:id' , (req , res)=>{
    const appToUpdate = apps.find(app=>app.id === parseInt(req.params.id));
    if(!appToUpdate){
        res.status(404).send(`Couldn't find a app with id ${req.params.id}`);
        return;
    }
    const schema = Joi.object(
        {
            name:Joi.string().min(3).required(),
        }
    );
    const result = schema.validate(req.body);
    if(result.error){
        res.status(400).send(result.error);
        return;
    }

    //update name
    appToUpdate.name = req.body.name;
    res.send(appToUpdate);
})


//delete without using joi wthout schema
app.delete('/api/apps/:id', (req, res) => {
    // Find the app with the given ID
    const appIndex = apps.findIndex(app => app.id === parseInt(req.params.id));
  
    // If the app doesn't exist, return a 404 error
    if (appIndex === -1) {
      res.status(404).send('The app with the given ID was not found.');
      return;
    }
  
    // Remove the app from the array
    apps.splice(appIndex, 1);
  
    // Return the removed app
    res.send(apps);
  });
// we need a listener for get method
const port = process.env.port || 3000;
app.listen(port,()=>{console.log(`Listening at port ${port}`)});