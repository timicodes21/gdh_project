import React from "react";
import { Box, Grid } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import classes from "../../../styles/Home.module.css";
import ReadMore from "@/components/buttons/ReadMore";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";
import { usePlayAudio } from "@/hooks/usePlayAudio";
import { tempoaryTempleText } from "@/data/texts";

const TempleImportance = () => {
  const { open, openModal, closeModal } = useModal();

  const { playAudio, pauseAudio, isPlaying } = usePlayAudio(tempoaryTempleText);

  return (
    <Box sx={{ py: 5 }}>
      <div id="temporary_temple">
        <Wrapper>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", right: 0, top: 0 }}>
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
              The Temporary Temple
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
                    {/* The temple will bring close interaction with the creator,
                  protection from attacks and accusations, love and favor of the
                  Almighty.. */}
                    The Holy Order started from a very humble beginning, using a
                    rented room and parlour apartment as her place of worship.
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
                    {/* The temple will bring close interaction with the creator,
                  protection from attacks and accusations, love and favor of the
                  Almighty.. */}
                    Efforts were intensified to build a more spacious and
                    befitting place of worship, which resulted in dedicating the
                    second Temporary Temple on 10th of August 1986.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <ReadMore
                onClick={openModal}
                isPlaying={isPlaying}
                onPlay={playAudio}
                onPause={pauseAudio}
              />
            </Box>
          </Box>
        </Wrapper>
        <CustomModal open={open} closeModal={closeModal}>
          <Box sx={{ overflowY: "scroll" }} className={classes?.scroll}>
            <Image
              src="/assets/icons/exclamation_icon.svg"
              alt="question_mark"
              width={110}
              height={373.74}
            />
            <Box>
              <p className="font-52 font-400 text-secondary-3 montaga">
                {/* Importance of the temple */}
                The Tempoary Temple
              </p>
              <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
                {/* The Grand Temple is the abode of God. Being His abode, it affords
              you as members of the Holy Order, the closest companion and
              interaction with the Creator of the heavens and the earth; it
              shields you away from all warranted and unwarranted attacks and
              accusations of all enemies visible and invisible, since
              youpractically “live” with Him here on earth; it gives you the
              grace to seek and to find immediately, the love and favour of the
              Almighty; it confirms to you the authority of God over all things,
              which He has given unto you. Above all, it makes you joint heir
              rulers of the entire universe. This is a great opportunity and
              unquantifiedimportance of the building and usage of this divine
              edifice when completed. That this building is situated on the
              Yoruba soil is great privilege to the race, indicating that where
              God dwells, the rays emanating from the Temple will keep at bay
              all wicked plans and intentions of everyone that opposes His will;
              where God dwells, the people of the area cannot lack any good
              thing; where God dwells, His Kingdom, yea His desired reign shall
              supersede over the land. These are great blessings for the race
              and her people. */}
                The Holy Order started from a very humble beginning, using a
                rented room and parlour apartment as her place of worship. They
                started at 13, Jebba Street, Ebute Meta West, and later moved to
                33, Jones Street, Ebute Meta West. Later land was secured at
                Iponri village, close to Ebute Meta West. After much efforts the
                first Temporary Temple was built in 1961 on this land, this
                building is now being used as the Sabbath School. Efforts were
                intensified to build a more spacious and befitting place of
                worship, which resulted in dedicating the second Temporary
                Temple on 10th of August 1986. <br />
                <br />
                This is the present Temple we are using now; it is a three floor
                building. Holy Order of Saint Mary chapel is on the ground
                floor, the sanctuary and the body of the Temple is on the first
                floor, and the prayer chambers and others on the second floor.{" "}
                <br />
                <br /> Still the command and intention of God to build a Grand
                Temple for Him, with His specifications is yet to be fulfilled
                prayer chambers and others on the second floor. <br />
                <br />
                Still the command and intention of God to build a Grand Temple
                for Him, with His specifications is yet to be fulfilled
              </p>
            </Box>
          </Box>
        </CustomModal>
      </div>
    </Box>
  );
};

export default TempleImportance;
