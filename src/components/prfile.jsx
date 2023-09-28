import { Stats } from './stats';
import { CardUser } from './CardUser/cardUser';

const Profile = ({ dataUser }) => {
  const { username, tag, location, avatar, stats } = dataUser;
  const { followers, views, likes } = stats;
  return (
    <div className="profile">
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
