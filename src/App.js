import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  label: {
    textTransform: 'capitalize',
    color: "#fff",
  },
  btn: {
    color: 'primary',
  },

}));


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/signin",
    main: () => <SignIn />
  },
  {
    path: "/signup",
    main: () => <SignUp />
  }
];

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
      <Router>
        <AppBar position="static" variant="outlined">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Classifier
            </Typography>
          
            <Link to="/signin"><Button variant="outlined" classes={{ label: classes.label }}>Sign In</Button></Link>
            <Link to="/signup"><Button variant="outlined" classes={{ label: classes.label }}>Sign Up</Button></Link>
            <Link to="/"><Button variant="outlined" classes={{ label: classes.label }}>Home</Button></Link>
          </Toolbar>
        </AppBar>
                     <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
        </Router>
      </div>
    
    </div>
  );
}

export default App;
