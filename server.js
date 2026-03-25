const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

// Supabase connection
const supabase = createClient(
  "https://ywhpcbgcfwpyrkanhpnj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aHBjYmdjZndweXJrYW5ocG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MTMyMzYsImV4cCI6MjA4OTk4OTIzNn0.TDQnCbUqmZJCSbmZG6Zn7Fnlggv3DaEXk4hW4YG1nm4"
);

// Test route
app.get("/", (req, res) => {
  res.send("Server running");
});

// ✅ Get all tasks
app.get("/tasks", async (req, res) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*");

  if (error) return res.status(500).json(error);

  res.json(data);
});

// ✅ Add new task
app.post("/tasks", async (req, res) => {
  const { title, completed } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .insert([{ title, completed }]);

  if (error) return res.status(500).json(error);

  res.json(data);
});


// DELETE task
app.delete("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  console.log("DELETE ERROR:", error);

  if (error) return res.status(500).json(error);

  res.json({ message: "Deleted successfully" });
});

// UPDATE task
app.put("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const { data, error } = await supabase
    .from("tasks")
    .update(req.body)
    .eq("id", id);

  console.log("UPDATE ERROR:", error);

  if (error) return res.status(500).json(error);

  res.json(data);
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});