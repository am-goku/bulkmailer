import express from 'express';
import cors from 'cors'
import logger from 'morgan'
import router from './src/router.js';
const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));


app.use('/api', router)



const port = 3000;
app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
})