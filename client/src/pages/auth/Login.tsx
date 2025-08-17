import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 m-0 animate-slideIn font-inter" style={{ animation: "slideIn 0.8s ease-out" }}>
      {/* Left side */}
      <div className="relative h-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-500 to-orange-400 text-white overflow-hidden p-0 m-0">
        <div
          className="absolute inset-0"
          style={{
            background: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'4\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E') repeat",
          }}
        />
        <div className="z-10 text-center relative px-4 w-full max-w-lg">
          <div className="text-[80px] mb-8 select-none">🍕</div>
          <h2 className="text-4xl font-extrabold mb-5">Welcome to TasteTrove</h2>
          <p className="text-lg opacity-90 leading-relaxed mx-auto">Discover amazing food from local restaurants and get it delivered fresh to your doorstep.</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center items-center bg-white min-h-screen h-screen p-8 md:p-16 w-full">
        <div className="flex items-center mb-10 gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl select-none">T</div>
          <span className="text-2xl font-extrabold text-gray-800 select-none">TasteTrove</span>
        </div>

        <div className="w-full max-w-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h3>
          <p className="text-gray-500 mb-10">Please sign in to your account</p>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </Label>
              <Input type="email" placeholder="Enter your email" className="w-full py-6 pl-4 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </Label>

              <Input type="password" placeholder="Enter your password" className="w-full py-6 pl-4 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
            </div>

            <Button type="submit" className="w-full py-6  bg-gradient-to-br from-red-500 to-orange-400 text-white font-semibold text-lg shadow-lg cursor-pointer rounded-xl hover:shadow-xl">
              Login
            </Button>
          </form>

          <p className="text-center text-gray-500 mt-10">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-500 font-semibold hover:underline cursor-pointer">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Login;
