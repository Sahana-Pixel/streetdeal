import type { UserType } from './types';

interface LoginFormProps {
  userType: UserType;
  switchToSignup: () => void;
}

const LoginForm = ({ userType, switchToSignup }: LoginFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-6">
        {userType === 'vendor' ? 'Vendor Login' : 'Supplier Login'}
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-slate-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-slate-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Login
        </button>
      </div>
      
      <div className="text-center mt-4">
        <button 
          onClick={switchToSignup}
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          Not registered? <span className="font-medium">Switch to Signup</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;