import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '@state/configureStore'
import '@src/index.sass'
import App from '@screens/App'
import registerServiceWorker from '@src/registerServiceWorker'

const store = configureStore()

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  } 
}

ReactDOM.render(<AppContainer />, document.getElementById('root'))
registerServiceWorker()
