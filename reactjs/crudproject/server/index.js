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
//get data
app.get('/getFood',(req,res)=>{
    Food.find().then((foods)=>{
        res.json(foods);
    }).catch((error)=>{
        console.error('Error fetching food data:',error);
        res.status(500).send('Error fetching food data');
    });
});

//updating the data

app.put("/update",async(req,res)=>{
    const {newFoodName,id}=req.body;
    try
    {
      const updateFood=await Food.findById(id);
      if(!updateFood)
      {
        return res.status(400).send("Data not found");
      }
      updateFood.foodName=newFoodName;
      await updateFood.save()
      res.send("Data Updated..")
    }
    catch(err)
    {
        console.log(err);
    }
})
//deleting the data
//deleting the data

app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    try
    {
        const result=await Food.findByIdAndDelete(id);
        if(!result)
        {
            return res.status(404).send("Food item not found")
        }
        res.send("Food item delete")
    }catch(err)
        {
            console.error(err)
        }
    })

app.listen(3001,()=>{
    console.log('Server is running on port 5000');
});