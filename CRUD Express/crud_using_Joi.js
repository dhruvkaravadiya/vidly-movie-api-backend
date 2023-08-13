const Joi = require("joi");
const express = require("express");
const app = express();

//middleware to parse json
app.use(express.json());

//custom middleware example
app.use((req,res,next)=>{
  console.log("Logging....");
  next();
});

app.use((req,res,next)=>{
  console.log("Authenticating....");
  next();
});
//array
var users = [
  {
    id: 1,
    name: "Dhruv",
    password: "dk#22042003",
    email: "1email@gmail.com",
    age:20,
  },
  {
    id: 2,
    name: "Deep",
    password: "deep@12345678",
    email: "2nd@gmail.com",
    age:19,
  },
  {
    id: 3,
    name: "Kamlesh",
    password: "kama$987654321",
    email: "kamlesh@gmail.com",
    age:24,
  },
];

//define the scehma object for request body validation
const schema = Joi.object({
    name: Joi.string().min(3).required(),
    password : Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email: Joi.string().required(),
    age : Joi.number().min(18).required()
});

//getAll Users
app.get("/api/users",(req,res)=>{
    res.send(users);
});

//getById user
app.get("/api/users/:id", (req,res)=>{
    //find the user from the 'users' array/ api
    const user = users.find(user=>user.id === parseInt(req.params.id));
    //if not found return 404 error for not found
    if(!user){
        res.send(`Cannot find user with id : ${req.params.id}`)
        return;
    }
    //return the found user object
    res.send(user);
});

//post a new user method
app.post("/api/users" , (req, res)=>{
    //first check if the request body is correct according to the defined schema
    const { error } = schema.validate(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    //make a new app
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      age: req.body.age
    }
    //add the new user to users array  
    users.push(newUser);
    //send new user as response 
    res.send(newUser);
});

//put method
app.put("/api/users/:id",(req,res)=>{
  //find the user to update
  const userToUpdate = users.find(user=>user.id === parseInt(req.params.id));
  //if user not found then return 404 status code
  if(!userToUpdate){
    res.status(404).send(`User with id : ${req.params.id} not found!`);
    return;
  }
  userToUpdate.name = req.body.name,
  userToUpdate.password = req.body.password,
  userToUpdate.email = req.body.email,
  userToUpdate.age = req.body.age,

  res.send(userToUpdate);
});

//delete mehtod
app.delete("/api/users/:id", (req,res)=>{
  //get delete user and if
  const deleteUser = users.find(user => user.id === parseInt(req.params.id));
  const deleteIndex = deleteUser.id;
  // if user not exist return 404 status code
  if(!deleteUser){
    res.status(404).send(`No user found to delete with id : ${req.params.id}`);
  }
  users = users.filter(user=> user!= deleteUser);
  res.send(`User with id : ${req.params.id} as been deleted`);
});

const port = process.env.PORT || 3002;
app.listen(port , ()=>console.log(`Listening @ port ${port}`));