import { Dropdown, Events, define } from "@calpoly/mustang";
import { LitElement, css, html } from "lit";

export class JoystickHeaderElement extends LitElement {
    static uses = define({
        "drop-down": Dropdown.Element
    });
    render() {
        return html`
            <header>
                <h1><a href="index.html">Joystick Journal</a></h1>
                <label
                    onchange="relayEvent(
                        event,
                        'dark-mode',
                        {checked: event.target.checked})">
                    <input type="checkbox" autocomplete="off" /> Dark Mode
                </label>
                <drop-down>
                    <label @change=${toggleDarkMode}>
                        <input type="checkbox" autocomplete="off" />
                        Dark Mode
                    </label>
                </drop-down>
            </header>
        `
    }

    static styles = css`
        header {
            padding: var(--size-spacing-medium);
            background-color: var(--color-background-header);
        }
        
        header h1, header a{
            width: fit-content;
        }
        
        header a {
            text-decoration: none;
            color: var(--color-link-header);
            background-color: var(--color-background-header);
        }
        
        header a:visited {
            text-decoration: none;
        }
        
        header a:hover {
            cursor: pointer;
        }
    `
}

type Checkbox = HTMLInputElement & { checked: boolean };

function toggleDarkMode(ev: InputEvent) {
    const target = ev.target as Checkbox;
    const checked = target.checked;

    Events.relay(ev, "dark-mode", { checked });
}