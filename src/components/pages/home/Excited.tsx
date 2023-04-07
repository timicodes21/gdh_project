import BlueBadge from '@/components/badges/BlueBadge';
import Wrapper from '@/components/layout/Wrapper';
import { useExcited } from '@/hooks/useExcited';
import { Box, Grid } from '@mui/material';
import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

interface IProps {
  templePage?: boolean;
}

const Excited: React.FC<IProps> = ({ templePage }) => {
  const { scrollToTop } = useExcited();

  return (
    <Box sx={{ py: 5 }}>
      <div id="excited">
        <Wrapper>
          <p
            className="text-secondary-3 font-48 font-400 montaga text-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {templePage
              ? 'Excited by this section?'
              : 'Excited with what you have seen so far?'}
          </p>
          <Box sx={{ px: { xs: 1, md: 5, lg: 10 } }}>
            <p
              className="text-secondary-4 font-32 font-400 avenuex text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              &quot;Join us in building God&apos;s Grand Temple. Your donation
              will bring us closer to fulfilling God&apos;s divine plan and
              bring blessings to our community. Let&apos;s come together to make
              this a reality. Donate now.&quot;
            </p>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <BlueBadge
                text1="Bank Name"
                text2="
                Guaranty Trust Bank
              "
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlueBadge text1="Account Name" text2="GDHOTE" />
            </Grid>
            <Grid item xs={12} md={4}>
              <BlueBadge text1="Account Number" text2="0007981969" />
            </Grid>
          </Grid>
          {/* <Box
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
          </Box> */}
          {!templePage && (
            <Box sx={{ my: 10, display: 'flex', justifyContent: 'center' }}>
              <p
                className="pointer font-24 font-400 text-secondary-4 satoshi"
                onClick={scrollToTop}
              >
                Go back up
              </p>
            </Box>
          )}
        </Wrapper>
      </div>
    </Box>
  );
};

export default Excited;
