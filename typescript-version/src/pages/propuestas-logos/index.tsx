// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardSupport from 'src/views/cards/CardSupport'
import CardTwitter from 'src/views/cards/CardTwitter'

const CardBasic = () => {
  return (
    <Grid container spacing={6} alignItems='center'>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>First Logo</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
    </Grid>
  )
}

export default CardBasic
