import { Profile } from './prfile';
import dataUser from '../path/to/user.json';
import { Statistics } from './Statistics';
import statistictUser from '../path/to/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../path/to/friends.json';
import { TransactionHistory } from './Transhistory/TransactionHistory';
import transactions from '../path/to/transactions.json';

const App = () => {
  return (
    <>
      <Profile dataUser={dataUser} />
      <Statistics title="Upload stats" stats={statistictUser} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export { App };
