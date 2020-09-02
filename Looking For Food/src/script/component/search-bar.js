class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
    render() {
        this.shadowDOM.innerHTML  = `

        <style>
        .search-container {
            max-width: 950px;
            box-shadow: 1px 1px 3px 1px deeppink;
            padding: 18px;
            border-radius: 7px;
            display: flex;
            position: sticky;
            top: 7px;
            background-color: white;
        }
        
        .search-container > input {
            width: 75%;
            padding: 17px;
            border: 1px;
            border-bottom: 1px solid gray;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid deepskyblue;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
            color:gray;
        }
        
        .search-container >  input::placeholder {
            color: deeppink;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 20%;
            cursor: pointer;
            margin-left: auto;
            padding: 10px;
            background-color:gray;
            font-weight: bold;
            color: deepskyblue;
            border-color: deepskyblue;
            text-transform: uppercase;
        }
        
        @media screen and (max-width: 450px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 15px;
            }
        
            .search-container > button {
               width: 100%;
            }
        }
        </style>

       <div id="search-container" class="search-container">
           <input placeholder="Search Food" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

       this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);