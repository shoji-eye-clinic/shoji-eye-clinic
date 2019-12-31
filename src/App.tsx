import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeComponent from './component/homeComponent'
import CloseComponent from './component/closeComponent'
import DiagnosisComponent from './component/diagnosisComponent'
import AboutComponent from './component/aboutComponent'
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
    margin: '0 10px'
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>庄司眼科医院</Typography>
            <div>
              <Link to="/" className={classes.link}>Home</Link>
              <Link to="/close" className={classes.link}>休診のお知らせ</Link>
              <Link to="/diagnosis" className={classes.link}>診療のご案内</Link>
              <Link to="/about" className={classes.link}>医院概要</Link>
              <Link to="/message" className={classes.link}>院長ご挨拶</Link>
              <Link to="/access" className={classes.link}>アクセス</Link>
            </div>
          </Toolbar>
        </AppBar>
        <Route path='/' component={HomeComponent} exact/>
        <Route path='/close' component={CloseComponent} />
        <Route path='/diagnosis' component={DiagnosisComponent} />
        <Route path='/about' component={AboutComponent} />
        <Route path='/message' component={MessageComponent} />
        <Route path='/access' component={AccessComponent} />
    </BrowserRouter>
  );
}

export default (App);
