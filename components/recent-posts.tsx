import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 블로그 포스트 데이터를 가져옵니다 (실제 구현에서는 데이터베이스나 CMS에서 가져옵니다)
const posts = [
  {
    id: 1,
    title: "포트폴리오 웹사이트 리뉴얼 프로젝트",
    description: "Next.js와 Tailwind CSS를 사용한 개인 웹사이트 리뉴얼 과정",
    date: "2023-12-15", // ISO 형식의 날짜
    slug: "portfolio-website-renewal",
  },
  {
    id: 2,
    title: "UX 디자인 프로세스: 사용자 중심 디자인의 핵심",
    description: "효과적인 UX 디자인을 위한 프로세스와 방법론 소개",
    date: "2023-11-28",
    slug: "ux-design-process",
  },
  {
    id: 3,
    title: "React 상태 관리 라이브러리 비교 분석",
    description:
      "Redux, Zustand, Jotai, Recoil 등 다양한 상태 관리 라이브러리 비교",
    date: "2023-10-10",
    slug: "react-state-management",
  },
  {
    id: 4,
    title: "웹 접근성 향상을 위한 실용적인 팁",
    description: "모든 사용자를 위한 웹사이트 구축을 위한 접근성 가이드라인",
    date: "2023-09-05",
    slug: "web-accessibility-tips",
  },
  {
    id: 5,
    title: "Next.js 14의 새로운 기능 살펴보기",
    description: "Next.js 14에 추가된 주요 기능과 개선 사항 분석",
    date: "2023-08-22",
    slug: "nextjs-14-features",
  },
];

// 날짜 형식을 변환하는 함수
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function RecentPosts() {
  // 날짜 기준으로 정렬하여 최신 게시글 3개만 가져옵니다
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recentPosts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{formatDate(post.date)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{post.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href={`/blog/${post.slug}`}>자세히 보기</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
