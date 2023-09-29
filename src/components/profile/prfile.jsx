import { Stats } from '../profile/stats';
import { CardUser } from './cardUser';
import css from './cardUser.module.css';

const Profile = ({ dataUser }) => {
  const { username, tag, location, avatar, stats } = dataUser;
  const { followers, views, likes } = stats;
  return (
    <div className={css.profile}>
      <CardUser
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};

export { Profile };
