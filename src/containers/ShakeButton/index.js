import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { dropApples, loadApples, shakeApples } from '../../actions/apples';
import { addBasket } from '../../actions/basket';
import { shakeTree } from '../../actions/tree';
import { DURATION_TREE_SHAKE, DURATION_ADD_BASKET } from '../../config';

class ShareButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    if (this.state.clicked) return;

    const { actions } = this.props;
    this.setState({ clicked: true });
    actions.shakeTree();
    actions.shakeApples();
    setTimeout(() => actions.dropApples(), DURATION_TREE_SHAKE);
    setTimeout(() => actions.addBasket(), DURATION_ADD_BASKET);
  };

  render() {
    const { clicked } = this.state;
    return <Button clickShake={this.handleClick} clicked={clicked} />;
  }
}

ShareButtonContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { dropApples, loadApples, shakeApples, addBasket, shakeTree },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareButtonContainer);
