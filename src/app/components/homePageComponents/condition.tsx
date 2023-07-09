
import Link from "next/link";
import { ArrowIcon } from "../../../../assets/icons/arrowIcon";
import {
  DiseaseOne,
  DiseaseThree,
  DiseaseTwo,
} from "../../../../assets/icons/conditionIcons";


export default function Condition() {
  return (
    <div className="bg-[#1F4D36] pt-10 pb-20  text-white mt-10 md:mt-40 md:pb-60">
      <section className="text-center ">
        <h2 className="text-[32px] font-extrabold md:text-[52px] md:font-bold">Condition We Treat</h2>
        <p className="max-w-[300px] text-center mx-auto px-2 md:px-0">
          Our doctor specialize in complex health issues ignored by conventional
          medicine
        </p>
      </section>
      <section className="px-4 mt-8 md:flex justify-between mx-auto max-w-[1024px]">
        {/* disease one */}
        <div className="max-w-[230px] flex flex-col text-center items-center mx-auto mb-8">
          <div className="rounded-full bg-[#F1EABA] w-[100px] h-[100px] items-center flex justify-center md:w-[150px] md:h-[150px]">
            <DiseaseThree className="" color="black" width={56} height={63} />
          </div>
          <div className="mt-6">
            <p className="text-[24px] font-semibold">Hormone Issues</p>
            <p className="my-2">
              Fatigue, menupause, fertility, thyroid issues, cycle optimization
            </p>
            <Link href="/conditions">
              Learn more{" "}
              <ArrowIcon
                color="black"
                className="inline-block"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        {/* disease two */}
        <div className="max-w-[230px] flex flex-col text-center items-center mx-auto mb-8">
          <div className="rounded-full bg-[#F1EABA] w-[100px] h-[100px] items-center flex justify-center md:w-[150px] md:h-[150px]">
            <DiseaseOne className="" color="black" width={56} height={63} />
          </div>
          <div className="mt-6">
            <p className="text-[24px] font-semibold">Autoimmunity</p>
            <p className="my-2">
              Chronic breakouts, pain & other confusing symptoms.
            </p>
            <Link href="/conditions">
              Learn more{" "}
              <ArrowIcon
                color="black"
                className="inline-block"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* disease three */}
        <div className="max-w-[230px] flex flex-col text-center items-center mx-auto mb-8">
          <div className="rounded-full bg-[#F1EABA] w-[100px] h-[100px] items-center flex justify-center md:w-[150px] md:h-[150px]">
            <DiseaseTwo className="" color="black" width={56} height={63} />
          </div>
          <div className="mt-6">
            <p className="text-[24px] font-semibold">Digestive Issues</p>
            <p className="my-2">
              Inflammatory bowel, SIBO, gas & bloating, constipation, diarrhea.
            </p>
            <Link href="/conditions">
              Learn more{" "}
              <ArrowIcon
                color="black"
                className="inline-block"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
