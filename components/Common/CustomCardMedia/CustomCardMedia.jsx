import { CardMedia } from '@mui/material';
import React from 'react';

const CustomCardMedia = React.forwardRef(
  (props, ref, component, image, title) => (
    <CardMedia ref={ref} component={component} src={image} title={title} />
  )
);

export default CustomCardMedia;
