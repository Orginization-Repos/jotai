import {
  State,
} from './vanilla'

export function useAtomic(state: State, callback: { (state: State): { [k: string]: { value: unknown; dependents: string[]; }; }; (arg0: State): any; }) {
  
  console.log('state in useAtomic is -->', state);
  console.log(callback(state));

}