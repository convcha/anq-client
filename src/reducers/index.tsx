import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_NAME } from '../constants';
import { log } from 'util';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    log('reducer: enthusiasm');
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        case CHANGE_NAME:
            return { ...state, languageName: action.payload.name};
        default:
            return state;
    }
}