export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl?: string;
  tools: string[];
  category: string;
  slug: string;
  projectDate: Date;
  isFeatured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: "Software" | "Technique" | "Rendering" | "Other";
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
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
    id: "cmbg4e0zz0000ijucrxuovsdk",
    title: "Chiến Binh Rồng Thiêng",
    slug: "chien-binh-rong-thieng",
    shortDescription: "Mô hình 3D và animation cho nhân vật rồng trong game AAA.",
    description: "Một dự án đầy thử thách về việc tạo hình, rigging và animation cho một nhân vật rồng phức tạp, tối ưu hóa cho hiệu suất game engine. Bao gồm các chuỗi animation tấn công, bay lượn và biểu cảm.",
    imageUrl: "/images/projects/dragon-thumbnail.jpg", // URL ảnh sẽ được phục vụ từ frontend
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Rickroll placeholder ;)
    tools: [ "Blender", "ZBrush", "Substance Painter", "Unity" ],
    category: "Game Character",
    projectDate: new Date("2023-05-15"),
    isFeatured: true,
  },
  {
    id: "cmbg4e1120001ijucgcppybyv",
    title: "Phim Ngắn: Hành Trình Kỳ Diệu",
    slug: "phim-ngan-hanh-trinh-ky-dieu",
    shortDescription: "Sản xuất animation cho một phim ngắn CGI độc lập.",
    description: "Tham gia vào toàn bộ quy trình sản xuất, từ storyboard, modeling, texturing, rigging, animation, lighting, đến rendering và compositing. Câu chuyện kể về cuộc phiêu lưu của một chú robot nhỏ.",
    imageUrl: "/images/short-film-thumbnail.jpg",
    tools: [ "Maya", "Arnold Renderer", "Nuke", "Photoshop" ],
    category: "Short Film",
    projectDate: new Date("2022-11-20"),
    isFeatured: true,
  },
  {
    id: "",
    title: "Online Bookstore Full-stack Project",
    slug: "online-bookstore-project",
    shortDescription: "Online bookstore system, with chatbot integration.",
    description: "This project serves as a final report exam on software architecture. I am a member of this project, as a frontend coder, building and integrating chatbot into the bookstore system.",
    imageUrl: "/images/bookstore-project.png",
    tools: [ "VSCode", "Next.js", "TailwindCSS", "TypeScript", "Node.js", "Express.js" ],
    category: "Projects",
    projectDate: new Date("2022-11-20"),
    isFeatured: true,
  },
];

export const skillsData: Skill[] = [
  // Software
  { name: "Maya", level: 90, category: "Software" },
  { name: "Blender", level: 85, category: "Software" },
  { name: "ZBrush", level: 80, category: "Software" },
  { name: "Substance Painter", level: 90, category: "Software" },
  { name: "Houdini", level: 70, category: "Software" },
  { name: "Cinema 4D", level: 60, category: "Software" },
  { name: "Nuke", level: 75, category: "Software" },
  { name: "After Effects", level: 85, category: "Software" },
  { name: "Unity", level: 70, category: "Software" },
  { name: "Unreal Engine", level: 65, category: "Software" },
  // Techniques
  { name: "3D Modeling", level: 95, category: "Technique" },
  { name: "Texturing & Shading", level: 90, category: "Technique" },
  { name: "Rigging", level: 80, category: "Technique" },
  { name: "Character Animation", level: 88, category: "Technique" },
  { name: "Lighting", level: 85, category: "Technique" },
  { name: "Compositing", level: 78, category: "Technique" },
  // Rendering
  { name: "Arnold", level: 80, category: "Rendering" },
  { name: "Redshift", level: 75, category: "Rendering" },
  { name: "V-Ray", level: 70, category: "Rendering" },
  // Other
  { name: "Python Scripting (Maya/Blender)", level: 60, category: "Other" },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Khả năng coding và sự tỉ mỉ của Lan Anh đã giúp ích rất nhiều cho team dev của chúng tôi. Chất lượng vượt trên cả mong đợi!",
    author: "Jane Doe",
    company: "Senior Engineer, Big Game Studio",
    avatarUrl: "/images/jane-doe.png",
  },
  {
    id: "2",
    quote: "Làm việc với Lan Anh rất chuyên nghiệp và hiệu quả. Cô ấy không chỉ có kỹ năng kỹ thuật tốt mà còn có khả năng làm việc nhóm, và thích ứng với môi trường mới 1 cách tuyệt vời.",
    author: "John Smith",
    company: "Giám đốc công ty ABC",
    avatarUrl: "/images/john-smith.png",
  },
];
