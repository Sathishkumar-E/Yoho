import { Link } from "lucide-react";

function Navbar() {
  return (
    <><nav className="bg-blue-500 p-2">
          <ul className="flex space-x-4 text-2xl m-2 p-2 justify-evenly">
              <li><a href="#" className="text-white hover:underline hover:text-blue-900">Home</a></li>
              <li><a href="#" className="text-white hover:underline hover:text-blue-900">About Us</a></li>
              <li><a href="#" className="text-white hover:underline hover:text-blue-900">Academics</a></li>
              <li><a href="#" className="text-white hover:underline hover:text-blue-900">Facilities</a></li>
              <li><a href="#" className="text-white hover:underline hover:text-blue-900">Contact</a></li>
              <Link to="/about" className="text-white hover:underline hover:text-blue-900">About Us</Link>
          </ul>
      </nav><img
              src="src/assets/school-front.jpg"
              alt="A large pink and red school building with palm trees in front, surrounded by greenery and a calm, welcoming atmosphere"
              className="w-full h-150" /></>

  );
}
export default Navbar;