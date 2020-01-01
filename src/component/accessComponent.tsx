import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        padding: '10px 30px',
    },
    section: {
        padding: '20px 0'
    }
});

type Props = {}

const AccessComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.section}>
                    <Typography variant="h4">電車でお越しのかた</Typography>
                    <Typography variant="subtitle1">JR内房線　木更津駅東口より徒歩5分以内です。</Typography>
                </div>
                <div className={classes.section}>
                    <Typography variant="h4">車でお越しのかた</Typography>
                    <Typography variant="subtitle1">無料駐車場のご用意がございます。(7台)</Typography>
                    <Typography variant="subtitle1">※当院駐車場が満車の場合は「三井のリパーク　木更津駅前第二」をご利用いただけます。</Typography>
                    <Typography variant="subtitle1">（当院より徒歩2分のところにあります。）</Typography>
                    <Typography variant="subtitle1">ご利用の場合は、受付にお声かけください。</Typography>
                </div>
                <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.8906511432638!2d139.92486831562132!3d35.38316798026476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187352a2a9f07d%3A0x7a9222b97f8693d8!2z5bqE5Y-455y856eR5Yy76Zmi!5e0!3m2!1sja!2sus!4v1544763852190"
                    width="100%"
                    height="500"
                ></iframe>
                <div className={classes.section}>
                    <Typography variant="h4">庄司眼科医院</Typography>
                    <Typography variant="subtitle1">〒292-0056</Typography>
                    <Typography variant="subtitle1">千葉県木更津市木更津1-1-5</Typography>
                    <Typography variant="subtitle1">TEL：<a href="tel:0438253141">0438-25-3141</a></Typography>
                    <Typography variant="subtitle1">FAX：0438-25-2251</Typography>
                </div>
            </div>
        </>
    )
}

export default AccessComponent