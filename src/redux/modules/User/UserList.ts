import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Action } from 'redux';

const actionCreator = actionCreatorFactory();

// Actions
export const userListActions = {
  getData: actionCreator.async<{ delay: number }, { data: string }, Error>('GET_DATA')
};

export class ActionDispatcher {
  constructor(private dispatch: (action: Action) => void) {
  }

  public async getData(delay: number): Promise<void> {
    this.dispatch(userListActions.getData.started({delay: delay}));

    try {
      const response: Response = await fetch(`https://httpbin.org/delay/${delay}`, {
        method: 'GET'
      });
      const json: string = JSON.stringify(await response.json(), null, ' ');

      this.dispatch(userListActions.getData.done({
        params: {delay: delay},
        result: {data: json}
      }));
    } catch (e) {
      this.dispatch(userListActions.getData.failed({params: {delay: delay}, error: {message: '', name: ''}}));
    }
  }
}

// State
export interface UserListState {
  delay: number;
  data: string;
  // users: User[];
  loadingCount: number;
}

const initialState: UserListState = {
  delay: 0,
  data: '',
  loadingCount: 0,
};

// Reducer
export const userListReducer = reducerWithInitialState(initialState)
  .case(userListActions.getData.started, state => ({
    ...state,
    data: '',
    loadingCount: +1,
  }))
  .case(userListActions.getData.done, (state, payload) => ({
    ...state,
    data: payload.result.data,
    loadingCount: -1
  }))
  .case(userListActions.getData.failed, state => ({
    ...state,
    loadingCount: -1
  }));