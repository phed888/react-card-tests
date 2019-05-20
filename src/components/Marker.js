import React, { Component } from 'react'
import styled from 'styled-components'

const MarkerBox = styled.div`
    width: 50px;
    height: 30px;
    border: 1px solid transparent;
    border-left-color: #666666;
    border-right-color: #666666;
    border-top-color: #666666;
`

export default class Marker extends Component {
  render() {
    return (
      <MarkerBox>
        
      </MarkerBox>
    )
  }
}
