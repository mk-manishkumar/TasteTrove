import { useCallback } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CTASection = () => {
  const downloadApp = useCallback(() => {
    toast.info("We don't have any apps to download for now", { autoClose: 2000 });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-orange-400 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of happy customers and get your favorite food delivered in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={downloadApp} className="cursor-pointer bg-white text-red-500 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Download App
            </button>
            <Link to={"/foods"} className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-500 transition-all duration-300">
              Start Ordering
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
