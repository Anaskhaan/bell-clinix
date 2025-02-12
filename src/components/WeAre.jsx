export default function WeAre() {
  return (
    <div className="py-20 bg-white flex flex-col items-center text-center px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-bold text-[#303a73]">
        We are BellClinix
      </h1>

      <p className="mt-4 md:mt-6 text-base md:text-lg w-full md:w-3/5 text-justify">
        BellClinix provides precise and efficient billing solutions tailored to
        the unique financial needs of healthcare practices. Our specialized
        evaluation process optimizes revenue cycles, ensuring compliance and
        financial stability.
      </p>

      <ul className="mt-6 space-y-2 text-left w-full md:w-3/5">
        <li className="flex items-start">
          <span className="text-[#303a73] font-semibold">•</span>
          <span className="ml-2">
            Tailored billing solutions for healthcare providers
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#303a73] font-semibold">•</span>
          <span className="ml-2">
            Focus on accuracy and efficiency in revenue management
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#303a73] font-semibold">•</span>
          <span className="ml-2">
            Specialized evaluation process for optimization
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#303a73] font-semibold">•</span>
          <span className="ml-2">
            Ensures compliance and financial stability
          </span>
        </li>
      </ul>
    </div>
  );
}
