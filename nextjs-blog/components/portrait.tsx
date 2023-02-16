import Image from 'next/image'

function Avatar() {
  return <div className='relative group '>

    <div><Image src="/images/photo.png" alt="me" width="1024" height="1024" className='relative shadow-xl md:rounded-full border-none xs:rounded-full  xs:ml-auto xs:mr-auto '/></div>
 </div>
}

export default Avatar