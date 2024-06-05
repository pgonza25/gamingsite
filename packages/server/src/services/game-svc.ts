// post route
// edit profile-view to add games 
// go back to C2

import { Schema, Model, Document, model} from "mongoose";
import { Game } from "../models/game";

const GameSchema = new Schema<Game>(
    {
        name: { type: String, required: true, trim: true },
        platform: { type: String, required: true, trim: true },
        playstate: String,
        rating: Number
    },
    { collection: "games"}
);

const GameModel = model<Game>("Game", GameSchema);

function create(game: Game): Promise<Game> {
    const g = new GameModel(game);
    return g.save();
}

function index(): Promise<Game[]> {
    return GameModel.find();
}

export default { index, create };