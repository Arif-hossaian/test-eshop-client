import { Card, CardContent } from '@mui/material';
import React from 'react';

const CustomCard = React.forwardRef((props, ref) => (
  <Card ref={ref}>
    <CardContent>{props.children}</CardContent>
  </Card>
));

// You can now get a ref directly to the DOM button:
//   const ref = React.createRef();
//   <FancyButton ref={ref}>Click me!</FancyButton>;
export default CustomCard;
