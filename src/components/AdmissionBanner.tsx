import { ArrowRight } from "lucide-react";

export default function AdmissionBanner() {
  return (
    <div className='relative container mx-auto mt-7 mb-3 h-auto w-full rounded-lg border-2 border-[#262626] bg-[#FFDECC] bg-[url("/sm-abstract-design.png"),_url("/sm-abstract-design-1.png"),_url("/sm-abstract-design-3.png"),_url("/sm-abstract-design-2.png")] bg-[position:0_0,_100%_0,_0_0,bottom_right] bg-no-repeat p-3 sm:p-2 md:bg-[url("/md-abstract-design.png"),_url("/md-abstract-design-1.png"),_url("/md-abstract-design-3.png"),_url("/md-abstract-design-2.png")] md:bg-[position:0_0,_100%_0,_25%_0,_75%_100%] md:py-[10px] lg:mt-5 lg:bg-[url("/abstract-design.png"),_url("/abstract-design-1.png"),_url("/abstract-design-3.png"),_url("/abstract-design-2.png")] lg:bg-[position:0_0,_100%_0,_25%_0,_75%_100%] lg:py-[14px]'>
      <div className="flex flex-1 items-center justify-center gap-2">
        <span className="font-outfit text-[14px] font-medium whitespace-nowrap text-gray-800 md:text-base lg:text-xl">
          Admission is Open, Grab your seat now
        </span>
        <ArrowRight className="h-5 w-5 text-gray-800 md:h-7 md:w-7" />
      </div>
    </div>
  );
}
