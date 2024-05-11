import React from 'react';

interface ErrorMessageProps {
  message: string;
  code: number;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, code }) => {
  return (
    <div>
      <p>Error {code}: {message}</p>
    </div>
  );
};

export default ErrorMessage;
