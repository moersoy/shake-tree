/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ApplesActions from '../../actions/apples';

import Apple from '../../components/Apple';

class ApplesContainer extends PureComponent {
  componentDidMount() {
    this.props.actions.loadApples();
  }

  render() {
    const { apples, isDropped, isShaked } = this.props;
    return (
      <g
        id="apples"
        className={
          isShaked ? `shake-apples ${isDropped ? 'apple-out' : ''} ` : ''
        }
        transform="translate(200.000000, 174.000000)"
      >
        {apples.map((apple, index) => (
          <Apple
            key={index}
            index={index}
            x={apple.x}
            y={isDropped ? apple.y2 : apple.y1}
          />
        ))}
      </g>
    );
  }
}

ApplesContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  apples: PropTypes.array.isRequired,
  isDropped: PropTypes.bool.isRequired,
  isShaked: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    apples: state
      .get('applesReducer')
      .get('apples')
      .toArray(),
    isDropped: state.get('applesReducer').get('isDropped'),
    isShaked: state.get('applesReducer').get('isShaked')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ApplesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplesContainer);
