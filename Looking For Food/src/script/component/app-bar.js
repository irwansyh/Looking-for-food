class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `

        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
            :host {
                display: block;
                width: 100%;
                background-color: gray;
                color: deepskyblue;
                box-shadow: 0 2px 2px 0 deepskyblue;
        }
        h2{
            padding: 26px;
        }
        </style>

        <h2>Looking For Food</h2>`;
    }
 }
 customElements.define("app-bar", AppBar);