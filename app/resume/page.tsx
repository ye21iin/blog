import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">이력서</h1>
        <Button>
          <Download className="mr-2 h-4 w-4" /> PDF 다운로드
        </Button>
      </div>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>소개</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              5년 이상의 프론트엔드 개발 경험을 가진 웹 개발자입니다. 사용자 경험을 최우선으로 생각하며, 최신 웹 기술을
              활용하여 반응형 웹사이트와 웹 애플리케이션을 개발합니다. UX/UI 디자인에 대한 이해를 바탕으로 디자이너와
              긴밀히 협업하여 사용자 친화적인 인터페이스를 구현합니다.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">경력</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>시니어 프론트엔드 개발자</CardTitle>
              <CardDescription>ABC 테크놀로지 | 2021년 3월 - 현재</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>React와 Next.js를 사용한 기업 웹사이트 개발 및 유지보수</li>
                <li>마이크로프론트엔드 아키텍처 설계 및 구현</li>
                <li>주니어 개발자 멘토링 및 코드 리뷰</li>
                <li>성능 최적화를 통한 웹사이트 로딩 속도 40% 개선</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>프론트엔드 개발자</CardTitle>
              <CardDescription>XYZ 소프트웨어 | 2018년 6월 - 2021년 2월</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vue.js를 활용한 SPA 개발</li>
                <li>RESTful API 연동 및 상태 관리 구현</li>
                <li>반응형 웹 디자인 구현</li>
                <li>크로스 브라우저 호환성 보장</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">교육</h2>
        <Card>
          <CardHeader>
            <CardTitle>컴퓨터 공학 학사</CardTitle>
            <CardDescription>한국대학교 | 2014년 - 2018년</CardDescription>
          </CardHeader>
          <CardContent>
            <p>웹 개발, 알고리즘, 데이터 구조, 소프트웨어 공학 전공</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">기술 스택</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>프론트엔드</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React, Next.js, Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS, Styled Components</li>
                <li>Redux, Zustand</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기타</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Git, GitHub</li>
                <li>Figma, Adobe XD</li>
                <li>Jest, React Testing Library</li>
                <li>Webpack, Vite</li>
                <li>CI/CD, Docker</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
