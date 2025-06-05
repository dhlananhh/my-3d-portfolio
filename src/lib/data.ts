export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  isFeatured: boolean;
}

export interface FrontendSkill {
  name: string;
  level: number;
  category:
  | "Languages"
  | "Frameworks/Libraries"
  | "Styling"
  | "State Management"
  | "Build Tools & Bundlers"
  | "API & Data Fetching"
  | "Testing"
  | "Version Control"
  | "Developer Tools"
  | "Concepts & Other";
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: string;
}


export const projectsData: Project[] = [
  // {
  //   id: "1",
  //   title: "Chiến Binh Rồng Thiêng",
  //   slug: "chien-binh-rong-thieng",
  //   shortDescription: "Mô hình 3D và animation cho nhân vật rồng trong game AAA.",
  //   description: "Một dự án đầy thử thách về việc tạo hình, rigging và animation cho một nhân vật rồng phức tạp, tối ưu hóa cho hiệu suất game engine. Bao gồm các chuỗi animation tấn công, bay lượn và biểu cảm.",
  //   imageUrl: "/images/projects/dragon-thumbnail.jpg",
  //   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   githubUrl: "",
  //   tools: [ "Blender", "ZBrush", "Substance Painter", "Unity" ],
  //   category: "Game Character",
  //   projectStartDate: new Date("2023-05-15"),
  //   isFeatured: true,
  // },
  {
    id: "1",
    title: "Ecommerce Full-stack Website",
    slug: "phim-ngan-hanh-trinh-ky-dieu",
    shortDescription: "Sản xuất animation cho một phim ngắn CGI độc lập.",
    description: "Tham gia vào toàn bộ quy trình sản xuất, từ storyboard, modeling, texturing, rigging, animation, lighting, đến rendering và compositing. Câu chuyện kể về cuộc phiêu lưu của một chú robot nhỏ.",
    imageUrl: "/images/short-film-thumbnail.jpg",
    githubUrl: "https://github.com/dhlananhh/quickcart/",
    tools: [ "VSCode", "Next.js", "TailwindCSS", "Clerk", "MongoDB" ],
    category: "Short Film",
    projectStartDate: new Date("2022-11-20"),
    projectStatus: "In Progress",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Online Bookstore Full-stack Project",
    slug: "online-bookstore-project",
    shortDescription: "Online bookstore system, with chatbot integration.",
    description: "This project serves as a final report exam on software architecture. I am a member of this project, as a frontend coder, building and integrating chatbot into the bookstore system.",
    imageUrl: "/images/bookstore-project.png",
    githubUrl: "https://github.com/minhlq2003/bookstore-frontend-nextjs",
    tools: [ "VSCode", "Next.js", "TailwindCSS", "TypeScript", "Node.js", "Express.js" ],
    category: "Projects",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    isFeatured: true,
  },
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

export const frontendSkillsData: FrontendSkill[] = [
  // Languages
  { name: "HTML5", level: 95, category: "Languages", description: "Semantic structure and modern APIs." },
  { name: "CSS3", level: 90, category: "Languages", description: "Flexbox, Grid, Animations, Custom Properties." },
  { name: "JavaScript (ES6+)", level: 95, category: "Languages", description: "Modern syntax, Async/Await, DOM manipulation." },
  { name: "TypeScript", level: 90, category: "Languages", description: "Strong typing for scalable applications." },

  // Frameworks/Libraries
  { name: "React", level: 95, category: "Frameworks/Libraries", description: "Component-based architecture, Hooks, Context API." },
  { name: "Next.js", level: 90, category: "Frameworks/Libraries", description: "SSR, SSG, API Routes, App Router." },
  { name: "Redux / Redux Toolkit", level: 85, category: "State Management", description: "Predictable state container for complex apps." },

  // Styling
  { name: "Tailwind CSS", level: 95, category: "Styling", description: "Utility-first CSS framework for rapid UI development." },
  { name: "Sass/SCSS", level: 85, category: "Styling", description: "CSS preprocessor with variables, mixins, nesting." },
  { name: "Styled Components", level: 80, category: "Styling", description: "CSS-in-JS library for component-level styling." },
  { name: "CSS Modules", level: 75, category: "Styling", description: "Locally scoped CSS for components." },

  // API & Data Fetching
  { name: "RESTful APIs", level: 90, category: "API & Data Fetching", description: "Consuming and interacting with REST services." },
  { name: "GraphQL", level: 50, category: "API & Data Fetching", description: "Query language for APIs, client-side integration." },
  { name: "React Query / SWR", level: 85, category: "API & Data Fetching", description: "Data synchronization, caching, and server state management." },
  { name: "Axios / Fetch API", level: 90, category: "API & Data Fetching", description: "Making HTTP requests." },

  // Build Tools & Bundlers
  { name: "Webpack", level: 75, category: "Build Tools & Bundlers", description: "Module bundler, often configured via frameworks." },
  { name: "Vite", level: 85, category: "Build Tools & Bundlers", description: "Next-generation frontend tooling, fast HMR." },
  { name: "npm / yarn / pnpm", level: 95, category: "Build Tools & Bundlers", description: "Package managers and script runners." },

  // Testing
  { name: "Jest", level: 80, category: "Testing", description: "JavaScript testing framework, unit/integration tests." },
  { name: "React Testing Library", level: 85, category: "Testing", description: "Testing React components guiding good practices." },
  { name: "Cypress / Playwright", level: 70, category: "Testing", description: "End-to-end testing frameworks." },

  // Version Control
  { name: "Git", level: 95, category: "Version Control", description: "Distributed version control system." },
  { name: "GitHub / GitLab", level: 90, category: "Version Control", description: "Collaboration platforms for Git." },

  // Developer Tools
  { name: "VS Code", level: 95, category: "Developer Tools", description: "Primary code editor with extensions and debugging." },
  { name: "Browser Developer Tools", level: 98, category: "Developer Tools", description: "Essential for debugging, profiling, and inspection." },
  { name: "Figma / Zeplin", level: 80, category: "Developer Tools", description: "Collaboration with designers, inspecting designs." },

  // Concepts & Other
  { name: "Responsive Web Design", level: 95, category: "Concepts & Other", description: "Creating layouts adaptable to all screen sizes." },
  { name: "Web Performance Optimization", level: 85, category: "Concepts & Other", description: "Lazy loading, code splitting, image optimization." },
  { name: "Accessibility (WCAG)", level: 80, category: "Concepts & Other", description: "Building inclusive web experiences." },
  { name: "SEO Basics for Frontend", level: 70, category: "Concepts & Other", description: "Semantic HTML, meta tags, performance impact." },
  { name: "Progressive Web Apps (PWA)", level: 65, category: "Concepts & Other", description: "Creating app-like experiences." },
];
