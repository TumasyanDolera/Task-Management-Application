import { Routes} from 'react-router-dom';
import {authRoutes} from '../../routes';
import {unAuthRoutes} from '../../routes';
import { useAppSelector } from '../../hooks/redux';

function Navigation() {
   const token = useAppSelector((state) => state.userAuth.accessToken);
 
   return (
      <Routes>
      {token ? 
       authRoutes
      : 
       unAuthRoutes
      }
    </Routes>
    );
  }
 
 export default Navigation;
   
