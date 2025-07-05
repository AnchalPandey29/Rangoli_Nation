// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, IconButton, Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Scroll-based background opacity and shadow
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const shadowOpacity = useTransform(scrollY, [0, 100], [0, 0.3]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: `linear-gradient(to right, #800000, #4B0000)`,
        opacity: backgroundOpacity,
        boxShadow: `0 4px 12px rgba(0, 0, 0, ${shadowOpacity.get()})`,
        color: '#FFFFFF', // White text for high contrast
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
         
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Lora", serif',
              fontWeight: 700,
              color: '#FFD700', // Gold for logo text
              fontSize: { xs: '1.5rem', md: '2rem' },
              letterSpacing: '0.05em',
            }}
          >
            Rangoli Nation
          </Typography>
        </Link>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {['Home', 'Shop', 'Blog', 'About', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={({ isActive }) => ({
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: isActive ? '#FFD700' : '#FFFFFF', // White for visibility, gold for active
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                borderBottom: isActive ? '2px solid #FFD700' : 'none',
                transition: 'all 0.3s ease',
              })}
              onMouseEnter={(e) => {
                if (!e.currentTarget.isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                  e.currentTarget.style.color = '#FFD700';
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }
              }}
            >
              {item}
            </NavLink>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { md: 'none' }, color: '#FFFFFF' }}
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <motion.svg
            style={{ width: '28px', height: '28px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ rotate: 0 }}
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </motion.svg>
        </IconButton>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            background: '#800000',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '16px',
            zIndex: 999,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          {['Home', 'Shop', 'Blog', 'About', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={({ isActive }) => ({
                  display: 'block',
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: isActive ? '#FFD700' : '#FFFFFF', // White for visibility
                  textDecoration: 'none',
                  padding: '12px 0',
                  borderBottom: isActive ? '2px solid #FFD700' : 'none',
                  transition: 'all 0.3s ease',
                })}
                onClick={toggleMobileMenu}
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;