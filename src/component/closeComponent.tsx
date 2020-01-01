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

const CloseComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.section}>
                    <Typography variant="h4">年末年始休暇のお知らせ</Typography>
                    <Typography variant="subtitle1">年末年始は下記のとおり休診させていただきます。</Typography>
                    <Typography variant="subtitle1">12月30日(月)・午後〜1月5日(日)</Typography>
                    <Typography variant="subtitle1">年内の診察は12月30日(月)の午前まで</Typography>
                    <Typography variant="subtitle1">年始の診察は1月6日(月)からとなります。</Typography>
                </div>
                <div className={classes.section}>
                    <Typography variant="h4">2019年12月</Typography>
                    <Typography variant="subtitle1">12月14日(土)</Typography>
                </div>
                <div className={classes.section}>
                    <Typography variant="h4">2020年1月</Typography>
                    <Typography variant="subtitle1">1月18日(土)</Typography>
                </div>
                <div className={classes.section}>
                    <Typography variant="h4">2020年2月</Typography>
                    <Typography variant="subtitle1">2月1日(土) 2月28日(金) 2月29日(土) ※2月27日(木)〜3月1日(日)は連休になります。ご注意ください。</Typography>
                    <Typography variant="subtitle1">※詳細につきましてはお電話でお問い合わせください（0438-25-3141）</Typography>
                </div>
            </div>
        </>
    )
}

export default CloseComponent