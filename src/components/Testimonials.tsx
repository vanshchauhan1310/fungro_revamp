
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 2",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Funngro has been a game-changer for our family. My 12-year-old daughter has learned to save and spend responsibly. The parental controls give me peace of mind.",
      highlight: "My daughter has learned to save and spend responsibly"
    },
    {
      name: "Rajesh Kumar",
      role: "Father of 1",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The educational content is fantastic. My son enjoys the challenges and has improved his math skills while learning about money. Highly recommend!",
      highlight: "Educational content is fantastic and engaging"
    },
    {
      name: "Anita Patel",
      role: "Mother of 3",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Managing multiple kids' finances was challenging before Funngro. Now I can track all their spending in one place and they're learning valuable lessons.",
      highlight: "Perfect solution for managing multiple kids' finances"
    },
    {
      name: "Vikram Singh",
      role: "Father of 2",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The real-time notifications are incredibly helpful. I know exactly when and where my kids spend money. The app has made financial conversations easier.",
      highlight: "Real-time notifications make parenting easier"
    },
    {
      name: "Meera Reddy",
      role: "Mother of 1",
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "My teenage son loves his Funngro card. He's become more conscious about his spending and has started saving for his goals. Amazing transformation!",
      highlight: "Amazing transformation in spending habits"
    },
    {
      name: "Arjun Mehta",
      role: "Father of 2",
      location: "Chennai",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The customer support is excellent and the app is very user-friendly. Both my kids understand how to use it without any confusion.",
      highlight: "User-friendly with excellent customer support"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-yellow-700">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gray-900 mb-6">
            What parents are saying about <br />
            <span className="text-gradient">Funngro</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied parents who have transformed their kids' financial education with Funngro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-purple-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-purple text-white text-xs px-3 py-1 rounded-tl-2xl font-medium transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
                ⭐ {testimonial.highlight.split(' ').slice(0, 3).join(' ')}...
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-poppins font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-gradient mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-gradient mb-2">95%</div>
              <div className="text-sm text-gray-600">Recommend Us</div>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
