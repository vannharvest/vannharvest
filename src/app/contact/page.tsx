import { Mail, Phone, MapPin } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

export default function ContactPage() {
  return (
    <PageWrapper className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-900">Get In Touch</h1>
        <p className="text-xl md:text-2xl text-green-700 max-w-3xl mx-auto">
          We'd love to hear from you. Contact us for any inquiries or feedback.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-green-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-green-800 mb-1">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-green-800 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-green-800 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-6">Contact Information</h2>
            <p className="text-green-800 mb-8">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-green-900">Our Office</h3>
                  <p className="mt-1 text-green-700">123 Raisin Street<br />Farmland, FL 12345<br />India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-green-900">Email Us</h3>
                  <p className="mt-1 text-green-700">info@vannharvest.com<br />sales@vannharvest.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-green-900">Call Us</h3>
                  <p className="mt-1 text-green-700">+91 12345 67890<br />+91 98765 43210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-green-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Business Hours</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9 w-full">
            <div className="w-full h-96 bg-green-100 flex items-center justify-center">
              <p className="text-green-800 text-lg font-medium">Google Map will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
