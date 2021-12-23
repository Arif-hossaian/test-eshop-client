import { CardActions } from '@mui/material';
import React from 'react';

const CustomCardAction = React.forwardRef((props, ref) => (
  <CardActions ref={ref}>{props.children}</CardActions>
));

export default CustomCardAction;
