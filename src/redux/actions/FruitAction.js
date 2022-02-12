// Creating action to getting fruit 
// data from product list as an initial...
export const loadFruitData = (data) => {

    return {
        type: "ADD_FRUIT_DATA",
        payload: data
    }
};