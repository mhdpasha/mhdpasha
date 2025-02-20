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
  avatarUrl: "/me.png",
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
      logoUrl: "/redtop.png",
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
      logoUrl: "/agung-toyota.jpg",
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
      logoUrl: "/ut.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "SMKN 40 Jakarta",
      href: "https://smknegeri40-jkt.sch.id/",
      degree: "Highschool Diploma, Rekayasa Perangkat Lunak",
      logoUrl: "/smkn-40.png",
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
      title: "AWS Sagasitas C3 Website Development",
      dates: "May 19th - 21st, 2017",
      location: "Province - DKI Jakarta",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
  ],
} as const;
