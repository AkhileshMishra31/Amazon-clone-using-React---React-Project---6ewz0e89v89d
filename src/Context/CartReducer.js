export const initialState = {
    basket: [],
};

const addProductToCart = (product, state) => {
    console.log("adding product", product);
    const updatedCart = [...state.basket];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, basket: updatedCart };
};

const removeProductFromCart = (productId, state) => {
    console.log("remove product: " + productId);
    const updatedCart = [...state.basket];
    const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

    const updatedItem = {
        ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, basket: updatedCart };
};

const addQuantity = (productId, state) => {
    const updatedCart = [...state.basket];
    const updatedItemIndex = updatedCart.findIndex(
        item => item.id === productId
    );
    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, basket: updatedCart };
}


const decreasequantity = () => {

}


export const reducer = (state, action) => {
    console.log(action);
    console.log(action.id);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return addProductToCart(action.item, state);
        case 'REMOVE_FROM_BASKET':
            return removeProductFromCart(action.id, state)

        case "REMOVE":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "ADD_QUANTITY":
            return addQuantity(action.id, state)
        case 'EMPTY_BASKET':
            return {
                basket:null
            }
        default:
            return state;
    }
};

export default reducer;