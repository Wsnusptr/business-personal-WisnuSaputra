"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestimonialSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={targetRef}
      id="testimonials"
      className="bg-white text-navy-primary py-24 lg:py-32 overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid lg:grid-cols-2 lg:gap-x-20 gap-y-16 items-center"
        >
          <motion.div style={{ y: imageY }} className="relative mx-auto lg:mx-0">
            <div className="relative aspect-[4/5] w-full max-w-md">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7af5c_Casual%20Creative%20Professional-8.png?"
                alt="Michael T., Retail Store Owner"
                fill
                className="object-cover rounded-[40px]"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af5a_Vector%206%20(2)-37.svg?"
                alt="Decorative notch"
                width={112}
                height={112}
                className="absolute -top-6 -right-6 w-[22%] max-w-[112px] h-auto"
              />
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af5d_Vector%205%20(1)-38.svg?"
                alt="Decorative notch"
                width={112}
                height={112}
                className="absolute -bottom-6 -left-6 w-[22%] max-w-[112px] h-auto"
              />
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.div variants={fadeIn} className="mb-6 lg:mb-8">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af5e_Group%2027-39.svg?"
                alt="Testimonial icon"
                width={64}
                height={60}
              />
            </motion.div>
            <motion.h4
              variants={fadeIn}
              className="text-small-label text-coral-accent mb-4"
            >
              Testimonials
            </motion.h4>
            <motion.h3
              variants={fadeIn}
              className="font-bold text-navy-primary text-[28px] md:text-4xl lg:text-5xl !leading-[1.2] mb-8"
            >
              NAIEASY TRANSFORMED OUR ONLINE PRESENCE BY 200% IN JUST THREE MONTHS!
            </motion.h3>
            <motion.p variants={fadeIn} className="text-lg text-gray-medium">
              Michael T., Retail Store Owner
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;