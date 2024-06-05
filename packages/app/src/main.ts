import { Auth, Store, define } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { JoystickHeaderElement } from "./components/joystick-header";
import { GamesViewElement } from "./views/games-view";

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
    "joystick-header": JoystickHeaderElement,
    "games-view": GamesViewElement
});