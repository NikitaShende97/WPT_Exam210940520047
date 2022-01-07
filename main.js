const express = require("express");
const app = express();
const cors = require("cors");
const { SelectAllMessages, addMessages } = require("./user");
app.use(express.json());
app.use(cors());

//http://localhost:7000/messages
app.get("/messages", async (req, res) => {
  const list = await SelectAllMessages();
  res.json(list);
});

//http://localhost:7000/addMessages
app.post("/addMessages", async (req, res) => {
  const message = req.body;
  await addMessages(message);
  res.json({ Finalmessage: "Record Addess Successfully!!!!!!" });
});
app.listen(7000, () => console.log("Server Started...."));
