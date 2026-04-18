import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import { Globe } from "lucide-react";
import { Baby, GraduationCap} from "lucide-react";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Youtube,
  } from "lucide-react";
import {
    FlaskConical,
    Monitor,
    Trophy,
    Bus,
    Shield,
    Tv,
    Wifi,
    Utensils,
    Bot,
  } from "lucide-react";



// for /about page ===============================================================================
export  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: ["a", "b", "c"]
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: ['a', 'b', 'c']
    },
    {
      icon: Heart,
      title: "Our Values",
      description: [
        "Inclusive and Respect",
        "Discipline and Moral Integrity",
        "Quality Education with Culture",
        "Creativity and Innovation",
        "Social Responsibility and Civic Sense"
      ]
    },
  ];



export const whyUs = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "Consistently high SEE pass rates and top performers",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Qualified and dedicated teaching professionals",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "NEB curriculum with English medium instruction",
    },
    {
      icon: Heart,
      title: "Safe Environment",
      description: "24/7 security with CCTV surveillance",
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Balance of academics, sports, and arts",
    },
    {
      icon: Eye,
      title: "Individual Attention",
      description:
        "Optimal student-teacher ratio for personalized learning",
    },
  ]


export const stats = [
    { number: "31+", label: "Years of Excellence" },
    { number: "700+", label: "Students Enrolled" },
    { number: "45+", label: "Qualified Teachers" },
    { number: "95%", label: "SEE Pass Rate" },
  ];








//   /academics overview data =====================================================
export const curriculum = [
  {
    icon: Globe,
    title: "English Medium",
    description:
      "All subjects are taught in English to prepare students for global opportunities",
  },
  {
    icon: BookOpen,
    title: "NEB Curriculum",
    description:
      "Following the National Examination Board curriculum of Nepal",
  },
  {
    icon: Award,
    title: "SEE Preparation",
    description:
      "Special focus on Secondary Education Examination preparation",
  },
];


export const schedule = [
  { time: "5:30 AM", activity: "Taekwondo (Karate training)" },
  { time: "6:30 AM", activity: "Coaching Classes Begins" },
  { time: "8:30 AM", activity: "Coaching Classes Ends" },
  { time: "10:00 AM", activity: "Morning Assembly & Classes Begin" },
  { time: "12:45 PM", activity: "Lunch Break" },
  { time: "1:30 PM", activity: "Afternoon Classes" },
  { time: "4:00 PM", activity: "Classes End & Extra-curricular Activities Begins" },
];











//    /academics/grades data  =================================================================

export const grades = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    levels: ["Nursery", "LKG", "UKG"],
    icon: Baby,
    color: "from-pink-400 to-rose-500",
    ageGroup: "3-5 years",
    highlights: [
      "Play-based learning approach",
      "Introduction to alphabets and numbers",
      "Creative arts and music",
      "Physical development activities",
      "Social skills development",
    ],
    subjects: ["English", "Nepali","Science", "Mathematics","Sero-fero", "Drawing","Dancing", "Rhymes & Songs"],
  },
  {
    id: "basic_1-5",
    title: "Basic Level (1-5)",
    levels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    ageGroup: "6-10 years",
    highlights: [
      "Strong foundation in core subjects",
      "Development of reading and writing skills",
      "Basic science concepts",
      "Introduction to computer",
      "Moral education and values",
    ],
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer",
      "Health & Physical Education",
      "Drawing & Handwriting",
      "Sero-fero",
    ],
  },
  {
    id: "basic_6_8",
    title: "Basic Level (6-8)",
    levels: ["Grade 6", "Grade 7", "Grade 8"],
    icon: GraduationCap,
    color: "from-green-400 to-emerald-500",
    ageGroup: "11-13 years",
    highlights: [
      "Advanced subject specialization",
      "Laboratory-based science learning",
      "Project-based learning",
      "Critical thinking development",
      "Leadership opportunities",
    ],
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Computer",
      "Sero-fero",
      "Optional Mathematics",
      "Health & Physical Education",
    ],
  },
  {
    id: "secondary",
    title: "Secondary",
    levels: ["Grade 9", "Grade 10"],
    icon: Award,
    color: "from-amber-400 to-orange-500",
    ageGroup: "14-16 years",
    highlights: [
      "SEE examination preparation",
      "Career guidance",
      "Advanced laboratory work",
      "Mock tests and evaluations",
      "Special coaching for competitive exams",
    ],
    subjects: [
      "English",
      "Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Optional Mathematics",
      "Office Management & Accountancy",
    ],
  },
]












