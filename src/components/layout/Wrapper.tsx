import { Container } from "@mui/material";
import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Wrapper: NextPage<IProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 5, lg: 10 } }}>
        {children}
      </Container>
    </>
  );
};

export default Wrapper;
