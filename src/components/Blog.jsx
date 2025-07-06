// src/components/Blog.jsx
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'DIY Rangoli Tutorial',
      img: 'https://static.vecteezy.com/system/resources/previews/029/632/120/non_2x/oil-lamps-lit-on-colorful-rangoli-during-diwali-celebration-colorful-clay-diya-lamps-with-flowers-free-photo.jpeg',
      desc: 'Learn to create stunning rangoli designs with our step-by-step guide.',
    },
    {
      title: 'Akhand Diya Guide',
      img: 'https://m.media-amazon.com/images/I/71uHINih-TL.jpg',
      desc: 'Discover how to maintain an akhand diya for continuous spiritual light.',
    },
    {
      title: 'Calligraphy Art Tips',
      img: 'https://isomarsshop.in/cdn/shop/products/71Dkzmm7qNL._SL1438.jpg',
      desc: 'Master spiritual calligraphy with our expert tips and tools.',
    },
  ];

  // Animation variants for alternating slide-ins
  const slideVariants = (index) => ({
    hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.2 } },
  });

  return (
    <Box
      sx={{py: { xs: 4, sm: 6, md: 8 },
        background: 'linear-gradient(to bottom, #FFFDD0, #FFFFFF)',
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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
            aria-label="Our Blog"
          >
            Our Blog
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

        {/* Blog Grid */}
        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          {posts.map((post, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={slideVariants(index)}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15), 0 0 0 2px #FFD700',
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  sx={{
                    minWidth: 280,
                    maxWidth: 500,
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  role="region"
                  aria-label={`Blog post: ${post.title}`}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.img}
                    alt={post.title}
                    loading="lazy"
                    sx={{ objectFit: 'cover', flexShrink: 0 }}
                  />
                  <CardContent
                    sx={{
                      p: 3,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Lora", serif',
                          color: '#800000',
                          fontWeight: 600,
                          mb: 1,
                          fontSize: { xs: '1.25rem', md: '1.5rem' },
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: '"Open Sans", sans-serif',
                          color: '#666',
                          fontSize: { xs: '0.875rem', md: '0.95rem' },
                          lineHeight: 1.5,
                          mb: 2,
                        }}
                      >
                        {post.desc}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: '#FF9933',
                            color: '#FFFFFF',
                            fontFamily: '"Open Sans", sans-serif',
                            fontWeight: 600,
                            px: 3,
                            py: 1,
                            borderRadius: '8px',
                            '&:hover': { backgroundColor: '#FFD700', color: '#800000' },
                            fontSize: { xs: '0.875rem', md: '0.95rem' },
                            flex: 1,
                          }}
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read More
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: '#FF9933',
                            color: '#FF9933',
                            fontFamily: '"Open Sans", sans-serif',
                            fontWeight: 600,
                            px: 3,
                            py: 1,
                            borderRadius: '8px',
                            '&:hover': { backgroundColor: '#FF9933', color: '#FFFFFF' },
                            fontSize: { xs: '0.875rem', md: '0.95rem' },
                            flex: 1,
                          }}
                          aria-label={`Share ${post.title}`}
                        >
                          Share
                        </Button>
                      </motion.div>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;