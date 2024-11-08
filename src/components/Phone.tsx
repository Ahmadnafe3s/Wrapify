import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface phoneProps extends HTMLAttributes<HTMLDivElement> {
    dark?: boolean,
    imgSrc: string
}

const Phone = ({ imgSrc, dark = false, className, ...props }: phoneProps) => {
    return (
        // the props is here for taking all regular div element props like events , disable etc.
        <div className={cn("relative pointer-events-none overflow-hidden z-50", className)} {...props}> 

            <img src="/phone-template-white-edges.png" alt="" className="select-none z-50 pointer-events-auto" />

            <div className="absolute -z-10 inset-0">
                <img src={imgSrc} alt="" className="object-cover" />
            </div>
        </div>
    )
}

export default Phone