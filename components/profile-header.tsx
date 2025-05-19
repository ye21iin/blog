import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-8">
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-muted">
        <Image src="/placeholder.svg?height=160&width=160" alt="프로필 이미지" fill className="object-cover" priority />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold">홍길동</h1>
        <p className="text-xl text-muted-foreground mt-2">프론트엔드 개발자 | UX 디자이너</p>

        <p className="max-w-2xl mt-4">
          사용자 중심의 웹 경험을 만드는 것에 열정을 가진 개발자입니다. 최신 웹 기술과 디자인 트렌드를 활용하여 아름답고
          기능적인 웹사이트를 구축합니다.
        </p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
            <span className="sr-only">이메일</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
