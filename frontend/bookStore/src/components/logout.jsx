import { authUser } from '../contex/authProvider'; // ✅ Correct import name
import toast from 'react-hot-toast';

function Logout() { // ✅ Component name capitalized
    const [user, setAuthUser] = authUser(); // ✅ Correct hook usage
    
    const handleLogout = () => {
        try {
            setAuthUser(undefined); // ✅ Set to undefined, not an object
            localStorage.removeItem("user"); // ✅ Match the key you used in authProvider
            toast.success("Logout successfully");
            setTimeout(() => {
                window.location.reload(); // ✅ Added () to actually call the function
            }, 1000);
        } catch (error) {
            toast.error("Error: " + error.message); // ✅ Fixed typo: mesaage -> message
        }
    };
    
    return (
        <button 
            className="btn btn-sm md:btn-md
            bg-red-500 hover:bg-red-600
            text-white border-none font-bold" 
            onClick={handleLogout} // ✅ Pass function reference, not call it
        >
            Logout
        </button>
    );
}

export default Logout; // ✅ Capitalized export