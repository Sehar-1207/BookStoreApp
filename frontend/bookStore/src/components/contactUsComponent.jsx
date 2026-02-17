import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FrequentQuetions from './frequentQues';
import Info from './info';

function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setStatus('');

    try {
      // Replace with your backend API endpoint
      const response = await fetch('http://localhost:4001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset(); // Clear form
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-800 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Contact Information Cards */}
          <Info/>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none  dark:bg-slate-800 dark:border-gray-600 dark:text-white"
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters'
                      }
                    })}
                  />
                  {errors.name && (
                    <span className="text-sm text-red-500 mt-1 block">{errors.name.message}</span>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none  dark:bg-slate-800 dark:border-gray-600 dark:text-white"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 mt-1 block">{errors.email.message}</span>
                  )}
                </div>

                {/* Phone Field (Optional) */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                    Phone Number <span className="text-gray-500 text-sm">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none  dark:bg-slate-800 dark:border-gray-600 dark:text-white"
                    {...register('phone', {
                      pattern: {
                        value: /^[0-9+\-\s()]*$/,
                        message: 'Invalid phone number'
                      }
                    })}
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-500 mt-1 block">{errors.phone.message}</span>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none  dark:bg-slate-800 dark:border-gray-600 dark:text-white"
                    {...register('subject', { 
                      required: 'Subject is required',
                      minLength: {
                        value: 5,
                        message: 'Subject must be at least 5 characters'
                      }
                    })}
                  />
                  {errors.subject && (
                    <span className="text-sm text-red-500 mt-1 block">{errors.subject.message}</span>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    rows="6"
                    className="w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500 focus:border-none  dark:bg-slate-800 dark:border-gray-600 dark:text-white resize-none"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters'
                      }
                    })}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500 mt-1 block">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white rounded-md px-4 py-3 hover:bg-orange-600 transition-colors duration-200 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-md text-center animate-fade-in">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md text-center animate-fade-in">
                    ✗ Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <FrequentQuetions />
       
      </div>
    </div>
  );
}

export default Contact;