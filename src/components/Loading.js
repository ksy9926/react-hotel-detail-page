import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const Loading = () => {
  const loading = useSelector((state) => state.loading, shallowEqual);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
