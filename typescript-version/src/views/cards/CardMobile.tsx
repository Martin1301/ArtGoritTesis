// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardMobile = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        sx={{ height: '18rem', margin: '0.7rem', borderRadius: '0.3rem' }}
        image='/images/cards/collage3.jpeg'
      />
      <CardContent>
        <Typography sx={{ marginBottom: 1 }}>by: Juan Perez</Typography>
        <Typography variant='body2'>...</Typography>
      </CardContent>
    </Card>
  )
}

export default CardMobile
