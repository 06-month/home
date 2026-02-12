import type { ExperienceItem, Project, SkillGroup } from '@/types';

export const site = {
  name: 'Jun Jeon',
  nameKo: '전준',
  tagline: 'AI Research Student',
  subline: 'Visual understanding — segmentation, pose estimation, recognition.',
  affiliation: 'Hanbat National University · AiR Lab',
  keywords: ['Computer Vision', 'Semantic Segmentation', 'Hand Pose Estimation', 'Federated Learning'],
  links: {
    github: 'https://github.com/06-month',
    blog: 'https://6month.tistory.com/',
    cv: 'Jun%20Jeon%20CV.pdf?v=2', // 쿼리로 캐시 우회 (PDF 수정 시 v 숫자 올리기)
  },
  email: 'junjeon@edu.hanbat.ac.kr',
  phone: '+82 10-4107-4189',
} as const;

export const aboutParagraphs = [
  'I work on deep learning for visual understanding, with a focus on segmentation, pose estimation, and recognition.',
  'Right now I am investigating building footprint segmentation from satellite imagery and how representations and losses transfer across resolution and sensor conditions. Past work includes cross-modal fusion for remote sensing (RGB/NIR), federated learning with vision–language priors (CLIP2FL, under submission), and offline-to-online reinforcement learning.',
];

export const researchPhilosophy =
  'I approach problems by first clarifying model assumptions and representation choices, then testing whether they hold under controlled experiments. The goal is to understand when and why a method works, not only that it works.';

export const priorWorkFraming =
  'The projects below sit on a single axis: from dense prediction and recognition in images to learning under distribution shift and limited supervision.';

export const projects: Project[] = [
  {
    id: 'hand-pose',
    title: 'Hands2023-based 3D Hand Pose Estimation',
    keywords: ['Hand Pose Estimation', '3D Vision', 'Deep Learning'],
    description: '3D hand pose estimation from RGB images using keypoint regression-based deep learning models. Independent Experimental Study, 2026 (Feb. 2026 ~ Present).',
    ongoing: true,
  },
  {
    id: 'satellite-building',
    title: 'Satellite Image Building Area Segmentation',
    keywords: ['Semantic Segmentation', 'Satellite Imagery', 'Deep Learning'],
    description: 'Semantic segmentation of building regions from satellite imagery using deep learning models. Lab Coding Seminar, 2026 (Jan. 2026 ~ Present).',
    ongoing: true,
  },
  {
    id: 'satellite-cloud',
    title: 'Satellite Cloud Semantic Segmentation',
    keywords: ['Semantic Segmentation', 'Computer Vision', 'CMX'],
    description: 'Semantic segmentation of satellite images for three cloud types (thick, thin, shadow). Computer Vision Term Project, 2025 (Nov. ~ Dec. 2025).',
    href: 'https://github.com/06-month/Satellite-Cloud-Semantic-Segmentation',
    label: 'GitHub',
  },
  {
    id: 'clip2fl',
    title: 'CLIP2FL-based Federated Learning Research',
    keywords: ['Federated Learning', 'CLIP', 'BKD'],
    description: 'Federated learning research on CLIP2FL with balanced knowledge distillation. IoT Project, 2025 (Oct. ~ Dec. 2025). Manuscript under submission to a domestic communications conference.',
    href: 'https://github.com/06-month/CLIP2FL_BKD',
    label: 'GitHub',
  },
  {
    id: 'rl-bc-ppo',
    title: 'Offline-to-Online Reinforcement Learning with BC and PPO',
    keywords: ['Reinforcement Learning', 'RLlib', 'MuJoCo'],
    description: 'Offline behavior cloning followed by PPO fine-tuning using RLlib on the MuJoCo HalfCheetah environment. Reinforcement Learning Final Project (Nov. ~ Dec. 2025).',
    href: 'https://github.com/06-month/Offline-to-Online-Reinforcement-Learning',
    label: 'GitHub',
  },
  {
    id: 'tiny-imagenet',
    title: 'Tiny-ImageNet Image Classification',
    keywords: ['Image Classification', 'Deep Learning', 'Tiny-ImageNet'],
    description: 'Multi-class image classification on the Tiny-ImageNet dataset. Lab Coding Seminar, 2025 (Jul. ~ Aug. 2025).',
    href: 'https://github.com/06-month/Tiny-ImageNet-Image-Classification',
    label: 'GitHub',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    items: ['Python', 'C/C++/C#', 'Java', 'SQL'],
  },
  {
    title: 'Tools & Frameworks',
    items: ['PyTorch', 'Vim', 'Docker', 'Git'],
  },
  {
    title: 'Research',
    items: ['Semantic Segmentation', 'Hand Pose Estimation', 'Federated Learning', 'Reinforcement Learning'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: 'Present',
    title: 'Undergraduate Researcher',
    org: 'Artificial Intelligence and Robotics Laboratory (AiR), Hanbat National University',
    description: 'Deep learning–based visual understanding; federated learning and segmentation research.',
  },
  {
    period: 'Nov 2025',
    title: '1st Place — Open Source Software Utilization Competition',
    org: 'Hanbat National University',
    description: 'OCR-based financial management web application: Budgetly.',
  },
  {
    period: '—',
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    org: 'Certification',
    description: '',
  },
  {
    period: '—',
    title: 'Naver Cloud Platform Certified Associate (NCA)',
    org: 'Certification',
    description: '',
  },
  {
    period: '—',
    title: 'TOEIC 800',
    org: 'Certification',
    description: '',
  },
  {
    period: 'Related courses',
    title: 'Artificial Intelligence (A+), Computer Vision (A+), Reinforcement Learning (A+)',
    org: 'Hanbat National University',
    description: '',
  },
];
