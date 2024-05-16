import { Auth, Observer } from "@calpoly/mustang";
import { prepareTemplate } from "./template.js";
import { relayEvent } from "./relay-event.js";
import { addFragment } from "./html-loader.js";
import "./drop-down.js";

export class JoystickHeaderElement extends HTMLElement {
    static template = prepareTemplate(`
        <template>
            <header>
                <h1>Joystick Journal</h1>
                <drop-down>
                    <a href="#" slot="actuator">
                        <slot name="greeting">Hello, user</slot></a>
                    <ul>
                        <li>
                            <label onchange="relayEvent(event, 'dark-mode',
                                {checked: event.target.checked})"
                            >
                            <input type="checkbox" autocomplete="off" />
                            Dark Mode
                            </label>
                        </li>
                        <li>
                            <a
                                href="#" onclick="relayEvent(event, 'auth:message', ['auth/signout'])"
                                >Sign Out</a
                            >
                        </li>
                    </ul>
                </drop-down>
            </header>
            <style>
            :host {
                display: contents;
            }
            * {
                margin: 0;
                box-sizing: border-box;
            }
            header {
                grid-column: start / end;
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                padding: var(--size-spacing-xlarge);
                background-color: var(--color-background-header);
                color: var(--color-link-header);
            }
            h1 {
                font-family: var(--font-family-display);
                line-height: var(--font-line-height-display);
                font-size: var(--size-type-h1);
                line-height: 1;
                font-weight: var(--font-weight-normal);
            }
            ul {
                list-style: none;
                padding: var(--size-spacing-medium);
            }
            </style>
        </template>
    `);


    constructor() {
        super();
    
        this.attachShadow({ mode: "open" }).appendChild(
            JoystickHeaderElement.template.cloneNode(true)
        );
    }
    
    _authObserver = new Observer(this, "blazing:auth");

    connectedCallback() {
        this._authObserver.observe().then((obs) => {
            obs.setEffect(({ user }) => {
                if (user) {
                    const { username } = user;
                    this.replaceChildren();
                    addFragment(
                        `<span slot="greeting">Hello, ${username}</span>`,
                        this
                    );
                }
            });
        });
    }
}

customElements.define("joystick-header", JoystickHeaderElement);