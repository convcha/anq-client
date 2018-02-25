import { changeName, decrementEnthusiasm, incrementEnthusiasm } from '../actions';
import { StoreState } from '../types';
import { log } from 'util';
import { Action } from 'redux';
import { isType } from 'typescript-fsa';

export function enthusiasm(state: StoreState, action: Action): StoreState {
    log('reducer: enthusiasm');
    
    if (isType(action, incrementEnthusiasm)) {
        log('reducer: enthusiasm if (isType(action, incrementEnthusiasm)){');
        return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    }

    if (isType(action, decrementEnthusiasm)) {
        log('reducer: enthusiasm if (isType(action, decrementEnthusiasm)){');
        return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }

    if (isType(action, changeName)) {
        log('reducer: enthusiasm if (isType(action, changeName)){');
        return { ...state, languageName: action.payload.name};
    }

    return state;
}