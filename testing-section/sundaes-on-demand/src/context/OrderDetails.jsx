import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we are in a provider
export function useOrderDetails() {
    const context = useContext(OrderDetails);

    if (!context) {
        throw new Error('useOrderDetails must be called from within an OrderDetailsProvider');
    }
    return context
}

export function OrderDetailsProvider(props) {
    const [optionCounts, setOptionCounts] = useState({
        scoops: {}, // example {Chocolate: 1, Vanilla: 2}
        toppings: {} // example {"Gummi Bears": 1}
    })

    const updateItemCount = (itemName, newItemCount, optionType) => {
        // make a copy of existing state
        const newOptionsCounts = { ...optionCounts };

        // update the copy with the new information
        newOptionsCounts[optionType][itemName] = newItemCount;

        // update the state with the updated copy
        setOptionCounts(newOptionsCounts);
    }

    const resetOrder = () => {
        setOptionCounts({ scoops: {}, toppings: {} });
    }

    // utility function to derive totals form optionCounts state value
    const calculateTotal = (optionType) => {
        // get an array of counts for the option type
        const countsArray = Object.values(optionCounts[optionType]);

        // total the value in the array of counts for the number of items
        const totalCount = countsArray.reduce((total, value) => total + value, 0);

        // multiply the total number of items by the price for this item type
        return totalCount * pricePerItem[optionType]
    }

    const totals = {
        scoops: calculateTotal('scoops'),
        toppings: calculateTotal('toppints'),
    };

    const value = { optionCounts, totals, updateItemCount, resetOrder };
    return <OrderDetails.Provider value={value} {...props}/>;
}
