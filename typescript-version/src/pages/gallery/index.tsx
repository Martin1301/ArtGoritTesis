// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'

//import CardTwitter from 'src/views/cards/CardTwitter'
//import CardFacebook from 'src/views/cards/CardFacebook'
//import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'

//import CardMembership from 'src/views/cards/CardMembership'
import CardInfluencer from 'src/views/cards/CardInfluencer'

//import CardNavigation from 'src/views/cards/CardNavigation'
//import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
//import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'

const CardBasic = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Gallery</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardImgTop />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
    </Grid>
  )
}

export default CardBasic
