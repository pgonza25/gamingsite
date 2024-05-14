import { prepareTemplate } from "./template.js";

export class DropdownMenu extends HTMLElement {
    static template = prepareTemplate(`<template>
        <slot name="trigger"><button>Menu</button></slot>
        <div id="panel">
            <slot></slot>
        </div>
        
        <style>
            :host {
                position: relative;
            }
            #is-shown {
                display: none;
            }
            #panel {
                display: none;
                position: absolute;
                right: 0;
                margin-top: var(--size-spacing-small);
                width: max-content;

            }
            :host([open]) #panel {
                display: block;
            }
        </style>
    </template>`);


    constructor() {
        super();

        this.attachShadow({mode: "open" }).appendChild(
            DropdownMenu.template.cloneNode(true)
        );
        this.shadowRoot.querySelector("slot[name='trigger']")
            .addEventListener("click", () => this.toggle());
    }

    toggle() {
        if(this.hasAttribute("open")) this.removeAttribute("open");
        else this.setAttribute("open", "open");
    }
}

customElements.define("drop-down", DropdownMenu);