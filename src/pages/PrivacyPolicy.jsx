import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gold-400 border-b pb-4 mb-6">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-300 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Welcome to BellThinks. Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and safeguard your personal
            information when you interact with our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-300 mb-3">
            2. Information We Collect
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              and address.
            </li>
            <li>
              <strong>Usage Data:</strong> Information regarding your
              interactions with our website and services.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              and device information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-300 mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to inquiries and support requests.</li>
            <li>Analyze user behavior and improve our website experience.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Your Data Protection Rights
          </h2>
          <p className="text-gray-400 leading-relaxed">
            You have the right to request:
          </p>
          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Access to your personal data.</li>
            <li>Correction of inaccurate or incomplete information.</li>
            <li>Deletion of your personal data under certain conditions.</li>
            <li>Restriction on the processing of your personal data.</li>
          </ul>
          <p className="mt-4 text-gray-400">
            If you have any concerns, please contact us using the details below.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            5. Contact Information
          </h2>
          <p className="text-gray-400 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us:
          </p>
          <address className="mt-4 text-gray-400 leading-relaxed">
            <p>
              <strong>Address:</strong> 1234 Example St, City, Country
            </p>
            <p>
              <strong>Phone:</strong> +1 234-567-890
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@bellthinks.com"
                className="text-blue-400 hover:underline"
              >
                contact@bellthinks.com
              </a>
            </p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
