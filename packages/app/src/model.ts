import { Profile, Game } from "server/models";

export interface Model {
    profile?: Profile;
    games?: Array<Game>;
}

export const init: Model = {};
