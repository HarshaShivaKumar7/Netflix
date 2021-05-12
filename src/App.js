import React, { useEffect } from 'react';
import Login from './Screens/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase'
import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
		dispatch(login({
			uid: userAuth.uid,
			email: userAuth.email,
		}));
      }
      else {
        dispatch(logout());
      }
    });
	return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          {
            !user ? (
              <Login />
            ) : (
            <Switch>
				<Route path="/profile">
					<ProfileScreen />
				</Route>
            	<Route exact path="/">
                	<HomeScreen/>
              	</Route>
            </Switch>
            )
          }
        </Router>
      </header>
    </div>
  );
}

export default App;
