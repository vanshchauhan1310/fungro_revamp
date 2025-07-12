
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@funngro.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      contact: "123 Financial St, Education City",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      contact: "Mon-Fri: 9AM-6PM PST",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-blue-500/10" />
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-pink-400/30">
                  <MessageSquare className="h-4 w-4 text-pink-300" />
                  <span className="text-lg font-medium text-pink-300">Contact Us</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-white mb-8 leading-tight">
                  Let's start a
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    conversation
                  </span>
                </h1>
                <p className="text-xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
                  Have questions about Funngro? Need help getting started? We're here to help your family succeed.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 border border-gray-600/20"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {method.description}
                    </p>
                    <p className="text-cyan-300 font-medium">
                      {method.contact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-400/20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-poppins font-bold text-white mb-4">
                    Send us a message
                  </h2>
                  <p className="text-xl text-purple-100">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={6}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button 
                      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3 text-lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-poppins font-bold text-white mb-6">
                    Need immediate help?
                  </h2>
                  <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                    Check out our comprehensive help center with guides, tutorials, and frequently asked questions.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 transition-all duration-300 shadow-lg mr-4"
                    >
                      Visit Help Center
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
                    >
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl backdrop-blur-sm border border-blue-400/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                      <MessageSquare className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl animate-float opacity-80"></div>
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
