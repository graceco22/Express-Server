import express from "express";
const app = express();
const port = 3000;

//listen to first the port then secondly the callback to what should happen when our server is ready to go
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})