import React, { useEffect, useRef } from 'react';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Wrapper from '@/components/layout/Wrapper';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';
import classes from '../../../styles/Home.module.css';
import { usePlayAudio } from '@/hooks/usePlayAudio';
import { introductionText } from '@/data/texts';

const WhyBuild = () => {
  const { open, openModal, closeModal } = useModal();

  const { playAudio, pauseAudio, isPlaying } = usePlayAudio(introductionText);

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

  return (
    <div id="history" ref={ref} className="slanted-container2">
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
                  src="/assets/icons/question_mark.svg"
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
                {/* Why build a temple?{" "} */}
                Introduction
              </p>
              <p className="text-white font-32 font-300 text-justify avenuex line-150">
                {/* The Great Divine Holy Order of the Third Era was established in
                1941 with the goal of building a Grand Temple according to
                God&apos;s specified dimensions. The organization started in
                rented rooms and has since built two Temporary Temples, with the
                second one currently in use. The dream of building the Grand
                Temple is yet to be fulfilled. */}
                The Great Divine Holy Order of the Third Era was thronically
                christened in a divine message of 16th September 1941, and the
                divine structure was called the Cogent Arrangement.
              </p>
              <ReadMore
                onClick={openModal}
                onPlay={playAudio}
                onPause={pauseAudio}
                isPlaying={isPlaying}
                btnColor
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
                {/* Why build a temple?{" "} */}Introduction
              </p>
              <p className="text-secondary-4 font-32 font-300 text-justify avenuex line-20">
                {/* The Great Divine Holy Order of the Third Era was thronically
                christened in a divine message of 16th September 1941, and the
                divine structure was called the Cogent Arrangement. Ever since
                then, God declared His intention for the Holy Order to build a
                Grand Temple for Him. The dimensions were specified. The Holy
                Order started from a very humble beginning, using a rented room
                and parlor apartment as her place of worship. They started at
                13, Jebba Street, Ebute Meta West, and later moved to 33, Jones
                Street, Ebute Meta West. Later land was secured at Iponri
                village, close to Ebute Meta West. After much efforts, the first
                Temporary Temple was built in 1961 on this land, this building
                is now being used as the Sabbath School. Efforts were
                intensified to build a more spacious and befitting place of
                worship, which resulted in dedicating the second Temporary
                Temple on 10th of August, 1986. This is the present Temple we
                are using now, it is a three floor building. Holy Order of Saint
                Mary chapel is on the ground floor, the the sanctuary and the
                body of the Temple is on the first floor, and the prayer
                chambers and others on the second floor. Still the command and
                intention of God to build a Grand Temple for Him, with His
                specifications is yet to be fulfilled. */}
                The Great Divine Holy Order of the Third Era was thronically
                christened in a divine message of 16th September 1941, and the
                divine structure was called the Cogent Arrangement. <br />
                <br />
                Ever since then, God declared His intention for the Holy Order
                to build a Grand Temple for Him. The dimensions were specified.
                The Holy Order was established by God in the same way the
                Creator meditated, and the resultant divine products were the
                heavens, earth, and the universe. Thus, God is the Founder of
                the GDHOTE. <br />
                <br />
                Let us listen to the explanation of the holy angels of God, it
                says: “Dateline Spring 1941 THE EMANATION OF THE THIRD ERA was
                established in the Name ELOHIM-MISHEN - as a final passover,
                restoration and initiation of the ADAMIC SOUL back to the
                presence of God, and in which the hidden secrets and mysteries
                of creation are revealed first-hand to mankind, meant to be the
                Glory of God’s creation in the Cosmic Empire. <br />
                <br />
                Due to the ever changing face of the Earth and the boundless
                expanse of man’s mind that is subjected to his will in
                retrospect, a smaller version of this Grand Ritual was
                instituted that the favoured ones of the black race may be in
                constant favour of THE ALMIGHTY GOD, through time and clime,”
                Tetra, Pastor, Michael the Patron. <br />
                <br />
                From this Angelic explanation, the GDHOTE in all ramifications
                is an extraordinary spiritual Citadel for human souls’ awakening
                in pursuance and search for divine realities. It is a divine
                institution of esoteric science for spiritual research and
                development for selfrealisation of man in the image and likeness
                of God. It is an advanced school for experienced souls in Christ
                light to have positive impact on the world of mortals.
              </p>
            </Box>
          </Box>
        </CustomModal>
      </Box>
    </div>
  );
};

export default WhyBuild;
