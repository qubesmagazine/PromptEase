"use client"

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8"> {/* Added gap between divs */}
      {/* First div */}
      <div className="p-4 rounded-lg bg-white w-full md:w-2/5 shadow-lg" style={{ boxShadow: "0px 4px 10px rgba(255, 160, 0, 0.4)" }}> {/* Increased width */}
        <div className="relative w-full h-60 rounded-lg overflow-hidden mb-4"> {/* Full width */}
          <Image src="/assets/images/imagesection1.png" alt="image" layout="fill" objectFit="cover" />
        </div>
  
        <div>
          <h5 className="text-xl font-bold mb-2">Empowering Everyone with AI</h5>
          <h4 className="text-base text-gray-600 mb-4">PromptEase is committed to democratizing access to AI capabilities, striving to make information universally available and beneficial. </h4>
          <p className="text-lg">“We're enthusiastic about leveraging AI to enhance human potential”</p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image src="/assets/images/profilepic.png" alt="Small Image" width={48} height={48} />
            </div>
            <div>
              <p className="text-lg font-bold">Okwudili Onyido</p>
              <p className="text-base">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
   
      <div className="flex flex-col w-full md:w-3/5"> 
   
        <AnimatePresence>
          <motion.div 
            key="image1"
            className="relative w-full h-64 rounded-md overflow-hidden mb-4 cursor-pointer" // Adjusted height for balance
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }} // Hover effect
          >
            <Image src="/assets/images/imagesection3.png" alt="Image 1" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-lg font-bold">PromptEase is an innovative platform harnessing the power of AI</p>
            </div>
          </motion.div>
          <motion.div 
            key="image2"
            className="relative w-full h-64 rounded-md overflow-hidden mb-4 cursor-pointer" // Adjusted height for balance
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }} // Hover effect
          >
            <Image src="/assets/images/imagesection4.png" alt="Image 2" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-lg font-bold">PromptEase empowers users of all backgrounds to engage</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSection;
