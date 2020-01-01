import React from 'react'
import { makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
});

type Props = {}

const DiagnosisComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <TableContainer component={Paper}>
                    <Table className={classes.root}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Details
                                </TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Desc</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Unit</TableCell>
                                <TableCell align="right">Sum</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">hoge</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">fugafuga</TableCell>
                                <TableCell align="right">fuga</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">piyo</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
}

export default DiagnosisComponent
