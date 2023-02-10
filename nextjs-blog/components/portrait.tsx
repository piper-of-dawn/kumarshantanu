import Image from 'next/image'

function Avatar() {
  return <div className='relative group '>
         <div className="absolute -inset-0.5 bg-gradient-to-br  rounded-full from-cyan-400 to-slate-900 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

    <div><Image src="/images/photo.png" alt="me" width="1024" height="1024" className='relative shadow-xl md:rounded-full border-none xs:rounded-full  xs:ml-auto xs:mr-auto '/></div>
 </div>
}

export default Avatar