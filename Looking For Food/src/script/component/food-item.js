class FoodItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set food(food) {
        this._food = food;
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
            margin-bottom: 40px;
            box-shadow: 0 4px 8px 0 black;
            border-radius: 10px;
            overflow: hidden;
        }

        .creation-food {
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            object-position: center;
        }

        .food {
            padding: 15px;
        }
       
        .food > h2 {
            font-weight: lighter;
        }
       
        .food > p {
            margin-top: 10px;
            max-height: 500px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; 
        }
        </style>
        
            <img class="creation-food" src="${this._food.strMealThumb}" alt="creation">
           <div class="food">
               <h2>${this._food.strMeal}</h2>
               <p>${this._food.strInstructions}</p>
           </div>`;
    }
}
customElements.define("food-item", FoodItem);