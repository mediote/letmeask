import { Route, Switch } from 'react-router-dom';
import NewRoom from '../pages/NewRoom';


const AppRoutes: React.FC = () => (
  <Switch>    
    <Route path="/rooms/new" component={NewRoom}  />
  </Switch>
)

export default AppRoutes;