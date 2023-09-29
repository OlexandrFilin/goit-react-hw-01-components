import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        const colorState = {
          backgroundColor: 'red',
        };
        if (isOnline) {
          colorState.backgroundColor = '#23be0f';
        }
        return (
          <li key={id} className={css.item}>
            <span className={css.status} style={colorState}></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
