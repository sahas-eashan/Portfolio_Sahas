export interface Experience {
  organization: string;
  title: string;
  period: string;
  description: string;
  type: 'leadership' | 'education' | 'certification';
  image?: string;
  skills?: string[];
}

export const LEADERSHIP_ROLES: Experience[] = [
  {
    organization: "Mora Esports Community",
    title: "Director - Event Management and Logistics",
    period: "Jun 2025 – Present",
    description: "Spearheading logistics and event strategy for campus-wide Esports tournaments and digital engagement.",
    type: "leadership",
    image: "/images/OIP.webp",
    skills: ["Event Management", "Leadership", "Strategy", "Logistics"]
  },
  {
    organization: "IEEE RAS - UoM",
    title: "Assistant Secretary",
    period: "Dec 2024 – Present",
    description: "Coordinating robotics activities, communications, and documentation for the student branch.",
    type: "leadership",
    image: "/images/RAs.webp",
    skills: ["Robotics", "Communications", "Documentation", "Coordination"]
  },
  {
    organization: "Robotic Day",
    title: "Co-Chair",
    period: "Feb 2025 - Apr 2025",
    description: "Co-led one of the biggest university events; managed public crowd, delivered keynotes.",
    type: "leadership",
    image: "/images/sb.webp",
    skills: ["Event Leadership", "Public Speaking", "Crowd Management", "Organization"]
  },
  {
    organization: "Mora Esports Community",
    title: "Assistant Pillar Head - Public Relations",
    period: "May 2024 – Jun 2025",
    description: "Built strong campus Esports presence via outreach, content, and creative PR initiatives.",
    type: "leadership",
    image: "/images/OIP.webp",
    skills: ["Public Relations", "Content Creation", "Marketing", "Community Building"]
  },
  {
    organization: "Electronic Club UoM",
    title: "Committee Member (Operations) - Main Pillar",
    period: "Feb 2024 – Present",
    description: "Main pillar operations, project logistics, and STEM workshop facilitation.",
    type: "leadership",
    image: "/images/eclub.webp",
    skills: ["Operations", "Project Management", "STEM Education", "Workshop Facilitation"]
  },
  {
    organization: "AIESEC UoM",
    title: "Matching Manager - IGV",
    period: "Feb 2024 – Aug 2024",
    description: "Managed interview and onboarding process for exchange students, growing cross-cultural collaboration.",
    type: "leadership",
    image: "/images/aiesec.webp",
    skills: ["Cross-cultural Collaboration", "Interview Management", "Onboarding", "International Relations"]
  }
];

export const EDUCATION: Experience[] = [
  {
    organization: "University of Moratuwa",
    title: "B.Sc. (Hons) Electronic & Telecommunication Engineering",
    period: "2023 – 2027",
    description: "Pursuing undergraduate degree with CGPA: 3.94/4.0. Relevant courses include Circuits & Signals, Communication Systems, Robotics Design, Engineering Design Project, and Computer Organization.",
    type: "education",
    skills: ["Electronic Engineering", "Telecommunication", "Circuit Design", "Signal Processing", "Communication Systems"]
  }
];

export const CERTIFICATIONS: Experience[] = [
  {
    organization: "Imperial College London",
    title: "Mathematics for Machine Learning",
    period: "Dec 2024",
    description: "Comprehensive specialization covering linear algebra, multivariate calculus, and PCA for machine learning applications.",
    type: "certification",
    skills: ["Linear Algebra", "Multivariate Calculus", "PCA", "Mathematical Foundations"]
  },
  {
    organization: "DeepLearning.AI",
    title: "Deep Learning Specialization",
    period: "Jun 2024",
    description: "Complete deep learning specialization covering neural networks, CNNs, RNNs, and practical deep learning applications.",
    type: "certification",
    skills: ["Deep Learning", "Neural Networks", "CNNs", "RNNs", "TensorFlow"]
  },
  {
    organization: "UC Irvine",
    title: "Embedded Systems & AI",
    period: "Ongoing",
    description: "Advanced coursework in embedded systems design and artificial intelligence integration.",
    type: "certification",
    skills: ["Embedded Systems", "AI Integration", "Real-time Systems", "IoT"]
  }
];

export const EXTRA_ACTIVITIES = [
  "Committee - Electronic Club (UoM)",
  "Volunteer - IESL Student Chapter",
  "Prospect - Leo Club (UoM Leos)",
  "Member - IEEE IES (UoM)",
  "OC Member - NexGen 1.0",
  "Co-Chair - Robotics Day 2025",
  "PM Team Member - AIESEC",
  "OC Member - Enigma",
  "PR Committee - FINNC by IEEE IES",
  "Matching Panelist - AIESEC"
];