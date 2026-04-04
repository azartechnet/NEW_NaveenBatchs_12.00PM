const exp=require('express');
const app=exp();
const port=3000;
app.get("/",(req,res)=>{
    res.send(`<div><h2>Welcome to Express.js</h2><p>This is a simple Express.js server.</p></div>`);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});