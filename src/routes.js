import React from 'react';
import {BrowserRouter, Route, Switch  } from 'react-router-dom';


import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import CreateApp from './Pages/CreateApp'

export default function Routes(){

   return (
       <BrowserRouter basename="/blog">
           <Switch>
               <Route path="/" exact component={Page1} />               
               <Route path="/blog/page1" component={Page1} />               
               <Route path="/blog/page2" component={Page2} />
               <Route path="/page1" component={Page1} />               
               <Route path="/page2" component={Page2} />
               <Route path="/CreateApp" component={CreateApp} />
           </Switch>
       </BrowserRouter>
   )
}
