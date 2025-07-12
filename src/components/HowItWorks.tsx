
import { Download, UserPlus, CreditCard, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Download & Sign Up",
      description: "Get the Funngro app and create your family account in under 2 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: UserPlus,
      title: "Add Your Kids",
      description: "Create profiles for your children and set their age-appropriate spending limits",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Get Physical Cards",
      description: "Receive beautifully designed, secure debit cards delivered to your doorstep",
      color: "from-purple-500 to-violet-500"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Start Learning",
      description: "Watch your kids develop smart money habits through guided experiences",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium text-green-700">How it Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
            Get started in <span className="text-gradient">4 simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up financial education for your kids has never been easier. 
            Follow these simple steps to get started today.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-center mb-16">
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Mobile Timeline */}
                <div className="lg:hidden absolute left-8 top-20 w-px h-20 bg-gradient-to-b from-gray-300 to-transparent last:hidden"></div>
                
                <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 group-hover:shadow-xl">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-white px-3 py-1 rounded-full border-2 border-gray-200 group-hover:border-purple-300 transition-colors">
                    <span className="text-sm font-bold text-gray-600 group-hover:text-purple-600">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                Ready to start your journey?
              </h3>
              <p className="text-gray-600">
                Download the Funngro app and get your kids started today.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium">
                App Store
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium">
                Play Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
