"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";


const PHONES = [
    '/testimonials/1.jpg',
    '/testimonials/2.jpg',
    '/testimonials/3.jpg',
    '/testimonials/4.jpg',
    '/testimonials/5.jpg',
    '/testimonials/6.jpg'
]


function splitArray<T>(array: Array<T>, numParts: number) {

    const result: Array<Array<T>> = []

    for (let i = 0; i < array.length; i++) {

        const index = i % numParts // will always return (0 , 1 , 2) twice as reminder for creating 

        if (!result[index]) {
            result[index] = [] // if specific index doesnt have anything then assign empty array
        }

        result[index].push(array[i]) // pushing values to internal array [0:[1,4], 1:[2,5], 2:[3,6]] like this 
    }

    return result
}



// columns (one column with specified width according to phone component)

function ReviewColumn({ phones, className, msPerPixel = 0 }: { phones: string[], className?: string, msPerPixel: number }) {


    const columnRef = useRef<HTMLDivElement | null>(null)
    const [columnHeight, setColumnHeight] = useState(0)

    const duration = `${columnHeight * msPerPixel}ms` // suppose height (300px) *  msPerPixel (10s) = 3000ms whole duration  to complete animation



    // now for controlling the animation speed according to columnHeight (reffred element)

    useEffect(() => {

        if (!columnRef.current) return //if no reference element

        const resizeObserver = new window.ResizeObserver(() => {  // observes reffered element height

            setColumnHeight(columnRef.current?.offsetHeight ?? 0) // if height becomes null then assign 0 

        })

        resizeObserver.observe(columnRef.current as any) // which element should be observe

        return () => {
            resizeObserver.disconnect()
        }

    }, [])



    return (
        <div
            ref={columnRef}
            className={cn('animate-marquee space-y-8 py-4 pointer-events-none', className)}
            style={{ '--marquee-duration': duration } as CSSProperties} // for dynamically assigning duration (declared in tailwind.config.ts)
        >

            {phones.concat(phones).map((imgSrc, index) => (

                <PhonesComponent key={index} imgSrc={imgSrc} className='' />

            ))}

        </div>
    )

}



// phones which will display into each columns

function PhonesComponent({ imgSrc, className }: { imgSrc: string, className: string }) {

    const POSSIBLE_ANIMATION_DELAY = [
        '0s',
        '0.1s',
        '0.2s',
        '0.3s',
        '0.4s',
        '0.5s',
    ]

    const animationDelay = POSSIBLE_ANIMATION_DELAY[Math.round(Math.random() * POSSIBLE_ANIMATION_DELAY.length)] // Randomly set dealay

    return (

        <div
            className={cn('animate-fade-in rounded-[36px] bg-white shadow-xl shadow-slate-900/5 p-6 opacity-0 w-64 mx-auto', className)}
            style={{ animationDelay }} // for dynamically assigning animation delay 
        >

            <Phone imgSrc={imgSrc} />

        </div>
    )
}


// conatiner & columns (inside)

function ReviewGrid() {

    const containerRef = useRef<HTMLDivElement | null>(null)

    const isInView = useInView(containerRef, { once: true, amount: 0.4 }) // only visible if reffred div will in view

    const columns = splitArray(PHONES, 3)

    const colums_1 = columns[0]
    const colums_2 = columns[1]
    const colums_3 = splitArray(columns[2], 2)



    // Review cases container 

    return <div ref={containerRef} className="relative grid -mx-4 h-[49] max-h-[150vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden sm:mt-20 px-4">
        {
            isInView &&
            <>
                <ReviewColumn
                    phones={[...colums_1, ...colums_3.flat(), ...colums_2]}
                    msPerPixel={10}
                />

                <ReviewColumn
                    phones={[...colums_2, ...colums_3[1], ...colums_1]}
                    msPerPixel={15}
                    className="hidden md:block"
                />

                <ReviewColumn
                    phones={[...colums_1, ...colums_3.flat(), ...colums_2]}
                    msPerPixel={10}
                    className="hidden lg:block"
                />

                {/* gredient */}
                <div className="h-28 bg-gradient-to-b absolute inset-x-0 top-0 from-slate-100"></div>
                <div className="h-28 bg-gradient-to-t absolute inset-x-0 bottom-0 from-slate-100"></div>
            </>
        }
    </div>
}




export function Reviews() {
    return (
        <MaxWidthWrapper className="relative max-w-5xl">
            <img
                aria-hidden="true"
                src="/what-people-are-buying.png"
                alt="what people are buying"
                className="absolute select-none hidden xl:block w-40 -left-32 top-1/3"
            />

            <ReviewGrid />
        </MaxWidthWrapper>
    )
} 