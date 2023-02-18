import React from "react";
import { Box } from "@mui/material";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { navbarItems } from "@/data/navbar";
import Link from "next/link";
import TransparentButton from "../buttons/TransparentButton";
import BlueButton from "../buttons/BlueButton";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        background: "#FFFEF9",
        boxShadow: "0px 4px 38px rgba(0, 0, 0, 0.05)",
        py: { xs: 1, md: 1 },
      }}
    >
      <Wrapper>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/assets/icons/small_logo.svg"
              width={62}
              height={49}
              alt="logo"
              onClick={() => router.push("/home")}
              className="pointer"
            />
            <Box sx={{ dispay: "flex", alignItems: "center" }} className="flex">
              {navbarItems.map((item, index) => (
                <Box key={index} sx={{ ml: 2 }}>
                  <Link
                    href={item.link}
                    className="avenuex font-16 font-400 text-secondary-2"
                  >
                    {item.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TransparentButton onClick={() => {}} dropdown>
              English
            </TransparentButton>
            <Box sx={{ mx: 1 }}></Box>
            <BlueButton width="100%" onClick={() => {}} arrow size="large">
              Make a donation
            </BlueButton>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Navbar;
