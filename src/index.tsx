import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './s1-main/App'
import reportWebVitals from './reportWebVitals'
import store from './s2-homeworks/hw10/bll/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        {/*для дз 10*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()