import Image from 'next/image'

interface Props{
  urlCollaboration: string;
}
function CollaborationItem({urlCollaboration
}:Props) {
  return (
    <>
    
     <Image src={urlCollaboration} width={220} height={20}  alt='marquee' className='mx-12 '/> 
    </>
  )
}

export default CollaborationItem
