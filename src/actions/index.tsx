import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const incrementEnthusiasm = actionCreator('INCREMENT_ENTHUSIASM');
export const decrementEnthusiasm = actionCreator('DECREMENT_ENTHUSIASM');
export const changeName = actionCreator<{ name: string }>('CHANGE_NAME');