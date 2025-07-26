import type { UserType } from './types';

interface SignupFormProps {
  userType: UserType;
  switchToLogin: () => void;
}

const SignupForm = ({ userType, switchToLogin }: SignupFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-6">
        {userType === 'vendor' ? 'Vendor Signup' : 'Supplier Signup'}
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-slate-300 mb-2">
            {userType === 'vendor' ? 'Shop Name' : 'Business Name'}
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={userType === 'vendor' ? "My Shop" : "My Business"}
          />
        </div>
        
        <div>
          <label className="block text-slate-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label className="block text-slate-300 mb-2">Phone</label>
          <input
            type="tel"
            className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+1 234 567 890"
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
        
        <div>
          <label className="block text-slate-300 mb-2">Location/Area</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="City, State"
          />
        </div>
        
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Sign Up
        </button>
      </div>
      
      <div className="text-center mt-4">
        <button 
          onClick={switchToLogin}
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          Already have an account? <span className="font-medium">Switch to Login</span>
        </button>
      </div>
    </div>
  );
};

export default SignupForm;