import "dotenv/config";
import express from "express";
import userController from "./app/controller/userController";
import bullBoard from "bull-board";
import queue from "../src/app/lib/queue";


const app = express();

bullBoard.setQueues(queue.queues.map(queue => queue.bull));


app.use(express.json());


app.post("/users", userController.store);


app.use("/admin/queues", bullBoard.UI);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on the port ${process.env.SERVER_PORT}`);
});