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
  FileText,
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
    span: () => (
      <span className="">
        &quot;Our end-to-end billing service turns the complexities of medical
        billing into seamless solutions, so you can focus on clinical decision
        making.&quot;
      </span>
    ),
    details: [
      "Time efficient electronic Claim Submission ",
      "Specialty specific teams of experts",
      "Accurate and real-time Eligibility Verification ",
      "Evading underbilling through comprehensive Fee Analysis ",
      "ExTracking your practice’s financial health utilizing advanced Reporting Tools ",
    ],
    cards: [
      {
        icon: <CreditCard className="text-gray-400" />,
        title: "Accurate and Timely Reimbursement",
        description:
          "We ensure timely and accurate payments from insurance companies",
        list: [
          "Properly coded claims",
          "Faster claim submission",
          "Prompt follow-up",
        ],
      },
      {
        icon: <Settings className="text-gray-400" />,
        title: "Reduced Administrative Burden",
        description: "Streamline documentation and payment processes.",
        list: [
          "Bespoke re-porting & revenue tracking",
          "Advanced analytics and less paperwork ",
          "Automated claim processing",
          "More time for patient care",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Compliance with Regulations",
        description: "Stay compliant with federal and state healthcare laws.",
        list: [
          "Super bill creation",
          "HIPAA / HITECH compliance",
          "Updated coding standards",
          "Minimized legal risks",
        ],
      },
    ],
  },
  {
    title: "Medical Coding",
    span: () => (
      <span className="">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </span>
    ),

    details: [
      "Accurate coding maximizes reimbursements.",
      "Proper use of ICD-10, CPT, HCPCS prevents claim denials.",
      "Compliance with healthcare regulations ensures smooth processing.",
      "Staff training enhances coding skills and efficiency.",
      "Error-free submissions improve claim approval rates.",
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
    span: () => (
      <span className="">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </span>
    ),

    details: [
      "Effective AR solutions maintain a healthy cash flow.",
      "Tracking payments ensures financial transparency.",
      "Proactive denial management reduces claim rejections.",
      "Faster resolution of underpayments improves revenue.",
      "Close collaboration with staff optimizes billing processes.",
    ],
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
    span: () => (
      <span className="">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </span>
    ),
    details: [
      "Identify and recover lost revenue opportunities.",
      "Prevent claim denials with accurate billing reviews.",
      "Detect and rectify underpaid claims efficiently.",
      "Ensure HIPAA and ICD-10 compliance.",
      "Regular policy updates minimize compliance risks.",
    ],
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
    span: () => (
      <span className="">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </span>
    ),

    details: [
      "Automate provider credentialing for faster approvals.",
      "Reduce documentation errors and verification delays.",
      "Stay compliant with regulatory requirements.",
      "Streamline payer enrollment for quick processing.",
      "Minimize turnaround time for credentialing applications.",
    ],
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
    span: () => (
      <span className="">
        Get Paid on Time with BellClinix&apos;s Medical Billing Consulting
        Services
      </span>
    ),

    details: [
      "Optimize workflows with integrated IT solutions.",
      "Enhance patient engagement through digital platforms.",
      "Ensure data security with advanced encryption.",
      "Improve operational efficiency with automated systems.",
      "Provide seamless electronic health record (EHR) integration.",
    ],
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
