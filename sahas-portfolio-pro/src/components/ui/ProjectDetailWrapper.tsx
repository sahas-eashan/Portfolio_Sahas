'use client';

import dynamic from 'next/dynamic';

const ProjectDetailClient = dynamic(() => import('./ProjectDetailClient'), {
  ssr: false,
});

interface ProjectDetailWrapperProps {
  project: any;
}

export default function ProjectDetailWrapper({ project }: ProjectDetailWrapperProps) {
  return <ProjectDetailClient project={project} />;
}