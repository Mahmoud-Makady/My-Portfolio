

import {ReactLenis} from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react';


/**
 * Register gsap plugins
 */

gsap.registerPlugin(useGSAP, ScrollTrigger);



/**
 * Components
 */
import Header from './components/Header';
import Hero from './components/Hero';
import About from "./components/About";
import Skill from './components/Skill';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CodeRain from './components/CodeRain';
import ScrollProgress from './components/ScrollProgress';
import FloatingElements from './components/FloatingElements';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    useGSAP(()=>{
        if (isLoading) return;
        
        const elements = gsap.utils.toArray('.reveal-up');
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        })        
    }, [isLoading]);

    if (isLoading) {
        return <Loader onLoadingComplete={handleLoadingComplete} />;
    }


    return (
        <ReactLenis root>
            <ScrollProgress />
            <CodeRain />
            <FloatingElements />

            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    )
}

export default App;
