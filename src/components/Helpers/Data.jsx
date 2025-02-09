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
  Clock,
  CrossIcon,
  BarChart,
  Lock,
  FileText,
  UserCheck,
  Layers,
  Users,
  Activity,
  Video,
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
          "Medical billing ensures healthcare providers receive timely and accurate payments from insurance companies and patients by submitting properly coded claims.",
      },
      {
        icon: <Settings />,
        title: "Reduced Administrative Burden",
        description:
          "It streamlines the documentation and payment processes, reducing the time and effort healthcare staff need to spend on billing tasks, allowing them to focus on patient care.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance with Regulations",
        description:
          "Medical billing helps healthcare providers stay compliant with federal and state regulations, including the Health Insurance Portability and Accountability Act (HIPAA), which safeguards patient information.",
      },
      {
        icon: <DollarSign />,
        title: "Improved Cash Flow",
        description:
          "Proper billing ensures faster payment processing, reducing the likelihood of denied claims, and improving the financial health of healthcare practices.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Prevention",
        description:
          "A well-executed medical billing process helps minimize errors such as incorrect codes or missing information, which could otherwise lead to claim rejections or delays in payment.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description:
          "Clear and accurate billing ensures that patients receive understandable bills, reducing confusion or frustration and enhancing their overall experience with healthcare services.",
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
        title: "Maximized Reimbursements",
        description:
          "Accurate coding ensures you receive maximum reimbursements from payers.",
      },
      {
        icon: <Clock />,
        title: "Time Efficiency",
        description:
          "Free up your administrative staff to focus on patient care and services.",
      },
      {
        icon: <ShieldCheck />,
        title: "Regulatory Compliance",
        description:
          "Stay compliant with healthcare regulations and avoid penalties.",
      },
      {
        icon: <CrossIcon />,
        title: "Error Reduction",
        description:
          "Minimize claim denials with precise and error-free coding.",
      },
      {
        icon: <BarChart />,
        title: "Improved Analytics",
        description:
          "Gain valuable insights through accurate coding and data tracking.",
      },
      {
        icon: <Lock />,
        title: "Data Security",
        description:
          "Protect sensitive patient information with secure coding practices.",
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
        title: "Faster Cash Flow",
        description:
          "Accelerate claim reimbursements and improve cash flow efficiency.",
      },
      {
        icon: <CrossIcon />,
        title: "Reduced Denial Rates",
        description:
          "Proactively address claim issues to minimize denials and rejections.",
      },
      {
        icon: <FileText />,
        title: "Comprehensive Reporting",
        description:
          "Gain actionable insights through detailed AR and denial reports.",
      },
      {
        icon: <UserCheck />,
        title: "Expert Resolution Team",
        description:
          "Highly skilled specialists to resolve complex claim disputes.",
      },
      {
        icon: <Clock />,
        title: "Timely Follow-Up",
        description:
          "Ensure consistent and timely follow-ups to reduce aging accounts.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance Assurance",
        description:
          "Maintain regulatory compliance while improving billing accuracy.",
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
        icon: <DollarSign />,
        title: "Revenue Optimization",
        description:
          "Identify and recover missed revenue opportunities through accurate audits.",
      },
      {
        icon: <AlertCircle />,
        title: "Error Detection",
        description:
          "Uncover and correct coding and billing errors to avoid claim rejections.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance Assurance",
        description:
          "Ensure adherence to regulations and guidelines to avoid legal penalties.",
      },
      {
        icon: <Settings />,
        title: "Improved Provider Efficiency",
        description: "Ensure faster payment processing and financial health.",
      },
      {
        icon: <BarChart />,
        title: "Data-Driven Insights",
        description:
          "Gain actionable insights to improve billing accuracy and performance.",
      },
      {
        icon: <Smile />,
        title: "Enhanced Patient Satisfaction",
        description:
          "Accurate billing audits reduce patient complaints and increase trust.",
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
        icon: <FileText />,
        title: "Streamlined Documentation",
        description:
          "Ensure accurate and complete credentialing documents for faster approvals.",
      },
      {
        icon: <Clock />,
        title: "Reduced Turnaround Time",
        description:
          "Accelerate the credentialing process to minimize delays in provider enrollment.",
      },
      {
        icon: <ShieldCheck />,
        title: "Compliance Assurance",
        description:
          "Maintain adherence to regulatory and payer requirements for credentialing.",
      },
      {
        icon: <Layers />,
        title: "Credential Tracking",
        description:
          "Monitor and manage credentialing status for continuous compliance.",
      },
      {
        icon: <Users />,
        title: "Dedicated Support Team",
        description:
          "Expert guidance to resolve credentialing challenges efficiently.",
      },
      {
        icon: <Lock />,
        title: "Data Security",
        description:
          "Ensure the secure handling of sensitive provider information.",
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
        icon: <Settings />,
        title: "Streamlined Operations",
        description:
          "Optimize your healthcare workflow with integrated solutions, reducing overhead and improving efficiency.",
      },
      {
        icon: <ShieldCheck />,
        title: "Enhanced Security",
        description:
          "Protect sensitive data with top-tier security measures, ensuring patient information remains safe and secure.",
      },
      {
        icon: <Smile />,
        title: "Improved Patient Experience",
        description:
          "Provide patients with a seamless digital experience, including easier access to their healthcare records and appointment scheduling.",
      },
      {
        icon: <BarChart />,
        title: "Data-Driven Insights",
        description:
          "Leverage analytics to make informed decisions that improve care quality and operational performance.",
      },
      {
        icon: <Activity />,
        title: "Instant Access to Emergency Care",
        description:
          "Provide quick access to emergency medical records, ensuring faster, more efficient responses in critical situations.",
      },
      {
        icon: <Video />,
        title: "Telemedicine Integration",
        description:
          "Expand your healthcare reach with telemedicine solutions, offering virtual consultations and remote patient monitoring.",
      },
    ],
  },
];
