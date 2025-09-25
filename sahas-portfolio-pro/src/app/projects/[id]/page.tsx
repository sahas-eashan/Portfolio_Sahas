import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import ProjectDetailWrapper from '@/components/ui/ProjectDetailWrapper';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailWrapper project={project} />;
}