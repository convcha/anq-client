import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';
import { log } from 'util';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    log('container: mapStateToProps');
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    // noinspection JSUnusedGlobalSymbols
    log('container: mapDispatchToProps');
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
            dispatch(actions.changeName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);