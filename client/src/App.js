import './App.css';
import BookingForm from './components/forms/BookingForm';
import Login from './components/authentication/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/login' component={Login} />
        <BookingForm/>
      </div>
    </Router>
    
  );
}

export default App;
