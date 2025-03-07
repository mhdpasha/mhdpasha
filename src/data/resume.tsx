import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Muhamad Pasha Albara",
  initials: "MPA",
  url: "https://mhdpasha.vercel.app",
  location: "Jakarta, ID",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Web App Engineer, loves to do and build things digitally.",
  summary:
    "At the end of 2024, I decided to go all in on web development after wrapping up an internship as a Full Stack Developer. Over the years, I’ve worked on some projects like Corsa GRM for hotel departments and Arsene Project for animation web components. Gratefully, i’ve won a few competitions along the way. Currently working an exciting project called BNSP-LSP 40, that automates school and business processes. We'll see where this journey takes me next.",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Laravel",
    "Livewire",
    "Postgres",
    "MySQL",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "work.mhdpasha@gmail.com",
    tel: "+6285777511106",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mhdpasha",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mhdpasha",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:work.mhdpasha@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Redtop Hotel & Convention Center",
      href: "#detail",
      badges: [],
      location: "Contract",
      title: "Full Stack Developer",
      logoUrl: "/redtop.webp",
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "Built Corsa GRM for managing hotel requests for each divisions. Connected within local network in the building.",
    },
    {
      company: "Agung Toyota Automandiri",
      href: "#detail",
      badges: [],
      location: "Hybrid",
      title: "Full Stack Developer",
      logoUrl: "/agung-toyota.webp",
      start: "Mar 2023",
      end: "Sep 2023",
      description:
        "Corporate internal systems",
    },
  ],
  education: [
    {
      school: "Universitas Terbuka",
      href: "https://www.ut.ac.id",
      degree: "Bachelor's Degree of Applied Science, Sistem Informasi",
      logoUrl: "/ut.webp",
      start: "2024",
      end: "Present",
    },
    {
      school: "SMKN 40 Jakarta",
      href: "https://smknegeri40-jkt.sch.id/",
      degree: "Highschool Diploma, Rekayasa Perangkat Lunak",
      logoUrl: "/smkn-40.webp",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Arsene Project",
      href: "https://arseneproject.vercel.app",
      dates: "Aug 2023 - Sep 2023",
      active: true,
      description:
        "Web-based animation component library for developers to use. MIT Licensed.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AnimeJS",
        "TypedJS",
        "HighlightJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://arseneproject.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mhdpasha/arsene-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.jsdelivr.net/gh/mhdpasha/cdn/arsene.mp4",
    },
    {
      title: "LSP 40",
      href: "https://smkn40jkt.sch.id",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Designed, developed and BNSP system for managing professional certification.",
      technologies: [
        "Laravel",
        "Inertia",
        "React",
        "TailwindCSS",
        "Livewire",
        "MySQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mhdpasha/lsp40",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.jsdelivr.net/gh/mhdpasha/cdn/lsp40.mp4",
    },
  ],
  hackathons: [
    {
      title: "T8chnofest Creative Static Website Development",
      dates: "August 2023",
      location: "SMA Negeri 8 Jakarta",
      description: "Won 1st place in a creative static website development competition. Refined previous arsene with lots of improvement, deployment starts from here",
      image:
        "Logo_SMAN_8_Jakarta.webp",
      win: "1st Place",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ]
    },
    {
      title: "LKS Cyber Security Jakarta Timur",
      dates: "August 2023",
      location: "Pemerintah Provinsi DKI Jakarta",
      description: "Secured 2nd place in the LKS Cyber Security competition at the city level by identifying vulnerabilities, implementing secure protocols, and fortifying systems against potential threats. This competition pushed me out of my comfort zone, but through persistence and problem-solving, I successfully tackled complex cybersecurity challenges. Alhamdulillah, I nailed it.",
      image:
        "Logo_LKS.webp",
      win: "2nd Place",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mhdpasha/cyber",
        },
      ]
    },
    {
      title: "AWS Sagasitas Cloud Computing Club Competition",
      dates: "March 2023",
      location: "DKI Jakarta",
      description: "Achieved 2nd place in a cloud computing competition hosted by AWS and the Jakarta government. Built Arsene as an animated web-based component.",
      image:
        "aws_logo.webp",
      win: "2nd Place",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://smknegeri40-jkt.sch.id/juara-2-lomba-web-development-aws-2022/",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=6i0wIh2xHXw",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ]
    },
    {
      title: "IT Expo Website Development Competition",
      dates: "November 2021",
      location: "Universitas Negeri Jakarta (UNJ)",
      description: "Won 3rd place in a national website development competition Providing a medical website that handle reservation, chats, online shopping, and many more.",
      image:
        "UNJ_logo.webp",
      win: "3rd Place",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://smknegeri40-jkt.sch.id/prestasi/",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=_3ywM7-ktPw",
        },
      ]
    }
  ],
} as const;
