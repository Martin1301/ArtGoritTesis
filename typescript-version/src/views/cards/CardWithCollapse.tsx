// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const CardWithCollapse = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '18rem', margin: '0.7rem', borderRadius: '0.3rem' }}
        image='/images/cards/propuestaTd3.jpeg'
      />
    </Card>
  )
}

export default CardWithCollapse
