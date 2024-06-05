import { Game } from "./game";

export interface Profile {
    id: string;
    name: string;
    avatar: string | undefined;
    games: Array<Game>;
    friends: Array<string>;
}