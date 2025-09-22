import { Node, Edge } from 'reactflow';

export interface ConstellationNode extends Node {
  data: {
    label: string;
    category: 'center' | 'main' | 'sub';
    title?: string;
    organization?: string;
    period?: string;
    description?: string;
    skills?: string[];
    gpa?: string;
    icon?: string;
  };
}

export const constellationNodes: ConstellationNode[] = [
  // Central Node - You
  {
    id: 'sahas',
    type: 'custom',
    position: { x: 400, y: 300 },
    data: {
      label: 'Sahas Eashan',
      category: 'center',
      title: 'Research Associate',
      organization: 'RoboticGen Labs',
      description: 'Electronic & Telecommunication Engineering Student | CGPA 3.92',
      icon: '🤖'
    },
    style: {
      background: 'linear-gradient(135deg, #60A5FA, #34D399)',
      border: '3px solid #ffffff',
      borderRadius: '50%',
      width: 120,
      height: 120,
      fontSize: '14px',
      fontWeight: 'bold',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 30px rgba(96, 165, 250, 0.5)',
    }
  },

  // Main Category Nodes
  {
    id: 'education',
    type: 'custom',
    position: { x: 150, y: 150 },
    data: {
      label: 'Education',
      category: 'main',
      icon: '🎓'
    },
    style: {
      background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      width: 80,
      height: 80,
      color: 'white',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    }
  },

  {
    id: 'certifications',
    type: 'custom',
    position: { x: 650, y: 150 },
    data: {
      label: 'Certifications',
      category: 'main',
      icon: '🏆'
    },
    style: {
      background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      width: 80,
      height: 80,
      color: 'white',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
    }
  },

  {
    id: 'leadership',
    type: 'custom',
    position: { x: 150, y: 450 },
    data: {
      label: 'Leadership',
      category: 'main',
      icon: '👥'
    },
    style: {
      background: 'linear-gradient(135deg, #10B981, #059669)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      width: 80,
      height: 80,
      color: 'white',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
    }
  },

  {
    id: 'research',
    type: 'custom',
    position: { x: 650, y: 450 },
    data: {
      label: 'Research',
      category: 'main',
      icon: '🔬'
    },
    style: {
      background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
      width: 80,
      height: 80,
      color: 'white',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
    }
  },

  // Sub Nodes - Education
  {
    id: 'uom',
    type: 'custom',
    position: { x: 50, y: 50 },
    data: {
      label: 'UoM',
      category: 'sub',
      title: 'B.Sc. Electronic & Telecommunication Engineering',
      organization: 'University of Moratuwa',
      period: '2023 – 2027',
      gpa: '3.92/4.0',
      skills: ['Electronics', 'Robotics', 'Signal Processing']
    },
    style: {
      background: 'rgba(59, 130, 246, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  // Sub Nodes - Certifications
  {
    id: 'math-ml',
    type: 'custom',
    position: { x: 750, y: 50 },
    data: {
      label: 'Math ML',
      category: 'sub',
      title: 'Mathematics for Machine Learning',
      organization: 'Imperial College London',
      period: 'Dec 2024',
      skills: ['Linear Algebra', 'Multivariate Calculus', 'PCA']
    },
    style: {
      background: 'rgba(6, 182, 212, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  {
    id: 'deep-learning',
    type: 'custom',
    position: { x: 750, y: 120 },
    data: {
      label: 'Deep Learning',
      category: 'sub',
      title: 'Deep Learning Specialization',
      organization: 'DeepLearning.AI',
      period: 'Jun 2024',
      skills: ['Neural Networks', 'CNNs', 'RNNs', 'TensorFlow']
    },
    style: {
      background: 'rgba(6, 182, 212, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  {
    id: 'embedded-ai',
    type: 'custom',
    position: { x: 720, y: 190 },
    data: {
      label: 'Embedded AI',
      category: 'sub',
      title: 'Embedded Systems & AI',
      organization: 'UC Irvine',
      period: 'Ongoing',
      skills: ['Embedded Systems', 'AI Integration', 'IoT']
    },
    style: {
      background: 'rgba(6, 182, 212, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  // Sub Nodes - Leadership
  {
    id: 'mora-esports-dir',
    type: 'custom',
    position: { x: 50, y: 550 },
    data: {
      label: 'Esports Dir',
      category: 'sub',
      title: 'Director - Event Management and Logistics',
      organization: 'Mora Esports Community',
      period: 'Jun 2025 – Present',
      skills: ['Event Management', 'Leadership', 'Strategy']
    },
    style: {
      background: 'rgba(16, 185, 129, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  {
    id: 'ieee-ras',
    type: 'custom',
    position: { x: 120, y: 520 },
    data: {
      label: 'IEEE RAS',
      category: 'sub',
      title: 'Assistant Secretary',
      organization: 'IEEE RAS - UoM',
      period: 'Dec 2024 – Present',
      skills: ['Robotics', 'Communications', 'Documentation']
    },
    style: {
      background: 'rgba(16, 185, 129, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  {
    id: 'robotics-day',
    type: 'custom',
    position: { x: 190, y: 550 },
    data: {
      label: 'Robo Day',
      category: 'sub',
      title: 'Co-Chair',
      organization: 'Robotic Day',
      period: 'Feb 2025 - Apr 2025',
      skills: ['Event Leadership', 'Public Speaking', 'Organization']
    },
    style: {
      background: 'rgba(16, 185, 129, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },

  // Sub Nodes - Research
  {
    id: 'roboticgen',
    type: 'custom',
    position: { x: 750, y: 550 },
    data: {
      label: 'RoboticGen',
      category: 'sub',
      title: 'Research Associate',
      organization: 'RoboticGen Labs',
      period: 'Current',
      skills: ['AI Research', 'Robotics', 'Innovation']
    },
    style: {
      background: 'rgba(139, 92, 246, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '8px',
      width: 60,
      height: 60,
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  },
];

export const constellationEdges: Edge[] = [
  // Central connections
  { id: 'sahas-education', source: 'sahas', target: 'education', type: 'smoothstep', style: { stroke: '#60A5FA', strokeWidth: 3 } },
  { id: 'sahas-certifications', source: 'sahas', target: 'certifications', type: 'smoothstep', style: { stroke: '#06B6D4', strokeWidth: 3 } },
  { id: 'sahas-leadership', source: 'sahas', target: 'leadership', type: 'smoothstep', style: { stroke: '#10B981', strokeWidth: 3 } },
  { id: 'sahas-research', source: 'sahas', target: 'research', type: 'smoothstep', style: { stroke: '#8B5CF6', strokeWidth: 3 } },

  // Education sub-connections
  { id: 'education-uom', source: 'education', target: 'uom', type: 'smoothstep', style: { stroke: '#3B82F6', strokeWidth: 2 } },

  // Certification sub-connections
  { id: 'certifications-math-ml', source: 'certifications', target: 'math-ml', type: 'smoothstep', style: { stroke: '#06B6D4', strokeWidth: 2 } },
  { id: 'certifications-deep-learning', source: 'certifications', target: 'deep-learning', type: 'smoothstep', style: { stroke: '#06B6D4', strokeWidth: 2 } },
  { id: 'certifications-embedded-ai', source: 'certifications', target: 'embedded-ai', type: 'smoothstep', style: { stroke: '#06B6D4', strokeWidth: 2 } },

  // Leadership sub-connections
  { id: 'leadership-mora-esports-dir', source: 'leadership', target: 'mora-esports-dir', type: 'smoothstep', style: { stroke: '#10B981', strokeWidth: 2 } },
  { id: 'leadership-ieee-ras', source: 'leadership', target: 'ieee-ras', type: 'smoothstep', style: { stroke: '#10B981', strokeWidth: 2 } },
  { id: 'leadership-robotics-day', source: 'leadership', target: 'robotics-day', type: 'smoothstep', style: { stroke: '#10B981', strokeWidth: 2 } },

  // Research sub-connections
  { id: 'research-roboticgen', source: 'research', target: 'roboticgen', type: 'smoothstep', style: { stroke: '#8B5CF6', strokeWidth: 2 } },

  // Cross-connections (showing relationships)
  { id: 'roboticgen-deep-learning', source: 'roboticgen', target: 'deep-learning', type: 'smoothstep', style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1, strokeDasharray: '5,5' } },
  { id: 'ieee-ras-uom', source: 'ieee-ras', target: 'uom', type: 'smoothstep', style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1, strokeDasharray: '5,5' } },
  { id: 'embedded-ai-roboticgen', source: 'embedded-ai', target: 'roboticgen', type: 'smoothstep', style: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 1, strokeDasharray: '5,5' } },
];