// Creating action to getting vegetable 
// data from product list as an initial...
export const loadVegetableData = (data) => {

    return {
        type: "ADD_VEGETABLE_DATA",
        payload: data
    }
};