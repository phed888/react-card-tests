import React, { Component } from 'react'
import styled from 'styled-components'

const EventContainer = styled.div`
    .tag {
        padding: 8px 16px;
        background-color: #666666;
        color: #ffffff;
        border-radius: 4px;
        font-size: 1.4rem;
        margin: 0 20px 20px 0;
        cursor: pointer;
        &:hover {
            background-color: #999999;
        }
    }
    .tag-content {
        display: none;
    }
`

export default class Event extends Component {
  render(props) {
    return (
      <EventContainer onClick={this.props.onClick}>
        <div className="tag">
            {this.props.title}
        </div>
        <div className='tag-content'>
            Lorem ipsum dolor sit amet 
        </div>
      </EventContainer>
    )
  }
}
