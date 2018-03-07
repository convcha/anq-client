import { connect, Dispatch } from 'react-redux';
import { AppState } from '../../store';
import { UserListActionDispatcher } from '../../redux/modules/User/UserList';
import { UserList } from '../../components/User/List';

export function mapStateToProps(appState: AppState) {
  return {
    delay: appState.userList.delay,
    data: appState.userList.data
  };
}

export function mapDispatchToProps(dispatch: Dispatch<void>) {
  return {actions: new UserListActionDispatcher(dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);