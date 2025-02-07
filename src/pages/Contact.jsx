import ContactForm from "../components/ContactForm";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full h-auto bg-[#303a73]  p-24">
          <h1 className="text-white text-5xl text-center p-6">Contact Us</h1>
          <p className="flex justify-center items-center text-white text-xl gap-2">
            <Link
              to="/"
              className="text-white hover:text-blue-500 ease-in-out duration-300"
            >
              Home
            </Link>
            <ArrowRight /> Contact Us
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
