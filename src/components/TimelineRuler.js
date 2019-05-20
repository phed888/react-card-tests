import React, { Component } from 'react'
import styled from 'styled-components'

const Ruler = styled.div`
    width: 100%;
    display: flex;
    .tenTick {
        height: 30px;
        width: 16.667%
        border-left: 1px solid #cccccc;
        display: flex;
        &:last-child {
            border-right: 1px solid #cccccc;
        }
    }
    .fiveTick {
        height: 20px;
        width: 50%;
        border-right: 1px solid #cccccc;
        display: flex;
        &:last-child {
            border-right: none;
        }
    }
    .oneTick {
        height: 10px;
        width: 20%
        border-right: 1px solid #cccccc;
        &:last-child {
            border-right: none;
        }
    }
`

export default class TimelineRuler extends Component {

    createTicks = () => {
        let outerTicks = []
        for(let i = 0; i < 14; i++) {
            let innerTicks = [];
            for(let j = 0; j < 5; j++ ) {
                innerTicks.push(<div className="innerTick"></div>)
            }
            outerTicks.push(<div className="outerTick">{innerTicks}</div>)
        }
        return outerTicks
    }

    createTicks2 = () => {
        let tenTicks = []
        for(let i = 0; i < 7; i++) {
            let fiveTicks = []
            for(let k = 0; k < 2; k++) {
                let oneTicks = []
                for(let l = 0; l < 5; l++) {
                    oneTicks.push(<div className="oneTick"></div>)
                }
                fiveTicks.push(<div className="fiveTick">{oneTicks}</div>)
            }
            tenTicks.push(<div className="tenTick">{fiveTicks}</div>)
        }
        return tenTicks
    }
    render() {
        return (
        <Ruler>
            {this.createTicks2()}
        </Ruler>
        )
    }
}
