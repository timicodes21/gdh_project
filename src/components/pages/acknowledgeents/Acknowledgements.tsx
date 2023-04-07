import React, { useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Wrapper from '@/components/layout/Wrapper';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import classes from '../../../styles/Home.module.css';
import ReactAudioPlayer from 'react-audio-player';
import { usePlayRecording } from '@/hooks/usePlayAudio';
import { introductionText } from '@/data/texts';

const Acknowledgements = () => {
  const { open, openModal, closeModal } = useModal();

  const { playRecording, pauseRecording, isPlaying, setIsPlaying } =
    usePlayRecording();

  const ref = useRef<HTMLDivElement>(null);

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
    <div id="history" ref={ref} className="slanted-container2">
      <ReactAudioPlayer
        src="/assets/audios/acknowledgement.mp3"
        autoPlay={false}
        loop={false}
        controls={false}
        // @ts-ignore
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
      />
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <Grid container>
            <Grid item xs={12} md={5}>
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
                  alt="exclamation_icon"
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
                Acknowledgement
              </p>
              <p className="text-white font-32 font-300 text-justify avenuex line-150">
                A Promise made. <br />
                A Promise kept. <br />
                A Promise fulfilled. <br /> <br />
                {`The name of the God of Mishen be praised for counting us all
                worthy to be of service in the ongoing building of the Grand
                Temple - the Father's exhalted abode here on earth. To me, this
                is the height of God's love and to any of his mortal children,
                that is beloved, we are all privileged and counted worthy to be
                a good part of this historical monument at this point of our
                sojourn here in the physical. The edifice that stands today is
                in any clime, a great feat of architecture, engineering,
                construction prowess and human resilience...`}{' '}
                <br /> <br />
                <p
                  style={{
                    fontWeight: 'extra-bold',
                    margin: '0',
                  }}
                >
                  Priest E O Ajuwon
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
              <ReadMore
                onClick={openModal}
                onPlay={handleButtonClick}
                onPause={handlePauseButtonClick}
                isPlaying={isPlaying}
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
                Acknowledgement
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-20">
                A Promise made. <br />
                A Promise kept. <br />
                A Promise fulfilled. <br /> <br />
                {` The name of the God of Mishen be praised for counting us all
                worthy to be of service in the ongoing building of the Grand
                Temple - the Father's exhalted abode here on earth. To me, this
                is the height of God's love and to any of his mortal children,
                that is beloved, we are all privileged and counted worthy to be
                a good part of this historical monument at this point of our
                sojourn here in the physical. The edifice that stands today is
                in any clime, a great feat of architecture, engineering,
                construction prowess and human resilience.`}{' '}
                <br />
                <br />
                To everyone that has been part of this great journey till now, I
                extend my heart-felt gratitude. To the GDRabbi, the GDP&HP and
                the GDReader, I salute your leadership and courage. To the past
                and current membership of the Rabbinical Council, in whom the
                Father is well pleased to pilot this project to this completion
                and finishing stages, I say thank you all for your
                contributions. To all Mishenites, Prayer Groups, Year Groups,
                Families and Individuals, whose contributions morally,
                spiritually and financially has seen this monumental edifice to
                this stage, I extend my appreciation to you all. God bless and
                replenish your purse in multiple folds. To the Grand Temple
                Building Committee and the entire Technical Team from the
                inception of this great monument till now, including all the
                hands that has participated one way or the other to ensure the
                project attained this finishing stages, I pray the Almighty God
                will reward you abundantly and meet you all at the points of
                your needs
                <br />
                <br />
                It has taken a village to put this part historical and part
                aspirational prospectus, led largely by the spirit and mostly
                beyound the call <br />
                <br />
                And to the Holy One of Mishen, the author, the originator, the
                architect and the upholder of this monument, I say Halleluiah
                unto Thee O God, for this rare privilege and grace to build for
                your occupation, a place the Holies refer to as your abode here
                on Earth. <br />
                <br />
                We are all eternally grateful unto Thee our Creator and Grand
                Benefactor for being part of this great history, replica of the
                type Thou once extended to King Solomon of the Israelites era.{' '}
                <br />
                <br />
                Halleluiah be unto Thy Holy Name now and forever more. Amen
                <br /> <br />
                <p
                  style={{
                    fontWeight: 'extra-bold',
                    marginBottom: '0',
                  }}
                >
                  Priest E O Ajuwon
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
      </Box>
    </div>
  );
};

export default Acknowledgements;
