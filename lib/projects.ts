export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  team: string;
  featured: boolean;
  summary: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  challenge: string;
  solution: string;
  collaborationDetails: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "complaint-request-management-system",
    slug: "complaint-request-management-system",
    title: "Complaint Request Management System",
    subtitle: "A collaborative digital platform for handling organizational complaint requests efficiently.",
    category: "Software Engineering & Team Collaboration",
    year: "2024",
    role: "Software Development & Team Collaboration",
    team: "Collaborative Team Project",
    featured: true,
    summary:
      "A collaborative software project designed to help organize, manage, and handle complaint requests more efficiently through a structured digital system.",
    fullDescription:
      "The Complaint Request Management System was developed in collaboration with a team to address operational bottlenecks in handling user complaints and support tickets. The solution streamlines request ingestion, categorization, status tracking, and resolution workflows for administrative efficiency.",
    technologies: [
      "Web Application Development",
      "Database Architecture",
      "Workflow Automation",
      "Role-Based Access Control",
      "RESTful Services",
    ],
    keyFeatures: [
      "Centralized complaint request dashboard with real-time status updates.",
      "Automated request categorization and routing to responsible departments.",
      "Multi-level user access control for administrators, officers, and request submitters.",
      "Audit trail logging to track resolution history and response time metrics.",
      "Search and filtering system to manage high-volume complaint logs effortlessly.",
    ],
    challenge:
      "Legacy request processes relied on manual tracking, leading to delayed response times, lost tickets, and poor visibility across resolution teams.",
    solution:
      "Working closely with engineering teammates, we designed and built a structured digital workflow system that centralizes all request tickets, automates notifications, and provides clear analytics on resolution turnaround times.",
    collaborationDetails:
      "Lemiofi actively contributed to team discussions, feature implementation, interface development, and system logic optimization as part of a collaborative software team effort.",
  },
  {
    id: "liq-academy-platform",
    slug: "liq-academy-platform",
    title: "Liq Academy — Online Education Platform",
    subtitle: "An online education platform for Ethiopian universities.",
    category: "EdTech & University Education",
    year: "2024 - Present",
    role: "Co-Founder & Lead Developer",
    team: "Liq Academy",
    featured: true,
    summary:
      "Co-founded by Lemiofi Chalchisa, Liq Academy is an online education platform for Ethiopian universities, dedicated to providing organized academic resources, exam guides, and peer mentorship.",
    fullDescription:
      "Co-founded by Lemiofi Chalchisa, Liq Academy is an online education platform for Ethiopian universities. Higher education presents rigorous academic demands, evolving curricula, and resource limitations. Liq Academy solves this by delivering structured, high-yield study resources, lecture breakdowns, and comprehensive preparation materials to help university students excel academically and build lasting foundations throughout their academic journey.",
    technologies: [
      "Online Education Platform",
      "Ethiopian University Curriculum",
      "Full-Stack Web Development",
      "Educational Media & Tutorials",
      "Student Community & Mentorship",
    ],
    keyFeatures: [
      "Curated digital study guides tailored to Ethiopian university course modules.",
      "Midterm and final exam walkthroughs, practice assessments, and step-by-step problem explanations.",
      "High-accessibility, fast-loading online platform designed for students across all Ethiopian campuses.",
      "Supportive student community connecting learners with university mentors and top achievers.",
    ],
    challenge: "Students across Ethiopian universities face demanding academic transitions with scattered course materials, heavy modular workloads, and limited centralized study guidance.",
    solution: "Co-founded Liq Academy as a dedicated online education platform providing organized, high-quality educational resources, tutorials, and mentorship for Ethiopian universities.",
    collaborationDetails: "Co-founded and developed by Lemiofi Chalchisa, collaborating with academic contributors, co-founders, and a nationwide network across Ethiopian universities.",
  },
];
