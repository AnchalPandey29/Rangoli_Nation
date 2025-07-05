import React from 'react';
import { Container, Grid, Typography, Button, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const theme = useTheme();

  const slideVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -80 : 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  });

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(to bottom, #FFF8E1, #FFFFFF)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideVariants('left')}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Lora", serif',
              fontWeight: 700,
              color: '#800000',
              textAlign: 'center',
              mb: 1,
              fontSize: { xs: '2rem', md: '2.75rem' },
              letterSpacing: '0.03em',
            }}
          >
            About Rangoli Nation
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              color: '#555',
              fontFamily: '"Open Sans", sans-serif',
              mb: 3,
              fontSize: { xs: '1rem', md: '1.1rem' },
            }}
          >
            Preserving Heritage. Empowering Artisans. Illuminating Traditions.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
            <svg
              width="90"
              height="24"
              viewBox="0 0 80 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0c-2 2-5 4-10 4s-8-2-10-4c2 2 5 6 10 6s8-4 10-6zm0 8c-2 2-5 4-10 4s-8-2-10-4c2 2 5 6 10 6s8-4 10-6zm0 8c-2 2-5 4-10 4s-8-2-10-4c2 2 5 6 10 6s8-4 10-6z"
                fill="#FF9933"
              />
            </svg>
          </Box>
        </motion.div>

        {/* Content Grid */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('right')}
              viewport={{ once: true }}
              whileHover={{ scale: 1.015 }}
            >
              <motion.img
                src="https://islandrangoli.com/cdn/shop/files/bhavy_2.jpg?v=1709707321"
                alt="Artisan crafting diya"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  objectFit: 'cover',
                  maxHeight: '420px',
                }}
                loading="lazy"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('left')}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: '#333',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.75,
                  mb: 3,
                }}
              >
                At <strong>Rangoli Nation</strong>, we celebrate the intricate soul of Indian culture
                through artisan-crafted spiritual goods. From hand-poured akhand diyas to
                calligraphy sets, each creation echoes the devotion and artistry of our skilled
                makers. We are committed to lighting your spiritual journey with authenticity,
                purpose, and the timeless charm of heritage.
              </Typography>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FF9933',
                    color: '#fff',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(255, 153, 51, 0.4)',
                    transition: '0.3s',
                    '&:hover': {
                      backgroundColor: '#FFD700',
                      color: '#800000',
                      boxShadow: '0 6px 16px rgba(255, 153, 51, 0.5)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
