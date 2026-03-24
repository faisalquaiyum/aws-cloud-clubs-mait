import type { SVGProps } from "react";

export type FacultyMember = {
  id: number;
  name: string;
  roleLabel?: string; // e.g. "FACULTY"
  desc: string;
  imageSrc?: string;
  socials?: {
    linkedin?: string;
  };
};

export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Bhaskar Kapoor",
    roleLabel: "FACULTY",
    desc: "Empowering students with mentorship that blends wisdom",
    imageSrc: "/faculty/dr-bhaskar.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/dr-bhaskar-kapoor-6b4b7819/" },
  },
  {
    id: 2,
    name: "Dr. Bhoomi Gupta",
    roleLabel: "FACULTY",
    desc: "A communications lead who connects people and ideas",
    imageSrc: "/faculty/dr-bhoomi.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/dr-bhoomi-gupta-3278a734/" },
  },
  {
    id: 3,
    name: "Dr. Monika Bhardwaj",
    roleLabel: "FACULTY",
    desc: "Organizes memorable experiences and events that leave a lasting impact",
    imageSrc: "/faculty/dr-monika.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/monika-bhardwaj-7709a3a9/" },
  },
  {
    id: 4,
    name: "Vikas Mani Tripathi",
    roleLabel: "FACULTY",
    desc: "Guiding students with expertise and dedication",
    imageSrc: "/faculty/vikas-mani.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/vikas-mani-tripathi/" },
  },
  {
    id: 5,
    name: "Sanjana Deswal",
    roleLabel: "FACULTY",
    desc: "Inspiring excellence through innovative teaching and mentorship",
    imageSrc: "/faculty/sanjana-deswal.jpg",
    socials: { linkedin: "https://www.linkedin.com/in/sanjana-deswal-4b390616a/" },
  },
];

export type Socials = {
  linkedin?: string;
  instagram?: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  group?: string; // for grid filters
  imageSrc?: string; // for cards view / grid placeholder
  socials?: Socials;
};

export function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.6v1.9h.1c.6-1.1 2.2-2.2 4.5-2.2 4.8 0 5.7 3.1 5.7 7.1V22H17v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H8V8z" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}
export const teamMembers: TeamMember[] = [
  { id: 1, name: "Saksham Gupta", role: "President", group: "core" },
  { id: 2, name: "Shubham Jha", role: "Vice President", group: "core" },
  { id: 3, name: "Yatin Kumar", role: "Secretary", group: "core" },

  { id: 4, name: "Pari Goel", role: "PR Head", group: "Public Relations" },
  { id: 5, name: "Ridhi Garg", role: "Event Head", group: "Event Management" },
  { id: 6, name: "Sharvi Aggarwal", role: "Social Media Head", group: "Social Media & Photography" },
  { id: 7, name: "Kushneet", role: "Content", group: "Content" },

  { id: 9, name: "Rishu", role: "Event Management", group: "Event Management" },
  { id: 10, name: "Aryan Gupta", role: "Event Management", group: "Event Management" },
  { id: 11, name: "Parth Aggarwal", role: "Event Management", group: "Event Management" },
  { id: 12, name: "Vasudev Shukla", role: "Event Management", group: "Event Management" },
  { id: 13, name: "Naman Gupta", role: "Event Management", group: "Event Management" },
  { id: 14, name: "Navya Gupta", role: "Event Management", group: "Event Management" },
  { id: 15, name: "Arjun Lakhanpal", role: "Event Management", group: "Event Management" },

  { id: 16, name: "Rehan Satija", role: "Public Relations", group: "Public Relations" },
  { id: 17, name: "Jatin Rana", role: "Public Relations", group: "Public Relations" },
  { id: 18, name: "Rishit Gupta", role: "Public Relations", group: "Public Relations" },
  { id: 19, name: "Shyam Tyagi", role: "Public Relations", group: "Public Relations" },
  { id: 20, name: "Aashi Jain", role: "Public Relations", group: "Public Relations" },
  { id: 21, name: "Eklavya", role: "Public Relations", group: "Public Relations" },

  { id: 22, name: "Abhinav", role: "Content", group: "Content" },
  { id: 23, name: "Manav", role: "Content", group: "Content" },

  { id: 25, name: "Kush Sharma", role: "Social Media & Photography", group: "Social Media & Photography" },
  { id: 27, name: "Aayush Grover", role: "Social Media & Photography", group: "Social Media & Photography" },
  { id: 28, name: "Piyush", role: "Social Media & Photography", group: "Social Media & Photography" },
  { id: 29, name: "Krish", role: "Social Media & Photography", group: "Social Media & Photography" },

  { id: 30, name: "Faisal", role: "Technical head", group: "Technical" },
  { id: 31, name: "Abhishek", role: "Technical", group: "Technical" },
  { id: 32, name: "Arpit Neewaliya", role: "Technical", group: "Technical" },
  { id: 33, name: "Divesh", role: "Technical", group: "Technical" },
  { id: 34, name: "Veeraj Ghalyan", role: "Technical", group: "Technical" },
];

export const teamCategories = [
  "All",
  "core",
  "Public Relations",
  "Social Media & Photography",
  "Technical",
  "Content",
  "Event Management",
] as const;