import { Box, Button, IconButton, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { MdFileCopy } from 'react-icons/md';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useExcited } from '@/hooks/useExcited';

interface IProps {
  // onCopy: () => void;
  text1: string;
  text2: string;
}

const BlueBadge: React.FC<IProps> = ({ text1, text2 }) => {
  const [copied, setCopied] = useState(false);
  // const { value, setValue, copied, setCopied, copyToClipboard } = useExcited();
  return (
    // <CopyToClipboard text={value} onCopy={copyToClipboard}>
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        background: '#E4F0FF',
        borderRadius: '32px',
        position: 'relative',
        cursor: 'pointer',
      }}
      onClick={() => {
        navigator.clipboard.writeText(text2);
        setCopied(true);
      }}
    >
      <Box>
        <span className="font-16 font-400 text-primary satoshi">{text1}</span>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span className="font-24 font-500 text-primary satoshi">{text2}</span>

        <MdFileCopy
          className="text-primary font-24 pointer"
          style={{
            position: 'absolute',
            right: '1.5rem',
          }}
          onClick={() => {
            navigator.clipboard.writeText(text2);
            setCopied(true);
          }}
        />
      </Box>
      <Snackbar
        open={copied}
        autoHideDuration={4000}
        onClose={() => setCopied(false)}
        message={`${text1} copied to clipboard`}
      />
    </Box>
    // </CopyToClipboard>
  );
};

export default BlueBadge;
