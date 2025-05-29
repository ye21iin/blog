/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `resumes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_tags" DROP CONSTRAINT "post_tags_postId_fkey";

-- DropForeignKey
ALTER TABLE "post_tags" DROP CONSTRAINT "post_tags_tagId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "project_tags" DROP CONSTRAINT "project_tags_projectId_fkey";

-- DropForeignKey
ALTER TABLE "project_tags" DROP CONSTRAINT "project_tags_tagId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_authorId_fkey";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "post_tags";

-- DropTable
DROP TABLE "posts";

-- DropTable
DROP TABLE "project_tags";

-- DropTable
DROP TABLE "projects";

-- DropTable
DROP TABLE "resumes";

-- DropTable
DROP TABLE "tags";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "color" VARCHAR(7),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostTag" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "slug" VARCHAR(200) NOT NULL,
    "content" TEXT NOT NULL,
    "excerpt" VARCHAR(500),
    "coverImage" VARCHAR(500),
    "published" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "metaTitle" VARCHAR(60),
    "metaDescription" VARCHAR(160),
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectTag" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "slug" VARCHAR(200) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "content" TEXT NOT NULL,
    "coverImage" VARCHAR(500),
    "demoUrl" VARCHAR(500),
    "githubUrl" VARCHAR(500),
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "slug" VARCHAR(50) NOT NULL,
    "color" VARCHAR(7),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "image" VARCHAR(500),
    "bio" TEXT,
    "githubUrl" VARCHAR(255),
    "linkedinUrl" VARCHAR(255),
    "websiteUrl" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "PostTag_postId_tagId_key" ON "PostTag"("postId", "tagId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE INDEX "Post_authorId_published_idx" ON "Post"("authorId", "published");

-- CreateIndex
CREATE INDEX "Post_categoryId_idx" ON "Post"("categoryId");

-- CreateIndex
CREATE INDEX "Post_publishedAt_published_idx" ON "Post"("publishedAt", "published");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTag_projectId_tagId_key" ON "ProjectTag"("projectId", "tagId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");

-- CreateIndex
CREATE INDEX "Project_authorId_published_idx" ON "Project"("authorId", "published");

-- CreateIndex
CREATE INDEX "Project_featured_published_idx" ON "Project"("featured", "published");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostTag" ADD CONSTRAINT "PostTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTag" ADD CONSTRAINT "ProjectTag_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTag" ADD CONSTRAINT "ProjectTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
