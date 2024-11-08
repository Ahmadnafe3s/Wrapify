"use client"

import { Progress } from '@/components/ui/progress'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader, MousePointerSquareDashed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'
import toast from 'react-hot-toast'


const Page = () => {

    const [isDragOver, setDragOver] = useState<boolean>(false)
    const [isPending, startTransition] = useTransition()
    const [uploadProgress, setUploadProgress] = useState<number>(0)
    const router = useRouter()


    const { startUpload, isUploading } = useUploadThing('imageUploader', {

        onClientUploadComplete([data]) {
            const configId = data.serverData.configId

            startTransition(() => {
                router.push(`configure/design?id=${configId}`)
            })

        },

        onUploadProgress(p) {
            setUploadProgress(p)
        },

        onUploadError(e) {
            toast.error(e.message)
        },

    })



    const onDropAccepted = async (acceptedFile: File[]) => {
        startUpload(acceptedFile, { configId: undefined })
    }


    const onDropRejected = (rejectedFile: FileRejection[]) => {
        const [file] = rejectedFile
        toast.error(`The file ${file.file.type} is not supported`)

        setDragOver(false)
    }




    return (

        <div className={cn('relative h-full w-full flex flex-1 flex-col items-center my-16  justify-center  ring-1 p-2 ring-inset ring-purple-600/20 rounded-xl lg:rounded-2xl', { 'ring-purple-600/50 bg-purple-600/5': isDragOver })}>

            <Dropzone
                onDropAccepted={onDropAccepted}
                onDropRejected={onDropRejected}
                accept={{
                    'image/*': ['.jpg', '.jpeg', '.png'],
                }}



                onDragEnter={() => setDragOver(true)}
                onDragLeave={() => setDragOver(false)}
            >
                {({ getRootProps, getInputProps }) => (

                    <div className='h-full w-full items-center justify-center flex flex-1 flex-col' {...getRootProps()}>
                        <input {...getInputProps()} />

                        {
                            isDragOver ?
                                <MousePointerSquareDashed className='h-6 w-6 mb-2' />
                                :
                                isUploading || isPending ?
                                    <Loader className='animate-spin h-6 w-6 mb-2' />
                                    :
                                    <Image className='h-6 w-6  mb-2' />
                        }


                        {/* onLoading , onPending , onDragOver */}

                        <div className='text-zinc-700 mb-2'>
                            {
                                isUploading ?
                                    <div className='flex flex-col items-center'>
                                        <p>Uploading...</p>
                                        <Progress value={uploadProgress} className='h-1 w-40 bg-gray-300 mt-2' />
                                    </div>
                                    :
                                    isPending ?
                                        <div className='flex flex-col items-center'>
                                            <p>Redirecting plaese wait...</p>
                                        </div>
                                        :
                                        isDragOver ?
                                            <p>
                                                <span className='font-semibold'>Click to upload</span>{' '}or drag & drop
                                            </p>
                                            :
                                            <p>
                                                <span className='font-semibold'>Drop file</span>{' '}to upload
                                            </p>
                            }
                        </div>

                        {isPending ? null :
                            <>
                                <p className='text-xs text-zinc-500 mb-2'>PNG, JPG, JPEG</p>
                                <p className='text-xs text-zinc-500'>Max size 4MB</p>
                            </>
                        }

                    </div>

                )}
            </Dropzone>

        </div >

    )
}

export default Page