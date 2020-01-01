import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
});

type Props = {}

const CloseComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
            Close
            </div>
        </>
    )
}

export default CloseComponent