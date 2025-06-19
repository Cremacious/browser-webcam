import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

const AuthPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-6 bg-slate-700 p-8 rounded-2xl">
          <div className="text-emerald-500 font-bold text-2xl">
            Sign in to use Browser Webcam!
          </div>
          <div className="flex flex-row gap-6 justify-center">
            <Button>
              <SignInButton />
            </Button>
            <Button>
              <SignUpButton />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
