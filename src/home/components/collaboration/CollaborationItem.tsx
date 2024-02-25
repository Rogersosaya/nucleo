import Image from 'next/image'


interface Props{
  urlCollaboration: string;
}
function CollaborationItem({urlCollaboration
}:Props) {
  return (
    <>
    
     <Image src={urlCollaboration} height={20} width={220}   style={{width: 'auto', height:'auto'}}  alt='marquee'  className='mx-12 '/> 
    </>
  )
}

export default CollaborationItem
