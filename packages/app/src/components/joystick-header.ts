import {
    Auth,
    Dropdown,
    Events,
    Observer,
    define
} from "@calpoly/mustang";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class JoystickHeaderElement extends LitElement {
    static uses = define({
        "drop-down": Dropdown.Element
    });

    @property()
    username = "anonymous";

    render() {
        return html`<header>
            <h1>Joystick Journal</h1>
            <drop-down>
                <a href="#" slot="actuator">
                    <slot name="greeting"
                    >Hello, ${this.username}</slot>
                </a>
                <ul>
                    <li>
                        <label @change=${toggleDarkMode}>
                            <input type="checkbox" autocomplete="off" /> 
                            Dark Mode
                        </label>
                    </li>
                    <li>
                        <a href="#" @click=${signOutUser}>Sign Out</a>
                    </li>
                </ul>
            </drop-down>
        </header>`;
    }

    static styles = css`
        :host {
            display: contents;
        }
        * {
            margin: 0;
            box-sizing: border-box;
        }
        header {
            grid-column: start / end;
            margin: 0 calc(-0.5 * var(--page-grid-gap));
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            padding: var(--size-spacing-medium);
            background-color: var(--color-background-header);
            color: var(--color-text-inverted);
        }
        header a[href] {
            color: var(--color-link-inverted);
        }
        h1 {
            font-family: var(--font-family-display);
            line-height: var(--font-line-height-display);
            font-size: var(--size-type-xlarge);
            line-height: 1;
            color: var(--color-link-header);
            font-weight: var(--font-weight-bold);
        }
        ul {
            list-style: none;
            padding: var(--size-spacing-medium);
        }
    `;

    _authObserver = new Observer<Auth.Model>(
        this,
        "blazing:auth"
    );

    connectedCallback() {
        super.connectedCallback();
        this._authObserver.observe(({ user }) => {
            if (user) {
                this.username = user.username;
            }
        })
    }
}

type Checkbox = HTMLInputElement & { checked: boolean };

function toggleDarkMode(ev: InputEvent) {
    const target = ev.target as Checkbox;
    const checked = target.checked;

    Events.relay(ev, "dark-mode", { checked });
}

function signOutUser(ev: Event) {
    Events.relay(ev, "auth:message", ["auth/signout"]);
}