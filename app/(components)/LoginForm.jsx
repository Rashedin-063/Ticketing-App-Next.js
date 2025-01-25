import { doSocialLogin } from "../actions";


const LoginForm = () => {
  return (
    <form action={doSocialLogin} className='flex gap-4'>
      <button type="submit" name="action" value="google" className='bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700'>
        Google
      </button>
      <button type="submit" name="action" value="github" className='bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-700'>
        Github
      </button>
    </form>
  );
}
export default LoginForm