import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const DesignStratedyRoma = () => {
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
                DESIGN STRATEGY BY ROMA, ITALY
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
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <ReadMore onClick={openModal} />
              </Box>
            </Box>
          </div>
        </Wrapper>
      </Box>
      <CustomModal open={open} closeModal={closeModal}>
        <Box sx={{ overflowY: "scroll" }} className={classes?.scroll}>
          <Box>
            <p className="font-52 font-400 text-secondary-3 montaga">
              DESIGN STRATEGY BY ROMA, ITALY
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              <strong>Rosso Verona Marble</strong> <br />
              <br />
              The Rosso di Verona is one of the most famous and best known
              Italian ornamental rocks in the world. It is considered the red
              marble par excellence. It is characterised by the colour ranging
              from intense red to pale pink, and fossil shells that are trapped
              there, especially ammonites. The name of these shells comes from
              the depictions of Jupiter Ammon, Roman deity, represented with
              spiral horns. Rosso Verona was appreciated and used since ancient
              times, modelled in columns, tiles, bas-reliefs and sculptures to
              decorate palaces and churches, not only in Verona but throughout
              Italy. It is found on the facade of the Doge’s Palace and in the
              Basilica of San Marco in Venice and in other medieval and
              Renaissance churches throughout Italy. Dimension: 20mm thick
              <br />
              <br />
              <strong>White Carrara Marble:</strong> <br />
              <br />
              Carrara white marble is the marble par excellence. The discovery
              of the marble deposits of Carrara dates back to about 155 b.C. .
              Over the centuries this new material has captured the attention of
              important artists and patrons, among them: Nicola Pisano went to
              Carrara in 1256 to select the marbles for the realisation of the
              pulpit of the Cathedral of Siena; Later, in 1497, the young
              Michelangelo Buonarroti visited the quarries to find the most
              suitable marble for the realisation of the Pietà. In the fifteenth
              century many artists such as Donatello, Bernini and Canova chose
              Carrara marble to create their great works. Dimension: 20mm thick
              <br />
              <br />
              <strong>Yellow Siena Marble:</strong> <br />
              <br />
              From Siena in Tuscany comes one of the most famous and most
              beautiful &quot;Marbles&quot; in Italy, appreciated since ancient
              times: the &quot;Giallo Siena&quot;. In fact, yellow recalls the
              image of gold and sun, is a symbol of luxury and strength, and
              emblem of military triumphs, coronations, royal weddings, so much
              so that it is called &quot;lithic gold&quot;, also for its rarity.
              The beauty of the Yellow Marble of Siena, in addition to the high
              intensity of yellow, is due to the veins, from ivory white to
              grey-blue to reddish, which offer an amazing polychromatic
              universe, capable of arousing admiration and stimulating artistic
              creativity. Dimension: 14mm thick
              <br />
              <br />
            </p>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default DesignStratedyRoma;
