import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // 사용자 생성
  const user = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "홍길동",
      bio: "풀스택 개발자입니다.",
      githubUrl: "https://github.com/username",
      linkedinUrl: "https://linkedin.com/in/username",
    },
  });

  // 카테고리 생성
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "웹 개발",
        slug: "web-development",
        description: "웹 개발 관련 포스트",
        color: "#3B82F6",
      },
    }),
    prisma.category.create({
      data: {
        name: "UI/UX",
        slug: "ui-ux",
        description: "UI/UX 디자인 관련 포스트",
        color: "#8B5CF6",
      },
    }),
  ]);

  // 태그 생성
  const tags = await Promise.all([
    prisma.tag.create({
      data: { name: "React", slug: "react", color: "#61DAFB" },
    }),
    prisma.tag.create({
      data: { name: "Next.js", slug: "nextjs", color: "#000000" },
    }),
    prisma.tag.create({
      data: { name: "TypeScript", slug: "typescript", color: "#3178C6" },
    }),
  ]);

  // 샘플 포스트 생성
  const post = await prisma.post.create({
    data: {
      title: "첫 번째 블로그 포스트",
      slug: "first-blog-post",
      content: "<p>첫 번째 블로그 포스트 내용입니다.</p>",
      excerpt: "첫 번째 블로그 포스트입니다.",
      published: true,
      publishedAt: new Date(),
      authorId: user.id,
      categoryId: categories[0].id,
      postTags: {
        create: [{ tagId: tags[0].id }, { tagId: tags[1].id }],
      },
    },
  });

  console.log("시드 데이터 생성 완료!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
