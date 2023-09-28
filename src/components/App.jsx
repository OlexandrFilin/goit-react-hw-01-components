import { Profile } from './prfile';
import dataUser from '../path/to/user.json'
import { Statistics } from './Statistics';
import statistictUser from "../path/to/data.json"

const App = () => {

  return (
    <>
    <Profile dataUser={ dataUser } />
    <Statistics title= "Upload stats" stats ={ statistictUser}  />
    </>
  );
};

export {App} 