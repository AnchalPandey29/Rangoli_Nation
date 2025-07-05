// src/components/Contact.jsx
import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  // Animation variants for alternating slide-ins
  const slideVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  });

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        background: 'linear-gradient(to bottom, #FFFDD0, #FFFFFF)', // Cream to white gradient
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideVariants('left')}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Lora", serif',
              fontWeight: 700,
              color: '#800000',
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              letterSpacing: '0.05em',
            }}
            aria-label="Contact Us"
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <svg
              width="80"
              height="20"
              viewBox="0 0 80 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M40 0c-2 2-5 4-10 4s-8-2-10-4c2 2 5 6 10 6s8-4 10-6zm0 8c-2 2-5 4-10 4s-8-2-10-4c2 2 5 6 10 6s8-4 10-6zm0 8c-2 2-5 4-10 4s-8-2-10-4c2 2 5 6 10 6s8-4 10-6z"
                fill="#FF9933"
              />
            </svg>
          </Box>
        </motion.div>

        {/* Contact Grid */}
        <Grid container spacing={{ xs: 2, md: 5 }} justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('right')}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  minWidth: 280,
                  maxWidth: 600,
                  width: '100%',
                  p: 3,
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  backgroundColor: '#FFFFFF',
                }}
                role="form"
                aria-label="Contact form"
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FF9933' },
                        },
                      }}
                      inputProps={{ 'aria-label': 'Your name' }}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FF9933' },
                        },
                      }}
                      inputProps={{ 'aria-label': 'Your email address' }}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FF9933' },
                        },
                      }}
                      inputProps={{ 'aria-label': 'Your message' }}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#FF9933',
                        color: '#FFFFFF',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: '#FFD700', color: '#800000' },
                        fontSize: { xs: '0.875rem', md: '0.95rem' },
                      }}
                      aria-label="Send message"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('left')}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  minWidth: 280,
                  maxWidth: 600,
                  width: '100%',
                  p: 3,
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    color: '#333',
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  <strong>Email:</strong> support@rangolination.com<br />
                  <strong>Phone:</strong> +91 123-456-7890<br />
                  <strong>WhatsApp:</strong> +91 987-654-3210<br />
                  <strong>Address:</strong> 123 Spiritual Lane, Mumbai, India
                </Typography>
                <motion.iframe
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.789!2d72.834189!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306649b517%3A0x1e7b7e8a932c0a7a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
                  style={{
                    width: '100%',
                    height: { xs: '200px', md: '300px' },
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Rangoli Nation Location"
                ></motion.iframe>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;