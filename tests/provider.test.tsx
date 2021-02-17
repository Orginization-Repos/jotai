import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import { Provider, atom, useAtom } from '../src/index'

it('uses initial values from provider', () => {
  const countAtom = atom(1)
  const petAtom = atom('cat')

  const Display: React.FC = () => {
    const [count] = useAtom(countAtom)
    const [pet] = useAtom(petAtom)

    return (
      <>
        <p>count: {count}</p>
        <p>pet: {pet}</p>
      </>
    )
  }

  // const { getByText } = render(
  //   <Provider
  //     initialValues={[
  //       [countAtom, 4],
  //       [petAtom, 'cat'],
  //     ]}>
  //     <Display />
  //   </Provider>
  // )

  const { rerender } = render(
    <Provider
      initialValues={[
        [countAtom, 4],
        [petAtom, 'cat'],
      ]}>
      <Display />
    </Provider>
  )

  rerender(
    <Provider>
      <Display />
    </Provider>
  )

  // await waitFor(() => {
  // getByText('count: 4')
  // getByText('pet: cat')
  // console.dir(screen.getByText)
  screen.getByText('count: 4')
  screen.getByText('pet: cat')
  // })
})

xit('only uses initial value from provider for specific atom', async () => {
  const countAtom = atom(1)
  const petAtom = atom('cat')

  const Display: React.FC = () => {
    const [count] = useAtom(countAtom)
    const [pet] = useAtom(petAtom)

    return (
      <>
        <p>count: {count}</p>
        <p>pet: {pet}</p>
      </>
    )
  }

  const { getByText } = render(
    <Provider initialValues={[[petAtom, 'dog']]}> //can we get state from this providor component
      <useAtomic> //can we listen for useAtom() calls ==> if we can, can we get info? //what info does the fiber tree store// custom hook for 
        <App> //test = atom(0)
          <Child /> // useAtom(test) //atom1 //'Child' atom1:child //
        </App>
      </useAtomic>
    </Provider>
  )
  atom1: { value: 4, dependents: [atom2,atom3] },
  const x = {a:a} : refID = 325erd53g => [x, y, z]
  const y = x
  const z = x


  const name = atom('logan');

  const useName = useAtom(name)

  {
    Node: [x,]
    State: [ljfalkjsflak]
    parents: [a]
    Children: [{Node: a, state, parents, childrem}, {Node: a, state, parents, childrem}, {Node: a, state, parents, childrem}]
  }


  

  function useAtom(atom) {
    console.log({atom}) ==> {atom: 4627d728} ==> [atom, useName]

    return a + 2
  }

  test(x) ==> test(0) a = 'x' = 0 // is there a way to access the variable name of a reference id?



  await waitFor(() => {
    getByText('count: 1')
    getByText('pet: dog')
  })
})

xit('renders correctly without children', () => {
  render(<Provider />)
})
