import type { ExperienceItem, Project, SkillGroup, EducationItem, PublicationItem } from '@/types';

export const site = {
  name: 'Jun Jeon',
  nameKo: '전준',
  tagline: '3D Scene Representation & Neural Rendering',
  subline: 'I study 3D Gaussian Splatting, Neural Rendering, and Novel View Synthesis for robust 3D scene representation and reconstruction.',
  affiliation: 'UNIST Vision & Learning Lab (UVLL)',
  address: '', // Removed address per CV update
  keywords: [
    '3D Scene Representation',
    '3D Gaussian Splatting',
    'Neural Rendering',
    'Novel View Synthesis',
    'Multi-View Geometry',
    'Robust 3D Reconstruction'
  ],
  links: {
    github: 'https://github.com/06-month',
    blog: 'https://archive-06.vercel.app/',
    cv: 'Jun%20Jeon%20CV.pdf?v=10', // Increment cache buster
  },
  email: 'junjeon@edu.hanbat.ac.kr',
  phone: '+82 10-4107-4189',
} as const;

export const aboutParagraphs = [
  'I am an undergraduate AI research student specializing in 3D computer vision. My research interests center on 3D Gaussian Splatting, neural rendering, novel view synthesis, and 3D scene representation.',
  'Through research experience in 3D hand pose estimation and hand reconstruction, I became interested in how visual observations can be used to infer and represent 3D structure. I am now extending this interest toward scene-level neural representation and robust 3D reconstruction.',
  'Before moving toward 3D reconstruction, I built a foundation in 2D visual understanding, semantic segmentation, and representation learning. This background now informs my interest in geometry-aware visual perception under challenging real-world conditions.',
];

export const researchPhilosophy =
  'I am interested in understanding how representation choices and model assumptions affect 3D reconstruction and view synthesis. Rather than treating models as black boxes, I try to analyze what each component contributes to geometry, appearance, and rendering quality.\n\nMy current goal is to build a solid research foundation through careful paper reading, reproducible implementation, and controlled experiments on 3D Gaussian Splatting, neural rendering, and scene representation.';

export const priorWorkFraming =
  'My selected works reflect a progression from 2D visual understanding and representation learning toward 3D scene reconstruction, neural rendering, and robust geometry-aware perception.';

export const education: EducationItem[] = [
  {
    institution: 'Hanbat National University',
    period: 'Mar. 2025 – Present',
    degree: 'B.S. in Computer Engineering',
    gpa: '3.79 / 4.5',
    majorGpa: '3.79 / 4.5',
  },
  {
    institution: 'Pai Chai University',
    period: 'Mar. 2021 – Dec. 2022',
    degree: 'B.S. Coursework in Software Engineering',
    gpa: '4.14 / 4.5',
    majorGpa: '4.32 / 4.5',
  },
];

export const publications: PublicationItem[] = [
  {
    title: 'Balanced Knowledge Distillation (BKD) for Long-Tail Federated Learning Based on CLIP2FL',
    authors: 'Jun Jeon, Minu Baek, Sangkeum Lee †',
    venue: 'KICS Winter Conference, 2026',
  },
];

