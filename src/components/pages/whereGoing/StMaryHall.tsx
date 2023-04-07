import React from 'react';
import { Box } from '@mui/material';
import Wrapper from '@/components/layout/Wrapper';
import Image from 'next/image';
import classes from '../../../styles/Home.module.css';
import Carousel from 'react-material-ui-carousel';
import {
  designSystemsImages,
  floorPlanImages,
  stMaryImages,
} from '@/data/images';
import ReadMore from '@/components/buttons/ReadMore';
import { useModal } from '@/hooks/useModal';
import CustomModal from '@/components/modals/CustomModal';

const StMaryHall = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
          <p
            className="text-secondary-3 font-52 font-400 montaga text-center"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            Floor Plan
          </p>
          <Box
            sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <Carousel
              navButtonsAlwaysVisible
              sx={{
                width: { xs: '90%', md: '80%', lg: '75%' },
                height: { lg: '80vh' },
              }}
            >
              {stMaryImages.map((item, index) => (
                <Box className={classes.img_container} key={index}>
                  <Image alt="phase_1" src={item} fill />
                </Box>
              ))}
            </Carousel>
          </Box>

          <div id="">
            <Box sx={{ mt: 10 }}>
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                Grand Temple Building
              </p>
              <p
                className="text-primary avenuex font-40 font-400 text-center avenuex"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                DESIGN STRATEGY
              </p>
            </Box>
            <Box
              sx={{
                display: { xs: 'block', lg: 'flex' },
                justifyContent: 'space-between',
                px: { xs: 2, md: 10 },
                mt: 10,
              }}
            >
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                MECHANICAL & PLUMBING SYSTEMS
              </p>
            </Box>
            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                The Mechanical Engineering Services on this project comprise of
                a couple of systems that work together to deliver a resulting
                comfortable environment through a combination of comfort
                cooling, safe & sanitary engineering applications and client
                preferred setups.
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

            {/* <Box
              sx={{ mt: 10, py: 10, borderBottom: '0.5px solid #98A2B3' }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel>
                {designSystemsImages.map((item, index) => (
                  <Box className={classes.img_container} key={index}>
                    <Image alt="design_systems" src={item} fill />
                  </Box>
                ))}
              </Carousel>
            </Box> */}

            <Box
              sx={{ mt: 10, py: 10, borderBottom: '0.5px solid #98A2B3' }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p
                className="text-secondary-3 font-52 font-400 montaga text-center"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                Costing
              </p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Carousel
                  navButtonsAlwaysVisible
                  sx={{
                    width: { xs: '90%', md: '80%', lg: '75%' },
                    height: { lg: '80vh' },
                  }}
                >
                  {floorPlanImages.map((item, index) => (
                    <Box className={classes.img_container} key={index}>
                      <Image alt="design_systems" src={item} fill />
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Box>
          </div>
        </Wrapper>
      </Box>
      <CustomModal open={open} closeModal={closeModal}>
        <Box sx={{ overflowY: 'scroll' }} className={classes?.scroll}>
          <Box>
            <p className="font-52 font-400 text-secondary-3 montaga">
              Mechanical and Plumbing Systems.
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              The Mechanical Engineering Services on this project comprise of a
              couple of systems that work together to deliver a resulting
              comfortable environment through a combination of comfort cooling,
              safe & sanitary engineering applications and client preferred
              setups.
              <br />
              <br />
              The designs undertaken & systems selected were done with
              reliability of the systems; energy consumption; capital cost &
              maintenance in mind given the nature of the project
              <br />
              <br />
              The breakdown of the mechanical engineering services is as
              follows: <br /> 1. Water supply, treatment & storage systems
              <br /> 2. Water Reticulation systems <br />
              3. Wastewater & soil waste collection system <br />
              4. Sewage treatment system <br />
              5. Rainwater & stormwater collection & disposal systems <br />
              6. Air conditioning & ventilation systems <br />
              7. Fire fighting systems <br />
              8. Fountain systems <br />
              9. Lift system <br />
              10. Diesel oil storage & supply system
              <br />
              <br />
              <strong>
                Water Supply, Treatment & Storage Systems This setup comprises
                of the water supply system
              </strong>{' '}
              <br />
              <br />
              This setup comprises of the water supply system being a borehole
              to be drilled within the premises; a water treatment plant after
              an analysis of the raw water from the borehole; and storage of
              treated water at ground level and overhead ready for use within
              the premises. The borehole, water treatment and storage tanks
              would be connected with appropriate pumps: submersible & surface.
              <br />
              <br />
              <strong>Water Reticulation Systems</strong> <br />
              <br />
              The water reticulation systems are a set of pipe networks to
              deliver water to the different spaces & sanitary appliances
              requiring water. This includes both cold & hot water as required
              by the client’s brief. The water reticulation systems are serviced
              by gravity feeds from the overhead water tank and electric water
              heater for cold and hot water respectively.
              <br />
              <br />
              <strong>
                Rainwater & Stormwater Collection and Disposal System
              </strong>
              <br />
              <br />
              Given the setup of the building envelope and the availability of
              large expanses of external open floor areas, it is imperative to
              safely collect & dispose of rainwater & stormwater from the
              premises. This is important due to the nature of the rainfall
              intensity being high and the closeness of an ill-maintained canal.
              The rainwater & stormwater collection system consists of a network
              of pipes & manholes receiving rainwater from downpipes originating
              from the roof slab and the finished external floor; while the
              disposal system uses connecting surface drains. If there is a need
              to introduce pump stations to enhance the disposal, pending the
              outcome of a civil engineering survey of the premises relative to
              the canal, appropriate sizes of sump pits fitted with submersible
              pumps would be introduced.
              <br />
              <br />
              <strong>Wastewater & Soil Waste Collection System</strong>
              <br />
              <br />
              The wastewater & soil waste collection system is a network of
              pipes & manholes connecting the sanitary appliances & cleaning
              spaces to the sewage treatment system. This is inline with
              sanitary engineering practices to ensure safe public health is the
              order with respect to all liquid waste collection, treatment &
              disposal. Note that this excludes rainwater & stormwater.
              <br />
              <br />
              <strong>Sewage Treatment System</strong>
              <br />
              <br />
              The system treatment system is a collection, treatment & disposal
              system selection with consideration of the operations of the
              premises. A Biodigester system has been selected which addresses
              the public health concerns of the Physical planning authorities
              within the state as well as cost for implementation & maintenance
              as it relates to the client.
              <br />
              <br />
              <strong>Air-Conditioning & Ventilation Systems</strong>
              <br />
              <br />
              The approach to air-conditioning here has been in consideration
              for comfort cooling while also keeping in mind the operations of
              the internal spaces to be occupied. Direct expansion systems of
              the single split nature were selected for use. These are to be
              supported with fresh air units where infiltration would not
              suffice. Bathrooms, though limited, are fitted with ventilation
              systems for foul air extraction.
              <br />
              <br />
              <strong>Lift Systems</strong>
              <br />
              <br />
              The lift system is a single car setup for passenger use with
              consideration for the demography of persons that would most likely
              need it, the aged ones. The selection is such that a person, aided
              or unaided can use the lift to connect appropriate floors, other
              than using the ramp. The provisions for the lift have factored in
              the international & local regulations’ requirements even though
              the lift shaft is ‘existing’.
              <br />
              <br />
              <strong>Fire-Fighting Systems</strong>
              <br />
              <br />
              Fires hazards are never desired, hence the need to have provisions
              to fight such fires irrespective of size & time of occurrence, if
              any. The fire fighting systems deployed in the designs include
              fire hose reel system, dry riser system, portable fire
              extinguishers and fire blankets. The fire hose reels are to be fed
              from a water reserve using a fire pump. The dry riser system
              connects landing valves on each upper floor to the breeching inlet
              where the fire fighting service can connect supply from their
              vehicle, should it be required. All the fire fighting provisions
              have been made in accordance to safe & best practices as required
              by international & local regulations.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default StMaryHall;
