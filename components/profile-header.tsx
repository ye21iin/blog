import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"
import { profile } from "@/app/data/profile"

export function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-8">
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-muted">
        <Image 
          src={profile.image} 
          alt={`${profile.name}의 프로필 이미지`} 
          fill 
          className="object-cover" 
          priority 
        />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-xl text-muted-foreground mt-2">프론트엔드 개발자</p>

        <p className="max-w-2xl mt-4 whitespace-pre-wrap">
          {profile.bio}
        </p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          {profile.githubUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          )}
          {profile.linkedinUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          )}
          {profile.blogUrl && (
            <Button variant="outline" size="icon" asChild>
              <a href={profile.blogUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5" />
                <span className="sr-only">Blog</span>
              </a>
            </Button>
          )}
          <Button variant="outline" size="icon" asChild>
            <a href={`mailto:${profile.email}`}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">이메일</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
