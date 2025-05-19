import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// 실제 구현에서는 데이터베이스나 CMS에서 가져온 데이터를 사용할 수 있습니다
const posts = [
  {
    id: 1,
    title: "포트폴리오 웹사이트 리뉴얼 프로젝트",
    description: "Next.js와 Tailwind CSS를 사용한 개인 웹사이트 리뉴얼 과정",
    date: "2023년 12월 15일",
    slug: "portfolio-website-renewal",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "UX 디자인 프로세스: 사용자 중심 디자인의 핵심",
    description: "효과적인 UX 디자인을 위한 프로세스와 방법론 소개",
    date: "2023년 11월 28일",
    slug: "ux-design-process",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "React 상태 관리 라이브러리 비교 분석",
    description: "Redux, Zustand, Jotai, Recoil 등 다양한 상태 관리 라이브러리 비교",
    date: "2023년 10월 10일",
    slug: "react-state-management",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "웹 접근성 향상을 위한 실용적인 팁",
    description: "모든 사용자를 위한 웹사이트 구축을 위한 접근성 가이드라인",
    date: "2023년 9월 5일",
    slug: "web-accessibility-tips",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Next.js 14의 새로운 기능 살펴보기",
    description: "Next.js 14에 추가된 주요 기능과 개선 사항 분석",
    date: "2023년 8월 22일",
    slug: "nextjs-14-features",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "프론트엔드 개발자를 위한 성능 최적화 기법",
    description: "웹사이트 성능을 향상시키기 위한 실용적인 최적화 방법",
    date: "2023년 7월 15일",
    slug: "frontend-performance-optimization",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">블로그</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
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
    </div>
  )
}
