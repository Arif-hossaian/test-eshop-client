import React from 'react';
import Link from 'next/link';
import styles from '../Home.module.css';
import CustomCard from '../../Common/CustomCard/CustomCard';
import CustomCardActionArea from '../../Common/CustomCardActionArea/CustomCardActionArea';
import CustomCardMedia from '../../Common/CustomCardMedia/CustomCardMedia';
import { CardContent } from '@mui/material';

const Products = ({ product }) => {
  const ref = React.createRef();
  return (
    <>
      <CustomCard ref={ref}>
        <Link href={`/product/${product._id}`} passHref>
          {/* <CustomCardActionArea ref={ref}>
            <CustomCardMedia
              ref={ref}
              component="img"
              src={product.image[0].url}
              title="image man"
            />
            <CardContent>
              <p>{product.name}</p>
              <p>{product.description}</p>
            </CardContent>
          </CustomCardActionArea> */}
          <p>{product.name}</p>
          <p>{product.description}</p>
        </Link>
      </CustomCard>
    </>
  );
};

export default Products;
