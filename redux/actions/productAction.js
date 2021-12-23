import Axios from 'axios';
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQ,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERROR,
} from '../constants/productConstants';
import absoluteUrl from 'next-absolute-url';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQ,
    });
    //const { origin } = absoluteUrl(req);
    const { data } = await Axios.get(
      `https://eshop-ecommerce-api.herokuapp.com/api/v1/products`
    );
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
