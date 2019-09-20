import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';








import Information from './Information';


module.exports = (
    <div >
        <div >
     
                <Switch>
              

                    <Route path="/information" component={Information} />
                    <Redirect from="/*" to="/404" />
                </Switch>
   
        </div>
    </div>
);
