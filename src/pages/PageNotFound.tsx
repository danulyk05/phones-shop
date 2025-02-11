import React from 'react';
import Typed from 'react-typed';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pageEmpty">
      <Typed
        strings={['Page is not found']}
        typeSpeed={75}
        className="title"
        showCursor={false}
      />
    </div>
  );
};
