import { createStore, combineReducers } from 'redux'
import profiles from './state/profiles'

const reducer = combineReducers({
  profiles
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
