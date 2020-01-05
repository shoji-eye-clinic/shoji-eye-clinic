import React from 'react'
import { makeStyles, Typography, TableContainer, Table, TableRow, TableCell, TableBody, Grid } from '@material-ui/core'
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import TimelineIcon from '@material-ui/icons/Timeline';
import BusinessIcon from '@material-ui/icons/Business';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles({
    section: {
        padding: 30,
    },
    table: {

    },
    headerIcon: {
        color: '#00bcd4',
        marginRight: 5,
        marginTop: -5,
        fontSize: 28,
        verticalAlign: 'middle'
    },
    doctorImgWrapper: {
        textAlign: 'center'
    },
    doctorImg: {
        width: '70%',
        maxWidth: 640
    }
});

type Props = {}

const MessageComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.section}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6"><SpeakerNotesIcon className={classes.headerIcon}/>院長ご挨拶</Typography>
                        <Typography variant="subtitle1">皆様、こんにちは。</Typography>
                        <Typography variant="subtitle1">庄司眼科医院院長の庄司　純でございます。</Typography>
                        <Typography variant="subtitle1">庄司眼科医院は、昭和32年に木更津駅の東口に開業いたしました。</Typography>
                        <Typography variant="subtitle1">私は現在2代目院長を務めさせていただいております。</Typography>
                        <Typography variant="subtitle1">「目でお困りのことは何ですか？」この言葉は、患者様の訴えに耳を傾け、不快な症状の原因となっている病気を探し、そして適切な治療を選択するための第1歩となる大事な言葉と考えています。</Typography>
                        <Typography variant="subtitle1">日常の診療では、丁寧な問診、最新機器を導入した診療を行っておりますが、スタッフ教育にも力を入れており、熟練したスタッフが患者様をお出迎えすることになると思います。</Typography>
                        <Typography variant="subtitle1">私は、1985年日本大学医学部附属板橋病院眼科に入局以来、同病院では前眼部疾患（結膜疾患、角膜疾患）と眼感染症を専門として勤務を続けてまいりました。</Typography>
                        <Typography variant="subtitle1">現在も、週1回、臨床教授として、アレルギー専門外来とドライアイ専門外来を担当させていただいております。</Typography>
                        <Typography variant="subtitle1">近年眼科でよく見る疾患には、加齢に伴う白内障、緑内障、加齢黄斑変性症などの疾患に加え、糖尿病、腎疾患や膠原病に関連する眼合併症、眼感染症、アレルギー・免疫疾患などがあり、小児では近視、遠視、乱視などの屈折異常も問題になります。病気に対する治療は、個々の病状に合わせた選択が必要ですので、これまで大学病院で培った診療技術を駆使して、個人個人にあった治療を提案させていただきます。</Typography>
                        <Typography variant="subtitle1">目でお困りのことがありましたら、お気軽にご相談ください。</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.doctorImgWrapper}>
                            <img alt="p-doctor" className={classes.doctorImg} src="img/p-doctor.jpg" />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.section}>
                <Typography variant="h6"><TimelineIcon className={classes.headerIcon}/>院長略歴</Typography>
                <TableContainer className={classes.table}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>1985年</TableCell>
                                <TableCell>日本大学医学部 卒業</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1989年</TableCell>
                                <TableCell>日本大学医学部助手（眼科学教室）</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1990年</TableCell>
                                <TableCell>銚子市立総合病院勤務</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1992年</TableCell>
                                <TableCell>日本大学医学部助手（眼科学教室）</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2002年</TableCell>
                                <TableCell>
                                    <Typography>日本大学医学部兼任講師</Typography>
                                    <Typography>庄司眼科医院勤務</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2007年</TableCell>
                                <TableCell>日本大学医学部臨床教授</TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer>
            </div>
            <div className={classes.section}>
                <Typography variant="h6"><BusinessIcon className={classes.headerIcon}/>所属学会</Typography>
                <Typography variant="subtitle1">日本眼科学会・日本アレルギー学会・日本角膜移植学会・日本角膜学会</Typography>
                <Typography variant="subtitle1">日本眼炎症学会・日本コンタクトレンズ学会・日本眼科手術学会</Typography>
                <Typography variant="subtitle1">日本網膜硝子体学会・日本眼薬理学会・日本眼感染症学会</Typography>
                <Typography variant="subtitle1">日本眼科アレルギー学会（理事）</Typography>
            </div>
            <div className={classes.section}>
                <Typography variant="h6"><VerifiedUserIcon className={classes.headerIcon}/>学位・認定医</Typography>
                <Typography variant="subtitle1">医学博士</Typography>
                <Typography variant="subtitle1">日本眼科学会専門医</Typography>
                <Typography variant="subtitle1">日本アレルギー学会指導医（眼科）</Typography>
            </div>
        </>
    )
}

export default MessageComponent