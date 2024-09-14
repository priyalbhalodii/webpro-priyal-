
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OurSection from '../../component/OurSection'
import HeroSection from '../../component/HeroSection'
import SilderSection from '../../component/SilderSection'
import OurServices from '../../component/OurServices'
import OurProgessSection from '../../component/OurProgessSection'
import OurWorkSection from '../../component/OurWorkSection'
import OurResultSection from '../../component/OurResultSection'
import CardSection from '../../component/CardSection'
import BlogSection from '../../component/BlogSection';
import Carousel from '../../component/Carousel';
import Form from '../../component/Form';
import AccordionWrapper from '../../component/Accordion/AccordionWrapper';
import AccordionItem from '../../component/Accordion/AccordionItem';
import CardSlider from '../../component/cardSlider/CardSlider';
import ContactUs from '../../component/ContactUs';
import FooterSection from '../../component/FooterSection';
import OurClients from '../../component/OurClients.jsx';
import AccordionSection from '../../component/Accordion/AccordionSection.jsx';


export default function Home() {
  const ourSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ourSectionRef,
    offset: ['start start', 'center end'], 
  });
 

  return (
    <div >
      <HeroSection />
      <div className='best_services_section our_services_img' ref={ourSectionRef} >
        <motion.div  className=''
         
          style={{
            // position:  useTransform(scrollYProgress, (scroll)=>scroll=="1"? "relative":"sticky"),
            position: 'sticky',
            top: 0,
            zIndex: -1, // Ensure OurSection stays above SilderSection
            width: `${scrollYProgress * 100}px`,
            // Apply fade out and shrink effect
            opacity: useTransform(scrollYProgress, [0, 1], [1, 0.2]), // Opacity decreases as you scroll
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]), // Shrinks as you scroll
          }}
        >
          <OurSection />
        </motion.div>

        <div 
          style={{
            position: 'relative', // Important for z-index to work
            zIndex: 1, // Ensure SilderSection stays above OurSection
          }}
        >
          <SilderSection />
        </div>
      </div>
       <OurServices/>
    <OurProgessSection/>
    <OurResultSection/>
    <OurClients/>
    <OurWorkSection/>
    <ContactUs/>
    <AccordionSection/>
    {/* <BlogSection/> */}
   
    {/* <Form/> */}

      {/* <CardSlider/> */}
    {/* accorodian */}
   
          
          <FooterSection/>
    </div>
  );
}
