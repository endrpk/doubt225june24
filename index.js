const express=require("express");
const cors=require("cors");
const {MongoClient}=require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());


app.post("/save",(req,res)=>{
	const url="mongodb+srv://sagarband2003:U0uKjPu9U7pPVTsM@cluster0.7kf7bzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client=new MongoClient(url);
	const db=client.db("doubt25june24");
	const coll=db.collection("student");
	const record={"name":req.body.name,"doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
	});


app.listen(9000,()=>{console.log("ready @ 9000");});