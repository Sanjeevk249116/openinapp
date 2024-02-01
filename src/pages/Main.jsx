import React, { useCallback, useEffect, useState } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { HiOutlineUpload } from "react-icons/hi";
import {useDropzone} from 'react-dropzone'
import { Spinner, useToast } from '@chakra-ui/react';
import Tables from './Tables';

function Main() {
  const toast = useToast();
  const[num,setNumber]=useState(0)
  const[isLoading,setIsLoading]=useState(false)
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setIsLoading(true)
     setTimeout(() => {
     
      setNumber(1)
      setIsLoading(false)
      toast({
        title: "Upload excel file",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }, 3000);
    
    

  }, [])

  useEffect(()=>{
  if(num>0){
    setTimeout(() => {
      setNumber(0)
      setIsLoading(false)
      toast({
       title: "Upload in dataBase",
       status: "success",
       duration: 2000,
       isClosable: true,
     });
    }, 5000);
   }
  
  },[num])
  const removeVal=()=>{
    setIsLoading(true)
    setTimeout(() => {
    setNumber(0)
     setIsLoading(false)
     toast({
      title: "remove excel file",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
   }, 2000);
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className='mainPart'>
   <div className='navbar'>
    <div>
        <p>Upload CSV</p>
    </div>
    <div className='right_part'>
       <div>
       <FaRegBell size={18} />
        </div> 
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/203e/bb33/eccd71f34638f7751900105c639d563d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9saXYAamsOvnZ1xhzIr2V29Xg9PlJAWrA5JwbJGAigpiUSMK~I3gQykef14hsTkdgIetuFCvO3Vk2H9v7WDmDEj2~pGdVK4Llmwe7VF4VRESG80qqKTmpNJkBxo2ZGgUyk5eMGuphGBrqeklJDHDEvnitPyUXRyjKNEPuNmjKBKnRi2dX9Z~0JPQ7BtRQyIG79BojPFd0MMLKEzGa58ZjHmqHMNHzZMK633TpcnU0v1ulRwOLVsupz-Qwvbw69d33Dubm4VZv9zlh5Gs8~h9O8yT99au9O~LJvfq3p6fKRKdd--Aum4KJAJbiHEScNdcpij4vB8Pd~VVUicLKSGEA__" alt="logo_img" />
        </div>
    </div>
   </div>
   <div className='drop_part'>
    <div className='inerPart'>
       <div>
       <img src="https://i.ibb.co/TYmfqfV/exelsheet.png" alt="uploader" />
       {num>0?<><p>Upload-template-xlsx</p>
       <p className='remove' onClick={removeVal}>Remove</p></>:
       <p>Drop your excel sheet or{" "} <span className='browser'>Browser</span></p>}
       </div>
    </div>
    <div {...getRootProps()}>
  <input {...getInputProps()} />
  {isDragActive ? (
    <p>Drop the files here ...</p>
  ) : (
    <button className='btn1'>{isLoading ? <Spinner
      thickness='3px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='sm'
    /> : <span><HiOutlineUpload /><span className='up'>Upload</span></span>}</button>
  )}
</div>
   </div>
   <Tables/>
    </div>
  )
}

export default Main
