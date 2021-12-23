import React from 'react';
import styles from './Home.module.css';
import MouseIcon from '@mui/icons-material/Mouse';
import Products from './DisplayProducts/DisplayProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { Grid } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  // console.log(products);
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);
  return (
    <div>
      <div className={styles.banner}>
        <p>Welcome to E-Shop</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            <MouseIcon size="small" />
          </button>
        </a>
      </div>
      <h2 className={styles.homeHeading}>Featured Products</h2>
      <div className={styles.container} alignitems="stretch" id="container">
        <Grid container spacing={3}>
          {products &&
            products.map((product) => (
              <Grid key={product._id} item xs={12} sm={12} md={4}>
                <Products product={product} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
