import {
  Banknote,
  FileCode,
  ShieldCheck,
  BarChart3,
  Key,
  Laptop,
  CreditCard,
  Settings,
  // ShieldCheck,
  DollarSign,
  AlertCircle,
  Smile,
} from "lucide-react";

export const services = [
  {
    icon: <Banknote className="w-12 h-12 text-[#56bafc]" />,
    title: "Medical Billing",
    description:
      "Streamline your revenue cycle with our efficient and accurate billing services.",
    color: "from-emerald-400 to-teal-300",
  },
  {
    icon: <FileCode className="w-12 h-12 text-[#56bafc]" />,
    title: "Medical Coding",
    description:
      "Ensure compliance and accuracy in claims with our precise coding solutions.",
    color: "from-sky-400 to-blue-300",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#56bafc]" />,
    title: "AR & Denial Management",
    description:
      "Optimize cash flow with our proactive approach to reducing denials.",
    color: "from-amber-400 to-yellow-300",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-[#56bafc]" />,
    title: "Audit Services",
    description:
      "Maintain accuracy and compliance with our comprehensive audit solutions.",
    color: "from-rose-400 to-pink-300",
  },
  {
    icon: <Key className="w-12 h-12 text-[#56bafc]" />,
    title: "Credentialing",
    description:
      "Streamline your provider and payer credentialing processes seamlessly.",
    color: "from-violet-400 to-purple-300",
  },
  {
    icon: <Laptop className="w-12 h-12 text-[#56bafc]" />,
    title: "Healthcare IT",
    description:
      "Leverage cutting-edge IT solutions tailored for the healthcare industry.",
    color: "from-indigo-400 to-blue-300",
  },
];

export const serviceDetails = [
  {
    title: "Medical Billing",
    h1: () => (
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </h1>
    ),
    details:
      "BellClinix provides a one-stop solution to all your medical billing and coding glitches. We have specialty specific billing and coding experts. BellClinix’s medical billing audit specialist team is known for mastery of ICD-10 billing and effective auditing. We are committed to ensure healthcare providers get paid on time by using efficient claim submission, precise coding, vigilant A/R follow-up, Engage with our 24-hour medical billing and coding consultancy and elevate your practice by getting the medical billing assistance you require. We assist both large and small firms in overcoming missing, delayed, or underpaid claims",

    cards: [
      {
        icon: <CreditCard />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Stay compliant with federal and state healthcare regulations.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description: "Minimize errors in claim submissions and avoid delays.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description: "Provide clear and understandable billing to patients.",
      },
    ],
  },
  {
    title: "Medical Coding",
    h1: () => (
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </h1>
    ),

    details: [
      "Accurate medical coding services to ensure compliance and proper claim management.",
      "BellClinix’s Medical Coding Consulting Services provide expert solutions to healthcare organizations for improving their medical coding practices.",
      "These services are designed to ensure accuracy, compliance, and efficiency in coding processes, which are essential for successful billing and revenue management.",
      "Key Features of the Service:",
      "• Accurate Coding: Ensures proper use of medical codes (ICD-10, CPT, HCPCS) for accurate documentation of diagnoses and procedures.",
      "• Compliance: Helps meet healthcare regulations and insurance rules to avoid audits and claim denials.",
      "• Custom Solutions: Provides tailored advice to improve coding workflows for clinics, hospitals, and specialty practices.",
      "• Training: Offers staff training to enhance coding skills and stay updated on industry standards.",
      "• Revenue Improvement: Identifies and fixes coding errors to prevent revenue losses and boost claim approvals.",
    ],
    cards: [
      {
        icon: <CreditCard />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Stay compliant with federal and state healthcare regulations.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description: "Minimize errors in claim submissions and avoid delays.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description: "Provide clear and understandable billing to patients.",
      },
    ],
  },
  {
    title: "AR & Denial Management",
    h1: () => (
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </h1>
    ),

    details:
      "BellClinix’s specialty-specific professionals handle Account Receivable (AR) and Denial Management as integral components of streaming medical billing revenue cycle management (RCM). Our AR team is focused on maintaining a healthy cash flow for your practice. They have mastery at tracking payments from patients and insurance payers separately ensuring transparency. Our effective AR solutions are perfect for revenue leakage prevention and optimizing financial performance. Our Denial management team is dedicated to troubleshooting, tracking, and following denied and unpaid claims from insurance companies. We are swift at identifying rectifying and re-submitting incorrect billing and coding via corrected proven procedures. BellClinix’s AR and Denial management team maintains a close collaboration with your in-house staff to resolve outright denials and underpayments.",
    cards: [
      {
        icon: <CreditCard />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Stay compliant with federal and state healthcare regulations.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description: "Minimize errors in claim submissions and avoid delays.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description: "Provide clear and understandable billing to patients.",
      },
    ],
  },
  {
    title: "Audit Services",
    h1: () => (
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </h1>
    ),
    details:
      "BellClinix’s Medical billing and coding Audit team is focused on ensuring compliance, accuracy, and revenue optimization. Our audit expert team offers chart reviews, Risk Adjustment (RA) chart reviews, Documentation improvement Services, Post-audit education and training, and consultation services. We are instrumental in utilizing hierarchical condition categories, prospective and retrospective chart reviews, and providing tailored solutions based on unique needs, scope of work, and organizational goals.",
    cards: [
      {
        icon: <CreditCard />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Stay compliant with federal and state healthcare regulations.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description: "Minimize errors in claim submissions and avoid delays.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description: "Provide clear and understandable billing to patients.",
      },
    ],
  },
  {
    title: "Credentialing",
    h1: () => (
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </h1>
    ),

    details:
      "BellClinix’s Physician Credentialing Service (PCS) automates the intricate process of medical credentialing to save you time, minimize errors, and provide you the opportunity to remain focused on clinical decision making and better patient care. We are adding a member to your practice whether you are a new physician or expanding to a new location, our PCS shall streamline the credentialing process for you. Our seasoned team backed by over a decade of collective experience, identifies intricacies, alleviates burdens, and ensures compliance, letting you concentrate on your patient care. Additionally, BellClinix provides tailored provider credentialing services, including automated verification, real-time updates, and personalized support, ensuring smoother operations and compliance.",
    cards: [
      {
        icon: <CreditCard />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Stay compliant with federal and state healthcare regulations.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description: "Minimize errors in claim submissions and avoid delays.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description: "Provide clear and understandable billing to patients.",
      },
    ],
  },
  {
    title: "Healthcare IT",
    h1: () => (
      <h1 className="text-center text-black lg:text-5xl text-3xl font-bold mb-10">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </h1>
    ),

    details:
      "BellClinix’s Healthcare IT professionals are focused at modernizing and optimizing healthcare delivery We offer healthcare IT services ranging from infrastructure, mobility, security and data management to managed services. Our IT team equipped with cutting edge technology, AI and more than a decade experience, is instrumental at developing and deploying IT ecosystem for your specific needs to meet data, performance, compliance and security. We ensure enhanced patient engagement through seamless integration of electronic health record (EHR), website and web applications, cloud services and telehealth supporting smartphones, tablets and mobile apps while reducing the IT burden.",
    cards: [
      {
        icon: <CreditCard />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Stay compliant with federal and state healthcare regulations.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description: "Minimize errors in claim submissions and avoid delays.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description: "Provide clear and understandable billing to patients.",
      },
    ],
  },
];
