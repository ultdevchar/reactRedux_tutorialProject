import React from 'react';
import { connect } from 'react-redux';

// Importing actions...
import { loadFruitData } from '../redux/actions/FruitAction'
import { loadVegetableData } from '../redux/actions/VegetableAction'

// Importing product list...
import { PRODUCT_LIST } from '../constants/ProductList'

// Importing user defined components...
import FilterArea from './FilterArea';
import ListArea from './ListArea';

class Main extends React.Component {

    // Creating constructor...
    constructor(props) {
        super(props);

        // Initialize data...
        this.props.loadFruitData();
        this.props.loadVegetableData();
    }

    render() {

        return (
            <div>
                <div>
                    <FilterArea/>
                </div>
                <div>
                    <ListArea/>
                </div>
            </div>
        );
    }
}

// Define redux based function...

// This function allow us to reach store components by using this.props...
const mapStateToProps = (state, props) => {

    // Return all values which are defined as a reducers...
    return state;

    /*
    // If you want to reach only one reducers,
    // you should return object as a below...
    return {
        fruit: state.fruit
    };
    */
}

// This function bind dispatch function and props...

// Instead of define this function just use
// this.props.dispatch(loadVegetableData(vegetableData)) and
// this.props.dispatch(loadFruitData(fruitData))...
const mapDispatchToProps = (dispatch) => {

    // Seperating fruit and vegetables data...
    const vegetableData = PRODUCT_LIST[0];
    const fruitData = PRODUCT_LIST[1];

    return({
        loadVegetableData: () => {dispatch(loadVegetableData(vegetableData))},
        loadFruitData: () => {dispatch(loadFruitData(fruitData))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);