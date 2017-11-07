/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { doSomething } from './actions';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
	constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}


HomePage.propTypes = {
  bla: PropTypes.string,
};


function mapStateToProps(state) {
  return {
    bla: state.get('userInput').get('bla'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doSomething: (bla) => {
      dispatch(doSomething(bla));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
