import React from 'react';
import { Box } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import Image from 'next/image';
import classes from '../../../styles/Home.module.css';
import Carousel from 'react-material-ui-carousel';
import {
  acousticSystemImages,
  ceilingImages,
  electricalSystemImages,
} from '@/data/images';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';

const Ceiling = () => {
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
                Ceiling
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Polystyrene frames cut to relevant sizes and mounted atop
                plaster boards and insulated with Rockwool. All panels will be
                screwed on steel noggins in barrel vault, and dome.
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
                {ceilingImages.map((item, index) => (
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
            <p className="font-52 font-400 text-secondary-3 montaga">Ceiling</p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              Polystyrene frames cut to relevant sizes and mounted atop plaster
              boards and insulated with Rockwool. All panels will be screwed on
              steel noggins in barrel vault, and dome.
              <br /> <br />
              Flat ceilings all around the concave areas including the ceiling
              above the Choir, the ceiling area on the staircases and the
              auditorium ceiling will be painted with Extra-White Opaque
              Hydropaint. <br />
              <br />
              <strong>MAIN AUDITORIUM</strong> <br />
              <br />
              The proposal includes materials for 1600.00 sqm <br /> • SHAPED
              PANELS in neutral polystyrene D30 for barrel vault maximum
              thickness 5 cm. <br />• PERIMETRAL FRAME in polystyrene all around
              the dome and the barrel vault. <br />• No.4 ARCHED FRAMES length
              21 meters divided in module 55x100x 20 cm <br />• ROCKWOOL 2.5 cm
              thick for the concave surface’s acoustic insulation <br />• WALL
              PAPER with design similar to a coffered ceiling in TNT with a sand
              wall effect in PVC, adhesive included for installation. For half
              shell and barrel vault surfaces 700 sqm.
              <br />
              <br />
              The solution proposes a polystyrene system to realise the concave
              ceilings. The polystyrene with a density D30 and 5 cm thick will
              be delivered in a 3d modules ready to be installed and respecting
              the carving (radius) indicated on the drawings. The polystyrene
              frames will be repeated to make a grid until the end of the dome.
              Inside the wedges, installation of wallpaper reproducing a design
              similar to the one in the picture or something different.
              <br />
              <br />
              The solution proposes a drywall ceiling that follows the shape of
              the actual ceiling structure with a barrel vault and an half
              shell. The ceiling will be divided by frames realised in
              polystyrene, which are similar to the Renaissance and Gothic
              vault’s frames. In the half shell, the frames will create wedges,
              which will put in evidence the particular shape of the ceiling.
              All around the ceiling a polystyrene frame with the shape we
              showed below, will give the sense of a trabeation, without which,
              the ceiling would appear suspended. On this frame, we can think to
              install a light system that lighten the vault in an indirect way.
              Between the frames, we propose to install wallpaper in TNT with a
              sand wall effect in PVC. The suggested design is the one below
              like a coffered ceiling.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default Ceiling;
