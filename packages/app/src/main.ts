import { Auth, History, Store, Switch, define } from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { JoystickHeaderElement } from "./components/joystick-header";
import { GamesViewElement } from "./views/games-view";
import { ProfileViewElement } from "./views/profile-view";

const routes = [
    {
        path: "/app/games/:id",
        view: (params: Switch.Params) => html`
            <games-view games-id=${params.id}></games-view>
        `
    },
    {
        path: "/app/profile/:id",
        view: (params: Switch.Params) => html`
            <profile-view user-id=${params.id}></profile-view>
        `
    },
    {
        path: "/",
        redirect: "/app/profile/pablo"
    },
    {
        path: "/app/profile/login.html",
        redirect: "/login.html"
    }
]

define({
    "mu-auth": Auth.Provider,
    "mu-store": class AppStore extends Store.Provider<
        Model,
        Msg
    > {
        constructor() {
            super(update, init, "joystick:auth");
        }
    },
    "mu-history": History.Provider,
    "mu-switch": class AppSwitch extends Switch.Element {
        constructor() {
            super(routes, "joystick:history", "joystick:auth");
        }
    },
    "joystick-header": JoystickHeaderElement,
    "games-view": GamesViewElement,
    "profile-view": ProfileViewElement
});