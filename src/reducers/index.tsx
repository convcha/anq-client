import { changeName, decrementEnthusiasm, incrementEnthusiasm } from '../actions';
import { INITIAL_STATE, StoreState } from '../types';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export const enthusiasm = reducerWithInitialState(INITIAL_STATE)
    .case(incrementEnthusiasm, (state: StoreState) => ({
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
    }))
    .case(decrementEnthusiasm, (state: StoreState) => ({
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
    }))
    .case(changeName, (state, payload) => ({
        ...state,
        languageName: payload.name
    }));
