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
    <Provider initialValues={[[petAtom, 'dog']]}>
      <Display />
    </Provider>
  )

  await waitFor(() => {
    getByText('count: 1')
    getByText('pet: dog')
  })
})

xit('renders correctly without children', () => {
  render(<Provider />)
})
