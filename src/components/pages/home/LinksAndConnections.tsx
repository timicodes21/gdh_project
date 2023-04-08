import React, { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import classes from '../../../styles/Home.module.css';
import ReadMore from '@/components/buttons/ReadMore';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import { usePlayAudio, usePlayRecording } from '@/hooks/usePlayAudio';
import { linksText } from '@/data/texts';
import ReactAudioPlayer from 'react-audio-player';
const LinksAndConnections = () => {
  const { open, openModal, closeModal } = useModal();
  const { playRecording, pauseRecording, isPlaying, setIsPlaying } =
    usePlayRecording();
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleButtonClick() {
    setIsPlaying(true);
    if (audioRef.current) {
      // @ts-ignore
      audioRef.current?.audioEl.current.play();
    }
  }

  function handlePauseButtonClick() {
    setIsPlaying(false);
    if (audioRef.current) {
      // @ts-ignore
      audioRef.current?.audioEl.current.pause();
    }
  }

  return (
    <Box>
      <ReactAudioPlayer
        src="/assets/audios/links.mp3"
        autoPlay={false}
        loop={false}
        controls={false}
        // @ts-ignore
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />
      <div id="links">
        <Wrapper>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
              {/* <Image
                src="/assets/icons/question_mark.svg"
                alt="question_mark"
                width={400}
                height={373}
              /> */}
            </Box>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              What are the Links or Connections to the Completion of The Grand
              Temple?
            </p>
            <Grid container>
              <Grid item xs={12} md={2}></Grid>
              <Grid item xs={12} md={8}>
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
                    King Solomon, the builder of the first Temple of the Most
                    High God, explained the various links associated to the
                    completion and dedication of the Grand Temple. He said:
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
                What are the Links or Connections to the Completion of The Grand
                Temple?
              </p>
              <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
                King Solomon, the builder of the first Temple of the Most High
                God, explained the various links associated to the completion
                and dedication of the Grand Temple. He said: <br />
                <br />
                “When God seats on His Throne in the Grand Temple, His New
                Kingdom shall be directed therefrom and no power or might can
                question or work against it. When God seats/dwells amongst His
                people and the chosen race - Yoruba race, no nation, not even
                His earlier beloved nation Israel can compete where He resides.
                When God dwells amongst His people, they shall flourish in
                everything they lay there hands upon to do - even that which He
                has established - Mishenland Glory Ventures shall be a source of
                blessings to all humanity. You may not be able to comprehend the
                benefits of the completion of this edifice now, but when it
                becomes useful, then you shall see, know and acknowledge the
                goodness of the God of Mishen. It is your burning duty and
                desire to see to its completion.” King Solomon. <br />
                <br />
                <strong>
                  {' '}
                  MISHENITES BUILD FOR THE LORD. THIS WE SHALL DO
                </strong>
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default LinksAndConnections;
