import React, { Component, PropTypes } from 'react'
import Radium from 'radium';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GeneratorActions from '../actions/GeneratorActions'
import Colors from '../constants/styles/colors'
import Sizes from '../constants/styles/sizes'
import HeaderContainer from './Header'
import TabBarContainer from './TabBar'
import SidebarContainer from './Sidebar'

let App = class App extends Component {
  render() {
    const { generators, actions, children } = this.props
    return (
      <div style={Styles.container}>
        <HeaderContainer
          params={this.props.params}
        />
        <div style={Styles.body}>
          <SidebarContainer />
          <div style={Styles.childrenContainer}>
              {children}
          </div>
        </div>
        <TabBarContainer />
      </div>
    )
  }
}

const Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexWrap: 'wrap',
    height: '100%',
    position: 'absolute',
  },
  body: {
    position: 'relative',
    top: Sizes.headerHeight - 1,
    marginBottom: Sizes.tabBarHeight,
    flexGrow: 1,
    background: Colors.blue.primary,
  },
  childrenContainer: {
    position: 'absolute',
    left: `${Sizes.sidebar}%`,
    width: `${100 - Sizes.sidebar}%`,
    height: '100%',
    overflowY: 'scroll',
    '@media (max-device-width: 992px)': {
      left: 0,
      width: '100%',
    },
  },
}

export default Radium(App)
