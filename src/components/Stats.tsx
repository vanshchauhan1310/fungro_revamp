
import { TrendingUp, Users, CreditCard, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Families",
      description: "Trust Funngro for their kids",
      color: "text-blue-500"
    },
    {
      icon: CreditCard,
      number: "₹50L+",
      label: "Money Managed",
      description: "Safely by our platform",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Improved Savings",
      description: "Kids save more with Funngro",
      color: "text-purple-500"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Parent Rating",
      description: "On app stores",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Trusted by thousands of families
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing community of parents who are teaching their kids financial responsibility
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4 group-hover:shadow-lg transition-shadow ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <p className="text-3xl lg:text-4xl font-poppins font-bold text-gray-900">
                  {stat.number}
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
