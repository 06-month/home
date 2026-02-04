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
    cv: 'Jun%20Jeon%20CV.pdf', // BASE_URL과 합쳐서 사용 (GitHub Pages 대응)
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
    id: 'satellite-building',
    title: 'Satellite Image Building Area Segmentation',
    keywords: ['Semantic Segmentation', 'Satellite Imagery', 'Deep Learning'],
    description: 'How can we reliably segment building footprints from overhead imagery across resolution and sensor differences? I am exploring representation and loss choices that improve generalization. Lab Coding Seminar, 2026 (ongoing).',
    ongoing: true,
  },
  {
    id: 'satellite-cloud',
    title: 'Satellite Cloud Semantic Segmentation',
    keywords: ['Semantic Segmentation', 'Computer Vision', 'CMX'],
    description: 'We asked whether fusing RGB and NIR at the encoder improves segmentation of cloud types (thick, thin, shadow) compared to RGB-only baselines. Implemented and evaluated the CMX cross-modal fusion architecture on a dedicated satellite cloud dataset.',
    href: 'https://github.com/06-month/Satellite-Cloud-Semantic-Segmentation',
    label: 'GitHub',
  },
  {
    id: 'clip2fl',
    title: 'CLIP2FL-based Federated Learning Research',
    keywords: ['Federated Learning', 'CLIP', 'BKD'],
    description: 'Can vision–language priors (CLIP) stabilize federated learning under non-IID and class imbalance? We studied balanced knowledge distillation (BKD) on top of CLIP2FL and compared to standard FL. Manuscript under submission.',
    href: 'https://github.com/06-month/CLIP2FL_BKD',
    label: 'GitHub',
  },
  {
    id: 'rl-bc-ppo',
    title: 'Offline-to-Online Reinforcement Learning with BC and PPO',
    keywords: ['Reinforcement Learning', 'RLlib', 'MuJoCo'],
    description: 'When does offline pretraining (behavior cloning) help or hurt subsequent online fine-tuning with PPO? We compared BC→PPO pipelines on HalfCheetah and Atari to see how data quality and policy initialization affect sample efficiency.',
    href: 'https://github.com/06-month/Offline-to-Online-Reinforcement-Learning',
    label: 'GitHub',
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor MRI Segmentation',
    keywords: ['Semantic Segmentation', 'Medical Imaging', 'BraTS'],
    description: 'Dense prediction under strong class imbalance and multi-modal MRI inputs: we trained and evaluated segmentation models on BraTS to compare architectural and loss choices for tumor subregion delineation.',
  },
  {
    id: 'tiny-imagenet',
    title: 'Tiny-ImageNet Image Classification',
    keywords: ['Image Classification', 'Deep Learning', 'Tiny-ImageNet'],
    description: 'We compared how well different inductive biases (CNN vs. ViT vs. Swin) and training recipes transfer to the 200-class Tiny-ImageNet setting, with a focus on data augmentation and learning-rate schedules.',
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
