const {MongoClient}=require('mongodb');
const url='mongodb+srv://admin:admin@cluster0.wqxwhyo.mongodb.net/?appName=Cluster0';
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('vishnudb');
        const collection=db.collection('chinrasucollection');
        //insertMany
        const result=await collection.insertMany([{name:'vishnu',age:22},
            {name:'vishnu1',age:23}]);
        console.log(result);
    }    finally {
        await client.close();
    }
}run().catch(console.error);