import { Toaster } from 'react-hot-toast';

import React from 'react';

const Toast = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          borderRadius: '10px',
          paddingInline: '1rem',
        },
        success: {
          style: {
            background: '#0BCE5A',
            color: '#fff',
          },
        },
        error: {
          style: {
            background: '#FF1B03',
            color: '#fff',
          },
        },
      }}
    />
  );
};

export default Toaster;
