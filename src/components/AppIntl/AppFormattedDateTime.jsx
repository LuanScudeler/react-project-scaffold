import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';
import PropTypes from 'prop-types';

function FormattedDateTime(props) {
  const { display, ...rest } = props;
  switch (display) {
    case 'date':
      return <FormattedDate {...rest} />;
    case 'time':
      return <FormattedTime {...rest} />;
    default:
      throw new Error('Invalid [display] arg');
  }
}

export function AppFormattedDateTime(props) {
  const { component, ...rest } = props;

  switch (component) {
    case 'div':
      return (
        <div {...rest}>
          <FormattedDateTime {...rest} />
        </div>
      );
    case 'span':
      return (
        <span {...rest}>
          <FormattedDateTime {...rest} />
        </span>
      );
    default:
      throw new Error('Invalid [component] arg');
  }
}

AppFormattedDateTime.propTypes = {
  component: PropTypes.oneOf(['div', 'span']).isRequired,
  display: PropTypes.oneOf(['date', 'time']).isRequired,
};
