import React, { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import classes from '../../../styles/Home.module.css';
import ReadMore from '@/components/buttons/ReadMore';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import { usePlayAudio, usePlayRecording } from '@/hooks/usePlayAudio';
import { spiritualImportanceText } from '@/data/texts';
import ReactAudioPlayer from 'react-audio-player';
const SpiritualImportance = () => {
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
        src="/assets/audios/Spiritual Importance.mp3"
        autoPlay={false}
        loop={false}
        controls={false}
        // @ts-ignore
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />
      <div id="spiritual_importance">
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
              Spiritual Importance of This Building To Mishenites, The Yoruba
              Race and The World
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
                    That this building is situated on the Yoruba soil is great
                    privilege to the race, indicating that where God dwells
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
                    He is the Creator of all and when He comes to dwell amongst
                    you His people, from there He rule over the entire universe
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
                Spiritual Importance of This Building To Mishenites, The Yoruba
                Race and The World
              </p>
              <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
                “The Grand Temple is the abode of God. Being His abode, it
                affords you as members of the Holy Order, the closest companion
                and interaction with the Creator of the heavens and the earth;
                it shields you away from all warranted and unwarranted attacks
                and accusations of all enemies visible and invisible, since you
                practically “live” with Him here on earth; it gives you the
                grace to seek and to find immediately, the love and favour of
                the Almighty; it confirms to you the authority of God over all
                things, which He has given unto you. Above all, it makes you a
                joint heir rulers of the entire universe. This is a great
                opportunity and unquantified importance of the building and
                usage of this divine edifice when completed. <br />
                <br />
                That this building is situated on the Yoruba soil is great
                privilege to the race, indicating that where God dwells, the
                rays emanating from the Temple will keep at bay all wicked plans
                and intentions of everyone that opposes His will; whereGod
                dwells, the people of the area cannot lack any good thing; where
                God dwells, His Kingdom, yea His desired reign shall supersede
                over the land. These are great blessings for the race and her
                people. <br />
                <br />
                He is the Creator of all and when He comes to dwell amongst you
                His people, from there He rule over the entire universe, from
                there, your prayers for all races and colour shall receive His
                divine blessings; from that seat of power and authority, His
                Kingdom shall be firmly grounded for all to know Him and do His
                will, thereby making the world a better place for all to live
                in. <br />
                <br />
                His Kingdom on earth shall have it’s right of place to fulfil
                His divine intentions for humanity. Gabriel.” Anael.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default SpiritualImportance;
