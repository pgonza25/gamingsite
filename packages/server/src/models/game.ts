export interface Game {
    name: string;
    platform: string;
    playstate: "played" | "playing" | "playnext";
    rating: number;
}