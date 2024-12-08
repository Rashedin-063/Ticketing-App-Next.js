import { FaHome, FaTicketAlt } from 'react-icons/fa';
const Nav = () => {
  return (
    <nav>
      <div className='flex justify-between items-center'>
        <div>
          <FaHome />
          <FaTicketAlt/>
        </div>
        <div>
          <p>rashedinislam.06@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
