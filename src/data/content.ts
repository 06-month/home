import type { ExperienceItem, Project, SkillGroup, EducationItem, PublicationItem } from '@/types';

export const site = {
  name: 'Jun Jeon',
  nameKo: '전준',
  tagline: '3D/4D Scene Representation \n & Neural Rendering',
  subline: 'I study how dynamic 3D scenes can be reconstructed, represented, and rendered from visual observations.',
  affiliation: 'Studying feed-forward 3DGS and 3D/4D scene reconstruction.',
  address: '', // Removed address per CV update
  keywords: [
    'Spatial Intelligence',
    '3D/4D Scene Reconstruction',
    'Dynamic Scene Representation',
    'Gaussian Splatting',
    'Novel View Synthesis',
    'Neural Rendering',
    'Motion-Aware Scene Understanding'
  ],
  links: {
    github: 'https://github.com/06-month',
    linkedin: 'https://www.linkedin.com/in/jun-jeon-1b61273b2/',
    blog: 'https://archive-06.vercel.app/',
    cv: 'Jun Jeon CV.pdf',
  },
  email: 'junjeon@edu.hanbat.ac.kr',
  phone: '+82 10-4107-4189',
} as const;

export const aboutParagraphs = [
  'I am an undergraduate AI research student interested in spatial intelligence for 3D/4D scene reconstruction, representation, and rendering. My current focus is on dynamic scene representation, Gaussian Splatting, novel view synthesis, and neural rendering.',
  'Through research experience in 3D hand pose estimation and 3D hand reconstruction, I became interested in how visual observations can be used to infer and represent 3D structure. I am now extending this interest toward dynamic, scene-level neural representation.',
  'Before moving toward 3D/4D reconstruction, I built a foundation in 2D visual understanding, image classification, and semantic segmentation. This background now informs my interest in geometry-aware and motion-aware visual perception under challenging real-world conditions.',
];

export const researchPhilosophy =
  'I am interested in understanding how representation choices and model assumptions affect 3D/4D reconstruction, dynamic scene modeling, and view synthesis. Rather than treating models as black boxes, I try to analyze what each component contributes to geometry, appearance, motion, and rendering quality.\n\nMy current goal is to build a solid research foundation through careful paper reading, reproducible implementation, and controlled experiments on Gaussian Splatting, neural rendering, and motion-aware scene representation.';

export const priorWorkFraming =
  'My selected works reflect a progression from 2D visual understanding toward 3D/4D scene reconstruction, dynamic scene representation, neural rendering, and robust geometry-aware perception.';

export const education: EducationItem[] = [
  {
    institution: 'Hanbat National University',
    period: 'Mar. 2025 – Present',
    degree: 'B.S. in Computer Engineering',
    gpa: '3.85 / 4.5',
    majorGpa: '3.82 / 4.5',
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
    authors: 'Jun Jeon, Minu Baek, Sangkeum Lee†',
    venue: 'KICS Winter Conference, 2026',
  },
];

export const projects: Project[] = [
  {
    id: 'dynamic-scene-representation',
    title: 'Dynamic Scene Representation Study',
    period: 'Jun. 2026 – Present',
    keywords: ['3D/4D Scene Representation', 'Neural Rendering', 'Gaussian Splatting'],
    description: 'Studying recent Gaussian Splatting-based methods for dynamic scene representation and dynamic novel view synthesis, with attention to efficiency and optimization issues in 3D/4D scene reconstruction pipelines.',
    ongoing: true,
    type: 'Independent Study',
  },
  {
    id: 'low-light-3d',
    title: '3D Low-Light Enhancement for Robust Novel View Synthesis',
    period: 'May. 2026 – Present',
    keywords: ['3D Reconstruction', 'Novel View Synthesis', 'NTIRE 2026 Challenge'],
    description: 'Analyzing challenge tasks, datasets, and baseline methods for robust 3D reconstruction under real-world visual degradations.',
    ongoing: true,
    type: 'Independent Experimental Study',
  },
  {
    id: 'on-device-pose',
    title: 'On-Device Human Pose Estimation for Real-Time Exercise Posture Assessment',
    period: 'Mar. 2026 – Present',
    keywords: ['Mobile AI', 'Human Pose Estimation', 'On-Device ML'],
    description: 'Leading the AI pipeline of a mobile exercise coaching system based on on-device human pose estimation, exercise-specific pose keypoints, joint-angle features, and model-based feedback logic.',
    ongoing: true,
    type: 'Capstone Design Project',
  },
  {
    id: 'satellite-building',
    title: 'Satellite Image Building Area Segmentation',
    period: 'Jan. 2026 – Feb. 2026',
    keywords: ['Semantic Segmentation', 'Satellite Imagery', 'Deep Learning'],
    description: 'Developed semantic segmentation models for building-region extraction from satellite imagery using deep learning models.',
    ongoing: false,
    type: 'Lab Coding Seminar',
  },
  {
    id: 'clip2fl',
    title: 'CLIP2FL-based Federated Learning Research',
    period: 'Oct. 2025 – Dec. 2025',
    keywords: ['Federated Learning', 'CLIP', 'BKD'],
    description: 'Conducted federated learning research on CLIP2FL with balanced knowledge distillation, resulting in a conference publication at KICS Winter Conference 2026.',
    href: 'https://github.com/06-month/CLIP2FL_BKD',
    label: 'GitHub',
    type: 'IoT Project',
  },
  {
    id: 'satellite-cloud',
    title: 'Satellite Cloud Semantic Segmentation',
    period: 'Nov. 2025 – Dec. 2025',
    keywords: ['Semantic Segmentation', 'Computer Vision', 'Satellite Imagery'],
    description: 'Developed semantic segmentation models for satellite images covering three cloud types: thick cloud, thin cloud, and cloud shadow.',
    href: 'https://github.com/06-month/Satellite-Cloud-Semantic-Segmentation',
    label: 'GitHub',
    type: 'Computer Vision Term Project',
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
    title: 'Tools & Environments',
    items: ['Docker', 'Git', 'Linux', 'Vim'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: 'Mar. 2026 – Jun. 2026',
    title: 'Undergraduate Researcher',
    org: 'UNIST Vision & Learning Lab (UVLL), Ulsan National Institute of Science and Technology',
    description: 'Advised by Prof. Seungryul Baek. Undergraduate research on 3D hand pose estimation and 3D hand reconstruction.',
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
    period: 'Jun. 2025 – Mar. 2026',
    title: 'Undergraduate Researcher',
    org: 'Artificial Intelligence and Robotics Laboratory (AiRLab), Hanbat National University',
    description: 'Advised by Prof. Dong-Geol Choi. Undergraduate research on computer vision, image classification, and semantic segmentation.',
  },
  {
    period: 'Coursework',
    title: 'Related Coursework',
    org: 'Hanbat National University',
    description: 'Artificial Intelligence (A+), Computer Vision (A+), Reinforcement Learning (A+), Metaverse and Digital Space Theory (A+)',
  },
  {
    period: '—',
    title: 'TOEIC 800',
    org: 'ETS (Language Proficiency)',
    description: '',
  },
];
