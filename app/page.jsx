import SubscribeSection from "@components/SubscribeSection";
import Feed from "@components/Feed";
import ImageSection from "@components/ImageSection";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Collaborate
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompting Platform
        </span>
      </h1>
      <p className="desc text-center">
        PromptEase is an innovative AI-powered platform designed to
        revolutionize the way prompts are discovered, created, and shared. With
        its open-source nature, PromptEase empowers users from all walks of life
        to engage in creative exploration and collaboration.
      </p>
      {/*feed*/}
      <Feed />
      <ImageSection/>
      <SubscribeSection/>
      <Footer/>
    </section>
  );
};

export default Home;
