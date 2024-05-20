import HomeIcon from '@mui/icons-material/Home';
import Person4Icon from '@mui/icons-material/Person4';
import LogoutIcon from '@mui/icons-material/Logout';

const routes = [
  {
    key: '/home',
    name: "Home",
    route: "/home",
    icon: <HomeIcon />,
  },
  {
    key: '/perfil',
    name: "Perfil",
    route: "/perfil",
    icon: <Person4Icon />,
  },
  {
    key: '/logout',
    name: "Cerrar Sesión",
    route: "/",
    icon: <LogoutIcon />,
  },
];

export default routes;
