//imports Express library installed
import express from "express";
import mongoose from "mongoose";
import resourcesRouter from "./routes/resourcesRoutes.js";

//creates Express server
const app = express();
//server listens on port 3000
const PORT = 3000;

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://dev:devpassword@mongo:27017/devdb?authSource=admin";

await mongoose.connect(MONGODB_URI);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use resources router
app.use("/resources", resourcesRouter);

//define GET route for home page (/)
app.get("/", (req, res) => {
  //send HTML back to the browser as response
  res.send(`
        <h1>Campus Resource Finder</h1>
        <p>Welcome to the Campus Resource Finder!</p>
        `);
});

app.get("/about", (req, res) => {
  res.send(`
        <h1>About Campus Resource Finder</h1>
        <p>
        Campus Resource Finder helps students quickly locate important campus services such as tutoring, counseling, food assistance, study spaces, and career resources.
        </p>
        `);
});

//starts the server (Express listens for incoming requests on port 3000)
app.listen(PORT, () => {
  //prints message in the terminal
  console.log(`Server running at http://localhost:${PORT}`);
});
