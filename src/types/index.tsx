export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
}

export const INITIAL_STATE: StoreState = {
    enthusiasmLevel: 1,
    languageName: 'TS',
};