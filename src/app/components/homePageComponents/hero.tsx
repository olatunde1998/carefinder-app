import Image from "next/image";
import { BrandLogo } from "../../../../assets/icons/brandLogo";
import Button from "../buttons/Button";
import { FlowerIcon } from "../../../../assets/icons/flower";
import { PlayIcon } from "../../../../assets/icons/playIcon";


export default function Hero() {
  return (
    <div className="px-4 text-[#1F4D36] max-w-[1400px] mx-auto">
      <section className="bg-[#F2F4EA] text-[#1F4D36] border-b-[.1rem] border-[#1F4D36] md:flex items-center justify-between p-4">
        <div className="flex justify-start md:flex items-center md:justify-center">
          <BrandLogo color="#1F4D36" width={32} height={40} />
          <span className="ml-4 font-bold text-[24px] pt-2">Wisdom</span>
        </div>
        <div>
          <p>
            Women&apos;s Health Tune up <span className="ml-4">About Us</span>
          </p>
        </div>

        <div>
          <Button
            btnText="Find Your Doctor"
            btnIcon
            className="bg-white border-[.1rem] px-6 text-[#1F4D36] border-[#1F4D36]   hover:bg-white hover:text-[#1F4D36]"
          />
        </div>
      </section>

      {/* hero section with headings and image */}
      <section className="pt-16">
        <div className="block md:flex justify-between">
          {/* content and buttons */}
          <div className="w-full md:w-1/2">
            <div className="">
              <h2 className="text-[42px] md:text-[90px] font-bold leading-none">
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
                <Button
                  btnText="Find Your Doctor"
                  btnIcon
                  className="bg-[#1F4D36] text-white  hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.1rem]"
                />
                <Button
                  btnText="Find Your Doctor"
                  btnIcon={<PlayIcon color="#1F4D36" width={24} height={24} />}
                  className="bg-white border-[.1rem] px-6 text-[#1F4D36] border-[#1F4D36]  hover:bg-white hover:text-[#1F4D36]"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end relative">
            <Image
              src="/images/heroImage-one.png"
              width={500}
              height={500}
              alt="doctor pics"
              className="absolute"
            />
            <Image
              src="/images/heroImage-two.png"
              width={400}
              height={400}
              alt="doctor pics"
              className="hidden absolute top-[280px] left-[0px] md:block md:absolute md:top-[300px] md:left-[-50px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