export const projects: Project[] = [
  {
    id: 'low-light-3d',
    title: '3D Low-Light Enhancement for Robust Novel View Synthesis',
    keywords: ['3D Reconstruction', '3D Vision', 'NTIRE 2026 Challenge', 'Gaussian Splatting'],
    description: 'Studying low-light degradation, dataset characteristics, and baseline methods for robust Novel View Synthesis and 3D Gaussian Splatting under challenging real-world visual conditions.',
    ongoing: true,
    type: 'Challenge Study / 3D Reconstruction',
  },
  {
    id: 'geometry-dataset-refinement',
    title: 'Geometry-Preserving Synthetic-to-Real Dataset Refinement',
    keywords: ['3D Reconstruction', 'Synthetic-to-Real', 'Dataset Refinement'],
    description: 'Investigating geometry-preserving synthetic-to-real dataset refinement to reduce appearance-domain gaps while maintaining geometric supervision for 3D reconstruction.',
    ongoing: true,
    type: 'Independent Study',
  },
  {
    id: 'on-device-pose',
    title: 'On-Device Human Pose Estimation for Real-Time Exercise Posture Assessment',
    keywords: ['Mobile AI', 'Human Pose Estimation', 'On-Device ML'],
    description: 'Developing the AI pipeline for a mobile exercise coaching system using on-device human pose estimation, joint-angle analysis, repetition counting, and posture assessment.',
    ongoing: true,
    type: 'Capstone Project',
  },
  {
    id: 'satellite-building',
    title: 'Satellite Image Building Area Segmentation',
    keywords: ['Semantic Segmentation', 'Satellite Imagery', 'Deep Learning'],
    description: 'Developed semantic segmentation models for building-region extraction from satellite imagery, building a foundation in pixel-level visual understanding and spatial representation learning.',
    ongoing: false,
    type: 'Computer Vision Project',
  },
  {
    id: 'satellite-cloud',
    title: 'Satellite Cloud Semantic Segmentation',
    keywords: ['Semantic Segmentation', 'Computer Vision', 'CMX'],
    description: 'Developed semantic segmentation models for classifying cloud regions in satellite imagery, focusing on dense prediction under ambiguous boundaries and appearance variations.',
    href: 'https://github.com/06-month/Satellite-Cloud-Semantic-Segmentation',
    label: 'GitHub',
    type: 'AiRLab Research',
  },
  {
    id: 'clip2fl',
    title: 'CLIP2FL-based Federated Learning Research',
    keywords: ['Federated Learning', 'CLIP', 'BKD'],
    description: 'Studied long-tail federated learning based on CLIP2FL and balanced knowledge distillation, focusing on representation robustness under severe data distribution shifts. This work resulted in a conference publication at KICS Winter Conference 2026.',
    href: 'https://github.com/06-month/CLIP2FL_BKD',
    label: 'GitHub',
    type: 'Conference Research',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: ['Python', 'C/C++/C#', 'Java', 'MATLAB', 'SQL'],
  },
  {
    title: 'ML / CV Frameworks',
    items: ['PyTorch', 'NumPy', 'OpenCV'],
  },
  {
    title: 'Research / 3D Vision',
    items: ['3D Gaussian Splatting', 'Neural Rendering', 'Novel View Synthesis', 'Multi-View Geometry', 'Camera Geometry'],
  },
  {
    title: 'Tools & Environments',
    items: ['Docker', 'Git', 'Linux', 'Vim'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: 'Mar 2026 – Present',
    title: 'Undergraduate Researcher',
    org: 'UNIST Vision & Learning Lab (UVLL), Ulsan National Institute of Science and Technology',
    description: 'Advised by Prof. Seungryul Baek. Research experience in 3D hand pose estimation and hand reconstruction, with broader research interests in 3D scene representation and neural rendering.',
  },
  {
    period: 'Nov 2025',
    title: '1st Place — Open Source Software Utilization Competition',
    org: 'Hanbat National University',
    description: 'Developed Budgetly: an OCR-based financial management web application.',
  },
  {
    period: '—',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    org: 'Amazon Web Services (Certification)',
    description: '',
  },
  {
    period: '—',
    title: 'Naver Cloud Platform Certified Associate (NCA)',
    org: 'Naver Cloud (Certification)',
    description: '',
  },
  {
    period: 'Jun 2025 – Mar 2026',
    title: 'Undergraduate Researcher',
    org: 'Artificial Intelligence and Robotics Laboratory (AiRLab), Hanbat National University',
    description: 'Advised by Prof. Dong-Geol Choi. Conducted research on computer vision, semantic segmentation, representation learning, and long-tail federated learning.',
  },
  {
    period: 'Coursework',
    title: 'Related Coursework',
    org: 'Hanbat National University',
    description: 'Artificial Intelligence (A+), Computer Vision (A+), Reinforcement Learning (A+)',
  },
  {
    period: '—',
    title: 'TOEIC 800',
    org: 'ETS (Language Proficiency)',
    description: '',
  },
];
