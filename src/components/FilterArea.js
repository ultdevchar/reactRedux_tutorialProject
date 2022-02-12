import React from 'react';
import { connect } from 'react-redux';
import '../assets/App.css'

// Importing actions...
import { toggleDiscount, toggleFruit, toggleVegetable, changeSearchValue } from '../redux/actions/FilterAction'

class FilterArea extends React.Component {

    constructor(props) {
        super(props);

        // Binding function to use in event definition...
        this.handleToggleDiscount = this.handleToggleDiscount.bind(this);
        this.handleToggleFruit = this.handleToggleFruit.bind(this);
        this.handleToggleVegetable = this.handleToggleVegetable.bind(this);
        this.handleSearchValue = this.handleSearchValue.bind(this);
    }

    // Define function to handle toggle discount...
    handleToggleDiscount() {

        // Calling toggle dispatch to update store object...
        this.props.toggleDiscount();
    }

    // Define function to handle toggle showing fruits...
    handleToggleFruit() {

        // Calling toggle dispatch to update store object...
        this.props.toggleFruit();
    }

    // Define function to handle toggle showing vegetables...
    handleToggleVegetable() {

        // Calling toggle dispatch to update store object...
        this.props.toggleVegetable();
    }

    // Define function to handle changing on search text area...
    handleSearchValue(event) {

        this.props.changeSearchValue(event.target.value);
    }

    render() {

        // Getting default props value...
        const applyDiscount = this.props.filter.applyDiscount;
        const enableFruit = this.props.filter.enableFruit;
        const enableVegetable = this.props.filter.enableVegetable;
        const searchValue = this.props.filter.searchValue;

        return (
            <div className='search-area-container'>
                <div>
                    <label className="header">Welcome to Stock Page</label>
                </div>
                <div className='divider'></div>
                <div>
                    <input
                        className='input'
                        type="text"
                        value={searchValue}
                        placeholder='Search'
                        onChange={this.handleSearchValue} />
                </div>
                <div >
                    <label className='flex-50'>Apply Discount: </label>
                    <input
                        className='flex-50'
                        type="checkbox"
                        checked={applyDiscount}
                        onChange={this.handleToggleDiscount} />
                </div>
                <div >
                    <label className='flex-50'>Show Fruits: </label>
                    <input
                        className='flex-50'
                        type="checkbox"
                        checked={enableFruit}
                        onChange={this.handleToggleFruit} />
                </div>
                <div>
                    <label
                        className='flex-50'>Show Vegetables: </label>
                    <input
                        className='flex-50'
                        type="checkbox"
                        checked={enableVegetable}
                        onChange={this.handleToggleVegetable} />
                </div>

            </div>
        );
    }
}

// Define redux based function...

// This function allow us to reach store components by using this.props...
const mapStateToProps = (state, props) => {

    // Return only filter reducers...
    return {
        filter: state.filter
    };

    /*
    // If you want to map all reducers, 
    //you should return directly state as below...
    return state;
    */

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
// this.props.dispatch(toggleDiscount())...
const mapDispatchToProps = (dispatch) => {

    return ({
        toggleDiscount: () => { dispatch(toggleDiscount()) },
        toggleFruit: () => { dispatch(toggleFruit()) },
        toggleVegetable: () => { dispatch(toggleVegetable()) },
        changeSearchValue: (payload) => { dispatch(changeSearchValue(payload)) }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterArea);