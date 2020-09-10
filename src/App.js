import React from 'react';
import {AppRoute} from './routes'
import {Provider} from 'react-redux';
import store from './redux/store';
class App extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <AppRoute/>
            </Provider>

        )
    }
}
export default App;