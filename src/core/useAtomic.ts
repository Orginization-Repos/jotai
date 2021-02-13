import { State } from './vanilla'

export function useAtomic(
  state: State,
  callback: {
    (state: State): { [k: string]: { value: unknown; dependents: string[] } }
    (arg0: State): any
  },
  initialValues: any
) {
  // console.log('JSON.stringify(state)  -->', JSON.stringify(state))
  // console.log('a in state -->', JSON.stringify(state.a.get(initialValues[0])))
  // console.log('m in state -->', state.m)
  // console.log('w in state -->', state.w)
  console.log('initialValues -->', initialValues)

  console.log('calling CB stateToPrintable--> ', callback(state))
}
