import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

// 실제 구현에서는 데이터베이스나 CMS에서 가져온 데이터를 사용할 수 있습니다
const projects = [
  {
    id: 1,
    title: "온라인 쇼핑몰 웹사이트",
    description: "React와 Next.js를 사용한 풀스택 이커머스 웹사이트",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "ecommerce-website",
  },
  {
    id: 2,
    title: "대시보드 UI 디자인",
    description: "관리자용 대시보드 UI/UX 디자인 및 프론트엔드 구현",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Styled Components", "Recharts"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "dashboard-ui",
  },
  {
    id: 3,
    title: "모바일 앱 프로토타입",
    description: "건강 관리 모바일 앱 UI/UX 디자인 및 프로토타입",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Figma", "Adobe XD", "UI/UX", "Prototyping"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "health-app-prototype",
  },
  {
    id: 4,
    title: "블로그 플랫폼",
    description: "Markdown 지원 블로그 플랫폼",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Nuxt.js", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "blog-platform",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">포트폴리오</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-60 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/portfolio/${project.slug}`}>자세히 보기</Link>
              </Button>
              <div className="flex gap-2">
                <Button asChild size="icon" variant="ghost">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">데모 보기</span>
                  </a>
                </Button>
                <Button asChild size="icon" variant="ghost">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
