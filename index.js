const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const chat = require("./models/chat.js");
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname,"public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection complete");
  })
  .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//index
app.get("/chats", async (req,res)=>{
  let chats = await chat.find();
  res.render("chats.ejs",{chats});
})

app.get("/", (req, res) => {
  res.send("root is working my drag");
});

//new chat
app.get("/chats/new",(req,res)=>{
res.render("new.ejs");
});

//new 
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new chat({
    from: from,
    to: to,
    msg: msg,
    create_at: new Date(),
  });

  newChat
    .save()
    .then(() => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chats");
});

//update
app.put("/chats/:id",async (req,res)=>{
let {id} = req.params;
let {msg : newMsg} = req.body;
let updateMsg = await chat.findByIdAndUpdate(id,{msg : newMsg},
  {runValidators : true,new :true}
);

console.log(updateMsg);
res.redirect("/chats");
});

//edit
app.get("/chats/:id/edit" ,async (req,res)=>{
let {id} = req.params;
let chats = await chat.findById(id);
console.log(chats);
res.render("edit.ejs",{chats})
});

//delete route
app.delete("/chats/:id",async (req,res)=>{
let {id} = req.params;
let chatsDelete = await chat.findByIdAndDelete(id);
console.log(chatsDelete);
res.redirect("/chats");
});

app.listen(port, () => {
  console.log(`server is hearing on ${port}`);
});
