import React, { useRef, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Wrapper from '@/components/layout/Wrapper';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import classes from '../../../styles/Home.module.css';
import { usePlayAudio, usePlayRecording } from '@/hooks/usePlayAudio';
import { challengesText } from '@/data/texts';
import ReactAudioPlayer from 'react-audio-player';
const ChallengesFaced = () => {
  const { open, openModal, closeModal } = useModal();

  const [interSecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const node = ref?.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log('entry intersecting', entry.isIntersecting);
      if (entry.isIntersecting) {
        node?.classList.add('animate');
      }
    });

    if (node) {
      observer.observe(node);
    }

    return () => {
      node?.classList.remove('animate');
      if (node) {
        // @ts-ignore
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div id="challenges_faced" ref={ref} className="slanted-container2">
      <ReactAudioPlayer
        src="/assets/audios/Challenges Faced.mp3"
        autoPlay={false}
        loop={false}
        controls={false}
        // @ts-ignore
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />
      <Box>
        <Wrapper>
          <Grid container>
            <Grid item xs={12} md={5} className="dis-none">
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '80vh',
                }}
              >
                <Image
                  src="/assets/icons/exclamation_icon.svg"
                  alt="question_mark"
                  width={272.4}
                  height={373.74}
                  className="question_mark"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <p className="font-52 font-400 text-white montaga">
                Challenges Faced
              </p>
              <p className="text-white font-32 font-300 text-justify avenuex line-150">
                It is understandable that being human, we may not know the great
                implications of having the Grand Temple built on earth, on the
                Yoruba soil and in our midst
              </p>
              <ReadMore
                onClick={openModal}
                isPlaying={isPlaying}
                onPlay={handleButtonClick}
                onPause={handlePauseButtonClick}
                btnColor
              />
            </Grid>
          </Grid>
        </Wrapper>
        <CustomModal open={open} closeModal={closeModal}>
          <Box sx={{ overflowY: 'scroll' }} className={classes?.scroll}>
            {/* <Image
              src="/assets/icons/question_mark.svg"
              alt="question_mark"
              width={272.4}
              height={373.74}
              className="question_mark"
            /> */}
            <Box>
              <p className="font-52 font-400 text-secondary-3 montaga">
                Challenges Faced
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-20">
                It is understandable that being human, we may not know the great
                implications of having the Grand Temple built on earth, on the
                Yoruba soil and in our midst. Much as the holy angels have
                constantly explained the advantages, the real impact is yet to
                set in for us to know the love of God for us, His purpose for
                such command, and what we will become when this edifice is
                finally completed. All things good do not come easy. A basic
                example is the encounter of Jesus Christ while on earth. A lot
                of obstacles came his way, to dissuade him and to make him fail,
                just that the purpose of his call would not have the right of
                place. All these, notwithstanding he stood firm, wither the
                storm, overcame obstructions and came out in glory.
                <br />
                <br />
                King Solomon submitted thus: “So also in this your time, a whole
                lot of things are linked to the seat of power, the abode where
                God shall reside to govern and to give judgement on all the acts
                of men. We ask, how would you imagine that the wicked would
                allow you to have this on a platter of gold? You have to labour,
                but your consolation is that if you labour, you are bound to
                have the backings of the angels of God to succeed.” Solomon.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </Box>
    </div>
  );
};

export default ChallengesFaced;
