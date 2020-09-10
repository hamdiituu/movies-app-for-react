import React from 'react';
import {Route,Switch} from 'react-router'
import {MainPage,DetailPage,NotFound} from '../pages'

const AppRoute = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/detay/:movie" component={DetailPage} />
            <Route component={NotFound}/>
        </Switch>
    )
}

export default AppRoute;