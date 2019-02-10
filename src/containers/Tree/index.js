import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TreeActions from '../../actions/tree';

import Tree from '../../components/Tree';

class TreeContainer extends PureComponent {
  render() {
    const { isShaked } = this.props;
    return <Tree isShaked={isShaked} />;
  }
}

TreeContainer.propTypes = {
  isShaked: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isShaked: state.get('treeReducer').get('isShaked')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TreeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeContainer);
