import express from 'express';
import data fr
const app= express();

app.get("/api/products", (req,res) => {
    res.send(data.products);
}
    )