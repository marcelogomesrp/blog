import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

export default function Routes(){
   return (
       <BrowserRouter>
           <Switch>
               <Route path="/blog/" exact component={Page1} />               
               <Route path="/blog/page1" component={Page1} />               
               <Route path="/blog/page2" component={Page2} />
           </Switch>
       </BrowserRouter>
   )
}
