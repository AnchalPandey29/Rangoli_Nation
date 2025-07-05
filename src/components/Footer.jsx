import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants for alternating slide-ins
  const slideVariants = (direction) => ({
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  });

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(to bottom, #800000, #4B0000)', // Maroon gradient
        color: '#FFFDD0',
        paddingTop: 32,
        paddingBottom: 32,
        marginTop: 'auto',
      }}
      role="contentinfo"
    >
      <Container maxWidth="lg">
        {/* Decorative Divider */}
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

        {/* Footer Grid */}
        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('left')}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Lora", serif',
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                Rangoli Nation
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: { xs: '0.875rem', md: '0.95rem' },
                  lineHeight: 1.6,
                  maxWidth: 360,
                }}
              >
                Bringing the essence of Indian traditions to your home with handcrafted spiritual products.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('right')}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Lora", serif',
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  color: '#FFFDD0',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5}}>
                {['Home', 'Shop', 'Blog', 'About', 'Contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      style={{
                        display: 'block',
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '0.85rem',
                        color: '#FFFDD0',
                        textDecoration: 'none',
                        padding: '2px 0',
                      }}
                      sx={{
                        '&:hover': {
                          color: '#FFD700',
                          borderBottom: '1px solid #FFD700',
                        },
                      }}
                      aria-label={`Navigate to ${item} page`}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideVariants('left')}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Lora", serif',
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <motion.a
                  href="https://instagram.com"
                  aria-label="Visit our Instagram page"
                  whileHover={{ scale: 1.1, color: '#FFD700' }}
                  transition={{ duration: 0.3 }}
                  style={{ color: '#FFFDD0' }}
                >
                  <svg
                    style={{ width: '32px', height: '32px' }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.465.066-2.867.364-4.135 1.632C1.645 2.972 1.347 4.374 1.281 5.839c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.066 1.465.364 2.867 1.632 4.135 1.268 1.268 2.67 1.566 4.135 1.632 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.465-.066 2.867-.364 4.135-1.632 1.268-1.268 1.566-2.67 1.632-4.135.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.066-1.465-.364-2.867-1.632-4.135-1.268-1.268-2.67-1.566-4.135-1.632-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://pinterest.com"
                  aria-label="Visit our Pinterest page"
                  whileHover={{ scale: 1.1, color: '#FFD700' }}
                  transition={{ duration: 0.3 }}
                  style={{ color: '#FFFDD0' }}
                >
                  <svg
                    style={{ width: '32px', height: '32px' }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.623 3.872 10.328 9.092 11.63-.122-1.1-.193-2.798.07-4.007.237-1.087 1.533-6.52 1.533-6.52s-.39-.781-.39-1.937c0-1.813 1.05-3.166 2.357-3.166 1.112 0 1.646.835 1.646 1.835 0 1.116-.708 2.787-.708 4.335 0 2.26 1.466 4.102 3.446 4.102 4.133 0 7.31-4.354 7.31-10.615 0-5.55-3.99-9.42-9.686-9.42z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  aria-label="Visit our Facebook page"
                  whileHover={{ scale: 1.1, color: '#FFD700' }}
                  transition={{ duration: 0.3 }}
                  style={{ color: '#FFFDD0' }}
                >
                  <svg
                    style={{ width: '32px', height: '32px' }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Rights Section */}
         <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Typography
            sx={{
              mt: 2,
              fontFamily: '"Open Sans", sans-serif',
              fontSize: { xs: '0.875rem', md: '0.95rem' },
              textAlign: 'center',
              width: '100%',
            }}
          >
            © 2025 Rangoli Nation. All rights reserved.{' '}
            <motion.a
              href="https://anchalpandey.dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: '#FFD700' }}
              transition={{ duration: 0.2 }}
              style={{ color: '#FFFDD0', textDecoration: 'none' }}
              aria-label="Visit Anchal Pandey's portfolio"
            >
              Developed by Anchal Pandey
            </motion.a>
          </Typography>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;