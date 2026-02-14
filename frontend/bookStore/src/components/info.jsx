import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function info() {
  return (
    <>
    <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-3xl text-orange-500 mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">info@bookstore.com</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaPhone className="text-3xl text-orange-500 mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-3xl text-orange-500 mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-black dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    123 Book Street<br />
                    Library City, LC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default info