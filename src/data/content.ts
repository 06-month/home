import type { ExperienceItem, Project, SkillGroup, EducationItem, PublicationItem } from '@/types';

export const site = {
  name: 'Jun Jeon',
  nameKo: '전준',
  tagline: 'AI & 3D Scene Reconstruction Researcher',
  subline: 'Visual scene understanding, focusing on 3D Gaussian Splatting, Novel View Synthesis, and Robust 3D Reconstruction.',
  affiliation: 'UNIST Vision & Learning Lab (UVLL)',
  address: '', // Removed address per CV update
  keywords: [
    '3D Scene Reconstruction',
    '3D Gaussian Splatting',
    'Novel View Synthesis',
    'Multi-View Geometry',
    'Neural Scene Representation',
    'Robust 3D Reconstruction'
  ],
  links: {
    github: 'https://github.com/06-month',
    blog: 'https://6month.tistory.com/',
    cv: 'Jun%20Jeon%20CV.pdf?v=9', // Increment cache buster
  },
  email: 'junjeon@edu.hanbat.ac.kr',
  phone: '+82 10-4107-4189',
} as const;

export const aboutParagraphs = [
  'I am an AI researcher specializing in deep learning for 3D computer vision. Having built a solid foundation in 2D visual understanding and representation learning, I am now expanding my research toward 3D scene reconstruction and neural rendering.',
  'Currently, I am working as an Undergraduate Researcher at the UNIST Vision & Learning Lab (UVLL) under the advisement of Prof. Seungryul Baek, where I study robust 3D reconstruction and geometry-preserving synthetic-to-real dataset refinement. Prior to this, I was a researcher at Hanbat National University\'s Artificial Intelligence and Robotics Laboratory (AiRLab) advised by Prof. Dong-Geol Choi, where I focused on visual representation and robustness.',
];

export const researchPhilosophy =
  'I approach research by identifying core model assumptions and representation choices, then rigorously testing them through controlled, reproducible experiments. My goal is to discover structural insights in 3D scene representation and reconstruction rather than simply chasing numbers. Specifically, I aim to combine geometric constraints, learned representations, and rendering-based supervision to establish robust 3D perception under challenging real-world environments.';

export const priorWorkFraming =
  'My selected works show a progression from 2D visual understanding and representation learning toward 3D scene reconstruction, neural rendering, and robust geometry-aware perception.';

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
    degree: 'B.S. in Software Engineering',
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
    description: 'Analyzing challenge tasks, datasets, and baseline methods for robust 3D reconstruction under real-world visual degradations.',
    ongoing: true,
  },
  {
    id: 'geometry-dataset-refinement',
    title: 'Geometry-Preserving Synthetic-to-Real Dataset Refinement',
    keywords: ['3D Reconstruction', 'Synthetic-to-Real', 'Dataset Refinement'],
    description: 'Studying geometry-preserving synthetic-to-real refinement to reduce the sim-to-real gap in 3D reconstruction.',
    ongoing: true,
  },
  {
    id: 'on-device-pose',
    title: 'On-Device Human Pose Estimation for Real-Time Exercise Posture Assessment',
    keywords: ['Mobile AI', 'Human Pose Estimation', 'On-Device ML'],
    description: 'Leading the AI pipeline of a mobile exercise coaching system based on on-device human pose estimation and developing posture assessment using joint-angle features.',
    ongoing: true,
  },
  {
    id: 'satellite-building',
    title: 'Satellite Image Building Area Segmentation',
    keywords: ['Semantic Segmentation', 'Satellite Imagery', 'Deep Learning'],
    description: 'Semantic segmentation of building regions from satellite imagery using deep learning, focusing on pixel-level visual understanding and spatial representation learning.',
    ongoing: false,
  },
  {
    id: 'satellite-cloud',
    title: 'Satellite Cloud Semantic Segmentation',
    keywords: ['Semantic Segmentation', 'Computer Vision', 'CMX'],
    description: 'Semantic segmentation of satellite images for three cloud types, focusing on dense prediction under ambiguous boundaries and appearance variations.',
    href: 'https://github.com/06-month/Satellite-Cloud-Semantic-Segmentation',
    label: 'GitHub',
  },
  {
    id: 'clip2fl',
    title: 'CLIP2FL-based Federated Learning Research',
    keywords: ['Federated Learning', 'CLIP', 'BKD'],
    description: 'Federated learning research on CLIP2FL with balanced knowledge distillation, studying representation robustness under severe data distribution shifts, resulting in a conference publication at KICS Winter Conference 2026.',
    href: 'https://github.com/06-month/CLIP2FL_BKD',
    label: 'GitHub',
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
    period: 'Mar 2026 – Present',
    title: 'Undergraduate Researcher',
    org: 'UNIST Vision & Learning Lab (UVLL), Ulsan National Institute of Science and Technology',
    description: 'Advised by Prof. Seungryul Baek. Focus: 3D scene reconstruction, neural rendering, and geometry-aware visual perception.',
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
    description: 'Advised by Prof. Dong-Geol Choi. Conducted research on computer vision, remote sensing semantic segmentation, and long-tail federated learning.',
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
