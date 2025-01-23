import Link from 'next/link';
import { FaHome, FaTicketAlt } from 'react-icons/fa';
import LoginForm from './LoginForm';
const Nav = () => {
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
      <div className='text-default-text'>
       <LoginForm/>
      </div>
    </nav>
  );
};
export default Nav;
