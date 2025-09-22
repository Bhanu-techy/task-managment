import {Provider} from 'react-redux'
import {store} from './redux/store'

import Home from './components/Home'

import './App.css'

const App = () => (
  <Provider store={store}>
    <div className="bg-container">
      <div className="sidebar">Project</div>
      <hr className="side-line" />
      <Home />
    </div>
  </Provider>
)

export default App
