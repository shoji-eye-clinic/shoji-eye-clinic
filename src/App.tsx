import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import HomeComponent from './component/homeComponent'
import MessageComponent from './component/messageComponent'
import AccessComponent from './component/accessComponent'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none'
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>庄司眼科医院</Typography>
            <div>
              <Link to="/" className={classes.link}>Home</Link>
              <Link to="/message" className={classes.link}>院長ご挨拶</Link>
              <Link to="/access" className={classes.link}>アクセス</Link>
            </div>
          </Toolbar>
        </AppBar>
        <Route path='/' component={HomeComponent} exact/>
        <Route path='/message' component={MessageComponent} />
        <Route path='/access' component={AccessComponent} />
    </BrowserRouter>
  );
}

export default (App);
