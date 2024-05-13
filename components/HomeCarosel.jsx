import SimpleCarousel from './SimpleCarousel';

const slides = [
  {
    image: '/assets/images/ai-messages.jpeg',
    text: 'PromptEase fosters innovation by leveraging cutting-edge AI technology',
  },
  {
    image: '/assets/images/ai-messages2.png',
    text: 'With PromptEase, users can collaborate in real-time, sharing and refining prompts ',
  },
  {
    image: '/assets/images/ai-messages3.jpeg',
    text: 'PromptEase is designed to be accessible to everyone, offering a user-friendly interface ',
  },
];

const HomeCarousel = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col"> 
      <SimpleCarousel slides={slides} height="h-96" />
    </div>
  );
};

export default HomeCarousel;
