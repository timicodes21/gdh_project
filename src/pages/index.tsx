import { useEffect, useRef, MutableRefObject, useState } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import TextInput from '@/components/formFields/TextInput';
import Wrapper from '@/components/layout/Wrapper';
import { authStyles } from '@/components/styles/auth';
import { usePasswordShow } from '@/hooks/utility';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { usersHttpClient } from 'service/httpClients';
import { Loader } from '@/components/loader';

export default function Home() {
  const { passwordShow, showPassword } = usePasswordShow();
  const [passcode, setPasscode] = useState<string>(''); // passcode
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef?.current?.play();
    }, 1000);
  }, []);

  const handleLogin = async () => {
    const body = {
      passkey: Number(passcode),
    };
    if (!passcode) {
      toast.error('Please enter a passcode');
      return;
    } else if (passcode.length < 4) {
      toast.error('Passcode must be 4 digits');
      return;
    }
    setLoading(true); // set loading to true
    if (process.env.NEXT_PUBLIC_USERS_API_BASE_URL === passcode) {
      localStorage.setItem('access_token', 'granted');
      toast.success('Login Successful');
      router.push(`/home`);
      setLoading(false); // set loading to false
    } else {
      setLoading(false); // set loading to false
      toast.error('Invalid Passcode');
    }
  };

  return (
    <>
      {loading && <Loader />}
      <>
        <video loop id="myVideo" ref={videoRef}>
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
                      value={passcode}
                      onChange={(e) => {
                        setPasscode(e.target.value);
                      }}
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
                      type={passwordShow ? 'text' : 'password'}
                    />
                  </Box>
                  <Box sx={{ mt: 5 }}>
                    <BlueButton
                      width="100%"
                      onClick={() => handleLogin()}
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
    </>
  );
}
