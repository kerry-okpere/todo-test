import { Checkbox } from './index'
import { render, fireEvent } from '@testing-library/react'
import { expect } from '@jest/globals'
import wrapWithTheme from '@test-utils/wrapWithTest'

describe('Checkbox', () => {
  it('Checked should be "true"', () => {
    const { getByTestId } = render(
      wrapWithTheme(<Checkbox defaultChecked={true} />)
    )
    const checkbox = getByTestId('checkbox') as HTMLInputElement
    expect(checkbox.checked).toEqual(true)
  })
  it('Should change value "true" to "false"', () => {
    const { getByTestId } = render(
      wrapWithTheme(<Checkbox defaultChecked={true} />)
    )

    const checkbox = getByTestId('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
  })
  it('Should call onChange function', () => {
    const onChange = jest.fn()
    const { getByTestId } = render(
      wrapWithTheme(<Checkbox defaultChecked={true} onChange={onChange} />)
    )

    const checkbox = getByTestId('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })
})
