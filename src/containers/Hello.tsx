import Hello from '../components/Hello';
import { connect, Dispatch } from 'react-redux';
import { AppState } from '../store';
import { actions } from '../redux/modules/hello';

export function mapStateToProps(appState: AppState) {
    return {
        enthusiasmLevel: appState.hello.enthusiasmLevel,
        name: appState.hello.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<void>) {
    // noinspection JSUnusedGlobalSymbols
    return {
        onIncrement: () => {
            dispatch(actions.incrementEnthusiasm());
        },
        onDecrement: () => {
            dispatch(actions.decrementEnthusiasm());
        },
        onChangeName: (name: string) => {
            dispatch(actions.changeName({name}));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);