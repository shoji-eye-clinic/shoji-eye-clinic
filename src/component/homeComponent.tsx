import React from 'react'
import { makeStyles, useTheme, Tabs, Tab, Typography, Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import SwipeableViews from 'react-swipeable-views';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import InfoIcon from '@material-ui/icons/Info';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
  slide: {
    width: '100%',
    margin: 'auto'
  },
  eachSlide: {
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: 400
    }
  },
  tabsWrapper: {
    margin: '0 auto',
  },
  tabHeader: {
    backgroundColor: '#f5f5f5',
    '& span': {
      color: 'rgba(0, 0, 0, 0.87)'
    },
    '& span svg': {
      color: '#00bcd4'
    },
  },
  swipeableViews: {
    backgroundColor: '#fff',
    padding: 0,
  },
  tabBody: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '20px 0',
    color: 'rgba(0, 0, 0, 0.87)'
  },
  scheduleHeaderWrapper: {
    backgroundColor: '#f5f5f5',
    padding: '20px 0'
  },
  scheduleHeader: {
    color: 'rgba(0, 0, 0, 0.87)',
    margin: '0 auto',
    maxWidth: 960,
    padding: '0 20px'
  },
  headerIcon: {
    color: '#00bcd4',
    marginRight: 5,
    marginTop: -5,
    fontSize: 28,
    verticalAlign: 'middle'
  },
  scheduleTableWrapper: {
    padding: '20px 0'
  },
  scheduleTable: {
    margin: '0 auto',
    maxWidth: 960,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  scheduleWrapper: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '20px'
  }
}));

type Props = {}
interface SlideImage {
  path: String
  description: String
}

