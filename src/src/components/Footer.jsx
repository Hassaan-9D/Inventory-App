import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       PURCHASE APP
      </div>
    </MDBFooter>
  );
}