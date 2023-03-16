import React from "react";
import { Box } from "@mui/material";
import Wrapper from "@/components/layout/Wrapper";
import Image from "next/image";
import classes from "../../../styles/Home.module.css";
import Carousel from "react-material-ui-carousel";
import { acousticSystemImages, electricalSystemImages } from "@/data/images";
import ReadMore from "@/components/buttons/ReadMore";
import { useModal } from "@/hooks/useModal";
import CustomModal from "@/components/modals/CustomModal";

const ProspectiveVendors = () => {
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
                Prospective Vendors
              </p>
            </Box>

            <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
              <p
                className="text-secondary-4 font-32 font-300 avenuex text-justify text-justify"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                “The GT will be the abode of the Almighty God on earth. Numerous
                reports have confirmed this over the years. On that basis, we
                asked ourselves some questions: Should we cut corners with such
                an edifice?; Should we short-change God and set our sights low?
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
              Prospective Vendors
            </p>
            <p className="text-secondary-4 font-32 font-300 avenuex text-justify line-150">
              “The GT will be the abode of the Almighty God on earth. Numerous
              reports have confirmed this over the years. On that basis, we
              asked ourselves some questions: Should we cut corners with such an
              edifice?; Should we short-change God and set our sights low?
              <strong>
                We have committed ourselves to not bring God down to our own
                level
              </strong>
              Committing the building and completion of this edifice to prayer,
              we asked God to open opportunities for appointed companies and
              organisation to join in the divine project. <br />
              <br />
              The companies that we have come across during the building of this
              edifice represent the very best in their various fields of
              expertise. <br />
              As an example, this company from Italy has vast experience and
              expertise in churches. Italy, the home of the Pope, is well known
              for its architecturally superb churches going back thousands of
              years. Every interaction with this company has been hugely
              beneficial. They, alongside their local technical partners have
              worked on quite a few churches both in Ghana, Lagos and the
              South-Western States of Nigeria. They are also one of the official
              technical teams for Catholic Churches around Italy. This includes
              the Vatican.”
            </p>
            <Box>
              <img
                src="/assets/images/prospective_vendors_table.PNG"
                alt="table"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default ProspectiveVendors;
