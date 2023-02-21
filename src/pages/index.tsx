import { useEffect, useRef } from "react";
import BlueButton from "@/components/buttons/BlueButton";
import TextInput from "@/components/formFields/TextInput";
import Wrapper from "@/components/layout/Wrapper";
import { authStyles } from "@/components/styles/auth";
import { usePasswordShow } from "@/hooks/utility";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Home() {
  const { passwordShow, showPassword } = usePasswordShow();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    setTimeout(() => {
      const node = videoRef.current;
      node?.play();
    }, 5000);
  }, []);

  return (
    <>
      <video muted loop id="myVideo" ref={videoRef}>
        <source src="/assets/videos/background.mp4" type="video/mp4"></source>
      </video>
      <Box sx={authStyles.container}>
        <Wrapper>
          <Grid container>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <Box sx={authStyles.passcodeContainer}>
                <Box className="text-center">
                  <Image
                    src="/assets/icons/medium_logo.svg"
                    width={124}
                    height={97}
                    alt="logo"
                  />
                </Box>
                <Box sx={{ mt: 5 }}>
                  <p className="font-24 font-400 text-center avenuex text-secondary-2">
                    Enter passkey to continue to project page
                  </p>
                </Box>
                <Box sx={{ mt: 5 }}>
                  <TextInput
                    label="Passkey"
                    icon={
                      passwordShow ? (
                        <AiOutlineEye
                          onClick={showPassword}
                          className="pointer font-20"
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={showPassword}
                          className="pointer font-20"
                        />
                      )
                    }
                    type={passwordShow ? "text" : "password"}
                  />
                </Box>
                <Box sx={{ mt: 5 }}>
                  <BlueButton
                    width="100%"
                    onClick={() => router.push("/home")}
                    arrow
                    size="large"
                  >
                    Enter
                  </BlueButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Wrapper>
      </Box>
    </>
  );
}
