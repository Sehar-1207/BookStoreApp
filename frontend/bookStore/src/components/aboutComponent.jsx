import { Link } from "react-router-dom";
import { FaBookOpen, FaUsers, FaHeart, FaAward } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-orange-400 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Book Store</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted companion in the journey of learning and exploration
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Founded in 2024, Book Store began with a simple mission: to make quality books 
            accessible to everyone. We believe that books have the power to transform lives, 
            spark imagination, and open doors to new possibilities.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            What started as a small collection of carefully curated books has grown into a 
            comprehensive library spanning multiple genres, from timeless classics to contemporary 
            bestsellers. Our platform serves thousands of readers worldwide, providing both free 
            and premium content to suit every budget.
          </p>
          <p className="text-lg leading-relaxed">
            We're more than just a bookstore – we're a community of book lovers, learners, and 
            dreamers united by our passion for the written word.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaBookOpen className="text-5xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every book is carefully selected to ensure the highest quality and value for our readers.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-5xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We build connections between readers and foster a love for learning together.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaHeart className="text-5xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Making books accessible to everyone, regardless of their budget or location.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <FaAward className="text-5xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Committed to providing exceptional service and user experience at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">10,000+</h3>
            <p className="text-gray-600 dark:text-gray-400">Books Available</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">50,000+</h3>
            <p className="text-gray-600 dark:text-gray-400">Happy Readers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">30+</h3>
            <p className="text-gray-600 dark:text-gray-400">Categories</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-500 mb-2">24/7</h3>
            <p className="text-gray-600 dark:text-gray-400">Support</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 dark:bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed mb-8">
              To inspire a love of reading and learning by providing easy access to diverse, 
              quality literature. We strive to create a world where everyone can discover 
              their next favorite book and embark on endless adventures through the pages.
            </p>
            <blockquote className="text-2xl italic text-orange-500 font-semibold">
              "A room without books is like a body without a soul."
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400 mt-2">- Marcus Tullius Cicero</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="text-center">
      <img 
        src="https://randomuser.me/api/portraits/women/44.jpg" 
        alt="Sarah Johnson"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
      <p className="text-orange-500 mb-2">Founder & CEO</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Passionate about making literature accessible to all
      </p>
    </div>
    <div className="text-center">
      <img 
        src="https://randomuser.me/api/portraits/men/32.jpg" 
        alt="Michael Chen"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
      <p className="text-orange-500 mb-2">Content Curator</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Expert in selecting quality books across all genres
      </p>
    </div>
    <div className="text-center">
      <img 
        src="https://randomuser.me/api/portraits/women/68.jpg" 
        alt="Emily Rodriguez"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">Emily Rodriguez</h3>
      <p className="text-orange-500 mb-2">Community Manager</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Building connections between readers worldwide
      </p>
    </div>
  </div>
</div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start your reading journey with thousands of free and premium books. 
            Your next great read is just a click away!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
           <Link to="/books">
  <button className="bg-white text-orange-500 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
    Browse Books
  </button>
</Link>
            <Link to="/signup">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-orange-500 transition-colors">
                Sign Up Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;