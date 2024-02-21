
import {Button} from '@nextui-org/button';
function ButtonPrimary({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <Button className='text-white bg-gradient-to-br from-purple-600 to-blue-500   focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
      {children}
    </Button>
  )
}

export default ButtonPrimary
