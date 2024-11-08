import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {

    return <MaxWidthWrapper className="flex flex-1 flex-col"> {/* it will take all the possible area*/}
        {children}
    </MaxWidthWrapper>

}

export default Layout