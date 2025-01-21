"use client"
import { useRouter } from 'next/navigation';
import { FaX } from 'react-icons/fa6';


const DeleteBlock = (params) => {
  console.log(params)
  console.log('hello')
  

  const  {id}  = params;
  console.log('the id is', id)
  
  const router = useRouter()
 
  const deleteTicket = async () => {
   
    
   
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      router.refresh()
    }
}

  return <FaX onClick={() => deleteTicket(id)}  className='text-red-400 hover:cursor-pointer hover:text-red-200'/>;
};
export default DeleteBlock;
