
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Family First",
      description: "We believe financial education starts at home. Our platform brings families together to learn and grow financially.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Every feature is designed to help kids set, track, and achieve their financial goals while learning valuable lessons.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of security, education, and user experience in everything we do.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our mission is to create a generation of financially literate kids who will make better financial decisions.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-yellow-500/10" />
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-400/30">
                  <span className="text-lg font-medium text-cyan-300">About Funngro</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-white mb-8 leading-tight">
                  Building the future of
                  <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    financial education
                  </span>
                </h1>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
                  We're on a mission to empower the next generation with the financial knowledge and tools they need to build a secure and prosperous future.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
                  Our Values
                </h2>
                <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
                  These core principles guide everything we do at Funngro
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 border border-gray-600/20"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section with Background */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-yellow-500/30" />
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of families who are already teaching their kids smart money management with Funngro.
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
                Start Your Free Trial
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;
