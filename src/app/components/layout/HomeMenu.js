import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
    return(
<>
<section className="">
    <div className="absolute left-0 right-0 justify-start w-full ">
    <div className="absolute left-0 text-left -z-10 -top-[70px]">
         <Image src={'/pngwing.com.png'} width={207} height={195}
         alt={'newbiryani'}/>
    </div>
    <div className="absolute -top-[100px] -z-10 -right-0 ">
         <Image src={'/pngwing.com.png'} width={207} height={195}
          alt={'newbiryani'}/>
    </div>
    </div>
   
<div className="mb-4 text-center">
 <SectionHeaders
  subHeader={"checkout"}
mainHeader={"our menu"}/>


  </div>

<div className="grid grid-cols-3 gap-4">
<MenuItem/>
<MenuItem/>
<MenuItem/>
<MenuItem/>
<MenuItem/>
<MenuItem/>
</div>

</section>



</>
    );
}