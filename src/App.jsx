import { Grid } from '@material-ui/core';
import home from './assets/8432.svg';
import LogSignIn from './Components/LogSignIn';
import useStyles from './Components/style';
import './App.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function App() {

  const classes = useStyles();
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
        <Grid container className={classes.root}>
          {matches ? <Grid style={matches? {padding: '5rem 10rem'}: {}} item md={6} sm={12}>
            <img alt="home" className={classes.homeImg} src={home}/>
          </Grid>: null}
          <Grid className="poly-bg" style={matches? {padding: '5rem 10rem'}: {}} item md={6} sm={12}>
            <LogSignIn></LogSignIn>
          </Grid>
        </Grid>
    </>
  );
}

export default App;
