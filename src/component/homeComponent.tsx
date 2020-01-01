import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Slide } from 'react-slideshow-image';

const useStyles = makeStyles({
    root: {
        padding: 30,
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

type Props = {}
interface SlideImage {
    path: String
    description: String
}

const HomeComponent: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
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
                    {slides.map((slide, key) => {
                        return <div key={key} className={classes.eachSlide}>
                            <div style={{ 'backgroundImage': `url(${slide.path})` }}>
                                <span>{slide.description}</span>
                            </div>
                        </div>
                    })}
                </Slide>
            </div>
        </>
    )
}

export default HomeComponent
