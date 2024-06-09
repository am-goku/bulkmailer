import express from 'express';
import cors from 'cors'
import router from './src/router.js';
const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))

app.use(express.json());


app.use('/api', router)


const port = 3000;
app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
})