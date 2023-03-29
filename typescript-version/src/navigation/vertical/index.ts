// ** Icon imports
// import Login from 'mdi-material-ui/Login'
// import Table from 'mdi-material-ui/Table'
// import CubeOutline from 'mdi-material-ui/CubeOutline'
import PaletteOutline from 'mdi-material-ui/PaletteOutline'

// import Information from 'mdi-material-ui/Information'
import Collage from 'mdi-material-ui/Collage'
import Numeric1CircleOutline from 'mdi-material-ui/Numeric1CircleOutline'
import Numeric2CircleOutline from 'mdi-material-ui/Numeric2CircleOutline'

// import Youtube from 'mdi-material-ui/Youtube'
// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
//import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'Home'
    },
    {
      title: 'Gallery',
      icon: PaletteOutline,
      path: '/gallery'
    },

    {
      sectionTitle: 'Proposal'
    },
    {
      title: 'First logo',
      icon: Numeric1CircleOutline,
      path: '/propuestas-logos'
    },
    {
      title: 'Second logo',
      icon: Numeric2CircleOutline,
      path: '/propuestas-logosTD'
    },
    {
      title: 'Collage',
      icon: Collage,
      path: '/collage'
    }
  ]
}

export default navigation
