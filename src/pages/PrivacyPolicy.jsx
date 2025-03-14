const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Welcome to BellThinks. Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our services.",
    },
    {
      title: "2. Information We Collect",
      content: "We may collect the following types of information:",
      list: [
        "Personal Information: Name, email, phone number, and address.",
        "Usage Data: Information regarding your interactions with our website and services.",
        "Technical Information: IP address, browser type, and device information.",
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your information to:",
      list: [
        "Provide, maintain, and improve our services.",
        "Respond to inquiries and support requests.",
        "Analyze user behavior and improve our website experience.",
        "Comply with legal and regulatory requirements.",
      ],
    },
    {
      title: "4. Your Data Protection Rights",
      content: "You have the right to request:",
      list: [
        "Access to your personal data.",
        "Correction of inaccurate or incomplete information.",
        "Deletion of your personal data under certain conditions.",
        "Restriction on the processing of your personal data.",
      ],
    },
    {
      title: "5. Contact Information",
      content:
        "If you have any questions or concerns about this Privacy Policy, please reach out to us:",
      address: [
        "Address: 1234 Example St, City, Country",
        "Phone: +1 234-567-890",
        "Email: contact@bellthinks.com",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gold-400 border-b pb-4 mb-6">
          Privacy Policy
        </h1>
        {sections.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="lg:text-2xl text-lg font-semibold text-white mb-3">
              {section.title}
            </h2>
            <p className="text-white lg:text-lg text-md  leading-relaxed">
              {section.content}
            </p>
            {section.list && (
              <ul className="list-disc pl-6 text-white space-y-2">
                {section.list.map((item, idx) => (
                  <li className="text-white" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.address && (
              <address className="mt-4 text-white leading-relaxed">
                {section.address.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </address>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
