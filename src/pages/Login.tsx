import loginIllustration from '@/assets/images/login-illustration.png';
import LoginForm from '@/components/LoginForm';

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#FEF6D5]">
      <div className="flex w-full max-w-6xl items-center justify-between gap-10 ">
        <div className="hidden md:block">
          <img alt="Login Illustration" src={loginIllustration} />
        </div>
        <div className="w-full max-w-xl">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
