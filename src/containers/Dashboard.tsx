import { connect } from 'react-redux';
import { AppState } from '../store';
import Dashboard from '../components/Dashboard';

export function mapStateToProps(appState: AppState) {
  return {
    name: appState.hello.languageName
  };
}

export function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);