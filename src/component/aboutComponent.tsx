import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
});

type Props = {}

const AboutComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
            About
            </div>
        </>
    )
}

export default AboutComponent
