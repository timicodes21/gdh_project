import React, { useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Wrapper from '@/components/layout/Wrapper';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import classes from '../../../styles/Home.module.css';
import { usePlayAudio, usePlayRecording } from '@/hooks/usePlayAudio';
import { grandTempleText } from '@/data/texts';
import ReactAudioPlayer from 'react-audio-player';
const GrandTemple = () => {
  const { open, openModal, closeModal } = useModal();
  const { playRecording, pauseRecording, isPlaying, setIsPlaying } =
    usePlayRecording();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log('entry intersecting', entry.isIntersecting);
      if (entry.isIntersecting) {
        ref?.current?.classList.add('animate');
      }
    });

    if (ref?.current) {
      observer.observe(ref?.current);
    }

    return () => {
      ref?.current?.classList.remove('animate');
      if (ref?.current) {
        observer.unobserve(ref?.current);
      }
    };
  }, []);

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
    <div id="grand_temple" ref={ref} className="slanted-container">
      <Box sx={{ py: 5 }}>
        <ReactAudioPlayer
          src="/assets/audios/The Grand Temple Project.mp3"
          autoPlay={false}
          loop={false}
          controls={false}
          // @ts-ignore
          ref={audioRef}
          onEnded={() => setIsPlaying(false)}
        />
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
              <p className="font-52 font-400 text-secondary-3 montaga">
                The Grand Temple Project
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-150">
                After 30 years, the first initiative design came from a member
                Architect, Brother Adekoya (Uncle Yahya), when he designed the
                first architectural concept of the Grand Temple, showing the
                Holy of Holies and the body of the Temple
              </p>
              <ReadMore
                onClick={openModal}
                isPlaying={isPlaying}
                onPlay={handleButtonClick}
                onPause={handlePauseButtonClick}
              />
            </Grid>
          </Grid>
        </Wrapper>
        <CustomModal open={open} closeModal={closeModal}>
          <Box sx={{ overflowY: 'scroll' }} className={classes?.scroll}>
            <Image
              src="/assets/icons/question_mark.svg"
              alt="question_mark"
              width={272.4}
              height={373.74}
              className="question_mark"
            />
            <Box>
              <p className="font-52 font-400 text-secondary-3 montaga">
                The Grand Temple Project
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-20">
                After 30 years, the first initiative design came from a member
                Architect, Brother Adekoya (Uncle Yahya), when he designed the
                first architectural concept of the Grand Temple, showing the
                Holy of Holies and the body of the Temple. This design went
                through series of modifications. In the 80s two member
                architects, Brothers Bayo Adewakun and Olu Ajibola were sent on
                tour of Europe to visit notable churches and temples. However,
                it was the architectural design of Bro Ola Banwo, that was
                divinely chosen. In the early 90s, fund raising was embarked
                upon by the Rabbinical Council under the Chairmanship of Elder
                O. Olugbekan. Land for the GT in Iponri was pursued vigorously
                by the Physical Planning Committee headed by Brother Oluborode
                assisted by Priest A. I. Adefule. But all seemed difficult to
                attain, until 2004, when more land was acquired from the owner
                occupiers and duly compensated. The chosen architectural designs
                of Brother Ola Banwo were without government approval. Efforts
                were made to get necessary approvals in the early 2000 by the
                Building Committee headed by Brother V. Oluwasanmi and assisted
                by Priest A. I. Adefule and Brother A. Smith (who became the
                Chairman of the Building Committee respectively). <br />
                <br />
                In 2008 the pilling contract was awarded to Trevi Construction
                Company, piling works were completed in 2009. The Foundation
                laying and Fund-Raising ceremony was done in 2010. From here,
                the Holy Order professionals headed by the Project Director
                (Bro. Ola Banwo) including the Project Manager (Bro. Adekunle
                Adefule), Project Accountant (Bro. Ayodokun Ogunba), Sis. Kemi
                Ogunnoiki (Project Storekeeper) with the support of a Structural
                Engineer (Engr. Adeeko) took up the construction works under the
                supervision of the Great Divine Rabbi O. Olugbekan (a Fellow of
                the Nigerian Society of Engineers) using direct labour approach.
                Presently, the construction approach has been shifted from
                direct labour to technical professional engagement, initiated by
                Priest E. O. Ajuwon. The intention is to make sure that all
                construction works meet the specified specifications including
                the finishing works. To this end, the services of the following
                professionals were engaged: Interior Architect, Mechanical,
                Electrical, Acoustic, Audiovisual, Quantity Surveyor and
                Drainage Consultants.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </Box>
    </div>
  );
};

export default GrandTemple;
