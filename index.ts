import express from "express";
import path from "path";
import internal from "stream";
const app: express.Express = express();
const port: number = 3000;

/* allow */
const setDir = (directory: string) => {
  app.use(directory, express.static(path.join(__dirname, directory)));
};
///////////

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Run Express server at 127.0.0.1:${port}`);
});

app.use((req, res) => {
  res.sendStatus(404);
});

setDir("noscript");
