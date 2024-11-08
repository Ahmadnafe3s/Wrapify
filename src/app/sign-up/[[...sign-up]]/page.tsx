import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <MaxWidthWrapper className='py-10'>
      <div className='flex justify-center'>
        <SignUp />
      </div>
    </MaxWidthWrapper>
  )
}