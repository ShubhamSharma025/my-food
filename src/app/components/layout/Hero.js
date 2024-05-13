import Image from "next/image";
import Right from "../icons/Right";
export default function Hero() {

    return(
  <section className="mt-4 hero">
     <div className="py-12">
            <h1 className="text-4xl font-semibold ">
                Everything<br/>
                 is better<br/>
                  with a&nbsp;<span
                className="text-primary"> Biryani</span>
        </h1>
<p className="my-4 text-sm text-gray-500">
     Biryani is the missing piece that makes every day
     complete , a simple yet delicious joy in Live
</p>
<div className="flex gap-4 text-sm">
    <button className="flex items-center gap-2 px-8 py-2 text-white uppercase rounded-full bg-primary">
        order now
        <Right/>
        </button>
    <button className="flex gap-2 py-2 font-semibold text-gray-600">
        learn more
        <Right/>
        </button>
</div>
     </div>
<div className="relative ">
<Image src={'/main biryani.png'} layout={'fill'} 
objectFit={"contain"} alt={"biryani"}/>
</div>

        </section>
    );
}