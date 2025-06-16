import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import sequelize from 'sequelize';
import dotenv from 'dotenv';
import routes from '../Routes/routes.js';


// initialize the app
dotenv.config();
const app = express();

// Set dotenv variables (AllowList)
const port = process.env.PORT || 5000;
const AllowList = process.env.ALLOWLIST || ['http://localhost:3000', 'http://192.168.0.1:3000'];


// set cors policies
var corsOptionsDelegate = (req, callback) => {
    var corsOptions = {
        origin: AllowList.includes(req.header('Origin')) ? req.header('Origin') : false,
        optionsSuccessStatus: 200,
        credentials: true
    };
    
    corsOptions.origin.length !== -1 ? corsOptions.origin = true : corsOptions.origin = false;
};

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// Invoke the app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





