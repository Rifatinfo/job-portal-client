import { motion } from "motion/react";
import banner_img_1 from "../../../assets/banner_img/banner1.png";
import banner_img_2 from "../../../assets/banner_img/banner2.png";
const Banner = () => {
  return (
    <div>
      <section className="bg-gray-100 ">
        <div className="max-w-7xl mx-auto flex flex-col justify-center  sm:py-12 lg:py-24 lg:flex-row md:gap-40">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="md:text-5xl font-bold leading-none sm:text-xl">
              The Easiest Way to Get Your New Job
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              ach month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
          </div>
          <div className="">
           <motion.img 
           animate={{y:[0, 50, 0]}}
           transition={{duration : 10, repeat: Infinity}}
           src={banner_img_1} alt="" className="object-contain h-40 md:h-80">
           </motion.img>
           <motion.img 
           animate={{x:[100, 150, 100]}}
           transition={{duration : 10, repeat: Infinity}}
           src={banner_img_2} alt="" className="object-contain h-40 w-40 lg:w-full lg:h-60">
           </motion.img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
