import * as constants from '../constants';
import { log } from 'util';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface ChangeName {
    type: constants.CHANGE_NAME;
    payload: {
      name: string
    };
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ChangeName;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    log('actionCreator: incrementEnthusiasm');
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    log('actionCreator: decrementEnthusiasm');
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function changeName(name: string): ChangeName {
    log('actionCreator: changeName');
    return {
        type: constants.CHANGE_NAME,
        payload: {
            name: name
        }
    };
}