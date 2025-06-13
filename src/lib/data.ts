import { Images } from "@/lib/images";

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string | Object;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  liveDemoUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: string;
}


export const projectsData: Project[] = [
  {
    id: "1",
    title: "Ecommerce Full-stack Website",
    slug: "ecommerce-website",
    shortDescription: "Online ecommerce website, with chatbot integration.",
    description: "This project serves as one of my personal projects.",
    imageUrl: Images.EcommerceProject,
    githubUrl: "https://github.com/dhlananhh/quickcart/",
    tools: [ "Next.js", "TailwindCSS", "Clerk", "MongoDB" ],
    category: "Projects",
    projectStartDate: new Date("2025-05-27"),
    projectStatus: "In Progress",
    liveDemoUrl: "https://quickcart-gs.vercel.app/"
  },
  {
    id: "2",
    title: "Online Bookstore Frontend Project",
    slug: "online-bookstore-project",
    shortDescription: "Online bookstore system, with chatbot integration.",
    description: "This project serves as a final report exam on software architecture. I am a member of this project, as a frontend coder, building and integrating chatbot into the bookstore system.",
    imageUrl: Images.BookstoreProject,
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Projects",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://bookstore-frontend-nextjs.vercel.app/"
  },
  {
    id: "3",
    title: "Online Bookstore Backend Project",
    slug: "online-bookstore-project",
    shortDescription: "Online bookstore system, with chatbot integration.",
    description: "This project serves as a final report exam on software architecture. I am a member of this project, as a frontend coder, building and integrating chatbot into the bookstore system.",
    imageUrl: Images.BookstoreProject,
    githubUrl: "https://github.com/HieuTrungMc/bookstore-backend-nodejs",
    tools: [ "Node.js", "Express.js", "Prisma", "MariaDB" ],
    category: "Projects",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  {
    id: "4",
    title: "Portfolio Website Project",
    slug: "portfolio-website-project",
    shortDescription: "My Portfolio Website",
    description: "This project serves as one of my personal projects.",
    imageUrl: Images.MyPortfolioWebsiteProject,
    githubUrl: "https://github.com/dhlananhh/my-3d-portfolio",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "Radix UI", "Shadcn UI" ],
    category: "Projects",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    liveDemoUrl: "https://my-3d-portfolio-wine.vercel.app/"
  },
  {
    id: "5",
    title: "RAG System with Gemini and MongoDB Atlas",
    slug: "rag-system-with-gemini-and-mongodb-atlas",
    shortDescription: "RAG (Retrieval-Augmented Generation) system using Google's Gemini for embeddings and text generation, with MongoDB Atlas serving as the vector database for efficient information storage and retrieval.",
    description: "This project serves as one of my personal projects.",
    imageUrl: Images.RAG_System,
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_MongoDB",
    tools: [ "Python", "google-generativeai", "mongodb" ],
    category: "Projects",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  {
    id: "6",
    title: "RAG System with Gemini and ChromaDB",
    slug: "rag-system-with-gemini-and-mongodb-atlas",
    shortDescription: "RAG (Retrieval-Augmented Generation) system using Google's Gemini Flash model and the ChromaDB vector database to answer questions based on the content of a PDF document.",
    description: "This project serves as one of my personal projects.",
    imageUrl: Images.RAG_System,
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_ChromaDB",
    tools: [ "Python", "google-generativeai", "chromadb" ],
    category: "Projects",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
  },
  // {
  //   id: "4",
  //   title: "DeepSeek Clone Full-stack Website Project",
  //   slug: "deepseek-clone",
  //   shortDescription: "DeepSeek clone website",
  //   description: "This project serves as one of my personal projects.",
  //   imageUrl: "/images/deepseek-clone-project.png",
  //   githubUrl: "https://github.com/dhlananhh/deepseek-clone",
  //   tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
  //   category: "Projects",
  //   projectStartDate: new Date("2025-01-11"),
  //   projectStatus: "In Progress",
  //   liveDemoUrl: "https://deepseek-clone-gold.vercel.app/"
  // },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Lan Anh's coding ability and meticulousness have been a great help to our dev team. The quality exceeded expectations!",
    author: "Jane Doe",
    company: "Senior Engineer, Big Game Studio",
    avatarUrl: "/images/jane-doe.png",
  },
  {
    id: "2",
    quote: "Working with Lan Anh was very professional and efficient. She not only has good technical skills but also has the ability to work in a team, and adapt to new environments wonderfully.",
    author: "John Smith",
    company: "Head of IT of ABC company",
    avatarUrl: "/images/john-smith.png",
  },
];
