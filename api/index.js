import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'

dotenv.config();


mongoose.connect(process.env.MONGODB)
.then(
    () => {
        console.log("mongoDB connected");
    }).catch((err) =>{console.log(err)});  

    // mongoose.connect("mongodb://127.0.0.1:27017/my-blog")
    // .then(()=>{
    //     console.log("mongodb connected");
    // })
    // .catch(()=>{
    //     console.log("failed to connect to mongodb");
    // })



const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000...");
});


app.use('/user', userRoutes)

