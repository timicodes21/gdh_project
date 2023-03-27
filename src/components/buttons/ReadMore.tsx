import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlinePause,
} from 'react-icons/ai';

interface IProps {
  onClick: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  isPlaying?: boolean;
  btnColor?: boolean;
}

const ReadMore: React.FC<IProps> = ({
  onClick,
  onPlay,
  isPlaying,
  onPause,
  btnColor,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
        className="pointer"
      >
        {isPlaying ? (
          <AiFillPauseCircle
            onClick={onPause}
            style={
              btnColor
                ? { color: '#ffffff', fontSize: '32px' }
                : { color: '#667085', fontSize: '32px' }
            }
          />
        ) : (
          <AiFillPlayCircle
            onClick={onPlay}
            style={
              btnColor
                ? { color: '#ffffff', fontSize: '32px' }
                : { color: '#667085', fontSize: '32px' }
            }
          />
        )}
        {/* <Image
          src="/assets/icons/play_icon.svg"
          alt="play icon"
          width={23}
          height={23}
          onClick={onPlay}
        /> */}
        <p
          className={
            btnColor
              ? 'text-white font-16 font-400'
              : 'text-secondary-4 font-16 font-400'
          }
          style={{ margin: '0 10px' }}
          onClick={onClick}
        >
          Read more
        </p>
        <FaLongArrowAltRight
          className={
            btnColor
              ? 'text-white font-16 font-400'
              : 'text-secondary-4 font-16 font-400'
          }
        />
      </Box>
    </>
  );
};

export default ReadMore;
