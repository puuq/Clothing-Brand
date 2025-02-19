/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = 'NRs. ';
    const delivery_fee = 150;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider;