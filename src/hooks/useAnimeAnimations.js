import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export const useAnimeAnimations = () => {
  useEffect(() => {
    // Hero Section Animations
    const heroTimeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });

    heroTimeline
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(100)
      })
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: 200
      }, '-=500')
      .add({
        targets: '.hero-buttons',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: 300
      }, '-=300')
      .add({
        targets: '.hero-image',
        opacity: [0, 1],
        scale: [0.9, 1],
        rotate: [5, 0],
        delay: 400
      }, '-=400');

    // Floating Animation for Hero Image
    anime({
      targets: '.hero-image img',
      translateY: [-10, 10],
      duration: 3000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });

    // Skills Cards Animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.9, 1],
            duration: 600,
            easing: 'easeOutBack',
            delay: anime.stagger(100)
          });
        }
      });
    }, observerOptions);

    // Projects Cards Animation
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [40, 0],
            rotateX: [15, 0],
            duration: 800,
            easing: 'easeOutCubic',
            delay: anime.stagger(150)
          });
        }
      });
    }, observerOptions);

    // About Section Animation
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.about-content',
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 1000,
            easing: 'easeOutExpo'
          });

          anime({
            targets: '.about-stats',
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 800,
            delay: anime.stagger(200, {start: 300}),
            easing: 'easeOutBack'
          });
        }
      });
    }, observerOptions);

    // Contact Form Animation
    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.contact-form .text-field, .contact-form .label',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutQuart'
          });

          anime({
            targets: '.social-links a',
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 500,
            delay: anime.stagger(100, {start: 400}),
            easing: 'easeOutBack'
          });
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.skill-card').forEach(card => {
      skillsObserver.observe(card);
    });

    document.querySelectorAll('.project-card').forEach(card => {
      projectsObserver.observe(card);
    });

    document.querySelectorAll('.about-section').forEach(section => {
      aboutObserver.observe(section);
    });

    document.querySelectorAll('.contact-section').forEach(section => {
      contactObserver.observe(section);
    });

    // Navbar Animation on Scroll
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        anime({
          targets: 'header',
          translateY: [-100, 0],
          opacity: [0.8, 1],
          duration: 300,
          easing: 'easeOutQuart'
        });
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Button Hover Animations
    const setupButtonAnimations = () => {
      document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
          anime({
            targets: btn,
            scale: 1.05,
            duration: 200,
            easing: 'easeOutQuart'
          });
        });

        btn.addEventListener('mouseleave', () => {
          anime({
            targets: btn,
            scale: 1,
            duration: 200,
            easing: 'easeOutQuart'
          });
        });
      });
    };

    setupButtonAnimations();

    // Cleanup function
    return () => {
      skillsObserver.disconnect();
      projectsObserver.disconnect();
      aboutObserver.disconnect();
      contactObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useAnimeAnimations;