const express = require("express");
const app = express();
const appRouter = require('./routes/apps');
const home = require('./routes/home');
app.use(express.json());
app.use(appRouter,'/api/apps');
app.use(home,'/');
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));