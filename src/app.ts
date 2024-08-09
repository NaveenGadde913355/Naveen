import express from "express";
import dbInit from "./db/init";

//import officeRoute from "../src/routes/routes";
//import employeeRouter from "./routes/patient";
import task6Route from "./routes";

const port = 3006

const app = express();

app.use(express.json());
dbInit()
app.use('/',task6Route)
// app.use('/',employeeRouter)
app.get('/', (req,res) =>{
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });