import Image from "next/image";
import { CustomButton, CustomText, CustomLottiePlayer } from "@/components";
import heroLottie from "@/public/lottie-1.json";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

/**
TODO: Add responsiveness 
*/
function HeroSection() {
  return (
    <section className="hero pt-44 pb-16  px-6 sm:px-14 md:px-20 lg:px-32 flex justify-between flex-col lg:flex-row gap-14">
      <div className="text-center md:text-left grid content-center ">
        {/*Heading*/}
        <h1 className="text-5xl md:text-6xl my-3 font-semibold">
          We’re here to Increase your Productivity
        </h1>
        {/*mark + text + button*/}
        <div className="my-6 md:pr-26">
          <Image
            src="/mark.svg"
            alt="just a mark"
            width={400}
            height={100}
            className="w-full"
          />
          <div className="my-5">
            <CustomText
              text="Let's make your work more organize and easily using the app 
						Dashboard with many of the latest features you need to succeed managing work daily."
            />
          </div>
          {/*Buttons */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-5">
            <CustomButton title="Try free trial" />
            <CustomButton
              title="Watch a demo"
              outline
              icon={<MdOutlinePlayCircleOutline fontSize={"1.3rem"} />}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <CustomLottiePlayer src={heroLottie} />
      </div>
    </section>
  );
}

export default HeroSection;
