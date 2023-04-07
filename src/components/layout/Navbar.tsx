import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { navbarHomeItems, navbarItems, navbarWhereItems } from '@/data/navbar';
import TransparentButton from '../buttons/TransparentButton';
import BlueButton from '../buttons/BlueButton';
import { useRouter } from 'next/router';
import { useNavbar } from '@/hooks/useNavbar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import classes from '../../styles/Home.module.css';
import CustomModal from '../modals/CustomModal';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();

  const {
    show,
    toggleNav,
    closeNav,
    mobileNav,
    showLanguage,
    toggleLanguageModal,
    languageText,
    changeLanguage,
  } = useNavbar();

  return (
    <Box
      sx={{
        background: '#FFFEF9',
        boxShadow: '0px 4px 38px rgba(0, 0, 0, 0.05)',
        py: { xs: 1, md: 1 },
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
      }}
      className={show ? 'nav_container inter' : 'nav_container hide'}
    >
      <Wrapper>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Image
                src="/assets/icons/small_logo.svg"
                width={62}
                height={49}
                alt="logo"
                onClick={() => router.push('/home')}
                className="pointer"
              />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Image
                src="/assets/icons/small_logo.svg"
                width={41}
                height={32.5}
                alt="logo"
                onClick={() => router.push('/home')}
                className="pointer"
              />
            </Box>

            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Box sx={{ ml: 2 }} className="dropdown">
                <Link
                  href="/home"
                  className={
                    router.pathname === '/home'
                      ? 'navbar_link_active'
                      : 'navbar_link'
                  }
                >
                  Where we Started
                </Link>
                <Box className="dropdown_content height_increase" sx={{ p: 2 }}>
                  {navbarHomeItems.map((item, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <a
                        href={item.link}
                        className={
                          router.pathname === item?.link
                            ? 'navbar_link_active'
                            : 'navbar_link'
                        }
                      >
                        {item.text}
                      </a>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ ml: 2 }}>
                <Box className="dropdown">
                  <Link
                    href="/where_we_are_going"
                    className={
                      router.pathname.includes('/where_we_are_going')
                        ? 'navbar_link_active'
                        : 'navbar_link'
                    }
                  >
                    Where we are going
                  </Link>
                  <Box className="dropdown_content" sx={{ p: 2 }}>
                    {navbarWhereItems.map((item, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Link
                          href={item.link}
                          className={
                            router.pathname === item?.link
                              ? 'navbar_link_active'
                              : 'navbar_link'
                          }
                        >
                          {item.text}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}
          >
            {/* <TransparentButton
              onClick={toggleLanguageModal}
              dropdown
              size="small"
            >
              {languageText}
            </TransparentButton> */}
            <Box sx={{ mx: 1 }}></Box>
            <a href="#excited">
              <BlueButton onClick={() => {}} arrow size="small">
                Make a donation
              </BlueButton>
            </a>
          </Box>
          <Box
            sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center' }}
          >
            <HiOutlineMenuAlt3
              style={{ color: '#74757E', fontWeight: 900, fontSize: '28px' }}
              onClick={mobileNav ? closeNav : toggleNav}
              className="pointer"
            />
          </Box>
          <Box
            className={`mobile-navbar ${mobileNav && 'open'}`}
            sx={{ background: '#FFF', p: 2 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                background: '#FFF',
              }}
            >
              <Box>
                <IoMdClose
                  style={{
                    color: '#74757E',
                    fontWeight: 1000,
                    fontSize: '28px',
                  }}
                  onClick={closeNav}
                  className="pointer"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                mt: 2,
              }}
            >
              <Box sx={{ ml: 2, mt: { xs: 2, md: 3 } }} className="dropdown">
                <Link
                  href="/home"
                  className={
                    router.pathname === '/home'
                      ? 'navbar_link_active'
                      : 'navbar_link'
                  }
                  onClick={closeNav}
                >
                  Where we Started
                </Link>
                <Box className="dropdown_content height_increase" sx={{ p: 2 }}>
                  {navbarHomeItems.map((item, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <a
                        href={item.link}
                        className={
                          router.pathname === item?.link
                            ? 'navbar_link_active'
                            : 'navbar_link'
                        }
                      >
                        {item.text}
                      </a>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ ml: 2, mt: { xs: 2, md: 3 } }} className="dropdown">
                <Link
                  href="/where_we_are_going"
                  className={
                    router.pathname === '/where_we_are_going'
                      ? 'navbar_link_active'
                      : 'navbar_link'
                  }
                  onClick={closeNav}
                >
                  Where we are going
                </Link>
                <Box className="dropdown_content" sx={{ p: 2 }}>
                  {navbarWhereItems.map((item, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <a
                        href={item.link}
                        className={
                          router.pathname === item?.link
                            ? 'navbar_link_active'
                            : 'navbar_link'
                        }
                      >
                        {item.text}
                      </a>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
              <TransparentButton onClick={toggleLanguageModal} dropdown>
                {languageText}
              </TransparentButton>
              <Box sx={{ mt: 1 }}></Box>
              <a href="#excited">
                <BlueButton onClick={() => {}} arrow width="100%">
                  Make a donation
                </BlueButton>
              </a>
            </Box>
          </Box>
        </Box>
      </Wrapper>
      <CustomModal
        open={showLanguage}
        closeModal={toggleLanguageModal}
        hideCloseIcon
      >
        {['English', 'Yoruba'].map((item, index) => (
          <Box
            className="pointer"
            sx={{ py: 1 }}
            onClick={() => changeLanguage(item)}
            key={index}
          >
            <span className="font-16 font-400 satoshi">{item}</span>
          </Box>
        ))}
      </CustomModal>
    </Box>
  );
};

export default Navbar;
