import React from 'react';
import { Link } from 'react-router-dom'
import style from './style.module.css';

export default function Page2() {
    return(
        <div>
            <h1>Pagina2</h1>
            <Link to="CreateApp">Create APP</Link>
            <Link to="Page1">
               Página 1
           </Link>
           <Link to="Page2">
               Página 2
           </Link>
        </div>
    );
}