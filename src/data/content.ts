import type { ExperienceItem, Project, SkillGroup } from '@/types';

export const site = {
  name: 'Jeon Jun',
  nameKo: '전준',
  tagline: 'Computer Vision Researcher & AI Engineer',
  subline: 'Deep learning–based visual understanding: hand pose estimation, segmentation, and recognition.',
  affiliation: 'Hanbat National University · AiR Lab',
  keywords: ['Computer Vision', 'Hand Pose Estimation', 'Semantic Segmentation', 'Federated Learning'],
  links: {
    github: 'https://github.com/06-month',
    blog: 'https://6month.tistory.com/',
    cv: 'Jun%20Jeon%20CV.pdf', // BASE_URL과 합쳐서 사용 (GitHub Pages 대응)
  },
  email: '20237142@edu.hanbat.ac.kr',
  phone: '+82 10-4107-4189',
} as const;

export const aboutParagraphs = [
  'I study deep learning–based visual understanding, with a strong focus on hand pose estimation, segmentation, and recognition, driven by theoretical analysis and validated through iterative experimentation.',
  'Current focus: satellite image building area segmentation.',
  'Prior work spans satellite cloud segmentation (CMX), CLIP2FL-based federated learning with BKD (under submission), and offline-to-online RL, supported by experience with AWS and NCP.',
];

export const projects: Project[] = [
  {
    id: 'satellite-building',
    title: 'Satellite Image Building Area Segmentation',
    keywords: ['Semantic Segmentation', 'Satellite Imagery', 'Deep Learning'],
    description: 'Lab Coding Seminar, 2026 (Jan. 2026 ~ Present). Semantic segmentation of building regions from satellite imagery using deep learning models.',
    ongoing: true,
  },
  {
    id: 'satellite-cloud',
    title: 'Satellite Cloud Semantic Segmentation',
    keywords: ['Semantic Segmentation', 'Computer Vision', 'CMX'],
    description: 'Computer Vision Term Project, 2025. Semantic segmentation of satellite images for three cloud types (thick, thin, shadow). CMX (Cross-Modal Fusion) with RGB/NIR.',
    href: 'https://github.com/06-month/Satellite-Cloud-Semantic-Segmentation',
    label: 'GitHub',
  },
  {
    id: 'clip2fl',
    title: 'CLIP2FL-based Federated Learning Research',
    keywords: ['Federated Learning', 'CLIP', 'BKD'],
    description: 'IoT Project, 2025. Federated learning research on CLIP2FL with balanced knowledge distillation. Manuscript under submission to a domestic communications conference.',
    href: 'https://github.com/06-month/CLIP2FL_BKD',
    label: 'GitHub',
  },
  {
    id: 'rl-bc-ppo',
    title: 'Offline-to-Online Reinforcement Learning with BC and PPO',
    keywords: ['Reinforcement Learning', 'RLlib', 'MuJoCo'],
    description: 'RL Final Project, 2025. Offline behavior cloning followed by PPO fine-tuning using RLlib on the MuJoCo HalfCheetah environment.',
    href: 'https://github.com/06-month/Offline-to-Online-Reinforcement-Learning',
    label: 'GitHub',
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor MRI Segmentation',
    keywords: ['Semantic Segmentation', 'Medical Imaging', 'BraTS'],
    description: 'Big Data Analysis Project, 2025. Deep learning–based brain tumor MRI segmentation on the BraTS dataset.',
  },
  {
    id: 'tiny-imagenet',
    title: 'Tiny-ImageNet Image Classification',
    keywords: ['Image Classification', 'Deep Learning', 'Tiny-ImageNet'],
    description: 'Lab Coding Seminar, 2025. Multi-class image classification on the Tiny-ImageNet dataset (ResNet, ViT, Swin).',
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
