// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

// Define SkillCategory enum if not imported from @prisma/client
enum SkillCategory {
  SOFTWARE = "SOFTWARE",
  TECHNIQUE = "TECHNIQUE"
}

enum Role {
  USER,
  ADMIN
}

async function main() {
  console.log('Start seeding ...');

  // --- Xóa dữ liệu cũ (cẩn thận khi dùng trong production) ---
  // await prisma.message.deleteMany();
  // await prisma.testimonial.deleteMany();
  // await prisma.skill.deleteMany();
  // await prisma.project.deleteMany();
  // console.log('Old data deleted.');

  // --- Seed Projects ---
  // const project1 = await prisma.project.create({
  //   data: {
  //     title: "Chiến Binh Rồng Thiêng",
  //     slug: "chien-binh-rong-thieng",
  //     shortDescription: "Mô hình 3D và animation cho nhân vật rồng trong game AAA.",
  //     description: "Một dự án đầy thử thách về việc tạo hình, rigging và animation cho một nhân vật rồng phức tạp, tối ưu hóa cho hiệu suất game engine. Bao gồm các chuỗi animation tấn công, bay lượn và biểu cảm.",
  //     imageUrl: "/images/projects/dragon-thumbnail.jpg", // URL ảnh sẽ được phục vụ từ frontend
  //     videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Rickroll placeholder ;)
  //     tools: "Blender, ZBrush, Substance Painter, Unity",
  //     category: "Game Character",
  //     projectDate: new Date("2023-05-15"),
  //     isFeatured: true,
  //     createdAt: new Date("2023-05-30"),
  //     updatedAt: new Date("2023-06-15"),
  //     order: 1,
  //   },
  // });

  // const project2 = await prisma.project.create({
  //   data: {
  //     title: "Phim Ngắn: Hành Trình Kỳ Diệu",
  //     slug: "phim-ngan-hanh-trinh-ky-dieu",
  //     shortDescription: "Sản xuất animation cho một phim ngắn CGI độc lập.",
  //     description: "Tham gia vào toàn bộ quy trình sản xuất, từ storyboard, modeling, texturing, rigging, animation, lighting, đến rendering và compositing. Câu chuyện kể về cuộc phiêu lưu của một chú robot nhỏ.",
  //     imageUrl: "/images/projects/short-film-thumbnail.jpg",
  //     videoUrl: "",
  //     tools: "Maya, Arnold Renderer, Nuke, Photoshop",
  //     category: "Short Film",
  //     projectDate: new Date("2022-11-20"),
  //     isFeatured: true,
  //     createdAt: new Date("2022-11-25"),
  //     updatedAt: new Date("2022-11-30"),
  //     order: 2,
  //   },
  // });
  // console.log('Projects seeded:', project1.title, project2.title);


  // --- Seed Skills ---
  // const skillMaya = await prisma.skill.create({
  //   data: {
  //     name: "Maya",
  //     level: 90,
  //     category: SkillCategory.SOFTWARE,
  //     icon: "maya",
  //     updatedAt: new Date()
  //   },
  // });
  // const skillBlender = await prisma.skill.create({
  //   data: {
  //     name: "Blender",
  //     level: 85,
  //     category: SkillCategory.SOFTWARE,
  //     icon: "blender",
  //     updatedAt: new Date()
  //   },
  // });
  // const skillModeling = await prisma.skill.create({
  //   data: {
  //     name: "3D Modeling",
  //     level: 95,
  //     category: SkillCategory.TECHNIQUE,
  //     icon: "modeling",
  //     updatedAt: new Date()
  //   },
  // });
  // console.log('Skills seeded:', skillMaya.name, skillBlender.name, skillModeling.name);


  // --- Seed Testimonials ---
  // const testimonial1 = await prisma.testimonial.create({
  //   data: {
  //     quote: "Khả năng animation và sự tỉ mỉ của Lan Anh đã thổi hồn vào nhân vật của chúng tôi. Chất lượng vượt trên cả mong đợi!",
  //     author: "Jane Doe",
  //     authorCompany: "Giám đốc Sáng tạo, Big Game Studio",
  //     authorAvatar: "/images/avatars/jane-doe.jpg",
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // });
  // console.log('Testimonials seeded:', testimonial1.author);


  // --- Seed Messages (Ví dụ cho contact form) ---
  // const message1 = await prisma.message.create({
  //   data: {
  //     name: "Test User",
  //     email: "test@example.com",
  //     subject: "Test Inquiry",
  //     message: "This is a test message from the seed script.",
  //   }
  // });
  // console.log('Messages seeded:', message1.name);

  // --- Seed Users (Thêm admin user với password đã hash) ---
  const adminEmail = 'admin@example.com';
  const adminUsername = 'admin';
  const plainPassword = 'SecurePassword123!'; // **KHÔNG BAO GIỜ hardcode password production ở đây**
  // Đây chỉ là ví dụ cho seed.
  // Trong thực tế, mật khẩu admin đầu tiên có thể được tạo bởi một script riêng.

  // Hash password
  const saltRounds = 10; // Số vòng lặp salt, 10-12 là phổ biến
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  // Sử dụng upsert để tránh lỗi nếu chạy seed nhiều lần
  // `upsert` sẽ tạo nếu user chưa tồn tại, hoặc cập nhật nếu tồn tại (dựa trên `where` clause)
  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail }, // Giả sử email là duy nhất và dùng để kiểm tra
    update: {
      // Có thể cập nhật các trường khác nếu cần khi chạy lại seed
      // password: hashedPassword, // Cẩn thận khi cập nhật password nếu bạn không muốn nó thay đổi mỗi lần seed
      role: "ADMIN",
    },
    create: {
      email: adminEmail,
      username: adminUsername,
      password: hashedPassword,
      role: "ADMIN",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  });

  console.log(`Admin user seeded/updated: ${adminUser.email} with role ${adminUser.role}`);

  // (Tùy chọn) Tạo thêm một user thường
  const regularUserEmail = 'user@example.com';
  const regularUserUsername = 'testuser';
  const plainUserPassword = 'UserPassword123!';
  const hashedUserPassword = await bcrypt.hash(plainUserPassword, saltRounds);

  const regularUser = await prisma.user.upsert({
    where: { email: regularUserEmail },
    update: {},
    create: {
      email: regularUserEmail,
      username: regularUserUsername,
      password: hashedUserPassword,
      role: "USER",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  });
  console.log(`Regular user seeded/updated: ${regularUser.email} with role ${regularUser.role}`);

}


main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    if (e.code === 'P2002') { // Lỗi unique constraint
      console.error("A unique constraint would be violated on " + (e.meta?.target || "unknown fields"));
    }
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
