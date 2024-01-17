import express from "express"

const app = express()
const port = 8000;
const prodData =[
{
    id :"1",
    name: "qmobile",
    desc:"best mobile",

},
{
    id :"2",
    name: "samsung",
    desc:"best mobile",

},
{
    id :"3",
    name: "infinix",
    desc:"best mobile",

}
]

app.use((req,res,next)=>{
req.studentname = "kuch bhi"
console.log(req.studentname);
})

app.get("/", (req,res)=>{
res.send("hello")
})
app.get("/about/:id", (req,res)=>{
    
    const findprod = prodData.find((poduct)=>{
     return poduct.id === req.params.id
     
    })
    res.json({
        status: true,
        message:"success",
        data: findprod
    })
    if(!findprod)
        return res.json({
  status: false,
  message:"no Data"
        })
    
    })
    

app.listen(port,()=>{
    console.log("server is ready");
})