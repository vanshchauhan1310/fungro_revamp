
import { Shield, CreditCard, Target, TrendingUp, Bell, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Kid-Safe Debit Card",
      description: "Supervised spending with real-time parental controls and spending limits",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Goal-Based Savings",
      description: "Help kids set and achieve financial goals with gamified progress tracking",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Parental Controls",
      description: "Complete oversight with spending notifications, limits, and merchant controls",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: TrendingUp,
      title: "Financial Education",
      description: "Interactive lessons and quizzes that make learning about money fun",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Real-time alerts for all transactions with detailed spending insights",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Family Dashboard",
      description: "Unified view for parents to track multiple kids' financial activities",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="text-sm font-medium text-purple-700">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Everything you need to teach <br />
            <span className="text-gradient">smart money habits</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines safety, education, and real-world experience 
            to give your kids the financial foundation they need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
    </>
  );
};

export default Features;
