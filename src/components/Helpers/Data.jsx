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
    icon: <Banknote className="w-12 h-12 text-gray-700" />,
    title: "Medical Billing",
    description:
      "Streamline your revenue cycle with our efficient and accurate billing services.",
    list: [
      "Claims submission and follow-up",
      "Payment posting and reconciliation",
      "Insurance verification and eligibility",
    ],
    color: "from-emerald-400 to-teal-300",
  },
  {
    icon: <FileCode className="w-12 h-12 text-gray-700" />,
    title: "Medical Coding",
    description:
      "Ensure compliance and accuracy in claims with our precise coding solutions.",
    list: [
      "ICD-10 and CPT coding expertise",
      "Compliance with HIPAA regulations",
      "Code auditing and documentation review",
    ],
    color: "from-sky-400 to-blue-300",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-gray-700" />,
    title: "AR & Denial Management",
    description:
      "Optimize cash flow with our proactive approach to reducing denials.",
    list: [
      "Denial analysis and resolution",
      "Appeals and reconsiderations",
      "Aging accounts management",
    ],
    color: "from-amber-400 to-yellow-300",
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-gray-700" />,
    title: "Audit Services",
    description:
      "Maintain accuracy and compliance with our comprehensive audit solutions.",
    list: [
      "Internal coding audits",
      "Regulatory compliance reviews",
      "Risk management and fraud prevention",
    ],
    color: "from-rose-400 to-pink-300",
  },
  {
    icon: <Key className="w-12 h-12 text-gray-700" />,
    title: "Credentialing",
    description:
      "Streamline your provider and payer credentialing processes seamlessly.",
    list: [
      "Provider enrollment and contracting",
      "Credentialing with insurance networks",
      "Ongoing re-credentialing services",
    ],
    color: "from-violet-400 to-purple-300",
  },
  {
    icon: <Laptop className="w-12 h-12 text-gray-700" />,
    title: "Healthcare IT",
    description:
      "Leverage cutting-edge IT solutions tailored for the healthcare industry.",
    list: [
      "EHR/EMR implementation",
      "Cybersecurity solutions",
      "Data analytics and reporting",
    ],
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
        icon: <CreditCard className="text-gray-400" />,
        title: "Accurate and Timely Reimbursement",
        description:
          "Ensure timely and accurate payments from insurance companies.",
        list: [
          "Properly coded claims",
          "Faster claim submission",
          "Reduced payment delays",
        ],
      },
      {
        icon: <Settings className="text-gray-400" />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
        list: [
          "Less paperwork for staff",
          "Automated claim processing",
          "More time for patient care",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Compliance with Regulations",
        description: "Stay compliant with federal and state healthcare laws.",
        list: [
          "HIPAA-compliant billing",
          "Updated coding standards",
          "Minimized legal risks",
        ],
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
        icon: <CreditCard className="text-gray-400" />,
        title: "Maximized Reimbursements",
        description:
          "Accurate coding ensures maximum reimbursements from payers.",
        list: [
          "ICD-10, CPT, HCPCS expertise",
          "Error-free submissions",
          "Higher claim approval rates",
        ],
      },
      {
        icon: <Clock className="text-gray-400" />,
        title: "Time Efficiency",
        description: "Reduce time spent on claim processing and corrections.",
        list: [
          "Faster coding turnaround",
          "Automated validation",
          "Optimized workflows",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Regulatory Compliance",
        description: "Ensure adherence to medical coding regulations.",
        list: [
          "Stay up-to-date with code changes",
          "Reduce compliance risks",
          "Improve audit readiness",
        ],
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
        icon: <CreditCard className="text-gray-400" />,
        title: "Faster Cash Flow",
        description:
          "Improve revenue cycles with efficient claim reimbursements.",
        list: [
          "Quick follow-up on unpaid claims",
          "Automated tracking systems",
          "Improved financial stability",
        ],
      },
      {
        icon: <CrossIcon className="text-gray-400" />,
        title: "Reduced Denial Rates",
        description: "Address claim issues proactively to minimize rejections.",
        list: [
          "Advanced denial analysis",
          "Real-time claim tracking",
          "Expert appeal handling",
        ],
      },
      {
        icon: <FileText className="text-gray-400" />,
        title: "Comprehensive Reporting",
        description: "Detailed AR and denial insights for better decisions.",
        list: [
          "Custom financial reports",
          "Trend analysis on denials",
          "Claim status monitoring",
        ],
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
        icon: <DollarSign className="text-gray-400" />,
        title: "Revenue Optimization",
        description: "Identify and recover lost revenue opportunities.",
        list: [
          "Comprehensive billing reviews",
          "Detection of underpaid claims",
          "Improved financial reporting",
        ],
      },
      {
        icon: <AlertCircle className="text-gray-400" />,
        title: "Error Detection",
        description: "Minimize errors in billing and coding.",
        list: [
          "Prevent claim denials",
          "Ensure accurate documentation",
          "Reduce compliance risks",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Compliance Assurance",
        description: "Ensure adherence to medical regulations and standards.",
        list: [
          "HIPAA and ICD-10 compliance",
          "Regular policy updates",
          "Risk assessment audits",
        ],
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
        icon: <FileText className="text-gray-400" />,
        title: "Streamlined Documentation",
        description: "Ensure faster approvals with accurate credentialing.",
        list: [
          "Automated document tracking",
          "Real-time application updates",
          "Minimized credentialing errors",
        ],
      },
      {
        icon: <Clock className="text-gray-400" />,
        title: "Reduced Turnaround Time",
        description: "Accelerate the provider enrollment process.",
        list: [
          "Quick payer approvals",
          "Optimized verification processes",
          "Faster contract execution",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Compliance Assurance",
        description: "Meet regulatory and payer credentialing requirements.",
        list: [
          "Ongoing compliance monitoring",
          "Credential expiry alerts",
          "Industry-standard verification",
        ],
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
        icon: <Settings className="text-gray-400" />,
        title: "Streamlined Operations",
        description:
          "Optimize healthcare workflows with integrated IT solutions.",
        list: [
          "Custom EHR integrations",
          "Automated task management",
          "Improved staff efficiency",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Enhanced Security",
        description: "Ensure the safety of sensitive patient data.",
        list: [
          "Advanced encryption standards",
          "Multi-factor authentication",
          "Regular security audits",
        ],
      },
      {
        icon: <Smile className="text-gray-400" />,
        title: "Improved Patient Experience",
        description:
          "Enhance digital interactions between patients and providers.",
        list: [
          "Seamless online appointment booking",
          "Patient portals for medical records",
          "24/7 support access",
        ],
      },
    ],
  },
];
