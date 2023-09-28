import { Profile } from './prfile';
import dataUser from '../data/user.json'

const App = () => {

  return (
    <Profile dataUser={ dataUser } />
    
  );
};

export {App} 