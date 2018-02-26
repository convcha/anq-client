import Hello from '../components/Hello';
import { connect, Dispatch } from 'react-redux';
import { log } from 'util';
import { AppState } from '../store';
import { actions } from '../redux/modules/hello';

export function mapStateToProps(appState: AppState) {
    log('container: mapStateToProps');
    return {
        enthusiasmLevel: appState.hello.enthusiasmLevel,
        name: appState.hello.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<void>) {
    log('container: mapDispatchToProps');
    // noinspection JSUnusedGlobalSymbols
    return {
        onIncrement: () => {
            log('container: dispatch(actions.incrementEnthusiasm())');
            dispatch(actions.incrementEnthusiasm());
        },
        onDecrement: () => {
            log('container: dispatch(actions.decrementEnthusiasm())');
            dispatch(actions.decrementEnthusiasm());
        },
        onChangeName: (name: string) => {
            log('container: dispatch(actions.changeName(name))');
            dispatch(actions.changeName({name}));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);