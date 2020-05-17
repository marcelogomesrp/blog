import React from 'react';
import style from './Link.module.css';

export default props => {
    const {module = "default", children, ... rest} = props;

    return (
        <a className={style[module]} {...rest}>
            {children}
        </a>
    )

}