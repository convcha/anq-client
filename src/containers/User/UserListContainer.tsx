import { connect, Dispatch } from 'react-redux';
import { AppState } from '../../store';
import { ActionDispatcher } from '../../redux/modules/User/UserList';
import { UserList } from '../../components/User/List';
import { log } from 'util';

export function mapStateToProps(appState: AppState) {
  log(`appState.userList.data: ${appState.userList.data}`);
  return {
    data: appState.userList.data
  };
}

export function mapDispatchToProps(dispatch: Dispatch<void>) {
  const actionDispatcher = new ActionDispatcher(dispatch);
  // noinspection JSUnusedGlobalSymbols
  return {
    getData: async (delay: number) => {
      await actionDispatcher.getData(delay);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);