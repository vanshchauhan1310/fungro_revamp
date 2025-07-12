
import { ArrowRight, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Amazing cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-yellow-500/20" />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Enhanced floating elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left text-white">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-medium">Get the App</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-6 leading-tight">
              Ready to get <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                started?
              </span> <br />
              Join us today
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Join thousands of families who are already giving their kids the financial education 
              they need for a successful future.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-xl flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-xl flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">▶</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Features List */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Free trial for 30 days</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>No setup fees or hidden charges</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-sm mx-auto">
              {/* Phone Mockup */}
              <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-gray-900 rounded-[2.5rem] p-1">
                    <div className="bg-white rounded-[2rem] p-6 h-[600px] flex flex-col">
                      {/* App Screenshot Content */}
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-purple rounded-3xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
                          <span className="text-white font-bold text-3xl">F</span>
                        </div>
                        <h3 className="text-2xl font-poppins font-bold text-gray-800">
                          Welcome to Funngro
                        </h3>
                        <p className="text-gray-600 mt-2">
                          Your family's financial journey starts here
                        </p>
                      </div>

                      {/* Feature Cards */}
                      <div className="space-y-4 flex-1">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-xl">💳</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Safe Spending</h4>
                            <p className="text-sm text-gray-600">Supervised debit cards</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-xl">🎯</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Smart Goals</h4>
                            <p className="text-sm text-gray-600">Savings challenges</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-4 flex items-center space-x-4">
                          <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-xl">📚</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Learn & Earn</h4>
                            <p className="text-sm text-gray-600">Financial education</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-purple text-white py-4 rounded-2xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                        Get Started Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <Download className="h-8 w-8 text-white" />
              </div>
              <div className="absolute bottom-10 -left-6 w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-white text-xs">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
