import { useEffect } from "react";
import Service from "../components/Service";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section>
        <div className="flex justify-center items-center">
          <div className="w-full h-auto bg-black p-24">
            <h1 className="text-white lg:text-5xl text-xl text-center p-6">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-gray-800 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold ">
            BellClinix – Simplifying Medical Billing & Coding
          </h2>
          <p className="mt-4 lg:text-xl xl:text-xl text-md leading-relaxed">
            At <span className="font-semibold">BellClinix</span>, we help
            healthcare providers streamline their revenue cycle with efficient,
            accurate, and hassle-free medical billing and coding solutions.
          </p>
          <p className="mt-4 lg:text-xl xl:text-xl text-md leading-relaxed">
            Our expert team ensures{" "}
            <span className="font-semibold">
              error-free claims, faster reimbursements,
            </span>
            and{" "}
            <span className="font-semibold">
              compliance with industry standards
            </span>
            , allowing you to focus on patient care while we handle the
            complexities of billing.
          </p>
          <p className="mt-4 lg:text-xl xl:text-xl text-md leading-relaxed">
            Whether it&apos;s{" "}
            <span className="font-semibold">
              insurance verification, claims processing, denial management,
            </span>{" "}
            or <span className="font-semibold">revenue optimization</span>,
            we&apos;ve got you covered. Partner with us for seamless financial
            operations and maximize your practice&apos;s profitability!
          </p>
        </div>
      </section>
      <Service />
    </div>
  );
}
