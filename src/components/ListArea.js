import React from 'react';
import { connect } from 'react-redux';
import '../assets/App.css'

class ListArea extends React.Component {

    constructor(props) {
        super(props);
    }

    // Define function to creating list with jsx...
    createFruitList() {

        // Control filter enable value...
        if (this.props.filter.enableFruit) {

            // Creating list to keep category based jsx item...
            const fruitList = this.props.fruit.data.map((item) => {

                return this.prepareListData(item);
            });

            return fruitList;
        }
        else {
            return null;
        }
    }

    createVegetableList() {

        // Control filter enable value...
        if (this.props.filter.enableVegetable) {

            // Creating list to keep category based jsx item...
            const vegetableList = this.props.vegetable.data.map((item) => {

                return this.prepareListData(item);
            });

            return vegetableList;

        }
        else {
            return null;
        }
    }

    // Define function to prepare list data...
    prepareListData(item){

        // Getting name and search value to compare by converting to lowercase...
        const productName = item.name.toLowerCase();
        const searchValue = this.props.filter.searchValue.toLowerCase();

        // Control search value...
        if (productName.includes(searchValue)) {

            // Getting critical stock count...
            const criticalStockCount = this.props.filter.criticalStockCount;
            
            // Define stock row by controlling threshold value...
            let countRow = null;

            if (item.stockCount <= criticalStockCount) {

                countRow = <td className={(item.stockCount <= criticalStockCount) ? 'low-stock' : ''}>{item.stockCount} (!)</td>
            }
            else {
                countRow = <td>{item.stockCount}</td>
            }

            // Define price row...
            let priceRow = null;

            // Getting discount situation...
            if(this.props.filter.applyDiscount){
                
                // Calculate discounted price...
                const prevPrice = parseFloat(item.price.slice(1));
                const discountPrice = parseFloat(prevPrice - prevPrice/item.discount).toFixed(2);

                priceRow = <td className='price-container'>
                                <div className='price-disabled'>${prevPrice}</div>
                                <div> - ${discountPrice}</div>
                            </td>
            }
            else{
                priceRow = <td>{item.price}</td>
            }


            return <tr key={item.name}>
                <td>{item.name}</td>
                {priceRow}
                {countRow}
            </tr>
        }

    }

    render() {

        return (
            <div className='list-area-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createFruitList()}
                        {this.createVegetableList()}
                    </tbody>
                </table>
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

export default connect(mapStateToProps)(ListArea);