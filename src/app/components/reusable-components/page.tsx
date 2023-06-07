import Image from "next/image";
import {
  DiseaseOne,
  DiseaseThree,
  DiseaseTwo,
} from "../../../../assets/icons/conditionIcons";
import { ArrowIcon } from "../../../../assets/icons/arrowIcon";
import { BrandLogo } from "../../../../assets/icons/brandLogo";
import { PlayIcon } from "../../../../assets/icons/playIcon";
import Button from "../buttons/Button";
import { FlowerIcon } from "../../../../assets/icons/flower";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landing page
      <div>
        <Button
          btnText="Learn More"
          btnIcon={<PlayIcon color="#1F4D36" width={24} height={24} />}
          className="bg-white border-2 px-6 text-[#1F4D36] border-[#1F4D36]   hover:bg-white hover:text-[#1F4D36]"
        />
      </div>
      <div>
        <FlowerIcon className="" width={56} height={63} />
      </div>
      <div>
        <Button
          btnText="Find Your Doctor"
          btnIcon
          className="bg-[#1F4D36]  hover:bg-white hover:text-[#1F4D36]"
        />
      </div>
      <BrandLogo color="#1F4D36" width={32} height={40} />
      <div className="">
        <Image
          src="/images/heroImage-one.png"
          width={500}
          height={500}
          alt="doctor pics"
        />
        <Image
          src="/images/heroImage-two.png"
          width={500}
          height={500}
          alt="doctor pics"
        />
        <Image
          src="/images/scribbble.png"
          width={500}
          height={500}
          alt="doctor pics"
        />
      </div>
      <div>
        <DiseaseOne className="" color="red" width={56} height={63} />
        <DiseaseTwo className="" color="red" width={56} height={63} />
        <DiseaseThree className="" color="red" width={56} height={63} />
      </div>
      {/* arrow right icon */}
      <div>
        <ArrowIcon className="" color="red" width={56} height={63} />
      </div>
    </main>
  );
}
