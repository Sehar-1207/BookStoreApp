import { GrDeliver } from "react-icons/gr";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { PiKeyReturnFill } from "react-icons/pi";


function frequestQues() {
  return (
    <>
     <div className="mt-12 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white inline-flex items-center gap-2"><SiBookstack className='text-orange-500 text:bg-white'/>Book Availability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check our Books page for our current collection or contact us about specific titles.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white inline-flex items-center gap-2"><GrDeliver className='text-orange-500 text:bg-white' /> Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We typically respond within 24-48 hours. For urgent inquiries, please call us.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white inline-flex items-center gap-2">< BiSolidCreditCardAlt className='text-orange-500 text:bg-white'/> Payment Methods</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards, PayPal, and bank transfers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white inline-flex items-center gap-2"><PiKeyReturnFill className='text-orange-500 text:bg-white ' /> Returns</h3>
              <p className="text-gray-600 dark:text-gray-400">
                30-day return policy for all books. Contact us for return instructions.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default frequestQues