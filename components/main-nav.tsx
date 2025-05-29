"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

export function MainNav() {
  const isMobile = useMobile()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center">
          <Home className="h-6 w-6" />
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-medium">
                    홈
                  </Link>
                  <Link href="/resume" className="text-lg font-medium">
                    이력서
                  </Link>
                  <Link href="/portfolio" className="text-lg font-medium">
                    포트폴리오
                  </Link>
                  <Link href="/blog" className="text-lg font-medium">
                    블로그
                  </Link>
                  <Link href="/contact" className="text-lg font-medium">
                    연락처
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/resume" className="font-medium">
                이력서
              </Link>
              <Link href="/portfolio" className="font-medium">
                포트폴리오
              </Link>
              <Link href="/blog" className="font-medium">
                블로그
              </Link>
              <Link href="/contact" className="font-medium">
                연락처
              </Link>
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
