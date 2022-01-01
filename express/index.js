const express= require("express");
const app =express();
const mongoose= require("mongoose");
const dotenv =require("dotenv");
const helmet =require("helmet");
const morgan =require("morgan");
const userRouter =require("./router/users");
const authRouter =require("./router/auth")
const postRouter =require("./router/posts")
const multer = require("multer");
const path = require("path");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true },(req,res)=>{
    console.log("mongo connect")
})


app.use("/images", express.static(path.join(__dirname, "public/images")));



  app.use(express.json());
  app.use(helmet());
  app.use(morgan("common"));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});


app.use("/api/users",userRouter)
app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)





app.listen(5000, ()=>{
    console.log("connect")
})