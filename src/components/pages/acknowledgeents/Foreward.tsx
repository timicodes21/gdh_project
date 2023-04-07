import React, { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import classes from '../../../styles/Home.module.css';
import ReadMore from '@/components/buttons/ReadMore';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import ReactAudioPlayer from 'react-audio-player';
import { usePlayRecording } from '@/hooks/usePlayAudio';
import { tempoaryTempleText } from '@/data/texts';

const Foreward = () => {
  const { open, openModal, closeModal } = useModal();

  const { playRecording, pauseRecording, isPlaying, setIsPlaying } =
    usePlayRecording();

  const audioRef = useRef<HTMLAudioElement>(null);

  function handleButtonClick() {
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current?.audioEl.current.play();
    }
  }

  function handlePauseButtonClick() {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current?.audioEl.current.pause();
    }
  }

  return (
    <Box sx={{ py: 5 }}>
      <ReactAudioPlayer
        src="/assets/audios/foreward.mp3"
        autoPlay={false}
        loop={false}
        controls={false}
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />
      <div id="temporary_temple">
        <Wrapper>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
              <Image
                src="/assets/icons/exclamation_icon.svg"
                alt="question_mark"
                width={110}
                height={373}
              />
            </Box>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Foreward
            </p>
            <Grid container>
              <Grid item xs={12} md={2}></Grid>
              {/* <Grid item xs={12} md={8}>
                <Box
                  className={classes.shadow_bg_1}
                  sx={{ py: { xs: 2, md: 5 }, px: { xs: 2, md: 10 } }}
                >
                  <p
                    className="text-secondary-4 font-32 font-300 avenuex text-justify"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    To God be the Glory for great things He has done and will
                    continue to do
                  </p>
                </Box>
              </Grid> */}
              <Grid item xs={12} md={2}></Grid>
            </Grid>
            <Grid container sx={{ mt: { xs: 5, md: 10 } }}>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={8}>
                <Box
                  className={classes.shadow_bg_2}
                  sx={{ py: { xs: 2, md: 5 }, px: { xs: 2, md: 10 } }}
                >
                  <p
                    className="text-secondary-4 font-32 font-300 avenuex text-justify"
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    A full account of the roles played by various actors would
                    have been too much for the purpose of this publication which
                    is to provide needed information on how we started, where we
                    are and a road map to get to our desired objective I.e. the
                    completion of the "GDRAND TEMPLE PROJECT " without
                    compromising on the quality of both materials and
                    workmanship required... <br />
                    <p
                      style={{
                        fontWeight: 'extra-bold',
                        marginBottom: '0',
                      }}
                    >
                      Elder Olufunbi Adeniyi-Taiwo
                    </p>
                    <p
                      style={{
                        fontWeight: 'extra-bold',
                        margin: '0',
                      }}
                    >
                      Great Divine Rabbi
                    </p>
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <ReadMore
                onClick={openModal}
                isPlaying={isPlaying}
                onPlay={handleButtonClick}
                onPause={handlePauseButtonClick}
              />
            </Box>
          </Box>
        </Wrapper>
        <CustomModal open={open} closeModal={closeModal}>
          <Box sx={{ overflowY: 'scroll' }} className={classes?.scroll}>
            <Box>
              <p className="font-52 font-400 text-secondary-3 montaga">
                {/* Importance of the temple */}
                Foreward
              </p>
              <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
                To God be the Glory for great things He has done and will
                continue to do.
                <br />
                <br />
                This prospectus is a bold attempt to provide an historical
                background on how the Grand Temple came to be, to acknowledge
                God's providence, to show the endowment to those assigned for a
                purpose and their dogged commitment to get the project off the
                ground. <br />
                <br />A full account of the roles played by various actors would
                have been too much for the purpose of this publication which is
                to provide needed information on how we started, where we are
                and a road map to get to our desired objective I.e. the
                completion of the "GDRAND TEMPLE PROJECT " without compromising
                on the quality of both materials and workmanship required.{' '}
                <br />
                <br />
                The prospectus explains in detail and describes with pictorials
                for easy understanding of the various stages needed to complete
                the project and the attendant budgeted costs. It is reminding us
                not to relent but to show increased commitment towards the
                completion of the "GRAND TEMPLE PROJECT ". Those before us did
                their best and this can be testified to, should we then do any
                less. <br />
                <br />I do encourage that we not only read this document which
                has provided all material information about the Grand Temple
                Project but to have meaningful discussions amongst us on how to
                fund each stage towards completion. <br />
                <br />I remind us once again that those whom God calls, He
                empowers. We all have been richly blessed to fund the project
                without resorting to any public fund raising and to the best of
                my knowledge it has not been withdrawn. <br />
                <br />
                May we continue to be richly blessed, as we heed this clarion
                call, to complete what we have affirmed that we will do.
                <br /> <br />
                Thank you.
                <br /> <br />
                <p
                  style={{
                    fontWeight: 'extra-bold',
                    margin: '0',
                  }}
                >
                  Elder Olufunbi Adeniyi-Taiwo
                </p>
                <p
                  style={{
                    fontWeight: 'extra-bold',
                    margin: '0',
                  }}
                >
                  Great Divine Rabbi
                </p>
                <p
                  style={{
                    fontWeight: 'extra-bold',
                    margin: '0',
                  }}
                >
                  March 2023.
                </p>
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default Foreward;
