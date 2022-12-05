// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import PaletteOutline from 'mdi-material-ui/PaletteOutline'
import Information from 'mdi-material-ui/Information'
import Collage from 'mdi-material-ui/Collage'
import Numeric1CircleOutline from 'mdi-material-ui/Numeric1CircleOutline'
import Numeric2CircleOutline from 'mdi-material-ui/Numeric2CircleOutline'
import Youtube from 'mdi-material-ui/Youtube'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

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
      path: '/cards'
    },
    {
      title: 'Collage',
      icon: Collage,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Learn'
    },
    {
      title: 'Videos',
      icon: Youtube,
      path: '/cards'
    },
    {
      title: 'Information',
      icon: Information,
      path: '/tables'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'Proposal'
    },
    {
      title: 'First logo',
      icon: Numeric1CircleOutline,
      path: '/'
    },
    {
      title: 'Second logo',
      icon: Numeric2CircleOutline,
      path: '/'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
