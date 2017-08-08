import React from 'react';
import { connect } from 'dva';
import { CircularProgress } from 'material-ui/Progress';
import Layout from '../components/MainLayout/Layout';
import UsersList from '../components/Users/UsersList';

function Users({ location, users }) {
  const usersListProps = {
    usersList: users.usersList,
  };
  return (
    <Layout {...location}>
      <div className="normal">
        <ul>
          <UsersList {...usersListProps} />
        </ul>
      </div>
      { users.showProgress ? <CircularProgress className="my-progress" /> : ''}
    </Layout>
  );
}

function mapStateToProps(state) {
  const users = { ...state.users };
  return { users };
}

export default connect(mapStateToProps)(Users);