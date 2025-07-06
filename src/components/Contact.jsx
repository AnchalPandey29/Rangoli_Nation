import React from 'react';
import { Container, Grid, Typography, TextField, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp, Phone, Email, LocationOn, Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Contact = () => {
  // Animation variants for alternating slide-ins
  const slideVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  });

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        background: 'linear-gradient(180deg, #FFFDD0 0%, #FFFFFF 100%)',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideVariants('left')}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
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
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Lora", serif',
              fontWeight: 700,
              color: '#4B0000',
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
              letterSpacing: '0.05em',
            }}
            aria-label="Contact Us"
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              color: '#666',
              textAlign: 'center',
              mb: 4,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            We're here to assist you with all your queries. Reach out via the form or connect with us directly!
          </Typography>
        </motion.div>

        {/* Contact Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('right')}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  minWidth: { xs: 280, sm: 320, md: 360 },
                  maxWidth: { xs: 500, sm: 600 },
                  width: '100%',
                  mx: 'auto',
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  backgroundColor: '#FFFFFF',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
                role="form"
                aria-label="Contact form"
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, sm: 3 } }}>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                          bgcolor: '#FFFDD0',
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FF9933', boxShadow: '0 0 8px rgba(255,153,51,0.3)' },
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
                          borderRadius: '8px',
                          bgcolor: '#FFFDD0',
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FF9933', boxShadow: '0 0 8px rgba(255,153,51,0.3)' },
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
                          borderRadius: '8px',
                          bgcolor: '#FFFDD0',
                          '&:hover fieldset': { borderColor: '#FFD700' },
                          '&.Mui-focused fieldset': { borderColor: '#FF9933', boxShadow: '0 0 8px rgba(255,153,51,0.3)' },
                        },
                      }}
                      inputProps={{ 'aria-label': 'Your message' }}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Box
                      component="button"
                      sx={{
                        backgroundColor: '#FF9933',
                        color: '#FFFDD0',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        px: { xs: 4, sm: 5 },
                        py: 1.5,
                        borderRadius: '10px',
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        '&:hover': { backgroundColor: '#FFD700', color: '#4B0000', transform: 'scale(1.05)' },
                        transition: 'all 0.3s',
                        alignSelf: 'center',
                      }}
                      aria-label="Send message"
                    >
                      Send Message
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={10} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('left')}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  minWidth: { xs: 280, sm: 320, md: 360 },
                  maxWidth: { xs: 500, sm: 600 },
                  width: '100%',
                  mx: 'auto',
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  backgroundColor: '#FFFFFF',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.02)' },
                }}
              >
               
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Phone sx={{ color: '#FF9933', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
                    <Typography
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        color: '#333',
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                      }}
                    >
                      <strong>Phone:</strong>{' '}
                      <a
                        href="tel:+911234567890"
                        style={{ color: '#FF9933', textDecoration: 'none' }}
                        aria-label="Call us at +91 123-456-7890"
                      >
                        +91 123-456-7890
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <WhatsApp sx={{ color: '#FF9933', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
                    <Typography
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        color: '#333',
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                      }}
                    >
                      <strong>WhatsApp:</strong>{' '}
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#FF9933', textDecoration: 'none' }}
                        aria-label="Contact us on WhatsApp at +91 987-654-3210"
                      >
                        +91 987-654-3210
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Email sx={{ color: '#FF9933', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
                    <Typography
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        color: '#333',
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                      }}
                    >
                      <strong>Email:</strong>{' '}
                      <a
                        href="mailto:support@rangolination.com"
                        style={{ color: '#FF9933', textDecoration: 'none' }}
                        aria-label="Email us at support@rangolination.com"
                      >
                        support@rangolination.com
                      </a>
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <LocationOn sx={{ color: '#FF9933', fontSize: { xs: '1.25rem', sm: '1.5rem' } }} />
                    <Typography
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        color: '#333',
                        fontSize: { xs: '0.9rem', sm: '0.95rem', md: '1rem' },
                      }}
                    >
                      <strong>Address:</strong> 123 Spiritual Lane, Mumbai, India
                    </Typography>
                  </Box>
                </Box>
  <motion.iframe
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.789!2d72.834189!3d19.076090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306649b517%3A0x1e7b7e8a932c0a7a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
                  style={{
                    width: '100%',
                    height: { xs: '180px', sm: '220px', md: '300px' },
                    borderRadius: '12px',
                    border: '1px solid #FF9933',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Rangoli Nation Location"
                />

                <Typography
                  sx={{
                    fontFamily: '"Lora", serif',
                    color: '#4B0000',
                    mt: 2,
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    gap: { xs: 1, sm: 1.5 },
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: { xs: 300, sm: 400 },
                    mx: 'auto',
                    mb: 1,
                  
                  }}
                >
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <IconButton
                      href="https://www.instagram.com/rangolination"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      sx={{ color: '#FF9933', '&:hover': { color: '#FFD700' }, p: { xs: 0.5, sm: 1 } }}
                    >
<Instagram sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                    </IconButton>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <IconButton
                      href="https://www.facebook.com/rangolination"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                      sx={{ color: '#FF9933', '&:hover': { color: '#FFD700' }, p: { xs: 0.5, sm: 1 } }}
                    >
<Facebook sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                    </IconButton>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <IconButton
                      href="https://twitter.com/rangolination"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Twitter"
                      sx={{ color: '#FF9933', '&:hover': { color: '#FFD700' }, p: { xs: 0.5, sm: 1 } }}
                    >
<Twitter sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                    </IconButton>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <IconButton
                      href="https://www.linkedin.com/company/rangolination"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on LinkedIn"
                      sx={{ color: '#FF9933', '&:hover': { color: '#FFD700' }, p: { xs: 0.5, sm: 1 } }}
                    >
<LinkedIn sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }} />
                    </IconButton>
                  </motion.div>
                </Box>
              
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;