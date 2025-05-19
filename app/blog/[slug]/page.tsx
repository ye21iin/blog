import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"

// 실제 구현에서는 데이터베이스나 CMS에서 가져온 데이터를 사용할 수 있습니다
const posts = [
  {
    id: 1,
    title: "포트폴리오 웹사이트 리뉴얼 프로젝트",
    description: "Next.js와 Tailwind CSS를 사용한 개인 웹사이트 리뉴얼 과정",
    date: "2023년 12월 15일",
    author: "홍길동",
    content: `
      <p>이번 포스트에서는 제 개인 포트폴리오 웹사이트를 Next.js와 Tailwind CSS를 사용하여 리뉴얼한 과정을 공유하려고 합니다.</p>
      
      <h2>프로젝트 배경</h2>
      <p>기존 포트폴리오 웹사이트는 약 2년 전에 만들어진 것으로, 그동안 많은 기술적 변화가 있었습니다. 특히 Next.js의 App Router와 같은 새로운 기능들이 등장했고, 디자인 트렌드도 변화했습니다. 이에 따라 웹사이트를 현대적인 기술 스택으로 업데이트하고 디자인을 개선하기로 결정했습니다.</p>
      
      <h2>사용 기술</h2>
      <ul>
        <li>Next.js 14 (App Router)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Shadcn UI</li>
        <li>Contentlayer (마크다운 콘텐츠 관리)</li>
      </ul>
      
      <h2>주요 개선 사항</h2>
      <ol>
        <li>성능 최적화: Next.js의 서버 컴포넌트와 이미지 최적화를 통해 웹사이트 성능을 크게 개선했습니다.</li>
        <li>반응형 디자인: 모든 화면 크기에서 최적의 사용자 경험을 제공하도록 디자인을 개선했습니다.</li>
        <li>다크 모드 지원: 사용자 선호도에 따라 라이트/다크 모드를 전환할 수 있도록 구현했습니다.</li>
        <li>접근성 개선: 웹 접근성 표준을 준수하여 모든 사용자가 콘텐츠에 접근할 수 있도록 했습니다.</li>
      </ol>
      
      <h2>개발 과정에서 배운 점</h2>
      <p>이번 프로젝트를 통해 Next.js의 App Router 구조와 서버 컴포넌트의 장점을 실제로 경험할 수 있었습니다. 특히 데이터 페칭 방식의 변화와 렌더링 최적화에 대해 많은 것을 배웠습니다.</p>
      
      <p>또한 Tailwind CSS와 Shadcn UI를 함께 사용하면서 컴포넌트 기반 개발의 효율성을 체감했습니다. 재사용 가능한 컴포넌트를 구축함으로써 개발 속도를 높이고 일관된 디자인 시스템을 유지할 수 있었습니다.</p>
      
      <h2>결론</h2>
      <p>이번 리뉴얼 프로젝트를 통해 최신 웹 개발 트렌드를 적용하고 개인 브랜딩을 강화할 수 있었습니다. 앞으로도 지속적인 개선과 업데이트를 통해 포트폴리오 웹사이트를 발전시켜 나갈 계획입니다.</p>
    `,
    slug: "portfolio-website-renewal",
    coverImage: "/placeholder.svg?height=600&width=1200",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // 실제 구현에서는 데이터베이스나 CMS에서 slug에 해당하는 포스트를 가져옵니다
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          모든 포스트
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-muted-foreground gap-6">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </div>
          </div>
        </div>

        <div className="relative w-full h-80 mb-8">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div
          className="prose prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
