import React, { Children } from 'react'
import Alert from 'react-bootstrap/Alert';

const Message = ({variant}) => {
  return (
    <Alert  variant={variant}>
      </Alert>
  );
}

export default Message