import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
// import Twitter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0
    },
    "& .MuiSvgIcon-root": {
        fill: "tan",
        "&:hover": {
            fill: "tomato",
            fontSize: "1.8rem"
        }
    }
  }
})

const Footer = () => {
  const classes = useStyles()
  return (
    <BottomNavigation with='auto' style={{ background: '#233' }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
        href={"//fb.com/chrisloarryn"}
        target="_blank"
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        href={"//linkedin.com/in/crist%C3%B3bal-contreras-orellana-5bbba1a0/"}
        target="_blank"
      />
      {/*
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<Twitter />}
            />
        */}
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
    </BottomNavigation>
  )
}

export default Footer
