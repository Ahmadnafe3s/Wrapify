import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <MaxWidthWrapper className='pt-20 pb-10'>
      <div className='flex justify-center'>
        <SignIn/>
      </div>
    </MaxWidthWrapper>
  )
}