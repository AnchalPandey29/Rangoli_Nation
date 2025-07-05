// src/components/Hero.jsx
import React from 'react';
import { Container, Button, Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]); // Parallax effect

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '80vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#FFFDD0', // Cream fallback
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/029/632/120/non_2x/oil-lamps-lit-on-colorful-rangoli-during-diwali-celebration-colorful-clay-diya-lamps-with-flowers-free-photo.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y, // Parallax effect
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(128, 0, 0, 0.5) 0%, rgba(128, 0, 0, 0.3) 100%)', // Maroon gradient overlay
          }}
        />
      </motion.div>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#FFFDD0' }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Lora", serif',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Celebrate Tradition with Elegance
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Explore our handcrafted akhand diyas, rangoli kits, and spiritual decor to bring light and beauty to your home.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/shop"
            aria-label="Shop Now"
            sx={{
              backgroundColor: '#FF9933', // Saffron
              color: '#FFFDD0', // Cream
              fontFamily: '"Open Sans", sans-serif',
              fontSize: { xs: '1rem', md: '1.125rem' },
              px: { xs: 3, md: 4 },
              py: 1.5,
              borderRadius: '50px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                backgroundColor: '#FFD700', // Gold
                transform: 'scale(1.05)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Shop Now
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;