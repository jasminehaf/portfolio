import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jasmine Nayla Hafiezh",
  initials: "JNH",
  url: "https://www.linkedin.com/in/jasminenaylahafiezh/",
  location: "Sukabumi, Jawa Barat",
  locationLink: "https://www.google.com/maps/place/Sukabumi",
  description:
    "An undergraduate student in Educational Technology and Information Systems, with a strong passion for UX research, system analys, and web development.",
  summary:
    "Currently pursuing a [Bachelor's degree in Educational Technology and Information Systems](https://psti.upi.edu) at UPI Purwakarta. I have a strong interest in [UX Research](/#projects), [Web Development](/#projects), and [System Analysis](/#projects). I enjoy combining technology with user-centered thinking to create meaningful digital solutions. Always seeking opportunities to grow both personally and professionally. ",
  avatarUrl: "/me.jpg", 
  
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Laravel",
    "Blade",
    "Tailwind CSS",
    "MySQL",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "jasminenaylahafiezh@gmail.com",
    tel: "+6281317872501",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jasminehaf",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jasminenaylahafiezh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name:"Instagram",
        url: "https://instagram.com/jasminehaf",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [ 
    {
      company: "PT Telkom Indonesia Daerah Sukabumi",
      href: "https://www.instagram.com/indibizsukabumi/?hl=en",
      badges: [],
      location: "Sukabumi, ON",
      title: "Dashboard Developer Intern",
      logoUrl: "/telkom.png",
      start: "March 2025",
      end: "July 2025",
      description:
        "Developed web-based dashboards to support internship supervision and performance tracking. Responsible for user needs analysis, designing dashboard UI, and integrating dynamic data display using Laravel and MySQL",
    },
  ],
  education: [
    {
      school: "Universitas Pendidikan Indonesia",
      href: "https://psti.upi.edu/",
      degree: "Bachelor's Degree in Educational Technology and Information Systems",
      logoUrl: "/upi.png", 
      start: "2022",
      end: "Present",
    },
    
  ],
  projects: [
    {
      title: "Synapse",
      href: "https://webmagang.my.id",
      dates: "Mar 2025 - Jul 2025",
      active: true,
      description:
        "An online platform that facilitates internship registration and task tracking. It enables students to upload documents and manage assignments, while mentors oversee progress and handle internship scheduling in a single system.",
      technologies: [
        "Laravel",
        "MySQL",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://webmagang.my.id",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/synapse.jpeg",
      video:
        "",
    },
    {
      title: "Mamago",
      href: "https://www.figma.com/proto/YxGuxq0rFI9KMdlw0OwgJo/Mamago?page-id=153%3A5&node-id=153-365&t=czA7KPqISQF7p0j5-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=351%3A1202&show-proto-sidebar=1",
      dates: "Sep 2024 - Dec 2024",
      active: true,
      description:
        "A redesign of the Papago translation app aimed at improving usability, visual comfort, and interface consistency.",
      technologies: [
        "Figma",
        "UI/UX",
        "Wireframing",
        "Prototyping",
      ],
      links: [
        {
          type: "Prototype",
          href: "https://www.figma.com/proto/YxGuxq0rFI9KMdlw0OwgJo/Mamago?page-id=153%3A5&node-id=153-365&t=czA7KPqISQF7p0j5-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=351%3A1202&show-proto-sidebar=1",
          icon: <Icons.prototype className="size-3" />,
        }
      ],
      image: "/mamago.png",
      video: "",
    },
    {
      title: "Geoventura",
      href: "https://llm.report",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "Geoventura is an educational geography game application developed using Unity. The development process applies the Multimedia Development Life Cycle (MDLC) Method.",
      technologies: [
        "Unity",
        "MDLC",
        "C#",
      ],
      links: [
        {
          type: "Game",
          href: "https://drive.google.com/file/d/11Ph4viAsI5U2hzv4bKckXxDRiqlGpXAa/view?usp=drivesdk&usp=embed_facebook",
          icon: <Icons.game className="size-3" />,
        }
      ],
      image: "/geoventura.png",
      video: "",
    },
    {
      title: "KOMARA",
      href: "https://www.figma.com/proto/savwZFrokBhBUkeuatBYS7/KOMARA?page-id=0%3A1&node-id=42-2&t=njC7ERL6ZeCYVDW8-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=117%3A2&show-proto-sidebar=1",
      dates: "Feb 2024 - Jun 2024",
      active: true,
      description:
        "Komara is a prototype of a web-based cooperative management system designed to help manage member data, savings, loans, and transactions. Built using Figma with emphasis on UX research and structured dashboard design.",
      technologies: [
        "Figma",
        "UI/UX",
        "Wireframing",
        "Prototyping",
      ],
      links: [
        {
          type: "Prototype",
          href: "https://www.figma.com/proto/savwZFrokBhBUkeuatBYS7/KOMARA?page-id=0%3A1&node-id=42-2&t=njC7ERL6ZeCYVDW8-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=117%3A2&show-proto-sidebar=1",
          icon: <Icons.prototype className="size-3" />,
        },
      ],
      image: "/komara.png",
      video:
        "",
    },
  ],
} as const;
