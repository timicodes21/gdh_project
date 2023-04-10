import { Container } from '@mui/material';
import { NextPage } from 'next';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  noPadding?: boolean;
}

const Wrapper: NextPage<IProps> = ({ children, noPadding }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ px: noPadding ? 0 : { xs: 1, md: 0 } }}>
        {children}
      </Container>
    </>
  );
};

export default Wrapper;
