import React from 'react';
import {Route,Switch} from 'react-router'
import {MainPage,DetailPage,NotFound} from '../pages'

const AppRoute = ()=>{
    return(

            <Switch>
                <Route exact path="/movies-app-for-react/" component={MainPage} />
                <Route path="/movies-app-for-react/detay/:movie" component={DetailPage} />
                <Route component={NotFound}/>
            </Switch>

    )
}

export default AppRoute;