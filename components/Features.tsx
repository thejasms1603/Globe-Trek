import { FEATURES } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className='flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src='/phone.png' alt='phone' width={440} height={1000} />
        </div>
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
              src='/camp.svg'
              alt='Camp'
              width={50}
              height={50}
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem = ({ title, description, icon}: FeatureProps) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50 '>
        <Image src={icon} alt='Feature Icon' width={24} height={24} />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='regular-26 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{description}</p>
    </li>
  );
};

export default Features;
