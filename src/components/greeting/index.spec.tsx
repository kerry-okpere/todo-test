import { Greeting } from './index'
import { render } from '@testing-library/react'
import { expect } from '@jest/globals'
import wrapWithTheme from '@test-utils/wrapWithTest'

describe('Greeting', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('Should render the correct text then passed the time of day', () => {
    jest.useFakeTimers().setSystemTime(new Date('August 19, 1975 08:15:30'))

    const { getByTestId } = render(wrapWithTheme(<Greeting />))
    const element = getByTestId('greeting-text')
    expect(element.innerHTML).toBe('⛅ Good morning!')
  })

  it('Should render the correct text then passed the time of day', () => {
    jest.useFakeTimers().setSystemTime(new Date('August 19, 1975 14:15:30'))

    const { getByTestId } = render(wrapWithTheme(<Greeting />))
    const element = getByTestId('greeting-text')
    expect(element.innerHTML).toBe('☀️ Good afternoon!')
  })

  it('Should render the correct text then passed the time of day', () => {
    jest.useFakeTimers().setSystemTime(new Date('August 19, 1975 23:15:30'))

    const { getByTestId } = render(wrapWithTheme(<Greeting />))
    const element = getByTestId('greeting-text')
    expect(element.innerHTML).toBe('🌒 Good evening!')
  })
})
