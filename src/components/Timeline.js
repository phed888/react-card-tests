import React, { Component } from 'react'
import styled from 'styled-components'
import Event from './Event'

const TimelineContainer = styled.section`
  display: flex;
  flex-direction: row;
  &.verticalList {
    flex-direction: column;
    .tag-content {
      display: block;
    }
  }
`

export default class Timeline extends Component {
  constructor(props) {
    super(props)

    this.state= {
      isHorizontal: true
    }
  }

  render() {

    const changeOrientation = () => {
      console.log('clicked');
      this.setState(
        prevState => ({
          isHorizontal: !prevState.isHorizontal
        })
      );
    }

    return (
      <TimelineContainer className={this.state.isHorizontal ? '' : 'verticalList'}>
        <Event title="Home" onClick={changeOrientation}/>
        <Event title="About" onClick={changeOrientation}/>
        <Event title="Contact" onClick={changeOrientation}/>
      </TimelineContainer>
    )
  }
}
