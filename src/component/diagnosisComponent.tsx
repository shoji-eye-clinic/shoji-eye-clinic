import React from 'react'
import { makeStyles } from '@material-ui/core'

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
            Diagnosis
            </div>
        </>
    )
}

export default DiagnosisComponent
