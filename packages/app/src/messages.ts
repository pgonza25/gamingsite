import { Profile } from "server/models";
import { Game } from "server/models";

export type Msg = 
    | ["profile/save", { userid: string; profile: Profile }]
    | ["profile/select", { userid: string }]
    | ["games/select", { games: Array<Game> }]