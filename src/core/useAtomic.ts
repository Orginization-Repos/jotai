import { State } from './vanilla'

export function useAtomic(
  state: State,
  callback: {
    (state: State): { [k: string]: { value: unknown; dependents: string[] } }
    (arg0: State): any
  }
) {
  console.log('state in useAtomic is -->', state)
  console.log('a in state -->', state.a.get())
  console.log('m in state -->', state.m)
  console.log('w in state -->', state.w)

  console.log(callback(state))
}
