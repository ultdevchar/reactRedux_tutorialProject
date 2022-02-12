// Creating initial state...
const initialState = {
    data: null
}

// Creating reducer to add initial fruit data
// from product list to fruit store object...
export default function FruitReducers(state = initialState, action) {

    switch (action.type) {
        case "ADD_FRUIT_DATA":
            return action.payload;
        default:
            return state;
    }
}