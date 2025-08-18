import { Truck, ChefHat, Smartphone } from "lucide-react";

const FeaturesSection = () => (
  <section className="py-20 bg-white/50 backdrop-blur-sm">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TasteTrove?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">We make food delivery simple, fast, and delicious</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureBox icon={<Truck className="w-12 h-12 text-red-500" />} title="Fast Delivery" description="Get your food delivered in 30 minutes or less with our lightning-fast delivery network." />
        <FeatureBox icon={<ChefHat className="w-12 h-12 text-orange-500" />} title="Quality Food" description="Partnered with the best local restaurants to bring you fresh, delicious meals every time." />
        <FeatureBox icon={<Smartphone className="w-12 h-12 text-red-500" />} title="Easy Ordering" description="Simple and intuitive interface makes ordering your favorite food quick and hassle-free." />
      </div>
    </div>
  </section>
);

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default FeaturesSection;
