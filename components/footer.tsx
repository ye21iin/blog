import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/app/data/profile"

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            {profile.githubUrl && (
              <Link href={profile.githubUrl} className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {profile.linkedinUrl && (
              <Link href={profile.linkedinUrl} className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            <Link href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">이메일</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
