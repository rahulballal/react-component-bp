import React from 'react'
import {shallow} from 'enzyme'
import Hello from './hello'

describe('Hello Component', () => {
  it('Should load', () => {
    const component = shallow(<Hello />)
    expect(component).toBeTruthy()
  })
})
