import React, { Component } from 'react'
import styled from 'styled-components'
import TimeBlock from './TimeBlock'

const TimelineContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 100px;
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
    const myWidth = 100/70
    return (
      
      <TimelineContainer className={this.state.isHorizontal ? '' : 'verticalList'}>
        <TimeBlock title="A" width={myWidth * 5} mbot="15" />
        <TimeBlock title="B" width={myWidth * 3} mtop="15" />
        <TimeBlock title="C" width={myWidth * 3} mbot="15" />
        <TimeBlock title="D" width={myWidth * 3} mtop="15" />
        <TimeBlock title="E" width={myWidth * .5} mbot="15" />
        <TimeBlock title="F" width={myWidth * 7.5} mtop="15" />
        <TimeBlock title="G" width={myWidth * 1} mbot="15" />
        <TimeBlock title="H" width={myWidth * 1} mtop="15" />
        <TimeBlock title="J" width={myWidth * 7} mbot="15" />
        <TimeBlock title="K" width={myWidth * 12} mtop="15" />
        <TimeBlock title="L" width={myWidth * 21} mbot="15" />


      </TimelineContainer>
    )
  }
}
