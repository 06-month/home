import type { ExperienceItem, Project, SkillGroup, EducationItem, PublicationItem, ArticleItem } from '@/types';

// Single source of truth for how the research focus is stated. Used verbatim in the
// hero, the footer, and index.html's meta tags — keep those three in sync when editing.
export const researchStatement =
  'Undergraduate researcher on feed-forward 3D/4D scene reconstruction, dynamic Gaussian representations, and motion modeling.';

export const site = {
  name: 'Jun Jeon',
  nameKo: '전준',
  role: 'Undergraduate Researcher',
  tagline: 'Feed-Forward 3D/4D \n Scene Reconstruction',
  subline: researchStatement,
  address: '', // Removed address per CV update
  keywords: [
    'Feed-Forward 3D/4D Reconstruction',
    'Dynamic Gaussian Representations',
    'Motion Modeling',
  ],
  links: {
    github: 'https://github.com/06-month',
    linkedin: 'https://www.linkedin.com/in/jun-jeon-1b61273b2/',
    blog: 'https://archive-06.vercel.app/',
    cv: 'Jun Jeon CV.pdf',
  },
  email: 'junjeon@edu.hanbat.ac.kr',
} as const;

export const aboutParagraphs = [
  'I am an undergraduate researcher interested in feed-forward 3D/4D scene reconstruction, dynamic Gaussian representations, and motion modeling.',
  'Through research experience in 3D hand pose estimation and 3D hand reconstruction, I became interested in how visual observations can be used to infer and represent 3D structure. I am now extending this interest toward dynamic, scene-level neural representation.',
  'Before moving toward 3D/4D reconstruction, I built a foundation in 2D visual understanding, image classification, and semantic segmentation. This background now informs my interest in geometry-aware and motion-aware visual perception.',
];

export const researchPhilosophy =
  'I am interested in understanding how representation choices and model assumptions affect 3D/4D reconstruction, dynamic scene modeling, and view synthesis. Rather than treating models as black boxes, I try to analyze what each component contributes to geometry, appearance, motion, and rendering quality.\n\nMy current goal is to build a solid research foundation through careful paper reading, reproducible implementation, and controlled experiments on feed-forward Gaussian reconstruction and motion modeling.';

export const priorWorkFraming =
  'My selected works reflect a progression from 2D visual understanding toward feed-forward 3D/4D scene reconstruction, dynamic Gaussian representations, and motion modeling.';

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

export const coursework = [
  'Artificial Intelligence (A+)',
  'Computer Vision (A+)',
  'Reinforcement Learning (A+)',
  'Metaverse and Digital Space Theory (A+)',
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
    id: 'feed-forward-3d4d',
    title: 'Feed-Forward 3D/4D Reconstruction Study',
    period: 'Jun. 2026 – Present',
    keywords: ['Feed-Forward Reconstruction', 'Dynamic Gaussians', 'Neural Rendering'],
    description: 'Studying compact query-based and dynamic Gaussian reconstruction methods, including 3DGS, Deformable 3DGS, VGGT, C3G, and C4G.',
    ongoing: true,
    type: 'Independent Literature Study & Research Proposal',
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
    earlier: true,
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
    earlier: true,
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
    earlier: true,
    type: 'Computer Vision Term Project',
  },
];

export const noteArchive = {
  /** Interlinked wiki notes backing the write-ups; the archive states this count. */
  total: 135,
  href: 'https://archive-06.vercel.app/',
  articlesHref: 'https://archive-06.vercel.app/blog',
  blurb:
    'Paper reviews I write while working through 3D/4D reconstruction, backed by an interlinked wiki of 135 concept notes.',
};

const ARTICLE_BASE = 'https://archive-06.vercel.app/blog/';

/**
 * Reviews written on the archive. Slugs are verified against its article index —
 * add new entries from there rather than guessing.
 */
export const articles: ArticleItem[] = [
  {
    tag: '3DGS',
    date: '2026.07.17',
    title: 'pixelSplat: 3D Gaussian Splats from Image Pairs for Scalable Generalizable 3D Reconstruction',
    href: `${ARTICLE_BASE}pixelsplat-3d-gaussian-splats-from-image-pairs-for-scalable-generalizable-3d-reconstruction-리뷰`,
  },
  {
    tag: '3DGS',
    date: '2026.06.22',
    title: '4D Gaussian Splatting for Real-Time Dynamic Scene Rendering',
    href: `${ARTICLE_BASE}4d-gaussian-splatting-for-real-time-dynamic-scene-rendering-리뷰`,
  },
  {
    tag: '3DGS',
    date: '2026.06.21',
    title: 'Deformable 3D Gaussians for High-Fidelity Monocular Dynamic Scene Reconstruction',
    href: `${ARTICLE_BASE}deformable-3d-gaussians-for-high-fidelity-monocular-dynamic-scene-reconstruction-리뷰`,
  },
  {
    tag: '3DGS',
    date: '2026.06.19',
    title: '3D Gaussian Splatting for Real-Time Radiance Field Rendering',
    href: `${ARTICLE_BASE}3d-gaussian-splatting-for-real-time-radiance-field-rendering-리뷰`,
  },
  {
    tag: '3DGS',
    date: '2026.06.18',
    title: 'NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis',
    href: `${ARTICLE_BASE}nerf-representing-scenes-as-neural-radiance-fields-for-view-synthesis-리뷰`,
  },
  {
    tag: 'Hand Pose',
    date: '2026.02.06',
    title: 'Model-based Deep Hand Pose Estimation',
    href: `${ARTICLE_BASE}model-based-deep-hand-pose-estimation-리뷰`,
    earlier: true,
  },
  {
    tag: 'Hand Pose',
    date: '2026.02.03',
    title: 'Modeling and Capturing Hands and Bodies Together (MANO)',
    href: `${ARTICLE_BASE}modeling-and-capturing-hands-and-bodies-together-mano-리뷰`,
    earlier: true,
  },
  {
    tag: 'Hand Pose',
    date: '2026.01.19',
    title: 'Depth-Based Hand Pose Estimation',
    href: `${ARTICLE_BASE}depth-based-hand-pose-estimation-리뷰`,
    earlier: true,
  },
  {
    tag: 'Hand Pose',
    date: '2026.01.19',
    title: 'Region Ensemble Network (REN)',
    href: `${ARTICLE_BASE}region-ensemble-network-ren-리뷰`,
    earlier: true,
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
    period: 'Jun. 2025 – Mar. 2026',
    title: 'Undergraduate Researcher',
    org: 'Artificial Intelligence and Robotics Laboratory (AiRLab), Hanbat National University',
    description: 'Advised by Prof. Dong-Geol Choi. Undergraduate research on computer vision, image classification, and semantic segmentation.',
  },
  {
    period: 'Nov. 2025',
    title: '1st Place — Open Source Software Utilization Competition',
    org: 'Hanbat National University',
    description: 'Developed Budgetly: an OCR-based financial management web application.',
  },
];

// Kept out of the research timeline on purpose — these are low-signal for research
// applications and dilute the section when interleaved with lab experience.
export const additional: { label: string; items: string[] }[] = [
  {
    label: 'Certifications',
    items: [
      'AWS Certified Cloud Practitioner (CLF-C02)',
      'Naver Cloud Platform Certified Associate (NCA)',
    ],
  },
  {
    label: 'English',
    items: ['TOEIC 800'],
  },
];
