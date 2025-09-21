import {Provider} from 'react-redux'
import {store} from './redux/store'

import Home from './components/Home'

import './App.css'

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
