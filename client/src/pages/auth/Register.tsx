import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 font-inter">
      {/* Left side */}
      <div className="h-screen min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-500 to-orange-400 text-white overflow-hidden p-0 m-0 relative md:sticky top-0">
        <div
          className="absolute inset-0"
          style={{
            background: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'4\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E') repeat",
          }}
        />
        <div className="z-10 text-center relative px-4 w-full max-w-lg">
          <div className="text-[80px] mb-8 select-none">🍕</div>
          <h2 className="text-4xl font-extrabold mb-5">Welcome to TasteTrove</h2>
          <p className="text-lg opacity-90 leading-relaxed mx-auto max-w-xs">Discover amazing food from local restaurants and get it delivered fresh to your doorstep.</p>
        </div>
      </div>

      {/* Right side */}
      <div className="overflow-y-auto h-screen p-8 md:p-16 flex justify-center items-start bg-white">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="flex items-center mb-10 gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl select-none">T</div>
            <span className="text-2xl font-extrabold text-gray-800 select-none">TasteTrove</span>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Join the Feast!</h3>
          <p className="text-gray-500 mb-10">Create your account and start ordering delicious food</p>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* USERNAME */}
              <div>
                <Label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
                  Username
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg select-none">👤</span>
                  <Input type="text" placeholder="Enter Username" className="w-full py-6 pl-14 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg select-none">📧</span>
                  <Input type="email" placeholder="Enter your email" className="w-full py-6 pl-14 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
                </div>
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <Label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg select-none">🔒</span>
                <Input type="password" placeholder="Enter your password" className="w-full py-6 pl-14 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
              </div>
            </div>

            {/* PHONE NUMBER */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg select-none">📱</span>
                <Input type="tel" placeholder="Enter Phone Number" className="w-full py-6 pl-14 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <Label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-2">
                Address
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-gray-400 text-lg select-none">📍</span>
                <Textarea placeholder="Enter your full address" className="w-full pt-4 pb-3 pl-14 pr-4 rounded-xl border-2 border-gray-300 bg-gray-50 resize-none min-h-20 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
              </div>
            </div>

            {/* SECURITY QnA */}
            <div>
              <Label htmlFor="answer" className="block text-sm font-medium text-gray-600 mb-2">
                Security Question Answer
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg select-none">❓</span>
                <Input type="text" placeholder="What's your favorite food?" className="w-full py-6 pl-14 rounded-xl border-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-red-500 focus:bg-white focus:ring-1 focus:ring-red-300" required />
              </div>
            </div>

            {/* ACCOUNT TYPE */}
            <fieldset>
              <legend className="block text-sm font-medium text-gray-600 mb-2">Account Type</legend>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {[
                  { id: "client", label: "🛒 Customer" },
                  { id: "vendor", label: "🍳 Restaurant" },
                  { id: "driver", label: "🚗 Driver" },
                  { id: "admin", label: "⚙️ Admin" },
                ].map(({ id, label }) => (
                  <div key={id}>
                    <Input type="radio" id={id} name="usertype" value={id} defaultChecked={id === "client"} className="hidden" />
                    <Label htmlFor={id} className="block cursor-pointer text-center rounded-xl border-2 border-gray-300 bg-gray-50 py-3 font-medium text-gray-700 transition hover:border-red-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-400 hover:text-white">
                      {label}
                    </Label>
                  </div>
                ))}
              </div>
            </fieldset>

            <Button type="submit" className="w-full py-6  bg-gradient-to-br from-red-500 to-orange-400 text-white font-semibold text-lg shadow-lg cursor-pointer rounded-xl hover:shadow-xl">
              Create Account
            </Button>
          </form>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 font-semibold hover:underline cursor-pointer">
              Sign in here
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

export default Register;
