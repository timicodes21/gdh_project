import BlueBadge from "@/components/badges/BlueBadge";
import Wrapper from "@/components/layout/Wrapper";
import { Box, Grid } from "@mui/material";
import React from "react";
import { FiHelpCircle } from "react-icons/fi";

interface IProps {
  templePage?: boolean;
}

const Excited: React.FC<IProps> = ({ templePage }) => {
  function scrollToTop() {
    if (window !== undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Box sx={{ py: 5 }}>
      <Wrapper>
        <p className="text-secondary-3 font-48 font-400 montaga text-center">
          {templePage
            ? "Excited by this section?"
            : "Excited with what you have seen so far?"}
        </p>
        <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
          <p className="text-secondary-4 font-32 font-400 avenuex text-center">
            "Join us in building God&apos;s Grand Temple. Your donation will
            bring us closer to fulfilling God&apos;s divine plan and bring
            blessings to our community. Let&apos;s come together to make this a
            reality. Donate now."
          </p>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <BlueBadge onCopy={() => {}} />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlueBadge onCopy={() => {}} />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlueBadge onCopy={() => {}} />
          </Grid>
        </Grid>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
            mt: 5,
            justifyContent: "center",
          }}
        >
          <span
            className="font-20 font-400 avenir text-error bg-error"
            style={{ padding: 10, alignItems: "center" }}
          >
            <FiHelpCircle
              className="text-error"
              style={{ marginRight: "10px", background: "#FEF3F2" }}
            />
            Use section name as the description when making a transfer towards
            this section
          </span>
        </Box>
        {!templePage && (
          <Box sx={{ my: 10, display: "flex", justifyContent: "center" }}>
            <p
              className="pointer font-24 font-400 text-secondary-4 satoshi"
              onClick={scrollToTop}
            >
              Go back up
            </p>
          </Box>
        )}
      </Wrapper>
    </Box>
  );
};

export default Excited;
