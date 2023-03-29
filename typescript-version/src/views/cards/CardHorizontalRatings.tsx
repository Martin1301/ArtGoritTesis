// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardHorizontalRatings = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '18rem', margin: '0.7rem', borderRadius: '0.3rem' }}
        image='/images/cards/collage2.jpeg'
      />
      <CardContent>
        <Typography sx={{ marginBottom: 1 }}>by: Micaela Rojas</Typography>
      </CardContent>
    </Card>
  )
}

export default CardHorizontalRatings
