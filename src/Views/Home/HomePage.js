import React from 'react';
import Body from '../../Body/Body';
import Request from '../../Request/Request';
import Sidebar from '../../Sidebar/Sidebar';

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Body>
        <Request />
      </Body>
    </>
  );
};

export default HomePage;
