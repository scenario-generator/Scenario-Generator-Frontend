import React, { Component } from 'react'
import Radium from 'radium'
import _ from 'lodash'
import DocumentTitle from 'react-document-title'
import Strings from '../../constants/strings'
import Colors from '../../constants/styles/colors'
import Backgrounds from '../../constants/images/backgrounds'
import Styles from './styles'
import FadedBackground from '../FadedBackground'

export default Radium(class Scenario extends Component {
  componentDidMount() {
    this.fetchNewScenario()
  }

  componentWillReceiveProps(newProps) {
    if(this.props.params.id !== newProps.params.id) {
      this.fetchNewScenario(newProps.params.id)
    }
  }

  fetchNewScenario(id = false) {
    id = id ? id : this.props.params.id
    this.props.actions.fetchScenario(id)
  }

  documentTitle() {
    if(this.props.generator) {
      let type = this.props.generator.name || 'Scenario'
      return `${type} generator for ${this.props.generator.subject.name}`
    }
    return Strings.rootPageTitle
  }

  renderColumn(column) {
    return (
      <div key={`${column.id}-${column.name}`}>
        <span>{column.name}: </span>
        {_.map(column.options, (option) => <span key={`${option.id}-${option.text}`}>{option.text}</span>)}
      </div>
    )
  }

  gatherColumns(columns) {
    let columnArray = [];
    _.each(columns, function(column){
      columnArray = columnArray.concat(column)
      columnArray = columnArray.concat(this.gatherColumns(column.columns))
    }.bind(this))
    return columnArray
  }

  renderScenario() {
    let columns = this.gatherColumns(this.props.scenario.columns)
    return _.map(columns, this.renderColumn)
  }

  renderRerollButton() {
    return (
      <div
        onClick={() => this.fetchNewScenario()}
        style={Styles.rerollButton}>
        Reroll!
      </div>
    )
  }

  render() {
    let subjectName, image;
    if(this.props.generator) {
      subjectName = this.props.generator.subject.name
      image = Backgrounds[subjectName];
    }

    return (
      <DocumentTitle title={this.documentTitle()}>
        <FadedBackground image={image}>
          {this.renderRerollButton()}
          {this.renderScenario()}
        </FadedBackground>
      </DocumentTitle>
    );
  }
})
