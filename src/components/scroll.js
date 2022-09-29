import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import {BsArrowUpShort} from 'react-icons/bs'


const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        right: '50px',
        bottom: '50px',
        height: '46px',
        width: '46px',
        border: '1px solid #D5C0E0',
        backgroundColor: '#ffff',
        color: '#61B2B3',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#FDBCE7',
            backgroundColor: 'transparent'
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
            backgroundColor: 'transparent',
        },
        [theme.breakpoints.up('lg')]: {
            right: '6.5%',
        },
    }
})
)

const Scroll = ({
    showBelow,
}) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 800, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                    {/* <ExpandLessIcon /> */}
                    <BsArrowUpShort/>
                </IconButton>
            }
        </div>
    )
}
export default Scroll