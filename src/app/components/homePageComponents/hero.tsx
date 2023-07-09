import Image from "next/image";
import { BrandLogo } from "../../../../assets/icons/brandLogo";
import { FlowerIcon } from "../../../../assets/icons/flower";
import { PlayIcon } from "../../../../assets/icons/playIcon";
import Link from "next/link";
import { AltSchoolImageTwo } from "../../../../assets/icons/altSchool-two";



export default function Hero() {
  
  return (
    <div className="px-4 text-[#1F4D36] max-w-[1400px] mx-auto">
      <section className="hidden  bg-[#F2F4EA] text-[#1F4D36] border-b-[.1rem] border-[#1F4D36] md:flex items-center justify-between p-4   ">
        <div className="flex justify-start  md:flex items-center md:justify-center">
          {/* <BrandLogo color="#1F4D36" width={32} height={40} />
          <span className="ml-4 font-bold text-[24px] pt-2">Wisdom</span> */}
          <AltSchoolImageTwo color="#1F4D36" width={80} height={60} className="" />
        </div>

        <p className="hidden md:block ">
          Women&apos;s Health Tune up{" "}
          <span className="ml-4 cursor-pointer">About Us</span>
        </p>

        <Link href="/signup">
          <button className="py-3 cursor-pointer rounded-xl  transition duration-700 ease-in-out bg-white border-[.1rem] px-6 text-[#1F4D36] border-[#1F4D36]   hover:bg-white hover:text-[#1F4D36]">
            Sign up 
          </button>
        </Link>
      </section>

      {/* hero section with headings and image */}
      <section className="pt-32   max-w-[1300px] mx-auto md:pt-16">
        <div className="block md:flex justify-between">
          {/* content and buttons */}
          <div className="w-full md:w-1/2">
            <div className="">
              <h2 className="text-[42px] md:text-[60px] lg:text-[90px] font-bold leading-none">
                Healthcare <br /> when All Else <br /> Fails{" "}
                <FlowerIcon
                  className="mt-0 md:mt-4  inline-block"
                  width={56}
                  height={63}
                />
              </h2>
            </div>
            <p className="my-8 max-w-[500px]">
              First-Class, women-centric for hormone issues & autoimmunity. Get
              fully integrative care from a holistic doctor and nutritionist for
              $175/month.
            </p>

            <div>
              <div className="md:flex gap-2">
                <Link href="/login">
                  <button className="px-8 py-4 cursor-pointer rounded-full  transition duration-700 ease-in-out bg-[#1F4D36] text-white  hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.1rem] w-[220px]">
                    Find Your Hospital
                  </button>
                </Link>
                <Link href="/signup" className="hidden lg:block">
                  <button className="py-4 cursor-pointer rounded-full  transition duration-700 ease-in-out bg-white border-[.1rem] flex gap-2 items-center justify-center px-6 text-[#1F4D36] border-[#1F4D36]  hover:bg-white hover:text-[#1F4D36] w-[220px]">
                    Find Your Doctor
                    <div className="">
                      {<PlayIcon color="#1F4D36" width={24} height={24} />}
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end md:relative z-[-200px] md:ml-20 lg:ml-0">
            <Image
              src="/images/heroImage-one.png"
              width={500}
              height={500}
              alt="doctor pics"
              className="mt-8 md:absolute  md:mt-0 z-[-200px]"
            />
            <Image
              src="/images/heroImage-two.png"
              width={400}
              height={400}
              alt="doctor pics"
              className="hidden absolute top-[280px] left-[0px] md:block md:absolute z-[-200px] md:top-[250px] md:left-[-50px] lg:top-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
