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

import {
  Laptop,
  ClipboardCheck,
  BookPlus,
} from "lucide-react";
import {
  Music,
  Palette,
  MessageSquare,
  Map,
} from "lucide-react";








// for   /about page    &     home->whyChooseUs section===============================================================================
export  const values = [
    {
      icon: Heart,
      title: "Our Core Values",
      description: [
        "Inclusiveness and Respect",
        "Discipline and Moral Integrity",
        "Quality Education with Culture",
        "Creativity and Innovation",
        "Social Responsibility and Civic Sense"
      ]
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: ["To nurture disciplined, cultured, creative and responsible citizens through quality, inclusive and value-based education"]
    },
    {
      icon: Target,
      title: "Our Mission",
      description: [
        "To provide quality and practical education for holistic development",
        "To respect and promote cultural diversity and social harmony",
        "To develop discipline, moral values and civic responsibility."
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





//   ===========================  /   home page  data   ==============================

// home-> AcademicsSection data
export const features = [
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Highly qualified and dedicated faculty members",
  },
  {
    icon: Target,
    title: "Optimal Ratio",
    description: "Appropriate student-teacher ratio for personalized attention",
  },
  {
    icon: Laptop,
    title: "Digital Learning",
    description: "Modern technology integrated into everyday learning",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Evaluations",
    description: "Weekly tests, continuous assessment and terminal examinations",
  },
  {
    icon: BookPlus,
    title: "Extra Classes",
    description: "Remedial and extra classes for academic support",
  },
  {
    icon: Award,
    title: "Excellence Focus",
    description: "Committed to achieving academic excellence",
  },
];
 




// home-> ActivitiesSection data 
export const activities = [
  { icon: Trophy, title: "Sports", description: "Football, Cricket, Athletics"},
  { icon: Music, title: "Music & Dance", description: "Traditional & Modern" },
  { icon: Palette, title: "Art & Craft", description: "Creative Expression" },
  { icon: MessageSquare, title: "Debate & Quiz", description: "Critical Thinking"},
  { icon: Users, title: "Clubs", description: "Scouts, SQC, Red Cross" },
  { icon: Map, title: "Field Trips", description: "Educational Tours" },
];




// home -> FacilitiesSection data 
export const homeFacilities = [
  {
    icon: FlaskConical,
    title: "Science Lab",
    description: "Well-equipped labs for practical experiments",
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description: "Modern computers with training programs",
  },
  {
    icon: Bot,
    title: "Robotics & IT Trainings",
    description: "Hands-on training in robotics and IT skills",
  },
  {
    icon: Trophy,
    title: "Sports Ground",
    description: "Appropriate playground for various sports",
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Safe and reliable school bus service",
  },
  {
    icon: Shield,
    title: "CCTV & Safety",
    description: "24/7 surveillance for student security",
  },
  {
    icon: Tv,
    title: "Smart Classes",
    description: "Digital learning with interactive boards",
  },
  {
    icon: Wifi,
    title: "Digital Campus",
    description: "Wi-Fi enabled campus for modern learning",
  },
];





//  home -> GradesSection data
export const homeGrades = [
  {
    id: "pre-primary",
    title: "Pre-Primary",
    levels: ["Nursery", "LKG", "UKG"],
    icon: Baby,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    description: "Building strong foundations through play-based learning",
  },
  {
    id: "basic_1_5",
    title: "Basic Level (1-5)",
    levels: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    description: "Developing core skills in reading, writing, and mathematics",
  },
  {
    id: "basic_6_8",
    title: "Basic Level (6-8)",
    levels: ["Grade 6", "Grade 7", "Grade 8"],
    icon: GraduationCap,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    description: "Expanding knowledge with specialized subjects",
  },
  {
    id: "secondary",
    title: "Secondary",
    levels: ["Grade 9", "Grade 10"],
    icon: Award,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    description: "Preparing for SEE examination and future success",
  },
];






// home -> TestimonialSection data 
export const testimonials = [
  {
    id: 1,
    name: "Sunita Sharma",
    childGrade: "Grade 8",
    feedback:
      "The teachers here really care about every child. My son has become much more confident and his grades have improved a lot. The hostel feels like a second home.",
    rating: 5,
    date: "Falgun 2082",
  },
  {
    id: 2,
    name: "Rajesh Adhikari",
    childGrade: "Grade 5",
    feedback:
      "We are very happy with the discipline and regular updates from the school. The safety measures are excellent, and our daughter loves going to school every day.",
    rating: 5,
    date: "Asar 2081",
  },
  {
    id: 3,
    name: "Kamala Thapa",
    childGrade: "Grade 10",
    feedback:
      "Both my children studied here and it has shaped them beautifully — not just in studies but in character and confidence. Also provides a special guidance to class 10th students.",
    rating: 5,
    date: "Falgun 2078",
  },
  {
    id: 4,
    name: "Bikash Rai",
    childGrade: "Grade 7",
    feedback:
      "The school provides a perfect balance between academics and extracurricular activities. My child has developed leadership skills and enjoys every moment at school.",
    rating: 5,
    date: "Poush 2080",
  },
  {
    id: 5,
    name: "Anita Chaudhary",
    childGrade: "Grade 6",
    feedback:
      "I truly appreciate the caring environment and dedicated teachers. The communication between school and parents is excellent, which gives us great confidence.",
    rating: 5,
    date: "Baisakh 2079",
  },
];




