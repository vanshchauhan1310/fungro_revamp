
import { ArrowRight, Play, Star, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 opacity-50" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute top-32 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-200">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ families</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
              Teaching kids <br />
              <span className="text-gradient">smart money</span> <br />
              management
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empower your children with financial literacy through our interactive platform, 
              supervised spending, and gamified learning experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-purple-400 hover:text-purple-600"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4" />
                <span>RBI Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Bank-level Security</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-lg mx-auto">
              {/* Phone Mockup */}
              <div className="relative z-10 transform rotate-6 hover:rotate-3 transition-transform duration-500">
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] p-6 h-[600px] flex flex-col justify-between">
                    {/* App Header */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-purple rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">₹</span>
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-gray-800 mb-2">Aarav's Wallet</h3>
                      <p className="text-3xl font-bold text-gradient">₹2,450</p>
                      <p className="text-sm text-gray-500">Available Balance</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">💰</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Savings Goal</p>
                            <p className="text-sm text-gray-600">New Bicycle</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">₹1,200</p>
                          <p className="text-xs text-gray-500">60% complete</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">🎯</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">Weekly Challenge</p>
                            <p className="text-sm text-gray-600">Save ₹100 this week</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">₹80</p>
                          <p className="text-xs text-gray-500">2 days left</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Preview */}
                    <div className="bg-gradient-purple rounded-2xl p-4 text-white shadow-lg">
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <p className="text-xs opacity-80">FUNNGRO CARD</p>
                          <p className="text-lg font-bold">Aarav Kumar</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="text-2xl font-mono tracking-wider">
                        •••• •••• •••• 1234
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">💳</span>
              </div>
              <div className="absolute top-20 -right-8 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-xl">💰</span>
              </div>
              <div className="absolute -bottom-6 left-8 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
