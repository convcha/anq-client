import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// Actions
const actionCreator = actionCreatorFactory();

export const actions = {
    incrementEnthusiasm: actionCreator('INCREMENT_ENTHUSIASM'),
    decrementEnthusiasm: actionCreator('DECREMENT_ENTHUSIASM'),
    changeName: actionCreator<{ name: string }>('CHANGE_NAME'),
};

// State
export interface HelloState {
    languageName: string;
    enthusiasmLevel: number;
}

const initialState: HelloState = {
    enthusiasmLevel: 1,
    languageName: 'TS',
};

// Reducer
const reducer = reducerWithInitialState(initialState)
    .case(actions.incrementEnthusiasm, (state: HelloState) => ({
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
    }))
    .case(actions.decrementEnthusiasm, (state: HelloState) => ({
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
    }))
    .case(actions.changeName, (state, payload) => ({
        ...state,
        languageName: payload.name
    }));
export default reducer;