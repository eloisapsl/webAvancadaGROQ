import express from "express";

import CommentRoutes from "./routes/CommentRoutes";
import PostRoutes from "./routes/PostRoutes";
import UserRoutes from "./routes/UserRoutes";

const app = express();
app.use(express.json());

app.use(UserRoutes);
app.use(PostRoutes);
app.use(CommentRoutes);

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
