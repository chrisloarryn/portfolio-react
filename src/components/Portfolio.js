import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import Navbar from './Navbar'
import project1 from './../images/html-css-javascript-lg.jpg'
// import { classes } from '*.module.css'

const useStyles = makeStyles({
  mainContainer: {}
})
const Portfolio = () => {
  const classes = useStyles()
  return (
    <Box component='div' className={classes.mainContainer}>
      <Navbar />
      <Grid container justify='center' alignItems='center'>
        {/* Project 1 */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='Project 1'
                height='140'
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  Project 1
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum dolor sit amet consectetur, adipiscing elit. Non,
                  officiis? Veritatis dolore eum eos sequi iste iure possimus ad
                  quos.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
