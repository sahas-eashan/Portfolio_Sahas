import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import ProjectDetailClient from '@/components/ui/ProjectDetailClient';

// Generate static params for all projects
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}