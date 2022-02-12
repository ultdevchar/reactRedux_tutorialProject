// Creating initial state...
const initialState = {
    applyDiscount: false,
    criticalStockCount: 10,
    searchValue: '',
    enableFruit: true,
    enableVegetable: true
}

// Creating reducer to handle filter changing...
export default function FilterReducers(state = initialState, action) {

    switch (action.type) {
        case "TOGGLE_DISCOUNT":
            return {
                ...state,
                applyDiscount: !state.applyDiscount
            };
        case "TOGGLE_FRUIT":
            return {
                ...state,
                enableFruit: !state.enableFruit
            };
        case "TOGGLE_VEGETABLE":
            return {
                ...state,
                enableVegetable: !state.enableVegetable
            };
        case "CHANGE_SEARCH":
            return {
                ...state,
                searchValue: action.payload
            };
        default:
            return state;
    }
}