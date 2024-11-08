import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import { UserButton, } from '@clerk/nextjs'

const Navbar = async () => {


    const user = await currentUser()

    const userEmail = user?.primaryEmailAddress?.emailAddress
    
    const isAdmin = userEmail === process.env.ADMIN_EMAIL


    return (
        <nav className='border-gray-200 bg-white/75 z-[100] sticky h-14 backdrop-blur-lg transition-all top-0 w-full inset-x-0'>
            <MaxWidthWrapper >
                <div className='flex h-14 items-center justify-between border-zinc-200 border-b'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        W <span className='text-purple-600'>rapify</span>
                    </Link>

                    <div className='flex items-center h-full space-x-4'>

                        {user ?
                            (<>

                                <UserButton />

                                {isAdmin &&
                                    <Link href='/dashboard' className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
                                        Dashboard ✨
                                    </Link>
                                }

                                <Link
                                    href='/configure/upload'
                                    className={buttonVariants(
                                        {
                                            size: 'sm',
                                            className: 'sm:flex hidden items-center'
                                        })}>
                                    Create case
                                    <ArrowRight className='h-5 w-5' />
                                </Link>

                            </>)

                            :

                            (<>

                                <Link href='/sign-up' className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
                                    Sign up
                                </Link>


                                <Link
                                    href='/sign-in' className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
                                    Login
                                </Link>

                                {/* workink as divider */}

                                <div className='w-px h-8 bg-zinc-200 hidden sm:block'></div>

                                <Link
                                    href='/configure/upload'
                                    className={buttonVariants(
                                        {
                                            size: 'sm',
                                            className: 'sm:flex hidden items-center'
                                        })}>
                                    Create case
                                    <ArrowRight className='h-5 w-5' />
                                </Link>

                            </>)

                        }

                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar