import React from 'react'
import renderer from 'react-test-renderer'
import Hello from './hello'

describe('Hello Component', () => {
  it('Should load', () => {
    const component = renderer.create(<Hello />)

    const rendererTree = component.toJSON()

    expect(rendererTree).toBeTruthy()
  })
})
