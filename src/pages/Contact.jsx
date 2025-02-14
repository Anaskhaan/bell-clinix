import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full h-auto bg-black  p-24">
          <h1 className="text-white lg:text-5xl text-xl text-center p-6">
            Contact Us
          </h1>
        </div>
      </div>
      {/* <p className="flex justify-center items-center  text-xl gap-2">
        For any medical inquiries, support, or feedback, contact us. We are here
        to assist with professional billing, coding, and revenue cycle
        management services.
      </p> */}
      <ContactForm />
    </div>
  );
};

export default Contact;
