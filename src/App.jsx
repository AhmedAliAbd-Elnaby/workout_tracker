import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navigation from './components/header/Navigation'
import {Home} from './components/home/Home'
import Workouts from './components/workouts/Workouts'
import MyWorkouts from './components/myWorkouts/MyWorkouts'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Workouts/>
      <MyWorkouts/>
    </div>
  )
}

export default App
