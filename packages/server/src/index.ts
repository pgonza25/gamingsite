import express, { Request, Response } from "express";
import profiles from "./routes/profiles";
import games from "./routes/games";
import { connect } from "./services/mongo";
import auth, { authenticateUser } from "./routes/auth";
import exp from "constants";
import path from "path";
import fs from "node:fs/promises";


const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";
console.log("Serving static files from ", staticDir);

app.use(express.static(staticDir));

const nodeModules = path.resolve(
    __dirname,
    "../../../node_modules"
);
console.log("Serving NPM packages from", nodeModules);

app.use("/node_modules", express.static(nodeModules));

app.use(express.json());
app.use("/api/profiles", authenticateUser, profiles);
app.use("/api/games", games);
app.use("/auth", auth);

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

app.use("/app", (req: Request, res: Response) => {
    const indexHtml = path.resolve(staticDir, "index.html");
    fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
        res.send(html)
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

connect("Cluster0");