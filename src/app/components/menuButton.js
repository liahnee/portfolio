import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

const AdapterLink = React.forwardRef((props, ref) => (
    <Link innerRef={ref } {...props} />
));

export default ({ icon, to, color = null, ...props}) => (
    <IconButton color={color} component={AdapterLink} to={to} {...props}>
        {icon}
    </IconButton>
)