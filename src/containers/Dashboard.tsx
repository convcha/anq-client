import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { withPage } from '../hocs/withPage';
import { AppState } from '../store';

export function mapStateToProps(appState: AppState) {
  return {
    name: appState.hello.languageName
  };
}

export function mapDispatchToProps() {
  return {};
}

export default withPage({title: 'ダッシュボード'})(connect(mapStateToProps, mapDispatchToProps)(Dashboard));