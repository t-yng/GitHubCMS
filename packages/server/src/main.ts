import express from "express";

const LISTEN_PORT = 4000;

const app = express();

app.listen(LISTEN_PORT, () => {
    console.log(`Example app listening at http://localhost:${LISTEN_PORT}`);
});
