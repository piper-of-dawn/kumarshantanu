import Image from 'next/image'

function Avatar() {
  return <div className='h-40 w-40 mx-auto'>
    <Image src="/images/photo.png" alt="me" className='shadow-xl rounded-full' height="512" width="512"/>
 </div>
}

export default Avatar