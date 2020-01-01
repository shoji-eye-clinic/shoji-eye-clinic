import React from 'react'
import { makeStyles } from '@material-ui/core'
import { State } from '../reducer'
import { Slide } from 'react-slideshow-image';

const useStyles = makeStyles({
    root: {
        padding: 30,
    },
    slide: {
        width: '90%',
        margin: 'auto'
    },
    eachSlide: {
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundSize: 'cover',
            height: 400
        },
        '& span': {
            padding: 20,
            fontSize: 20,
            background: '#efefef',
            textAlign: 'center',
            width: '100%',
            verticalAlign: 'bottom'
        }
    }
});

const slideImages = [
    'img/p-appearance.png',
    'img/p-examinationroom1.png',
    'img/p-examinationroom2.png'
];

type Props = State

const HomeComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Slide
                    className={classes.slide}
                    duration={5000}
                    transitionDuration={500}
                    infinite={true}
                    indicators={true}
                    arrows={true}
                >
                    <div className={classes.eachSlide}>
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            <span>Slide 1</span>
                        </div>
                    </div>
                    <div className={classes.eachSlide}>
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            <span>Slide 2</span>
                        </div>
                    </div>
                    <div className={classes.eachSlide}>
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            <span>Slide 3</span>
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default HomeComponent
