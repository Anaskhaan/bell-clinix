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
      " Streamline your revenue cycle with our efficient and accurate billing services.",
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
        Our end-to-end billing service turns the complexities of medical billing
        into seamless solutions, so you can focus on clinical decision making.
      </span>
    ),
    details: [
      "Time efficient electronic claim Submission ",
      "Specialty specific teams of experts",
      "Accurate and real-time eligibility verification ",
      "Evading underbilling through comprehensive fee Analysis ",
      "Tracking your practice’s financial health utilizing advanced Reporting Tools ",
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
        Our expert medical coders play a vital role in ensuring accuracy,
        compliance, and efficiency, minimizing claim denials and optimizing
        reimbursements.
      </span>
    ),

    details: [
      "Error-free medical coding for faster claims approvals.",
      "Aligned with ICD-10, CPT, and HCPCS guidelines.",
      "Real-time code validation to reduce claim denials.",
      "Prevent revenue loss with proactive audits and quality check.",
      "Enhance accuracy with advanced analytics and reporting.",
    ],
    cards: [
      {
        icon: <CreditCard className="text-gray-400" />,
        title: "Maximized Reimbursements",
        description:
          "We ensure coding for maximized reimbursements, fewer claim denials, and time efficient processing.",
        list: [
          "Error-free coding",
          "Up-to-date with ICD-10, CPT, HCPCS",
          "Real-time validation & audits",
        ],
      },
      {
        icon: <Clock className="text-gray-400" />,
        title: "Time Efficiency",
        description: "AI driven coding protocol and documentation processes.",
        list: [
          "Automated coding checks",
          "Minimized coding errors",
          "Faster claim submission",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Regulatory Compliance",
        description:
          "Perfectly aligned with regulatory compliance and industry standards.",
        list: [
          "HIPAA & HITECH compliance",
          "Error-free documentation standards",
          "Legal and financial accuracy",
        ],
      },
    ],
  },
  {
    title: "AR & Denial Management",
    span: () => (
      <span className="">
        Our AR and Denial management solutions optimize cash flow, reduce claim
        rejections, and ensure faster reimbursements
      </span>
    ),

    details: [
      "Strategic AR management achieving accelerated claim resolution and cash flow.",
      "Real-time denial tracking minimizing revenue loss and payment delays.",
      "Root cause analysis reducing recurring claim rejections and denials.",
      "Efficient appeals process ensuring maximum reimbursement recovery.",
      "Data-driven insights enhancing AR performance and financial stability.",
    ],
    cards: [
      {
        icon: <CreditCard className="text-gray-400" />,
        title: "Faster Cash Flow",
        description:
          "Optimizing revenue cycles for quicker reimbursements and steady financial growth.",
        list: [
          "Quick claims processing",
          "Automated payment tracking",
          "Optimized AR follow-ups",
        ],
      },
      {
        icon: <CrossIcon className="text-gray-400" />,
        title: "Reduced Denial Rates",
        description:
          "Minimizing claim rejections with precision-driven coding and proactive troubleshooting.",
        list: [
          "Real-time claim validation",
          "Denial root cause analysis",
          "Efficient re-submission",
        ],
      },
      {
        icon: <FileText className="text-gray-400" />,
        title: "Comprehensive Reporting",
        description:
          "Gaining actionable insights to enhance financial performance and compliance.",
        list: [
          "Real-time revenue tracking",
          "Denial trend analysis",
          "Performance benchmarking",
        ],
      },
    ],
  },
  {
    title: "Audit Services",
    span: () => (
      <span className="">
        We simplify audit complexities with precise evaluations, ensuring
        compliance, reducing risks, and maximizing revenue integrity.
      </span>
    ),
    details: [
      "Error-free scanning and detection algorithm for coding errors.",
      "AI driven data insights yielding improved billing accuracy.",
      "Regular assessments plan to minimize financial risks and penalties.",
      "Achieving enhanced revenue integrity through streamlined audit processes.",
      "Compliance tracking for regulations.",
    ],
    cards: [
      {
        icon: <DollarSign className="text-gray-400" />,
        title: "Revenue Management",
        description:
          "Optimized audits protocol to prevent revenue loss and boost financial performance.",
        list: [
          "Identifies missed revenue opportunities",
          "Reduced billing discrepancies",
          "Enhanced financial stability",
        ],
      },
      {
        icon: <AlertCircle className="text-gray-400" />,
        title: "Error Detection",
        description:
          "Pinpointing inaccuracies to minimize claim denials and payment delays.",
        list: [
          "AI driven detection of coding and billing errors",
          "Improved claim acceptance",
          "Reduces rework and resubmissions",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Compliance Assurance",
        description:
          "Ensuring adherence to industry regulations and avoids penalties.",
        list: [
          "Tracking regulatory updates",
          "HIPAA compliance",
          "Reduces audit risks",
        ],
      },
    ],
  },
  {
    title: "Credentialing",
    span: () => (
      <span className="">
        BellClinix simplifies credentialing, ensuring provider
        approvals,compliance, and seamless reimbursements without administrative
        delays.
      </span>
    ),

    details: [
      "Fast and accurate provider credentialing for seamless approvals.",
      "Compliance-focused verification to meet regulatory standards.",
      "Minimized claim denials with up-to-date credentialing.",
      "Efficient enrollment to avoid reimbursement delays.",
      "Simplified documentation for reduced administrative workload.",
    ],
    cards: [
      {
        icon: <FileText className="text-gray-400" />,
        title: "Streamlined Documentation",
        description:
          "We ensure accurate and organized credentialing records for smooth verification.",
        list: [
          "Centralized record management",
          "Accurate provider data entry",
          "Easy access to credentialing history",
        ],
      },
      {
        icon: <Clock className="text-gray-400" />,
        title: "Reduced Turnaround Time",
        description:
          "Accelerated approval processes with efficient provider enrollment and verification.",
        list: [
          "Faster payer approvals",
          "Automated application tracking",
          "Minimized processing delays",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Compliance Assurance",
        description:
          "Strict adherence to industry regulations and payer requirements to avoid penalties.",
        list: [
          "Adherence to regulatory standards",
          "Regular audits and updates",
          "Risk mitigation for credentialing errors",
        ],
      },
    ],
  },
  {
    title: "Healthcare IT",
    span: () => (
      <span className="">
        BellClinix delivers advanced healthcare IT solutions, improving data
        management, system security, and workflow automation for seamless
        operations.
      </span>
    ),

    details: [
      "Secure IT solutions streamline healthcare operations.",
      "EHR integration enhances data accessibility.",
      "Automated workflows reduce manual errors.",
      "Real-time analytics improve decision-making.",
      "HIPAA compliance ensures data protection.",
    ],
    cards: [
      {
        icon: <Settings className="text-gray-400" />,
        title: "Streamlined Operations",
        description:
          "Optimize workflows with advanced healthcare IT solutions.",
        list: [
          "HIPAA / HITECH -compliant systems",
          "Secure cloud storage",
          "Advanced encryption protocols",
        ],
      },
      {
        icon: <ShieldCheck className="text-gray-400" />,
        title: "Enhanced Security",
        description:
          "Enhanced care quality with efficient and patient-centric IT solutions.",
        list: [
          "HIPAA-compliant systems",
          "Secure cloud storage",
          "Advanced encryption protocols",
        ],
      },
      {
        icon: <Smile className="text-gray-400" />,
        title: "Improved Patient Experience",
        description:
          "Enhance care quality with efficient and patient-centric IT solutions.",
        list: [
          "Faster access to medical records",
          "Digital scheduling yielding reduced wait times",
          "Telehealth support for remote care",
        ],
      },
    ],
  },
];
