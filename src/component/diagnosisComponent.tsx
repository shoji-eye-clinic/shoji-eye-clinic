import React from 'react'
import { makeStyles } from '@material-ui/core'
import { State } from '../reducer'

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
});

type Props = State

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
