import {useContext, useState, createContext} from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item, qty) => {
        const repeated = cart.findIndex(product => product.item.id === item.item.id);
        
        setTotalQty(totalQty + qty);
        
        if(repeated !== -1) {
            const newArray = Array.from(cart);
            cart[repeated].cantidad += item.cantidad;
            setCart(newArray); 
        } else {
            setCart([...cart, item]);
            setTotalPrice(totalPrice + (item.item.price * item.cantidad))
        }
    }

    const removeItem = (id, price, qty) => {
        const arrayAfterDelete = cart.filter(product => product.item.id !== id);

        setCart(arrayAfterDelete);
        setTotalPrice(totalPrice - price);
        setTotalQty(totalQty - qty);
    }

    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalQty(0);
    }

    return (
        <CartContext.Provider value={{cart, totalQty, totalPrice,addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;