const HomeComponent: React.FC<Props> = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: any) => {
    console.log(event)
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const slides: SlideImage[] = [
    {
      path: 'img/p-appearance.png',
      description: '庄司眼科医院'
    },
    {
      path: 'img/p-examinationroom1.png',
      description: '診察室①'
    },
    {
      path: 'img/p-examinationroom2.png',
      description: '診察室②'
    },
    {
      path: 'img/exam.png',
      description: '検査室'
    }
  ]
  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
  }
  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  return (
    <>
      <div className={classes.root}>
        <Slide
          cssClass={classes.slide}
          duration={5000}
          transitionDuration={500}
          infinite={true}
          indicators={true}
          arrows={false}
        >
          {slides.map((slide, key) => {
            return <div key={key} className={classes.eachSlide}>
              <div style={{ 'backgroundImage': `url(${slide.path})` }}>
              </div>
            </div>
          })}
        </Slide>
        <div className={classes.tabsWrapper}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className={classes.tabHeader}
          >
            <Tab icon={<CancelPresentationIcon />} label="休診日" />
            <Tab icon={<InfoIcon />} label="医院概要" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            className={classes.swipeableViews}
          >
            <TabPanel value={value} index={0} dir={theme.direction} >
              <div className={classes.tabBody}>
                <Typography variant="h6">お知らせ</Typography>
                <Typography variant="subtitle1">休診は下記を予定しておりますが、診療日や診療時間に変更が生じる可能性がありますのでご注意ください。</Typography>
                <Typography variant="subtitle1">詳細は受付までお問い合わせください。</Typography>
              </div>
              <div className={classes.tabBody}>
              <Typography variant="h6">2024年4月</Typography>
                <Typography variant="subtitle1">4月19日(金) </Typography>
                <Typography variant="subtitle1">4月20日(土) </Typography>
                <Typography variant="subtitle1">※4月18日(木)〜21日(日)は連休です。ご注意ください。</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6">2024年5月</Typography>
                <Typography variant="subtitle1">5月18日(土)・午後 </Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6">2024年6月</Typography>
                <Typography variant="subtitle1">6月8日(土)・午後 </Typography>
                <Typography variant="subtitle1">6月22日(土)・午後 </Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6">2024年7月</Typography>
                <Typography variant="subtitle1">7月5日(金) </Typography>
                <Typography variant="subtitle1">7月6日(土) </Typography>
                <Typography variant="subtitle1">※7月4日(木)〜7日(日)は連休です。ご注意ください。</Typography>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className={classes.tabBody}>
                <Typography variant="h6"><LocalHospitalIcon className={classes.headerIcon} />医院名</Typography>
                <Typography variant="subtitle1">庄司眼科医院</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6"><LocationOnIcon className={classes.headerIcon} />住所</Typography>
                <Typography variant="subtitle1">292-0056</Typography>
                <Typography variant="subtitle1">千葉県木更津市木更津1-1-5</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6"><CallIcon className={classes.headerIcon} />電話番号</Typography>
                <Typography variant="subtitle1">0438-25-3141</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6"><ScheduleIcon className={classes.headerIcon} />診療時間</Typography>
                <Typography variant="subtitle1">9:00～12:00 / 14:00～17:00（土曜日は16:00）</Typography>
                <Typography variant="subtitle1">受付時間は午前11:30、午後16:30（土曜日は16:00）までです。</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6"><CancelPresentationIcon className={classes.headerIcon} />休診日</Typography>
                <Typography variant="subtitle1">木曜日・日祝日・祭日</Typography>
                <Typography variant="subtitle1">※年末年始や学会参加等の理由により臨時でお休みをいただく場合もございます。</Typography>
                <Typography variant="subtitle1">休診の予定に関してはトップページのお知らせ、または休診のお知らせにてご確認お願い致します。</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6"><PermIdentityIcon className={classes.headerIcon} />院長</Typography>
                <Typography variant="subtitle1">庄司 純</Typography>
              </div>
              <div className={classes.tabBody}>
                <Typography variant="h6"><LocalParkingIcon className={classes.headerIcon} />駐車場</Typography>
                <Typography variant="subtitle1">あり（7台）</Typography>
                <Typography variant="subtitle1">※当院駐車場が満車の場合は「三井のリパーク　木更津駅前第二」をご利用いただけます。（当院より徒歩2分のところにあります。）</Typography>
                <Typography variant="subtitle1">ご利用の場合は、受付にお声かけください。</Typography>
              </div>
            </TabPanel>
          </SwipeableViews >
        </div >
        <div className={classes.scheduleHeaderWrapper}>
          <Typography className={classes.scheduleHeader} variant="h5"><ScheduleIcon className={classes.headerIcon} />診療時間</Typography>
        </div>
        <div className={classes.scheduleTableWrapper}>
          <TableContainer className={classes.scheduleTable}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center">月</TableCell>
                  <TableCell align="center">火</TableCell>
                  <TableCell align="center">水</TableCell>
                  <TableCell align="center">木</TableCell>
                  <TableCell align="center">金</TableCell>
                  <TableCell align="center">土</TableCell>
                  <TableCell align="center">日・祝</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">診療時間</TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">9:00～12:00</Typography>
                    <Typography variant="subtitle1">14:00～17:00</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">9:00～12:00</Typography>
                    <Typography variant="subtitle1">14:00～17:00</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">9:00～12:00</Typography>
                    <Typography variant="subtitle1">14:00～17:00</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">☓</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">9:00～12:00</Typography>
                    <Typography variant="subtitle1">14:00～17:00</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="subtitle1">9:00～12:00</Typography>
                    <Typography variant="subtitle1">14:00～16:00</Typography>
                  </TableCell>
                  <TableCell align="center">☓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className={classes.scheduleWrapper}>
          <Typography variant="h6">診察のご案内</Typography>
          <Typography variant="subtitle1">受付時間は午前11:30、午後16:30（土曜日は16:00)までです。</Typography>
          <Typography variant="subtitle1">土曜日の午後の受付は16時までですのでご注意ください。</Typography>
          <Typography variant="subtitle1">木曜日・日祝日・祭日はお休みです。</Typography>
          <Typography variant="subtitle1">※年末年始や学会参加等の理由により臨時でお休みをいただく場合もございます。</Typography>
          <Typography variant="subtitle1">休診の予定に関してはトップページのお知らせ、または休診のお知らせにてご確認お願い致します。</Typography>
          <Typography variant="subtitle1">ご不明な点があればお電話にてお問い合わせください。（0438-25-3141）</Typography>
        </div>
        <div className={classes.scheduleWrapper}>
          <Typography variant="h6">初診の方へ</Typography>
          <Typography variant="subtitle1">当院では診察の予約は行っておりません。</Typography>
          <Typography variant="subtitle1">受付時間内に受付へお越しください。</Typography>
          <Typography variant="subtitle1">保険証や各種医療証、受給者証をお持ちください。 </Typography>
          <Typography variant="subtitle1">検査記録やお薬手帳等もあれば参考にさせていただきますのでお持ちください。</Typography>
          <Typography variant="subtitle1">紹介状をお持ちの方は合わせてご持参をお願い致します。 </Typography>
          <Typography variant="subtitle1">受付時間は午前11:30、午後16:30（土曜日は16:00)までです。</Typography>
        </div>
      </div >
    </>
  )
}

export default HomeComponent
