import { Container } from './Container';

import { Profile } from './Profile';
import user from '../const/user';

import { Statistics } from './Statistics';
import data from '../const/data';

import { FriendList } from './FriendList';
import friends from '../const/friends';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </Container>
  );
};
