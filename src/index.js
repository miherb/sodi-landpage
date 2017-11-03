import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import {fetchFaq} from './actions/faqActions'
import Donations from './containers/donations'
import AboutPage from './containers/about'
import './index.css'
import './card.css'

const history = createBrowserHistory()

store.dispatch(fetchFaq())

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter history={history}>
        <Switch>
            <Route path='/' exact component={App}/>
            <Route path='/donations' exact component={Donations}/>
            <Route path='/about/' exact component={AboutPage}/>
            <Route path='/about/:section' exact component={AboutPage}/>
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'))
registerServiceWorker()
