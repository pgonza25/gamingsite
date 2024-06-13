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

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (
            name === "user-id" &&
            oldValue !== newValue &&
            newValue
        ) {
            console.log("Games Page:", newValue);
            this.dispatchMessage([
                "profile/select",
                { userid: newValue }
            ])
        }
    }



    render() {
        const games_html = this.games.map(
            (s) => 
                html`
                    <div class="game_row">
                        <li>${s.name}</li>
                        <li>${s.Platform}</li>
                        <li>${s.rating}</li>
                    </div>
                `
        );

        return html`
            <section>
                <ul>
                    <li>Name</li>
                    <li>Platform</li>
                    <li>Rating</li>
                    <span slot="games">
                        ${games_html}
                    </span>
                </ul>
            </section>
        `;
    }
}