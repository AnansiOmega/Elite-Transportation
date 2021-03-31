import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './views/LandingPage'
import JobApplication from './views/JobApplication'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/apply' component={JobApplication} />
      </Switch>
    </div>
  );
}

export default App;


/// disclaimer 'this website is currently under developement' 
///// TO DO:
// make application form:
// fname lname
// CDL Class
// CDL number
// age
// years of experience
// City and state 
// what is your position? VV
// company driver or owner operator


//about
// open to entry level drivers ( 1 years experience)
// competitive pay
// work around home time
// no forced dispatch 
// something like, " we are a growing company, elite transportation has the best customer ser"
// great customer service
// 24hr dispatch
// top of the line broker carrier relations
// slogan ' taking care of business '