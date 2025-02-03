import Image from "next/image";

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='padding-container max-container w-full pb-24'>
        <Image src='/camp.svg' alt='Camp' width={50} height={50} />
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          we are here for you
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='capitalize bold-40 lg:bold-64 xl:max-w-[390px]'>
            Guide you to easy path
          </h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            With the Globetrek app, you&apos;ll never get lost again! Our
            offline maps ensure seamless navigation even without an internet
            connection. Invite your friends, family, and adventure partners to
            explore the wilderness, traverse valleys, and conquer mountain peaks
            together!
          </p>
        </div>
      </div>
      <div className='flexCenter max-container relative w-full'>
        <Image
          src='/boat.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center xl:rounded-5xl 2xl:rounded-5xl'
        />
        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-[20%]'>
          <Image
          src="/meter.svg"
          alt="meter"
          width={16}
          height={158}
          className="h-full w-auto"
           />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 mins</p>
              </div>
              <p className='bold-20 mt-2'>Aguas Calientes</p>
            </div>
            <div className='flex w-full flex-col'>
                <p className='regular-16 text-gray-20'>Start Track</p>
                <h4></h4>
              <p className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
