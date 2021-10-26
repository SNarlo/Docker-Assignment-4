import './App.css';
import Login from './components/authentication/Login';
import BookingDashboard from './components/dashboards/BookingDashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignUp from './components/authentication/Signup';
import { ForgotPassword } from './components/authentication/ForgotPassword';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './Routes/PrivateRoute';
import ThankYouPage from './components/pages/ThankYouPage';

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={BookingDashboard} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/thank-you' render={ThankYouPage} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
    
  );
}

export default App;
