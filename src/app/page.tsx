import { Check, Star } from "lucide-react";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Phone from "./components/Phone";


export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 lg:pt-24 xl:pt-32 lg:pb-52">

          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left felx flex-col items-center lg:items-start">
              <div className="absolute w-28 hidden lg:block left-0 -top-20">
                <img src="/snake.svg" alt="" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance pb-5 mt-16 text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold !leading-tight">
                Your Image on a <span className="bg-green-600 text-white px-2">Custom</span> Phone Case.
              </h1>
              <p>Capture your favorite memories with your own , <span className="font-semibold">one-of-one</span> phone case. The wrapify allows you to customize your phone case by your own.</p>

              <ul className="space-y-2 mt-7 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-start">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material.
                  </li>
                  <li className="flex gap-1.5 items-center text-start">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    1 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-start">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern devices supported
                  </li>
                </div>
              </ul>


              <div className="mt-14 flex flex-col sm:flex-row items-center sm:items-start gap-5">

                <div className="flex -space-x-4">
                  <img src="/users/user-1.png" alt="" className="inline-block h-10 w-10 ring-2 ring-slate-100 rounded-full" />
                  <img src="/users/user-2.png" alt="" className="inline-block h-10 w-10 ring-2 ring-slate-100 rounded-full" />
                  <img src="/users/user-3.png" alt="" className="inline-block h-10 w-10 ring-2 ring-slate-100 rounded-full" />
                  <img src="/users/user-4.jpg" alt="" className="inline-block h-10 w-10 ring-2 ring-slate-100 rounded-full" />
                  <img src="/users/user-5.jpg" alt="" className="inline-block h-10 w-10 ring-2 object-cover ring-slate-100 rounded-full" />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p><span className="font-semibold">1000</span> Happy customers</p>
                </div>
              </div>
            </div>
          </div>


          <div className="col-span-full justify-center lg:col-span-1 w-full flex px-8 sm:px-16 md:px-0 mt-32 md:mx-0 lg:mt-20 h-fit">

            <div className="relative md:max-w-xl">

              <img src="/your-image.png" alt="" className="absolute w-40 left-56 lg:w-52 -top-20 select-none hidden sm:block lg:hidden xl:block" />

              <img src="/line.png" alt="" className="absolute w-20 -left-6 -bottom-6 select-none" />

              <Phone imgSrc="/testimonials/2.jpg" className="w-64" />
            </div>

          </div>

        </MaxWidthWrapper>
      </section>
    </div>
  )
}