//   /admission data ===================================================

export const steps = [
  {
    number: 1,
    title: "Submit Application",
    description: "Fill out the online form or collect from office",
  },
  {
    number: 2,
    title: "Entrance Test",
    description: "Appear for entrance examination",
  },
  {
    number: 3,
    title: "Interview",
    description: "Student and parent interview",
  },
  {
    number: 4,
    title: "Admission Confirmation",
    description: "Submit documents and fees",
  },
];


export const requirements = [
  "Birth Certificate (Original & Copy)",
  "Character Certificate from previous school",
  "Transfer Certificate & IEMIS number",
  "Recent passport-size photos (2 copies)",
  "Previous grade sheet",
];













//  /contact page data  ==================================================
export const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Itahari-17, Sunsari District, Nepal"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977 9812363723 | 025-590085"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["standardschool2051@gmail.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 8:00 AM - 5:00 PM", "Saturday: Closed"],
    },
  ];
  
  
export const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=100046922456345",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
    },
  ];
  







//     /facilities page data ==============================================
export const facilities = [
    {
      icon: FlaskConical,
      title: "Science Laboratory",
      description:
        "State-of-the-art physics, chemistry, and biology labs with modern equipment for hands-on experiments and practical learning experiences.",
      features: ["Modern Equipment", "Safety Measures", "Expert Supervision"],
    },
    {
      icon: Monitor,
      title: "Computer Lab",
      description:
        "Fully equipped computer laboratory with latest computers, high-speed internet, and dedicated computer training programs for all students.",
      features: ["Latest Computers", "High-Speed Internet", "Regular Training"],
    },
    {
      icon: Bot,
      title: "Robotics & IT Trainings",
      description:
        "Comprehensive robotics and IT training programs with hands-on experience in coding, graphics design and robotics.",
      features: ["Hands-On Projects", "Expert Instructors", "Latest Technology"],
    },
    {
      icon: Trophy,
      title: "Sports Ground",
      description:
        "Spacious playground for various sports including football, cricket, basketball, badminton, and athletics.",
      features: ["Multiple Sports", "Professional Coaching", "Annual Events"],
    },
    {
      icon: Bus,
      title: "Transportation",
      description:
        "Safe and reliable school bus service covering major routes in Itahari and surrounding areas with experienced drivers.",
      features: ["GPS Tracking", "Experienced Drivers", "Wide Coverage"],
    },
    {
      icon: Shield,
      title: "CCTV & Security",
      description:
        "Comprehensive security system with CCTV surveillance throughout the campus and trained security personnel.",
      features: ["24/7 Surveillance", "Trained Guards", "Emergency Response"],
    },
    {
      icon: Tv,
      title: "Smart Classrooms",
      description:
        "Modern smart classrooms with interactive digital boards, projectors, and audio-visual equipment for enhanced learning.",
      features: ["Digital Boards", "Projectors", "Audio-Visual Aids"],
    },
    {
      icon: Wifi,
      title: "Digital Campus",
      description:
        "Wi-Fi enabled campus supporting digital learning initiatives and online educational resources.",
      features: ["Campus-Wide WiFi", "Digital Learning", "Online Resources"],
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description:
        "Hygienic cafeteria serving nutritious meals prepared under strict quality standards with variety of options.",
      features: ["Nutritious Food", "Hygienic Preparation", "Variety Menu"],
    },
  ];








//  /gallery page data ============================================
export const categories = [
    "All",
    "School",
    "Teachers",
    "Students",
    "Events",
    "Sports",
    "Activities",
    "Arts",
    "Educational Tour",
    "Memories"
  ];






