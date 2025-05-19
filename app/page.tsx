import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentPosts } from "@/components/recent-posts";
import { ProfileHeader } from "@/components/profile-header";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ProfileHeader />

      <section className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>이력서</CardTitle>
              <CardDescription>
                전문 경력과 기술 스택을 확인하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                저의 전문 경력, 교육 배경, 기술 스택 및 성취에 대한 상세 정보를
                확인할 수 있습니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/resume">이력서 보기</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>포트폴리오</CardTitle>
              <CardDescription>프로젝트 및 작업물을 살펴보세요</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                제가 작업한 다양한 프로젝트, 디자인, 개발 작업물을 확인할 수
                있습니다.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/portfolio">포트폴리오 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">최근 게시글</h2>
        <RecentPosts />
      </section>
    </div>
  );
}
