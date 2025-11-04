const express = require("express");
const app = express();
const PORT = 8000;

app.get("/api/message", (req, res) => {
    res.json({message: "Hola desde el backend"})
});

app.listen(PORT, () => console.log(`Backend escuchando en puerto ${PORT}`));