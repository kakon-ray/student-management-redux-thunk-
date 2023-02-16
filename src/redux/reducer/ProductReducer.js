
import { GET_PRODUCT, ADD_PRODUCT, ADD_CARTLIST, GET_CARTLIST,DELETE_CARTLIST,DELETE_PORDUCT,UPDATE_PORDUCT} from "../ActionType"

const initialState = {
    cart:[],
    product:[],
  
}


const productReducer = (state=initialState,action) => {
    const selectedProduct = state.cart.filter(item => item.id === action.payload.id)
    const updateProduct = state.product.filter(item => item.id != action.payload.id)
   
   
         switch(action.type){

            case GET_PRODUCT:
               
                return{
                    ...state,
                    product:action.payload
                }

            case ADD_PRODUCT:
                return{
                    ...state,
                    product:[...state.product,action.payload]
                }

                
            case GET_CARTLIST:
                return{
                    ...state,
                    cart:action.payload
                }

            case ADD_CARTLIST:
                if(selectedProduct.length){
                    return{
                        ...state,
                        cart:[...state.cart]
                    }

                }
                else{
                    localStorage.setItem('cart', JSON.stringify([...state.cart,{...action.payload,quantity:1}]));
                    return{
                        ...state,
                        cart:[...state.cart,{...action.payload,quantity:1}]
                    }
                }
               

            case DELETE_CARTLIST:
                const newCart = state.cart.filter(
                    (item) => item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(newCart));
                return{
                    ...state,
                    cart:state.cart.filter(
                        (item) => item.id !== action.payload
                      ),
                }
            case DELETE_PORDUCT:
                return{
                    ...state,
                    product:state.product.filter(
                        (item) => item.id !== action.payload
                      ),
                }

            case UPDATE_PORDUCT:
                return{
                    ...state,
                    product:[...updateProduct,action.payload]
                    
                }

                

            default:
                return state
         }
}

export default productReducer