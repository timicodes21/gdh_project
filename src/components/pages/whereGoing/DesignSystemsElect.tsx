import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import {
  designSystemsImages,
  electricalSystemImages,
  floorPlanImages,
  stMaryImages,
} from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const DesignSystemsElec = () => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <Box sx={{ py: 5 }}>
        <Wrapper>
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
                display: { xs: "block", lg: "flex" },
                justifyContent: "space-between",
                px: { xs: 2, md: 10 },
              }}
            >
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                ELECTRICAL SYSTEMS
              </p>
            </Box>
            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                The Electrical services design deployed the latest state of the
                art technology for the designs of the systems that will work
                reliably and efficiently;
              </p>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <ReadMore onClick={openModal} />
              </Box>
            </Box>

            <Box
              sx={{
                mt: 10,
                py: 10,

                display: "flex",
                justifyContent: "center",
              }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Carousel
                navButtonsAlwaysVisible
                sx={{
                  width: { xs: "90%", md: "80%", lg: "75%" },
                  height: { lg: "80vh" },
                }}
              >
                {electricalSystemImages.map((item, index) => (
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
        <Box sx={{ overflowY: "scroll" }} className={classes?.scroll}>
          <Box>
            <p className="font-52 font-400 text-secondary-3 montaga">
              Electrical and Lighting Systems
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong>DESIGN PHILOSOPHY & CONSIDERATION</strong> <br />
              <br />
              The Electrical services design deployed the latest state of the
              art technology for the designs of the systems that will work
              reliably and efficiently; meet all the local code requirement,
              relevant International Standards, Statutory Authorities and
              client’s operational requirements. This was coordinated with the
              Architectural drawings to ensure the Electrical Systems designed
              are buildable; have proper access for maintenance of system
              equipment to ensure sustainable, reliable and efficient operation.
              <br />
              <br />
              <strong>INSTALLATION & BUILDER’S WORK DRAWINGS</strong>
              <br />
              <br />
              All the working (installation) and builder’s work drawings for the
              engineering services will be prepared by the specialist
              sub-contractors. This is in agreement with the standard procedures
              within the building industry.
              <br />
              <br />
              <strong>SERVICES PROVIDED</strong>
              <br />
              <br />
              1. ELECTRICAL SERVICES The following engineering services have
              been designed for the Temple project. <br /> i. Electricity Supply
              <br />
              ii. Low Voltage Distribution System <br />
              iii. Standby Power Generation Distribution and Control <br />
              iv. Single and Three Phase Power Supply System <br />
              v. General Interior Lighting System. <br />
              vi. External Lighting System <br />
              vii. Lightning Protection, Earthing and Bonding System. <br />
              2. EXTRA LOW VOLTAGE SYSTEMS <br />
              i. Fire Detection and Alarm System <br />
              ii. Close Circuit TV Security Surveillance system (CCTV)
              <br />
              <br />
              <strong>BASIS OF DESIGN</strong>
              <br />
              <br />
              1. ELECTRICAL SYSTEMS <br /> - LIGHTING SYSTEMS The Electrical
              system has been designed in accordance with the current
              regulations for electrical installations issued by the Institution
              of Electrical Engineers (IEE) and the relevant British Standards
              and Codes of Practice, together with Electricity Supply Authority
              specifications. The lighting system design for the project is a
              combination of major cool white and warm white based on all the
              basic functionality of lighting relative to each space and the
              activities to be carried out therein. This includes ambient
              lighting, task lighting, accent lighting, kinetic lighting and
              decorative lighting. A low spectrum LED lighting has been
              considered in the d e s i g n t o s a t i s f y t h e g e n e r a
              l requirements for illumination levels according to
              IES(Illumination Engineering Society)
              <br />
              <br />
              <strong>2. EXTERNAL/ SECURITY LIGHTING</strong>
              <br />
              The entire compound has been designed to have Solar street
              lighting to compliment the landscaping designs. Besides, Security
              lighting on the fence has been designed along the boundaries of
              the Facility. The lighting installation generally has been
              designed to comply with the Code for Lighting System issued by the
              Chartered Institute of Building Services Engineers and the British
              Standards.
              <br />
              <br />
              <strong>3. ELECTRICITY SUPPLY SYSTEMS </strong>
              <br />
              The Electricity Supply System design is from existing 11KV network
              from the nearest dedicated power network to the facility. The
              power is then distributed through step down transformer to step
              down the voltage power to a lower voltage; suitable for use in the
              Temple premises. The output from the secondary side of the 500KVA
              11/0.415KV Transformer will be terminated in the 800A TPN Isolator
              (Switchgear) located in the service building.
              <br />
              <br />
              <strong>OPTION 1</strong>
              <br />
              Generator synchronization is the process of matching parameters
              such as voltage, frequency, phase angle, phase sequence, and
              waveform of alternator (generator) or other source with a healthy
              or running power system. <br /> The need for synchronization
              arises when two or more generators work together to supply the
              power to the load. Since electrical loads do not remain constant,
              the two or more generators supplying the power need to be
              interconnected and operate in parallel to handle larger loads.
              Using a series of small units instead of a single generator is
              known as parallel operation <br />
              <br /> Below are the Advantages of generator synchronization:{" "}
              <br />
              <br /> Reliability: With multiple generators, parallel operation
              is much more reliable than single-unit generators. In a
              single-unit system, the whole setup will shut down if the
              alternator fails. In parallel systems, one generator can fail and
              the other units will keep the system active. <br />
              <br /> Continuity: If a unit needs maintenance, the other systems
              can stay up and running to prevent your entire operation from
              stopping. <br />
              <br /> Load: The load requirements may vary throughout the day.
              Adjust your parallel system to accommodate higher and lower loads
              with more or fewer active systems. <br />
              <br />
              Efficiency: Generators run at the highest efficiency when they
              operate at their load rating. By adapting to load changes, your
              system can remain efficient at all times. <br />
              <br />
              Capacity: Bigger operations require more power. With more
              generators, systems have more alternators for increased capacity.
              <br />
              <br /> The Synchronization panel is more expensive compare to
              Manual Changeover panel.. <br />
              <br />
              Based on the Load analysis (E003A - E003G), we design to have 1Nr
              500KVA 50Hz 11/0,415KV Step-down Transformer, 1Nr 100KVA 3Phase
              240/415V and 2Nr 150KVA 3Phase 240/415V Generating sets <br />
              <br />
              <strong>OPTION 2 </strong>
              <br />A manual changeover Panel is used to manually transition
              from the main source of electrical supply to the generator or an
              alternate source in case of a power outage and prevents the power
              flowing back into the generator or grid. Mechanical interlocks are
              incorporated in the panel to control the sequence of operation of
              the switch disconnectors and earth switches to ensure safe
              operation for both personnel and plant security.
              <br />
              <br />
              Based on the load analysis (E003A – E003G), we design to have 3Nr.
              Generating Sets (Existing generator, 1Nr. 100KVA 3Phase 240/415V
              and 1Nr 250KVA 3Phase 240/415V Generating sets) to cater for the
              Peak and Off-peak period of the Facility. The 250KVA Generating
              sets was sized to cater for the Temple only when the whole
              building will be in full capacity with the proviso that all other
              buildings will not be in use concurrently. This assumption is
              based on the Brief from the Client.
              <br />
              <br />
              -SINGLE AND 3-PHASE POWER Power to appliance and general sockets
              shall be provided to satisfy:
              <br />
              <br />
              a) Main/Raw Power:- This shall be provided through the use of 13A
              switched socket outlets whereas other portable equipment such as
              Split air-conditioning Equiment shall be powered accordingly.
              <br />
              <br />
              b) Clean Power:- A system of clean power shall be provided for
              through the deployment of 50KVA Solar Inverter system.The Inverter
              system is design to cater for clean power requirement of the
              building to sustain the equipment during outage of public mains.
              <br />
              <br />
              c) It has been designed such that all the dedicated equipment
              shall be fed from this source as may be required.
              <br />
              <br />
              d) The lighting fittings in all the functional areas shall be
              supplied with clean power to sustain the power requirement during
              outage
              <br />
              <br />
              e) All electrical Accessories shall be CLICK/ LEGRAND type or as
              being approved by the Client. These shall meet necessary
              requirements in respect of various space utilizaiton.
              <br />
              <br />
              e) All electrical Accessories shall be CLICK/ LEGRAND type or as
              being approved by the Client. These shall meet necessary
              requirements in respect of various space utilizaiton. <br />
              <br />
              <strong>3. PROTECTION SYSTEM</strong>
              <br />
              <br />
              The protection of the building and equipment shall be carried out
              in accordance with the code of practices and standards that will
              ensure adequate protection of the compound. The protection system
              shall include:
              <br />
              <br />- Lightning Protection System. The entire facility complex
              shall be protected from lightning strike through the use of area
              protection method in accordance with the international codes. The
              system shall be grounded adequately to ensure that the entire
              premises is safe.
              <br />
              <br />- Surge Protection. The entire system will be protected
              against electrical surges by the introduction of electrical surge
              protecting devices in all the electrical panels to be deployed on
              the project. - Earthing and Bonding. Will be provided in
              accordance with the IEE Wiring regulations 18th Edition. Clean
              earth facilities will be provided at each floor level through an
              isolated copper earth tape routed through the electrical riser
              duct and connect to a D.C resistance earth electrode network
              positioned at a suitable location near the building.
              <br />
              <br /> <strong>4. EXTRA-LOW VOLTAGE SYSTEMS</strong>
              <br />- The system shall be provided in accordance with the local
              Municipal Regulations, Electrical Installations for Building – IEC
              60364 (as amended), Requirements for Electrical Installations – BS
              7671 (as amended) and the Local Authority By-Laws and Regulations
              and any regulations of the Supplier of Electricity. The design
              shall be tailored towards the actualisation of the Client’s
              security philosophy which is to have a working environment that is
              “FRIENDLY & SECURED”. <br />
              <br />- CCTV Installation. CCTV surveillance shall be provided as
              follows: i. Outdoor pan tilt zoom (PTZ) cameras ii. Outdoor fixed
              cameras iii. Indoor cameras at each of the following locations:
              Escape stairs at exit levels; Main ground floor lobby areas;
              Lobbies on each floor; Public areas; Entrance to server rooms as
              well as other spaces that might be confirmed as high security risk
              areas by the client.
              <br />
              <br />- Network and digital video recorders
              <br />
              <br />- Monitors
              <br />
              <br />- Fire Detection and Alarm System. The analogue Addressable
              System that satisfy the latest standards of detection of fire
              hazard shall be adopted for total protection of the building has
              been designed. <br />
              <br />
              The design is to eliminate false alarm by the adoption of the
              advance sensing equipment and sensors.
              <br /> <br /> <strong>CCTV Cameras and Monitoring Room</strong>
              <br /> <br />
              The CCTV head-end cabinet shall be located within the security
              equipment room and surveillance monitoring shall be done within
              the security control room.
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default DesignSystemsElec;
