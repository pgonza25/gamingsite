import { define, View } from "@calpoly/mustang";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { Profile } from "server/models";
import { Msg } from "../messages";
import { Model } from "../model";

class ProfileViewer extends LitElement {
    static styles = css`
        :host {
            --display-new-button: inline-block;
            --display-edit-button: inline-block;
            --display-close-button: none;
            --display-delete-button: none;
        }
        :host([mode="edit"]) {
            --display-new-button: none;
            --display-edit-button: none;
            --display-close-button: inline-block;
            --display-delete-button: inline-block;
        }
        :host([mode="new"]) {
            --display-new-button: none;
            --display-edit-button: none;
            --display-close-button: inline-block;
        }
        * {
            margin: 0;
            box-sizing: border-box;
        }
        section {
            display: grid;
            grid-template-columns: [key] 1fr [value] 3fr [controls] 1fr [end];
            gap: var(--size-spacing-medium) var(--size-spacin-large);
            align-items: end;
        }
        h1 {
            grid-row: 4;
            grid-column: value;
        }
        slot[name="avatar"] {
            display: block;
            grid-row: 1 / span 4;
        }
        nav {
            display: contents;
            text-align: rights;
        }
        nav > * {
            grid-column: controls;
        }
        nav > .new {
            display: var(--display-new-button);
        }
        nav > .edit {
            display: var(--display-edit-button);
        }
        nav > .close {
            display: var(--display-close-button);
        }
        nav > .delete {
            display: var(--display-delete-button);
        }
        restful-form {
            display: none;
            grid-column: key / end;
        }
        restful-form input {
            grid-column: input;
        }
        restful-form[src] {
            display: block;
        }
        dl {
            display: grid;
            grid-column: key / end;
            grid-template-columns: subgrid;
            gap: 0 var(--size-spacing-xlarge);
            align-items: baseline;
        }
        restful-form[src] + dl {
            display: none;
        }
        dt {
            grid-column: key;
            justify-self: end;
            color: var(--color-accent);
            font-family: var(--font-family-display);
        }
        dd {
            grid-column: value;
        }
        ::slotted(ul) {
            list-style: none;
            display: flex;
            gap: var(--size-spacing-medium);
        }
    `;

    render() {
        return html`
            <section>
                <slot name="avatar"></slot>
                <h1><slot name="name"></slot></h1>
                <nav>
                    <button class="new">New...</button>
                    <button class="edit">Edit</button>
                    <button class="close">Close</button>
                    <button class="delete">Delete</button>
                </nav>
                <dl>
                    <dt>Username</dt>
                    <dd><slot name="userid"></slot></dd>
                    <dt>Name</dt>
                    <dd><slot name="name"></slot></dd>
                    <dt>Games</dt>
                    <dd><slot name="games"></slot></dd>
                </dl>
            </section>
        `;
    }
}

class ProfileAvatarElement extends LitElement {
    @property()
    color: string = "white";

    @property()
    src?: string;

    render() {
        return html`
            <div
                class="avatar"
                style="
                ${this.color
                ? `--avatar-backgroundColor: ${this.color};`
                : ""}
                ${this.src
                ? `background-image: url('${this.src}');`
                : ""}
            "></div>
        `;
    }

    static styles = css`
        :host {
            display: contents;
            --avatar-backgroundColor: var(--color-accent);
            --avatar-size: 100px;
        }
        .avatar {
            grid-column: key;
            justify-self: end;
            position: relative;
            width: var(--avatar-size);
            aspect-ratio: 1;
            background-color: var(--avatar-backgroundColor);
            background-size: cover;
            border-radius: 50%;
            text-align: center;
            line-height: var(--avatar-size);
            font-size: calc(0.66 * var(--avatar-size));
            color: var(--color-link-inverted);
            overflow: hidden;
        }
    `;
}

export class ProfileViewElement extends View<Model, Msg> {
    static uses = define({
        "profile-viewer": ProfileViewer,
        "profile-avatar": ProfileAvatarElement
    });

    @property({ attribute: "user-id", reflect: true })
    userid = "";

    @property()
    get profile(): Profile | undefined {
        return this.model.profile;
    }

    constructor() {
        super("joystick:model");
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
            console.log("Profile Page:", newValue);
            this.dispatchMessage([
                "profile/select",
                { userid: newValue }
            ]);
        }
    }

    render() {
        const {
            color,
            avatar,
            name,
            userid,
            games = []
        } = this.profile || {};

        const games_html = games.map(
            (s) =>
                html`
                    <li class="game"><dl><dt>Title: ${s.name}</dt>
                                <dd>Platform: ${s.platform}</dd>
                                <dd>Rating: ${s.rating}</dd></dl></li>
                `
        );

        return html`
            <profile-viewer>
                <profile-avatar
                    slot="avatar"
                    color=${color}
                    src=${avatar}>
                </profile-avatar>
                <span slot="name">${name}</span>
                <span slot="userid">${userid}</span>
                <ul slot="games">
                    ${games_html}
                </ul>
            </profile-viewer>
        `;
    }

    static styles = css`
        ul {
            display: grid;
            flex-direction: column;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 50px;
        }
    `;
}