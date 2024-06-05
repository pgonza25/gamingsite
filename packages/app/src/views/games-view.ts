import { define, View } from "@calpoly/mustang";
import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Game } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

export class GamesViewElement extends View<Model, Msg> {
    @property({attribute: "user-id", reflect: true })
    userid = "";

    @property()
    get games(): Array<Game> | undefined {
        return this.model.profile.games;
    }
}