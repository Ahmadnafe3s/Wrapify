import { ArrowRight, Check, Star } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "../components/Phone";
import Image from "next/image";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-20 pt-6 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 lg:pt-24 xl:pt-24 lg:pb-48">

          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left felx flex-col items-center lg:items-start">
              <div className="absolute w-20 hidden lg:block left-0 -top-24">
                <img src="/case-1.svg" alt="" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance pb-5 mt-16 text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold !leading-tight">
                Your Image on a <span className="bg-purple-600 text-white px-2">Custom</span> Phone Case.
              </h1>
              <p>Capture your favorite memories with your own , <span className="font-semibold">one-of-one</span> phone case. The wrapify allows you to customize your phone case by your own.</p>

              <ul className="space-y-2 mt-7 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-start">
                    <Check className="h-5 w-5 shrink-0 text-purple-600" />
                    High-quality, durable material.
                  </li>
                  <li className="flex gap-1.5 items-center text-start">
                    <Check className="h-5 w-5 shrink-0 text-purple-600" />
                    1 year print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-start">
                    <Check className="h-5 w-5 shrink-0 text-purple-600" />
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



      {/* users reviews */}

      <section className="bg-slate-100 py-24">

        <MaxWidthWrapper className="flex flex-col gap-16 sm:gap-32 items-center">

          {/* Display some text and svg */}

          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">

            <h2 className="lg:order-1 order-2 text-5xl md:text-6xl tracking-tight !leading-tight font-bold text-center text-balance mt-2 text-gray-900">
              What our <span className="border-dotted border-b-[6px] text-purple-600 border-purple-600">customers</span> say
            </h2>

            <Image src='/case-1.svg' width={'70'} height={'70'} className="lg:order-2 order-1" alt="phone" />

          </div>


          {/* reviews */}

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8 xl:gap-x-20 max-w-2xl lg:max-w-none lg:mx-0 px-4">

            {/* review 1 */}

            <div className="col-span-1 flex flex-auto flex-col">
              <div className="flex gap-1.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>

              <div className="text-lg leading-8">
                <p>
                  "I am absolutely thrilled with the case I purchased! The image is incredibly elegant, and the material is top-notch, <span className="px-2 py-0.5 text-white bg-gray-800">offering a smooth and luxurious feel in the hand.</span> Even after extended use, the image remains crystal clear. Overall, I love it!"
                </p>
              </div>

              {/* for logo and username */}

              <div className="flex mt-2 gap-4">
                <Image src='/users/user-1.png' width={48} height={48} className=" col-span-1 rounded-full" alt="user" />

                <div className=" flex flex-col">
                  <p className=" font-semibold">Robert Downey</p>

                  <div className="flex gap-1.5">
                    <Check className="text-purple-600 w-5" />
                    <p className="text-sm text-zinc-600">Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>


            {/* review 2 */}

            <div className="col-span-1 flex flex-auto flex-col gap-4">
              <div className="flex gap-1.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>

              <div className="text-lg leading-8">
                <p>
                  "I purchased a custom case, and it’s been fantastic! <span className="px-2 py-0.5 text-white bg-gray-800"> The case feels durable, and the image quality was vibrant and sharp from the start.</span> After a couple of months, the image has developed a slight yellowish tint, but the material itself remains outstanding, giving a premium feel every time I hold it. Overall, I still love it!"
                </p>
              </div>

              {/* for logo and username */}

              <div className="flex mt-2 gap-4">
                <Image src='/users/user-5.jpg' width={48} height={48} className=" object-cover col-span-1 rounded-full" alt="user" />

                <div className=" flex flex-col">
                  <p className=" font-semibold">Jhon Snow</p>

                  <div className="flex gap-1.5">
                    <Check className="text-purple-600 w-5" />
                    <p className="text-sm text-zinc-600">Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </MaxWidthWrapper>


        {/* Animation section */}

        <div className="pt-16">
          <Reviews />
        </div>
      </section>


      <section>

        <MaxWidthWrapper className="py-24">

          <div className="mb-24 px-6 md:px-8">
            <h2 className="lg:order-1 order-2 text-5xl md:text-6xl tracking-tight !leading-tight font-bold text-center text-balance mt-2 text-gray-900">
              Upload your photo and own <span className="border-dotted border-b-[6px] text-purple-600 border-purple-600">your case</span> now
            </h2>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-8">

            <div className="relative items-center justify-center  grid md:grid-cols-2 gap-44">
              <img
                src="/arrow_1.png"
                alt="Arrow"
                className="absolute top-[25rem] w-36 md:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10  rotate-90 md:rotate-0"
              />

              <div
                className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" alt="Horse" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full" />
              </div>

              <Phone imgSrc="/horse_phone.jpg" className="w-60" />

            </div>
          </div>


          {/* Qualities */}

          <ul className="mt-12 text-sm sm:text-lg grid justify-center   space-y-2">
            <li className="w-fit">
              <Check className="text-purple-600 inline me-1.5 h-5 w-5" />
              High-quality silicon material.
            </li>
            <li className="w-fit">
              <Check className="text-purple-600 inline me-1.5 h-5 w-5" />
              Scratch and fingerptint resistant coating.
            </li>
            <li className="w-fit">
              <Check className="text-purple-600 inline me-1.5 h-5 w-5" />
              Feels like silk in hands.
            </li>
            <li className="w-fit">
              <Check className="text-purple-600 inline me-1.5 h-5 w-5" />
              High-definition picture quality.
            </li>
          </ul>


          {/* Button */}

          <div className="flex justify-center">
            <Link
              href='/configure/upload'
              className={buttonVariants({
                size: 'lg',
                className: 'mt-8 mx-auto'
              })}
            >
              configure your case now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </MaxWidthWrapper>
      </section>

    </div>
  )
}
