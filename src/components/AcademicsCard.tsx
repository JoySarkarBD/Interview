export default function AcademicsCard() {
  return (
    <div className="container mt-10 mb-16 w-full px-0 md:mb-[150px] lg:mb-[200px] xl:px-5 2xl:px-0">
      <div className="mx-0 gap-6 rounded-xl border-t-2 border-l-2 border-[#262626] bg-white bg-[url('/sm-banner-abstract-design.png')] bg-[length:100px] bg-left-top bg-no-repeat shadow-[6px_6px_0px_black] md:bg-[url('/sm-banner-abstract-design.png')] md:bg-[length:137px] lg:bg-[url('/banner-abstract-design.png')] lg:bg-[length:200px] xl:mx-[30px] 2xl:mx-0">
        <div className="flex w-full flex-col items-center justify-between px-[30px] py-[50px] md:flex-row md:gap-[50px] md:px-[80px] md:py-[100px] lg:px-[152px] lg:py-[120px]">
          <div className="mb-5 flex flex-col items-center md:mb-0 md:flex-1 md:items-start">
            <span className="font-outfit mb-2.5 inline-block w-fit rounded-lg border-2 border-black bg-white px-4 py-2 text-sm font-medium text-gray-800 md:text-base lg:text-lg">
              Academics
            </span>
            <h2 className="font-raleway text-center text-[28px] leading-tight font-bold text-[#1A1A1A] md:text-left md:text-[38px] lg:text-5xl">
              Nurturing Young Minds for Success
            </h2>
          </div>

          <div className="font-outfit flex-1 text-center text-base font-medium text-[#333333] md:text-left lg:text-xl">
            Welcome to our Academics page, where we take pride in providing a
            comprehensive and stimulating educational experience for your child.
            Our kindergarten school&apos;s academic program is thoughtfully
            designed to foster a love for learning while building a strong
            foundation of essential skills and knowledge. From language arts and
            mathematics to science and social studies, our curriculum is
            carefully crafted to spark curiosity and encourage active
            exploration.
          </div>
        </div>
      </div>
    </div>
  );
}
