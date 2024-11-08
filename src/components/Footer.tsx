import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {

    return <footer className="bg-white h-20 relative">
        <MaxWidthWrapper>
            <div className="border-t border-gray-200" />

            <div className="flex flex-col h-full md:flex-row md:justify-between justify-center items-center">

                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>

                <div className="flex items-center justify-center py-1 gap-3 md:gap-5">
                    <Link href='#' className="text-sm text-muted-foreground hover:text-gray-600">Terms</Link>
                    <Link href='#' className="text-sm text-muted-foreground hover:text-gray-600">Privacy Policy</Link>
                    <Link href='#' className="text-sm text-muted-foreground hover:text-gray-600">Cookie Policy</Link>
                </div>

            </div>

        </MaxWidthWrapper>
    </footer>

}

export default Footer