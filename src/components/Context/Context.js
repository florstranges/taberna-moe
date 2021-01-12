import {useContext, useState, useEffect, createContext} from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);

    const addToCart = (item, qty) => {
        const repeated = cart.findIndex(product => product.item.id === item.item.id);
        
        setTotalQty(totalQty + qty);
        
        if(repeated !== -1) {
            const newArray = Array.from(cart);
            cart[repeated].cantidad += item.cantidad;
            setCart(newArray); 
        } else {
            setCart([...cart, item]);
        }
    }

    const removeItem = (id) => {
        const arrayAfterDelete = cart.filter(product => product.item.id !== id);

        setCart(arrayAfterDelete);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, totalQty, addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;