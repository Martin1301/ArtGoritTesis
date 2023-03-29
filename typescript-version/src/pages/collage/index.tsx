// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
//import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
//import CardTwitter from 'src/views/cards/CardTwitter'

const Dashboard = () => {
  return (
    <Grid container spacing={6} alignItems='center'>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Collage</Typography>
      </Grid>
      <div className='row'>
        <div className='column'>
          <img src='/images/cards/collage.jpeg'></img>
          <img src='/images/cards/collage2.jpeg'></img>
        </div>
        <div className='column'>
          <img src='/images/cards/collage3.jpeg'></img>
          <img src='/images/cards/collage4.jpeg'></img>
        </div>
        <div className='column'>
          <img src='/images/cards/collage5.jpeg'></img>
          <img src='/images/cards/collage6.jpeg'></img>
        </div>
        <div className='column'>
          <img src='/images/cards/collage7.jpeg'></img>
          <img src='/images/cards/collage8.jpeg'></img>
        </div>
      </div>
    </Grid>
  )
}

export default Dashboard
