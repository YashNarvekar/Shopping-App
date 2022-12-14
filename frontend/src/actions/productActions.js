import {PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAILS,PRODUCT_LIST_REQUEST} from '../constants/productConstant'
import axios from 'axios'
export const listProducts = () =>async (dispatch) => {
try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await axios.get('/api/products')
    dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
} catch (error) {
    dispatch({
        type: PRODUCT_LIST_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
}
}