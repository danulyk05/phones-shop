import React from 'react';
import Typed from 'react-typed';

type Props = {
  title: string
};

export const ProductNotFoundPage: React.FC<Props> = ({ title }) => {
  return (
    <div className="pageEmpty">
      <Typed
        strings={[title]}
        typeSpeed={75}
        showCursor={false}
      />
    </div>
  );
};
