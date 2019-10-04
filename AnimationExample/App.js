import React, { Component } from 'react'

import Timing from './components/Timing'
import TranslatePosition from './components/TranslatePosition'
import Scale from './components/Scale'
import MultiField from './components/MultiField'
import AbsolutePosition from './components/AbsolutePosition'
import Interpolation from './components/Interpolation'
import InterpolationRotate from './components/InterpolationRotate'
import EasingExample from './components/EasingExample'
import Spring from './components/Spring'
import Parallel from './components/Parallel'
import Squence from './components/Squence'
import Stagger from './components/Stagger'
import Delay from './components/Delay'
import Loop from './components/Loop'
import LoopSpin from './components/LoopSpin'

export default class App extends Component {
  render() {
    return (
      <LoopSpin />
    )
  }
}
