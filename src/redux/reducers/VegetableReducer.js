// Creating initial state...
const initialState = {
    data: null
}

// Creating reducer to add initial vegetable data
// from product list to vegetable store object...
export default function VegetableReducers(state = initialState, action) {

    switch (action.type) {
        case "ADD_VEGETABLE_DATA":
            return action.payload;
        default:
            return state;
    }
}