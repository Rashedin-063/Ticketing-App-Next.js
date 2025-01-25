import Link from 'next/link';
import { FaHome, FaTicketAlt } from 'react-icons/fa';
import LoginForm from './LoginForm';
import {auth, signOut} from "@/auth"

const Nav = async () => {
  
  const session = await auth();

  const handleLogout = async() => {
    await signOut();
    alert('You have been logged out')
  }

  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex items-center space-x-4 '>
        <Link href='/'>
          <FaHome className='icon' />
        </Link>
        <Link href='ticket-page/new'>
          <FaTicketAlt className='icon' />
        </Link>
      </div>
      {session?.user ? (
        <div className='text-white'>
          <h1>{ session?.user?.name}</h1>
        </div>
      ) : (
        <div className='text-default-text'>
          <LoginForm />
        </div>
      )}
    </nav>
  );
};
export default Nav;
