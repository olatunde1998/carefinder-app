import Image from "next/image";
import { ArrowIcon } from "../../../../assets/icons/arrowIcon";
import Link from "next/link";

export default function Medicine() {
  return (
    <section className="">
        <div>
        <Image
              src="/images/scribbble.png"
              width={500}
              height={500}
              alt="doctor pics"
              className="hidden md:block bottom-[0px] lg:absolute xl:bottom-[350px]"
            />
        </div>
      <div
        className=" md:absolute top-[-85px] md:left-[0px] right-auto mx-auto
       w-full bg-[url(/images/condition-image.png)] h-[400px] flex justify-center flex-col bg-no-repeat bg-cover  text-white max-w-[1250px] lg:absolute lg:top-[-85px] lg:left-0 lg:right-auto  xl:absolute xl:top-[-85px] xl:left-[60px] xl:right-auto"
      >
        <p className="bg-[#F1EABA] max-w-[570px] rounded-sm p-2 mx-auto text-center text-[#1F4D36]">
          We thrive where conventional medicine is ignored
        </p>
        <h2 className=" text-center text-[52px] font-bold my-4">
          Root Cause Medicine
        </h2>
        <p className="max-w-[560px] rounded-sm p-2 ml-auto text-center">
          Wisdom doctors go beyond surface-level appointments and help you treat
          the root cause of your health issues so you don&apos;t have to keep
          dealing with symptoms.
        </p>
        <Link className="max-w-[150px] mx-auto" href="/conditions">
          Learn more{" "}
          <ArrowIcon
            color="black"
            className="inline-block"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </section>
  );
}

