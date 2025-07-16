'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Globe, ArrowRight, Clock, Building2, Users, Leaf, LucideIcon } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    subtitle: 'Send us a message',
    contact: 'info@vannharvest.com',
    href: 'mailto:info@vannharvest.com',
    color: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    icon: Phone,
    title: 'Call Us',
    subtitle: 'Speak with our team',
    contact: '+91 774400 5377',
    href: 'tel:+917744005377',
    color: 'bg-green-50 text-green-600 border-green-200'
  },
  {
    icon: Globe,
    title: 'Visit Website',
    subtitle: 'Explore our digital presence',
    contact: 'www.vannharvest.com',
    href: 'https://vannharvest.com/',
    color: 'bg-purple-50 text-purple-600 border-purple-200'
  }
];

const businessHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', open: true },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM', open: false },
  { day: 'Sunday', time: 'Closed', open: false }
];

type LocationType = 'office' | 'factory' | 'farm';

interface Location {
  title: string;
  type: LocationType;
  desc: string;
  address: string[];
  map: string;
}

const typeIcon: Record<LocationType, LucideIcon> = {
  office: Building2,
  factory: Users,
  farm: Leaf
};

const locations: Location[] = [
  {
    title: 'Corporate Office',
    type: 'office',
    desc: 'Our headquarters and main business operations',
    address: [
      'Plot No. 529, Ganga Nagar',
      'Sector No. 28, Nigdi (PCMC)',
      'Maharashtra - 411044, India'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.702467954323!2d73.77392597595872!3d18.64822826526088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c2f0000001%3A0xdfd8f35abb8e58c3!2sVann%20Harvest%20Private%20Limited!5e0!3m2!1sen!2sin!4v1752559800461!5m2!1sen!2sin'
  },
  {
    title: 'Processing Unit',
    type: 'factory',
    desc: 'Where we process and package our premium products',
    address: [
      'Survey No. 107/2A, Near Yashodhara Hospital',
      'Solapur Road, Vijayapura',
      'Karnataka - 586101, India'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.0059519329125!2d75.71758857593271!3d16.875600117345485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff604adf702d%3A0x5de5862a35c1c2b4!2sVann%20Harvest%20Private%20Limited!5e0!3m2!1sen!2sin!4v1752560300359!5m2!1sen!2sin'
  },
  {
    title: 'Farm Location',
    type: 'farm',
    desc: 'Where our sustainable farming practices begin',
    address: [
      'At Post Kadlewad PCH',
      'Taluka - Dever Hippargi, Vijayapura',
      'Karnataka - 586215, India'
    ],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7638.420883503457!2d76.05523092576662!3d16.815913090808927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc64ab5d3f67a93%3A0x990c645c931612b5!2sDevar%20Hippargi%2C%20Karnataka%20586115!5e0!3m2!1sen!2sin!4v1752560542827!5m2!1sen!2sin'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 px-4">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 pt-36">Get in Touch</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We&apos;re here to help and answer any questions. Reach out for inquiries, partnerships, or just to say hello!
        </p>
      </motion.div>

      {/* Contact + Hours */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        {/* Contact Methods - vertical stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.icon === Globe ? '_blank' : undefined}
              rel={method.icon === Globe ? 'noopener noreferrer' : undefined}
              className={`block p-6 rounded-xl border-2 ${method.color} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white shadow-sm">
                  <method.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-current transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{method.subtitle}</p>
                  <p className="font-medium mt-2 text-current">{method.contact}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-current group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Business Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow border border-gray-200 p-6"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 ml-3">Business Hours</h3>
          </div>

          <div className="space-y-3 mb-4">
            {businessHours.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-2 px-3 rounded-lg ${item.open
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-white border border-gray-200'
                  }`}
              >
                <span className="text-sm font-medium text-gray-700">{item.day}</span>
                <span
                  className={`text-sm font-semibold ${item.open ? 'text-green-600' : 'text-gray-600'
                    }`}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
          </p>
        </motion.div>

      </div>

      {/* Locations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Visit us at any of our locations across India. From our corporate headquarters to our processing facilities and farms.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map(({ title, desc, address, map, type }, index) => {
          const Icon = typeIcon[type as LocationType];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <iframe
                  src={map}
                  width="100%"
                  height="220"
                  className="w-full rounded-t-xl"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={title}
                />
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-green-700 text-sm mb-3">{desc}</p>
                <div className="text-gray-800 text-sm leading-relaxed space-y-1">
                  {address.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
