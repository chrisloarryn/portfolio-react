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


//5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
// This may help because npm has known issues with package hoisting which may get resolved in future versions.

// 6. Check if /Users/developmac/Documents/GitHub/portfolio-react/node_modules/webpack is outside your project directory.
//    For example, you might have accidentally installed something in your home folder.

// 7. Try running npm ls webpack in your project folder.
//    This will tell you which other package (apart from the expected react-scripts) installed webpack.

// If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
// That would permanently disable this preflight check in case you want to proceed anyway.

// P.S. We know this message is long but please read the steps above :-) We hope you find them helpful!

// npm ERR! code ELIFECYCLE
// npm ERR! errno 1
// npm ERR! portfolio-react@0.1.0 build: `react-scripts build`
// npm ERR! Exit status 1
// npm ERR! 
// npm ERR! Failed at the portfolio-react@0.1.0 build script.
// npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
