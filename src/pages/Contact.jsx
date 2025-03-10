import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full h-auto bg-black  lg:p-24 xl:p-24 2xl:p-24 p-12">
          <h1 className="text-white lg:text-5xl text-xl text-center p-6">
            Contact Us
          </h1>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
