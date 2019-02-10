import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BasketActions from '../../actions/basket';

import Basket from '../../components/Basket';
class BasketContainer extends PureComponent {
  render() {
    const { isAdded } = this.props;
    return <Basket isAdded={isAdded} />;
  }
}

BasketContainer.propTypes = {
  isAdded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAdded: state.get('basketReducer').get('isAdded')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BasketActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketContainer);
