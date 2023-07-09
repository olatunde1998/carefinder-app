import Image from "next/image";

export default function Partner() {
  return (
    <div className="mt-20 text-[#1F4D36]  ">
      <section className="bg-white">
        <div className="px-[20px] py-[30px] text-center bg-white max-w-[1500px] mx-auto lg:py-[50px] xl:max-w-no">
          <h5 className="text-[18px] font-bold mb-[40px] md:text-[36px]">
            Trusted by numerous Public sector clients.
          </h5>
          <div className="h-[100px] mx-auto md:h-[100px]">
            <div className="w-full relative overflow-hidden pt-14">
              {/* subwrapper */}
              <div className="relative flex items-center justify-center animate md:relative left-0 ">
                {/* part one */}
                <div className=" w-[150%] flex items-center justify-around">
                  <div className=" w-[100px] h-[100px] flex items-center justify-center mx-10">
                    <Image
                      src="/images/scribbble.png"
                      width={70}
                      height={70}
                      alt="NIPOST brand logo"
                      className="w-auto h-auto"
                    />
                  </div>

                  <div className=" w-[100px] h-[100px]  mx-10">
                    <Image
                      src="/images/altschool-logo.png"
                      width={70}
                      height={70}
                      alt="Ondo State brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className=" w-[100px] h-[100px] flex items-center justify-center  mx-10">
                    <Image
                      src="/images/netlify-logo.png"
                      width={70}
                      height={70}
                      alt="Federal Capital Teritary Abuja brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className=" w-[100px] h-[100px] flex items-center justify-center p-2 mx-10">
                    <Image
                      src="/images/amazon-logo.png"
                      width={70}
                      height={70}
                      alt="Lagos state brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className=" w-[100px] h-[100px]  mx-10">
                    <Image
                      src="/images/github-mark.png"
                      width={70}
                      height={70}
                      alt="Ondo State brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
                {/* part two */}
                <div className="w-[150%] flex items-center justify-around">
                  <div className=" w-[100px] h-[100px] flex items-center justify-center  mx-10">
                    <Image
                      src="/images/scribbble.png"
                      width={70}
                      height={70}
                      alt="NIPOST brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className=" w-[100px] h-[100px]  mx-10">
                    <Image
                      src="/images/altschool-logo.png"
                      width={70}
                      height={70}
                      alt="Ondo State brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="w-[100px] h-[100px] flex items-center justify-center mx-10">
                    <Image
                      src="/images/netlify-logo.png"
                      width={70}
                      height={70}
                      alt="Federal Capital Teritary Abuja brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className=" w-[100px] h-[100px]  p-2 mx-10">
                    <Image
                      src="/images/amazon-logo.png"
                      width={70}
                      height={70}
                      alt="Lagos state brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className=" w-[100px] h-[100px]  mx-10">
                    <Image
                      src="/images/github-mark.png"
                      width={70}
                      height={70}
                      alt="Ondo State brand logo"
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
