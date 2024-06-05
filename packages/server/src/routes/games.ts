import express, { Request, Response } from "express";
import { Game } from "../models/game";
import games from "../services/game-svc";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    games
        .index()
        .then((games: Game[]) => res.status(201).send(games))
        .catch((err) => res.status(500).send(err));
})

router.post("/", (req: Request, res: Response) => {
    const newGame = req.body;

    games
        .create(newGame)
        .then((game: Game) => res.status(201).send(game))
        .catch((err) => res.status(500).send(err));
});

export default router;

