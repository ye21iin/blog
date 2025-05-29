import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // 사용자 생성
  const user = await prisma.user.create({
    data: {
      id: "1",
      email: "kathykr@gmail.com",
      name: "김예린",
      bio: `비즈니스와 빅데이터를 이해하는 프론트엔드 개발자 김예린입니다. 데이터 사이언스 기반 프로젝트를 통해 문제 해결 역량을 키웠습니다. 해커톤 및 학술대회 참여, 웹 개발 프로젝트를 통해 사용자 경험을 고려한 실용적 서비스 설계 감각을 쌓았습니다.
      
      코드로 소통하며 팀 성장에 기여하는 것을 중요하게 여깁니다. 또한, 기술 블로그 운영 및 국내외 AWS summit, Google Developer Group 워크샵 등 꾸준한 소통과 배움의 기회를 추구하고 있습니다. 새로운 기술을 학습하고, 지속하여 효율을 추구하는 개발자가 되고자 합니다.`,
      githubUrl: "https://github.com/ye21iin",
      linkedinUrl: "https://linkedin.com/in/kathykr120",
      updatedAt: new Date(),
    },
  });

  // 카테고리 생성
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        id: "cat_1",
        name: "웹 개발",
        slug: "web-development",
        description: "웹 개발 관련 포스트",
        color: "#3B82F6",
        updatedAt: new Date(),
      },
    }),
    prisma.category.create({
      data: {
        id: "cat_2",
        name: "UI/UX",
        slug: "ui-ux",
        description: "UI/UX 디자인 관련 포스트",
        color: "#8B5CF6",
        updatedAt: new Date(),
      },
    }),
  ]);

  // 태그 생성
  const tags = await Promise.all([
    prisma.tag.create({
      data: { 
        id: "tag_1",
        name: "React", 
        slug: "react", 
        color: "#61DAFB" 
      },
    }),
    prisma.tag.create({
      data: { 
        id: "tag_2",
        name: "Next.js", 
        slug: "nextjs", 
        color: "#000000" 
      },
    }),
    prisma.tag.create({
      data: { 
        id: "tag_3",
        name: "TypeScript", 
        slug: "typescript", 
        color: "#3178C6" 
      },
    }),
  ]);

  // 샘플 포스트 생성
  const post = await prisma.post.create({
    data: {
      id: "post_1",
      title: "첫 번째 블로그 포스트",
      slug: "first-blog-post",
      content: "<p>첫 번째 블로그 포스트 내용입니다.</p>",
      excerpt: "첫 번째 블로그 포스트입니다.",
      published: true,
      publishedAt: new Date(),
      authorId: user.id,
      categoryId: categories[0].id,
      updatedAt: new Date(),
      postTags: {
        create: [
          { 
            id: "pt_1",
            tagId: tags[0].id 
          }, 
          { 
            id: "pt_2",
            tagId: tags[1].id 
          }
        ],
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
