import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate/BaseTemplate';
import Phone from '../../components/organizms/Phone';

const Main = () => {
  return (
    <BaseTemplate
      render={() => (
        <>
          <Phone />
        </>
      )}
    />
  );
};

export default Main;
