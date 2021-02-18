import React, { ReactElement, ReactNode, useRef, useEffect } from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { Provider, atom, useAtom } from '../src/index'
import {
  AnyAtom,
  WithInitialValue,
  WritableAtom,
  AnyWritableAtom,
} from '../src/core/types'

// const { getByText } = render(
//   <Provider
//     initialValues={[
//       [countAtom, 4],
//       [petAtom, 'cat'],
//     ]}>
//     <Display />
//   </Provider>
// )

//TO LOOK INTO
/* atom: Atom<Value> | WritableAtom<Value, Update>
      31 | ) {
    > 32 |   const [ActionsContext, StateContext] = getContexts(atom.scope)
         |                                                           ^
      33 |   const actions = useContext(ActionsContext)
      34 |   assertContextValue(actions, atom.scope)
      */

it('uses initial values from provider', () => {
  const firstAtom = atom(1)
  const secondAtom = atom(2)
  const thirdAtom = atom(3)
  const fourthAtom = atom(4)
  const fifthAtom = atom(fourthAtom)

  console.log('firstAtom --> ', firstAtom)

  const Child: React.FC = () => {
    const useAtomic = (atom: AnyWritableAtom) => {
      console.log('atom in useAtomic --> ', atom)
      console.log(Object.keys(atom))

      const atomName = Object.keys(atom)[0]

      const atomToUse = atom[atomName]

      console.log('atomToUse ---> ', atomToUse)

      return useAtom(atomToUse)
    }

    const [test1] = useAtom(firstAtom)
    const [test2] = useAtom(secondAtom)
    const [test3] = useAtom(thirdAtom)
    const [test4] = useAtom(fourthAtom)
    const [test5depOn4] = useAtom(fifthAtom)
    const [testUseAtomic] = useAtomic({ fifthAtom })

    // console.log({ test4 })

    // console.log('child:test1 --> ', test1)
    // console.log('child:test2 --> ', test2)
    // console.log('child:test3 --> ', test3)
    // console.log('child:test4 --> ', test4)
    // console.log('child:test4 --> ', test5depOn4)

    // React.getSnapshotBeforeUpdate()
    // let fragmentRef = useRef()
    // useEffect(() => {
    //   let domNodes = fragmentRef.current
    //   console.log('domNodes ==> ', domNodes)
    // })

    return (
      <>
        <p>test1: 1</p>
        <p>test2: 2</p>
      </>
    )
  }

  const Parent: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const [test1] = useAtom(firstAtom)
    // const [test2] = useAtom(secondAtom)
    // const [test3] = useAtom(thirdAtom)
    // const [test4] = useAtom(fourthAtom)

    return <>{children}</>
  }

  // console.log(
  //   <Provider>
  //     <Parent>
  //       <Child />
  //       <Child />
  //     </Parent>
  //   </Provider>
  // )

  // console.log(
  //   (
  //     <Provider>
  //       <Parent>
  //         <Child />
  //       </Parent>
  //     </Provider>
  //   ).type.toString()
  // )

  const { rerender } = render(
    <Provider>
      <Parent>
        <Child />
      </Parent>
    </Provider>
  )

  rerender(
    <Provider>
      <Parent>
        <Child />
      </Parent>
    </Provider>
  )

  screen.getByText('test1: 1')
  screen.getByText('test2: 2')
  // })
})
