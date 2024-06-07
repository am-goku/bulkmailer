import express from 'express';

const app = express();

app.get('/', (req, res)=>res.send("Home"))





const port = 3000;
app.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
})