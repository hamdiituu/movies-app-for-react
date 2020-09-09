import React from 'react';
import {Route,Switch} from 'react-router'
import {MainPage,DetailPage} from '../pages'

const AppRoute = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/detay" component={DetailPage} />
        </Switch>
    )
}

export default AppRoute;