

const LoginForm = () => {
  return (
    <form className='flex gap-4'>
      <button className='bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700'>
        Google
      </button>
      <button className='bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-700'>
        Github
      </button>
    </form>
  );
}
export default LoginForm