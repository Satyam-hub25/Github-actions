import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    });
});
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "OK"
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});