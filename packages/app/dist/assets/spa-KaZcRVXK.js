import{a as y,u as j,f as z,s as w,O as D,d as $,b as M,x as l,i as v,e as O,V as C,c as U,h as T,_ as S}from"./lit-element-gNrLorcj.js";const N={};function G(r,t,e){switch(r[0]){case"profile/save":q(r[1],e).then(s=>t(i=>({...i,profile:s})));break;case"profile/select":R(r[1],e).then(s=>t(i=>({...i,profile:s})));break;default:const a=r[0];throw new Error(`Unhandled Auth message "${a}"`)}}function q(r,t){return fetch(`api/profiles/${r.userid}`,{method:"PUT",headers:{"Content-Type":"application/json",...y.headers(t)},body:JSON.stringify(r.profile)}).then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return e})}function R(r,t){return fetch(`/api/profiles/${r.userid}`,{headers:{"Content-Type":"application/json",...y.headers(t)}}).then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return e})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:z},B=(r=A,t,e)=>{const{kind:a,metadata:s}=e;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(e.name,r),a==="accessor"){const{name:o}=e;return{set(n){const m=t.get.call(this);t.set.call(this,n),this.requestUpdate(o,m,r)},init(n){return n!==void 0&&this.P(o,void 0,r),n}}}if(a==="setter"){const{name:o}=e;return function(n){const m=this[o];t.call(this,n),this.requestUpdate(o,m,r)}}throw Error("Unsupported decorator location: "+a)};function d(r){return(t,e)=>typeof e=="object"?B(r,t,e):((a,s,i)=>{const o=s.hasOwnProperty(i);return s.constructor.createProperty(i,o?{...a,wrapped:!0}:a),o?Object.getOwnPropertyDescriptor(s,i):void 0})(r,t,e)}var F=Object.defineProperty,I=Object.getOwnPropertyDescriptor,J=(r,t,e,a)=>{for(var s=a>1?void 0:a?I(t,e):t,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(a?o(t,e,s):o(s))||s);return a&&s&&F(t,e,s),s};const h=class h extends w{constructor(){super(...arguments),this.username="anonymous",this._authObserver=new D(this,"blazing:auth")}render(){return l`<header>
            <h1>Joystick Journal</h1>
            <drop-down>
                <a href="#" slot="actuator">
                    <slot name="greeting"
                    >Hello, ${this.username}</slot>
                </a>
                <ul>
                    <li>
                        <label @change=${K}>
                            <input type="checkbox" autocomplete="off" /> 
                            Dark Mode
                        </label>
                    </li>
                    <li>
                        <a href="#" @click=${L}>Sign Out</a>
                    </li>
                </ul>
            </drop-down>
        </header>`}connectedCallback(){super.connectedCallback(),this._authObserver.observe(({user:t})=>{t&&(this.username=t.username)})}};h.uses=$({"drop-down":M.Element}),h.styles=v`
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
    `;let u=h;J([d()],u.prototype,"username",2);function K(r){const e=r.target.checked;O.relay(r,"dark-mode",{checked:e})}function L(r){O.relay(r,"auth:message",["auth/signout"])}var Q=Object.defineProperty,W=Object.getOwnPropertyDescriptor,_=(r,t,e,a)=>{for(var s=a>1?void 0:a?W(t,e):t,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(a?o(t,e,s):o(s))||s);return a&&s&&Q(t,e,s),s};class k extends C{constructor(){super(...arguments),this.userid=""}get games(){return this.model.profile.games}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="user-id"&&e!==a&&a&&(console.log("Games Page:",a),this.dispatchMessage(["profile/select",{userid:a}]))}render(){const t=this.games.map(e=>l`
                    <div class="game_row">
                        <li>${e.name}</li>
                        <li>${e.Platform}</li>
                        <li>${e.rating}</li>
                    </div>
                `);return l`
            <section>
                <ul>
                    <li>Name</li>
                    <li>Platform</li>
                    <li>Rating</li>
                    <span slot="games">
                        ${t}
                    </span>
                </ul>
            </section>
        `}}_([d({attribute:"user-id",reflect:!0})],k.prototype,"userid",2);_([d()],k.prototype,"games",1);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,f=(r,t,e,a)=>{for(var s=a>1?void 0:a?Y(t,e):t,i=r.length-1,o;i>=0;i--)(o=r[i])&&(s=(a?o(t,e,s):o(s))||s);return a&&s&&X(t,e,s),s};const x=class x extends w{render(){return l`
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
        `}};x.styles=v`
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
    `;let b=x;const P=class P extends w{constructor(){super(...arguments),this.color="white"}render(){return l`
            <div
                class="avatar"
                style="
                ${this.color?`--avatar-backgroundColor: ${this.color};`:""}
                ${this.src?`background-image: url('${this.src}');`:""}
            "></div>
        `}};P.styles=v`
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
    `;let c=P;f([d()],c.prototype,"color",2);f([d()],c.prototype,"src",2);const g=class g extends C{constructor(){super("joystick:model"),this.userid=""}get profile(){return this.model.profile}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),t==="user-id"&&e!==a&&a&&(console.log("Profile Page:",a),this.dispatchMessage(["profile/select",{userid:a}]))}render(){const{color:t,avatar:e,name:a,userid:s,games:i=[]}=this.profile||{},o=i.map(n=>l`
                    <li class="game"><dl><dt>Title: ${n.name}</dt>
                                <dd>Platform: ${n.platform}</dd>
                                <dd>Rating: ${n.rating}</dd></dl></li>
                `);return l`
            <profile-viewer>
                <profile-avatar
                    slot="avatar"
                    color=${t}
                    src=${e}>
                </profile-avatar>
                <span slot="name">${a}</span>
                <span slot="userid">${s}</span>
                <ul slot="games">
                    ${o}
                </ul>
            </profile-viewer>
        `}};g.uses=$({"profile-viewer":b,"profile-avatar":c}),g.styles=v`
        ul {
            display: grid;
            flex-direction: column;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 50px;
        }
    `;let p=g;f([d({attribute:"user-id",reflect:!0})],p.prototype,"userid",2);f([d()],p.prototype,"profile",1);const Z=[{path:"/app/games/:id",view:r=>l`
            <games-view games-id=${r.id}></games-view>
        `},{path:"/app/profile/:id",view:r=>l`
            <profile-view user-id=${r.id}></profile-view>
        `},{path:"/",redirect:"/app/profile/pablo"},{path:"/app/profile/login.html",redirect:"/login.html"}];$({"mu-auth":y.Provider,"mu-store":class extends U.Provider{constructor(){super(G,N,"joystick:auth")}},"mu-history":T.Provider,"mu-switch":class extends S.Element{constructor(){super(Z,"joystick:history","joystick:auth")}},"joystick-header":u,"games-view":k,"profile-view":p});
