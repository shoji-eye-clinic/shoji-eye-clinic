import React from 'react'
import { makeStyles, Theme, useTheme, Tabs, Tab, Typography, Box } from '@material-ui/core'
import { Slide } from 'react-slideshow-image';
import SwipeableViews from 'react-swipeable-views';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) => ({
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
    section: {
        padding: '20px 0'
    },
    tabMenu: {
        margin: '0 auto',
        maxWidth: 640
    }
}));

type Props = {}
interface SlideImage {
    path: String
    description: String
}

const HomeComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
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
                    className={classes.slide}
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
                <div className={classes.tabMenu}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab icon={<CancelPresentationIcon />} label="休診日" />
                        <Tab  icon={<InfoIcon />} label="病院からのお知らせ" />
                    </Tabs>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <div className={classes.section}>
                                <Typography variant="h6">年末年始休暇のお知らせ</Typography>
                                <Typography variant="subtitle1">年末年始は下記のとおり休診させていただきます。</Typography>
                                <Typography variant="subtitle1">12月30日(月)・午後〜1月5日(日)</Typography>
                                <Typography variant="subtitle1">年内の診察は12月30日(月)の午前まで</Typography>
                                <Typography variant="subtitle1">年始の診察は1月6日(月)からとなります。</Typography>
                            </div>
                            <div className={classes.section}>
                                <Typography variant="h6">2019年12月</Typography>
                                <Typography variant="subtitle1">12月14日(土)</Typography>
                            </div>
                            <div className={classes.section}>
                                <Typography variant="h6">2020年1月</Typography>
                                <Typography variant="subtitle1">1月18日(土)</Typography>
                            </div>
                            <div className={classes.section}>
                                <Typography variant="h6">2020年2月</Typography>
                                <Typography variant="subtitle1">2月1日(土) 2月28日(金) 2月29日(土) ※2月27日(木)〜3月1日(日)は連休になります。ご注意ください。</Typography>
                                <Typography variant="subtitle1">※詳細につきましてはお電話でお問い合わせください（0438-25-3141）</Typography>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            病院からのお知らせ
                    </TabPanel>
                    </SwipeableViews>
                </div>
            </div>
        </>
    )
}

export default HomeComponent
