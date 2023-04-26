import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { AppBar, Toolbar, Typography, makeStyles, Grid } from '@material-ui/core'
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
  },
  footer: {
    backgroundColor: '#555',
    color: '#fff',
    padding: '50px 20px'
  },
  footerGridContainer: {
    maxWidth: 960,
    margin: '0 auto',
    fontSize: 16
  },
  aboutUs: {
    padding: '0 40px 40px 0',
  },
  copyRight: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 30
  },
  copyRightMessage: {
    maxWidth: 960,
    margin: '0 auto',
    fontSize: 16
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}><Link to="/" className={classes.link}>庄司眼科医院</Link></Typography>
          <div>
            <Link to="/message" className={classes.link}>院長ご挨拶</Link>
            <Link to="/access" className={classes.link}>アクセス</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' Component={HomeComponent} />
        <Route path='/message' Component={MessageComponent} />
        <Route path='/access' Component={AccessComponent} />
      </Routes>
      <div className={classes.footer}>
        <Grid container className={classes.footerGridContainer}>
          <Grid item xs={12} sm={8} className={classes.aboutUs}>
            <Typography variant="h6">このサイトについて</Typography>
            <Typography variant="subtitle1">木更津市の眼科 庄司眼科医院は、木更津駅東口から徒歩5分以内のところにあり、通院しやすい環境にあります。</Typography>
            <Typography variant="subtitle1">最新の技術と設備による診療を心がけていますので、「目のトラブル」でしたら、お気軽にご相談ください。</Typography>
            <Typography variant="subtitle1">患者様が、気軽にご自分の病状を相談しやすい雰囲気を大切にしています。</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">お問い合わせ先</Typography>
            <Typography variant="subtitle1">庄司眼科医院</Typography>
            <Typography variant="subtitle1">〒292-0056</Typography>
            <Typography variant="subtitle1">千葉県木更津市木更津1-1-5</Typography>
            <Typography variant="subtitle1">TEL：0438-25-3141</Typography>
            <Typography variant="subtitle1">FAX：0438-25-2251</Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.copyRight}>
        <Typography variant="h6" className={classes.copyRightMessage}>Copyright (c) 2020, 庄司眼科医院; all rights reserved.</Typography>
      </div>
    </BrowserRouter>
  );
}

export default (App);
