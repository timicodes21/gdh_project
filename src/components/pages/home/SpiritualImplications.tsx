import React, { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import classes from '../../../styles/Home.module.css';
import ReadMore from '@/components/buttons/ReadMore';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import { usePlayAudio, usePlayRecording } from '@/hooks/usePlayAudio';
import { spiritalImplicationsText } from '@/data/texts';
import ReactAudioPlayer from 'react-audio-player';

const SpiritualImplications = () => {
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
    <Box sx={{ py: 5 }}>
      <ReactAudioPlayer
        src="/assets/audios/Spiritual implications.mp3"
        autoPlay={false}
        loop={false}
        controls={false}
        // @ts-ignore
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />

      <div id="spiritual_implications">
        <Wrapper>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
              <Image
                src="/assets/icons/question_mark.svg"
                alt="question_mark"
                width={300}
                height={373}
              />
            </Box>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              What are the Spiritual Implications of Completing the Grand
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
                    I speak concerning the abode of my Father which He has
                    commanded and given you the grace to build for Him. Hold not
                    back every effort with your being to make this a reality
                  </p>
                </Box>
              </Grid>
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
                    This Temple shall be greater and more powerful than the one
                    built by King Solomon; and the news of this shall overshadow
                    the whole world.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <ReadMore
                onClick={openModal}
                onPlay={handleButtonClick}
                onPause={handlePauseButtonClick}
                isPlaying={isPlaying}
              />
            </Box>
          </Box>
        </Wrapper>
        <CustomModal open={open} closeModal={closeModal}>
          <Box sx={{ overflowY: 'scroll' }} className={classes?.scroll}>
            <Box>
              <p className="font-52 font-400 text-secondary-3 montaga">
                What are the Spiritual Implications of Completing the Grand
                Temple?
              </p>
              <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
                “I speak concerning the abode of my Father which He has
                commanded and given you the grace to build for Him. Hold not
                back every effort with your being to make this a reality. At
                this time, you cannot fathom the importance and usefulness of
                this building in your land, but I tell you, when this is done,
                you shall know heaven on earth. <br />
                <br /> This Temple shall be greater and more powerful than the
                one built by King Solomon; and the news of this shall overshadow
                the whole world. By these words of mine, I call upon you to be a
                partaker of this command, and you shall live forever.” <br />
                <br />I am Jesus Christ.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default SpiritualImplications;
