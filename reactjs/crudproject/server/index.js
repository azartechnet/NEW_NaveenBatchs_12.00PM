const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE']
}))

const Food=require('./models/Food');

mongoose.connect('mongodb://localhost:27017/fooddb',{
    
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.error('Error connecting to MongoDB:',error);
});

//insert
app.post('/insert',(req,res)=>{
    const foodName=req.body.foodName;
    const description=req.body.description;

    const food=new Food({foodName,description});
    food.save().then(()=>{
        res.send('Food data inserted successfully');
    }
    ).catch((error)=>{
        console.error('Error inserting food data:',error);
        res.status(500).send('Error inserting food data');
    });
}
);

app.listen(3001,()=>{
    console.log('Server is running on port 5000');
});