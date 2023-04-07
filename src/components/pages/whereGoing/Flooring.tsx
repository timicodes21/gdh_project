import React from 'react';
import { Box } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import Image from 'next/image';
import classes from '../../../styles/Home.module.css';
import Carousel from 'react-material-ui-carousel';
import {
  allItemsImages,
  columnImages,
  flooring2Images,
  flooringImages,
  reflectionImages,
} from '@/data/images';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';

const Flooring = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <div id="">
            <Box sx={{ mt: 10 }}>
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Flooring by Roma, Italy
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                The Rosso di Verona is one of the most famous and best known
                Italian ornamental rocks in the world. It is considered the red
                marble par excellence. It is characterised by the colour ranging
                from intense red to pale pink, and fossil shells that are
                trapped there, especially ammonites.
              </p>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <ReadMore onClick={openModal} noPlay />
              </Box>
            </Box>

            <Box
              sx={{ mt: 10, py: 10, display: 'flex', justifyContent: 'center' }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel
                navButtonsAlwaysVisible
                sx={{
                  width: { xs: '90%', md: '80%', lg: '75%' },
                  height: { lg: '80vh' },
                }}
              >
                {flooringImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="design_systems" src={item} fill />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              All Items of Works Executed by Roma Work
            </p>
            <Box
              sx={{ py: 10, display: 'flex', justifyContent: 'center' }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel
                navButtonsAlwaysVisible
                sx={{
                  width: { xs: '90%', md: '80%', lg: '75%' },
                  height: { lg: '80vh' },
                }}
              >
                {allItemsImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="design_systems" src={item} fill />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Flooring by Tarkett
            </p>
            <Box
              sx={{ py: 10, display: 'flex', justifyContent: 'center' }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel
                navButtonsAlwaysVisible
                sx={{
                  width: { xs: '90%', md: '80%', lg: '75%' },
                  height: { lg: '80vh' },
                }}
              >
                {flooring2Images.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="design_systems" src={item} fill />
                  </Box>
                ))}
              </Carousel>
            </Box>
            <p
              className="text-secondary-3 font-52 font-400 montaga text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Reflection Pool & Fountain by Ecnopools
            </p>
            <Box
              sx={{ py: 10, display: 'flex', justifyContent: 'center' }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel
                navButtonsAlwaysVisible
                sx={{
                  width: { xs: '90%', md: '80%', lg: '75%' },
                  height: { lg: '80vh' },
                }}
              >
                {reflectionImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="design_systems" src={item} fill />
                  </Box>
                ))}
              </Carousel>
            </Box>
          </div>
        </Wrapper>
      </Box>
      <CustomModal open={open} closeModal={closeModal}>
        <Box sx={{ overflowY: 'scroll' }} className={classes?.scroll}>
          <Box>
            <p className="font-52 font-400 text-secondary-3 montaga">
              Flooring by Roma, Italy
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong>THE ALTAR</strong> <br />
              <br />
              The altar is raised above the worship area with two steps. We
              propose to clad the two steps with Carrara Marble, the floor with
              Yellow Siena; at the back close to the wall a frame of Red Verona
              Marble on the floor continue on the Columns’ bases and on the
              doors’ frames. The Yellow Siena marble will be cut to size
              following the dimensions of the altar area.
              <br />
              <br />
              On the wall at the back of the altar you can see wooden slats
              that, more than enrich the area, hide the openings at the top and
              the side doors, incorporating them into the design. For the same
              reason the wood slats continue on the choir wall in the gallery up
              to the perimetal wall to hide the staircase. All the wooden slats
              have at the back rockwool to absorb sounds.
              <br />
              <br />
              On the altar wall there are three openings where we propose
              sliding doors with leaves slide in a wooden structure in the
              corridor at the back of the wall. The three openings will have
              intradoses in Verona marble, at the top of the middle door a red
              verona frame with a White Carra marble triangle in the middle. The
              wall above will be cladded in Yellow Siena marble and inside a
              White Carrara marble Cross.
              <br />
              <br />
              To let the altar columns standing out, they will be painted with a
              yellow marble effect painting. At their back white carrara marble
              pilasters. On the side main doors other, two wooden panels descend
              like tapestries to cover the underlying openings.
              <br />
              <br />
              <strong>WORSHIP AREA</strong> <br />
              (same for first & ground floor) <br />
              <br />
              For the worship area we suggest porcelain tiles with marble
              effect: Calacutta Golden, a white porcelain with golden veins. Red
              frames divide the entire area in prayer zones by identifying the
              path for circulation of devotees.
              <br />
              <br />
              At the entrance, in front of the main door, when people arrive
              will find an hexagram realized with the three marbles, red verona,
              white carrara and yellow siena.
              <br />
              <br />
              In front of the altar, a marble corridor realised with white
              carrara and yellow siena triangles.
              <br />
              <br />
              The staircase at the first floor is cladded with Carrara marble
              with a wood railing. All around the worship area a white carrara
              marble skirting (h 15cm).
              <br />
              <br />
              The columns in this area will be painted in yellow colour like the
              altar’s. <br />
              <br /> On the perimeter wall at the left side of the building,
              facing the altar, the niches between the windows will be covered
              with wooden panel
              <strong>GALLERY</strong> <br />
              <br />
              Following the same concept of the other floors in the gallery we
              propose the porcelain Calacatta for the floorings and for terraced
              steps too. The risers will be in White Carrara marble. A wooden
              protection will be inserted on the riser to avoid people falling
              down. The steps between the terrace steps will be cladded with a
              yellow stone: Cleopatra stone. All the skirtings in white carrara
              marble (h 15 cm).
              <br />
              <br />
              The parapet of the gallery is proposed with a wooden base, that
              will cover the front widht of the slab, in which is inserted a
              glass parapet to let people look at the altar area.
              <br />
              <br />
              <strong>AUDITORIUM</strong> <br />
              <br />
              We follow the same concept of the rest of building with calacatta
              porcelain for flooring and white carrara for risers whilst the
              steps will be installed in Cleopatra stones, the skirting in white
              carrara marble.
              <br />
              <br />
              <strong>SANCTUARY AREA AND OFFICES</strong> <br />
              <br />
              The floorings of these area are proposed in Carrara Marble tiles
              in different sizes and drawings in depending of the importance of
              the room. Skirting in White Carrara Marble.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default Flooring;
