const {MongoClient}=require('mongodb');
const url='mongodb+srv://admin:admin@cluster0.wqxwhyo.mongodb.net/?appName=Cluster0';
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('vishnudb');
        const collection=db.collection('chinrasucollection');
        const result=await collection.updateOne({name:'vishnu'},{ $set:{age:24}});
        console.log(result);
    }    finally {
        await client.close();
    }}run().catch(console.error);