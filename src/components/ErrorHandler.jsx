import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };

    this.styles = {
      error: {
        color: props.theme.palette.error.dark,
      },
      errorDiv: {
        padding: '45px',
      },
      details: {
        whiteSpace: 'pre-wrap',
      },
    };
  }

  componentDidCatch(cmpError, cmpErrorInfo) {
    this.setState({ error: cmpError });
    this.setState({ errorInfo: cmpErrorInfo });
  }

  render() {
    let errorMsg = null;
    const { error, errorDiv, details } = this.styles;

    if (this.state.errorInfo) {
      errorMsg = (
        <div style={errorDiv}>
          <h2 style={error}>Sorry, something went wrong :(</h2>
          <h4 style={error}>
            Please <a href=".">try again</a> or contact support.
          </h4>
          <details style={details}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return (this.state.errorInfo && errorMsg) || this.props.children;
  }
}

export default withTheme(ErrorHandler);
