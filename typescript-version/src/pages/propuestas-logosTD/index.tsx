// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardTd from 'src/views/cards/CardTd'
import CardTd2 from 'src/views/cards/CardTd2'
import CardTd3 from 'src/views/cards/CardTd3'

const CardBasic = () => {
  return (
    <Grid container spacing={6} alignItems='center'>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h5'>Propuesta de logo Tecnología digital</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTd />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTd2 />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTd3 />
      </Grid>
    </Grid>
  )
}

export default CardBasic
