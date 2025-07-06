import React, { useState, useEffect } from 'react';
import { Container,  Card, CardMedia, CardContent, Typography, Button, Modal, Box, TextField, IconButton, Avatar } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material';
import Hero from './Hero';

const Home = () => {
  const products = [
    { name: 'Akhand Diya', price: '$15', img: 'https://m.media-amazon.com/images/I/71uHINih-TL.jpg', desc: 'Traditional brass oil lamp for continuous burning, handcrafted with intricate details.' },
    { name: 'Rangoli Kit', price: '$25', img: 'https://www.partypropz.com/cdn/shop/files/71CNp-0ziRL._SX679.jpg', desc: 'Vibrant powders and stencils for creating stunning rangoli designs effortlessly.' },
    { name: 'Calligraphy Set', price: '$20', img: 'https://isomarsshop.in/cdn/shop/products/71Dkzmm7qNL._SL1438.jpg', desc: 'Elegant tools for spiritual calligraphy, ideal for sacred art creation.' },
    { name: 'Rangoli Stencils', price: '$10', img: 'https://m.media-amazon.com/images/I/81wFQ2-wmgL.jpg', desc: 'Reusable stencils for crafting precise and beautiful rangoli patterns.' },
    { name: 'Puja Thali', price: '$30', img: 'https://myborosil.com/cdn/shop/files/my-borosil-puja-thali-7-pc-set-samagri-borosil-puja-thali-34040434819210.jpg', desc: 'Ornate thali set for traditional worship, adorned with intricate engravings.' },
  ];

  const testimonials = [
    { 
      quote: 'The akhand diya brings a divine glow to our puja room, truly exceptional!', 
      author: 'Priya S.', 
      avatar: 'https://thumbs.dreamstime.com/b/indian-lady-7221639.jpg' 
    },
    { 
      quote: 'The rangoli kit made our Diwali vibrant and so easy to create!', 
      author: 'Anita R.', 
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeNAkeHrQEHSrK5G2YLhX2TwIG0xJ4Ezqyw&s' 
    },
    { 
      quote: 'The calligraphy set is perfect for my spiritual art projects, highly recommend!', 
      author: 'Vikram M.', 
      avatar: 'https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg' 
    },
  ];

  // Carousel state
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll for product carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentProduct((prev) => (prev + 1) % products.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleNextProduct = () => setCurrentProduct((prev) => (prev + 1) % products.length);
  const handlePrevProduct = () => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length);
  const handleNextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const handlePrevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const handleQuickView = (product) => setQuickViewProduct(product);
  const handleCloseQuickView = () => setQuickViewProduct(null);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 600 },
    bgcolor: '#FFFDD0',
    boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
    p: { xs: 3, sm: 4 },
    borderRadius: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  // Get products to display (3 at a time on larger screens, 1 on mobile)
  const getVisibleProducts = () => {
    const visibleCount = window.innerWidth < 600 ? 1 : 3;
    const start = currentProduct;
    const visibleProducts = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleProducts.push(products[(start + i) % products.length]);
    }
    return visibleProducts;
  };

  return (
    <Box sx={{  bgcolor: '#FFFDD0', minHeight: '100vh', overflowX: 'hidden', boxSizing: 'border-box'  }}>
      <Hero />
      {/* Featured Products Carousel */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Lora", serif',
              color: '#4B0000',
              textAlign: 'center',
              mb: 5,
              fontSize: { xs: '2.25rem', md: '3rem' },
              fontWeight: 700,
            }}
          >
            Featured Products
          </Typography>
        </motion.div>
        <Box
          sx={{
            position: 'relative',
            maxWidth: { xs: 360, md: 1200 },
            mx: 'auto',
            overflow: 'hidden',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 3 },
                justifyContent: 'center',
                flexWrap: { xs: 'nowrap', md: 'nowrap' },
              }}
            >
              {getVisibleProducts().map((product, index) => (
                <motion.div
                  key={`${currentProduct}-${index}`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
                  sx={{
                    flex: { xs: '1 0 100%', md: '1 0 33.33%' },
                    minWidth: { xs: 280, md: 320 },
                    maxWidth: { xs: 360, md: 360 },
                    width: '100%',
                  }}
                >
                  <Card
                    sx={{
                      minWidth: { xs: 280, md: 320 },
                      maxWidth: { xs: 360, md: 360 },                    
                      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      bgcolor: '#FFFFFF',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 12px 48px rgba(0,0,0,0.2)',
                        border: '1px solid #FF9933',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <Box sx={{ position: 'relative', flex: '0 0 auto' }}>
                      <CardMedia
                        component="img"
                        height="280"
                        image={product.img}
                        alt={product.name}
                        loading="lazy"
                        sx={{ objectFit: 'cover' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: 'rgba(0,0,0,0.05)',
                          transition: 'background-color 0.3s',
                          '&:hover': { bgcolor: 'rgba(255,153,51,0.1)' },
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        flex: '1 0 auto',
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
                            color: '#4B0000',
                            mb: 1,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Open Sans", sans-serif',
                            color: '#666',
                            mb: 1,
                            fontSize: '1rem',
                          }}
                        >
                          {product.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Open Sans", sans-serif',
                            color: '#666',
                            fontSize: '0.95rem',
                            mb: 2,
                            lineHeight: 1.5,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {product.desc}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 'auto' }}>
                        <Button
                          variant="outlined"
                          sx={{
                            borderColor: '#FF9933',
                            color: '#FF9933',
                            fontFamily: '"Open Sans", sans-serif',
                            borderRadius: 2,
                            px: 3,
                            py: 1,
                            fontSize: '0.9rem',
                            '&:hover': { bgcolor: '#FF9933', color: '#FFFDD0' },
                          }}
                          onClick={() => handleQuickView(product)}
                        >
                          Quick View
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: '#FF9933',
                            color: '#FFFDD0',
                            fontFamily: '"Open Sans", sans-serif',
                            borderRadius: 2,
                            px: 3,
                            py: 1,
                            fontSize: '0.9rem',
                            '&:hover': { bgcolor: '#FFD700' },
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </AnimatePresence>
           
        </Box>
      </Container>

     
      {/* Testimonials Slider */}
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 6, md: 10 },
          background: 'linear-gradient(180deg,rgba(99, 1, 1, 0.89) 0%,rgb(67, 2, 2) 100%)',
          color: '#FFFDD0',
          borderRadius: 4,
          position: 'relative',
          my: 6,
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Lora", serif',
              color: '#FFFDD0',
              textAlign: 'center',
              mb: 5,
              fontSize: { xs: '2.25rem', md: '3rem' },
              fontWeight: 700,
            }}
          >
            What Our Customers Say
          </Typography>
        </motion.div>
        <Box sx={{ maxWidth: 700, mx: 'auto', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card
                sx={{
                  bgcolor: '#FFFFFF',
                  color: '#4B0000',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  textAlign: 'center',
                  minHeight: 200,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Avatar
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].author}
                    sx={{ width: 60, height: 60, border: '2px solid #FF9933' }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontStyle: 'italic',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    mb: 2,
                    lineHeight: 1.6,
                  }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Lora", serif',
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  - {testimonials[currentTestimonial].author}
                </Typography>
              </Card>
            </motion.div>
          </AnimatePresence>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  bgcolor: index === currentTestimonial ? '#FF9933' : '#FFFDD0',
                  opacity: index === currentTestimonial ? 1 : 0.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </Box> <IconButton
            onClick={handlePrevTestimonial}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 6, sm: 12 },
              transform: 'translateY(-50%)',
              bgcolor: '#D3D3D1',
              color: 'black',
              '&:hover': { bgcolor: '#FFD700', color: '#4B0000' },
              zIndex: 2,
              p: { xs: 1, sm: 1.5 },
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={handleNextTestimonial}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 8, sm: 16 },
              transform: 'translateY(-50%)',
               bgcolor: '#D3D3D1',
              color: 'black',
             '&:hover': { bgcolor: '#FFD700', color: '#4B0000' },
              zIndex: 2,
              p: { xs: 1, sm: 1.5 },
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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
              color: '#4B0000',
              textAlign: 'center',
              mb: 3,
              fontSize: { xs: '2.25rem', md: '3rem' },
              fontWeight: 700,
            }}
          >
            Stay Connected
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          sx={{ maxWidth: 600, mx: 'auto' }}
        >
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              color: '#666',
              textAlign: 'center',
              mb: 3,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.6,
            }}
          >
            Subscribe to our newsletter for exclusive updates on new products and festive offers.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: '#FFFFFF',
              p: 3,
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          >
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                maxWidth: 400,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  bgcolor: '#FFFDD0',
                  transition: 'all 0.3s',
                  '&:hover': { bgcolor: '#FFFFFF' },
                  '&.Mui-focused': { bgcolor: '#FFFFFF', boxShadow: '0 0 8px rgba(255,153,51,0.3)' },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#FF9933',
                color: '#FFFDD0',
                fontFamily: '"Open Sans", sans-serif',
                borderRadius: 2,
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#FFD700', transform: 'scale(1.05)' },
                transition: 'all 0.3s',
              }}
            >
              Subscribe
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Quick View Modal */}
      <Modal open={!!quickViewProduct} onClose={handleCloseQuickView} aria-labelledby="quick-view-modal">
        <Box sx={modalStyle}>
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8, color: '#4B0000' }}
            onClick={handleCloseQuickView}
            aria-label="Close modal"
          >
            <Close />
          </IconButton>
          {quickViewProduct && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Typography
                id="quick-view-modal"
                variant="h5"
                sx={{
                  fontFamily: '"Lora", serif',
                  color: '#4B0000',
                  mb: 3,
                  textAlign: 'center',
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                {quickViewProduct.name}
              </Typography>
              <Box sx={{ position: 'relative', mb: 3, overflow: 'hidden', borderRadius: 3 }}>
                <img
                  src={quickViewProduct.img}
                  alt={quickViewProduct.name}
                  style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 8 }}
                  loading="lazy"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.05)',
                    transition: 'background-color 0.3s',
                    '&:hover': { bgcolor: 'rgba(255,153,51,0.1)' },
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  color: '#666',
                  mb: 2,
                  textAlign: 'center',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                {quickViewProduct.desc}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Lora", serif',
                  color: '#4B0000',
                  fontWeight: 'bold',
                  mb: 3,
                  textAlign: 'center',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                {quickViewProduct.price}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#FF9933',
                    color: '#FFFDD0',
                    fontFamily: '"Open Sans", sans-serif',
                    borderRadius: 2,
                    px: 4,
                    py: 1,
                    fontSize: '0.9rem',
                    '&:hover': { bgcolor: '#FFD700', transform: 'scale(1.05)' },
                    transition: 'all 0.3s',
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#FF9933',
                    color: '#FF9933',
                    fontFamily: '"Open Sans", sans-serif',
                    borderRadius: 2,
                    px: 4,
                    py: 1,
                    fontSize: '0.9rem',
                    '&:hover': { bgcolor: '#FF9933', color: '#FFFDD0' },
                  }}
                  onClick={handleCloseQuickView}
                >
                  Close
                </Button>
              </Box>
            </motion.div>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Home;