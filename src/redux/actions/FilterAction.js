// Creating action to toggle discount applying...
export const toggleDiscount = () => {

    return {
        type: "TOGGLE_DISCOUNT"
    }
};

// Creating action to toggle show fruit...
export const toggleFruit = () => {

    return {
        type: "TOGGLE_FRUIT"
    }
};

// Creating action to toggle show vegetable...
export const toggleVegetable = () => {

    return {
        type: "TOGGLE_VEGETABLE"
    }
};

// Creating action to handle search area changing...
export const changeSearchValue = (payload) => {

    return {
        type: "CHANGE_SEARCH",
        payload: payload
    }
};