export interface Profile {
  name: string
  initials: string
  role: string
  eyebrow: string
  headline: string
  summary: string
  introduction: string[]
  githubUsername: string
  githubUrl: string
}

export interface FocusItem {
  number: string
  title: string
  description: string
  keywords: string[]
}

export interface TimelineEntry {
  phase: string
  title: string
  description: string
  state: 'active' | 'next' | 'planned'
}

export interface Project {
  title: string
  summary: string
  tags: string[]
  url?: string
}

export interface SocialLink {
  label: string
  url: string
  ariaLabel: string
}

export const profile: Profile = {
  name: 'Jungmin An',
  initials: 'JA',
  role: 'Java Backend Developer',
  eyebrow: 'JAVA BACKEND · GROWING WITH FUNDAMENTALS',
  headline: '기초를 이해하고,\n단단한 코드를 향해.',
  summary:
    '빠르게 넘어가기보다 왜 그렇게 동작하는지 이해하며 Java 백엔드 개발의 기본기를 쌓고 있습니다.',
  introduction: [
    '좋은 코드는 화려한 기술보다 명확한 이해에서 시작한다고 믿습니다. Java의 문법과 객체지향 기초를 차근차근 익히며, 배운 내용을 스스로 설명할 수 있는 지식으로 만드는 중입니다.',
    '작은 단위로 학습하고 기록하며 다음 단계로 나아갑니다. 지금의 탄탄한 기본기가 앞으로 더 복잡한 문제를 다룰 때 흔들리지 않는 기반이 되도록 꾸준히 성장하겠습니다.',
  ],
  githubUsername: 'jminan01',
  githubUrl: 'https://github.com/jminan01',
}

export const focusItems: FocusItem[] = [
  {
    number: '01',
    title: 'Java Fundamentals',
    description:
      '문법을 외우는 데 그치지 않고 코드가 실행되는 흐름과 언어의 기본 원리를 이해합니다.',
    keywords: ['Java', 'Core', 'Practice'],
  },
  {
    number: '02',
    title: 'Object-Oriented Thinking',
    description:
      '역할과 책임을 나누고, 변경의 영향을 줄이는 객체지향적 사고방식을 연습합니다.',
    keywords: ['OOP', 'Responsibility', 'Design'],
  },
  {
    number: '03',
    title: 'Learning in Small Steps',
    description:
      '작게 배우고 직접 확인한 뒤 기록하는 과정을 반복하며 지식을 단단하게 만듭니다.',
    keywords: ['Learn', 'Verify', 'Record'],
  },
]

export const timeline: TimelineEntry[] = [
  {
    phase: 'NOW',
    title: 'Java 기본기 다지기',
    description:
      '언어의 핵심 문법과 객체지향 개념을 직접 코드로 확인하며 기초 체력을 쌓고 있습니다.',
    state: 'active',
  },
  {
    phase: 'NEXT',
    title: '작은 백엔드 프로젝트로 확장',
    description:
      '학습한 개념을 하나의 동작하는 결과물에 연결하고 설계 선택의 이유를 기록할 예정입니다.',
    state: 'next',
  },
  {
    phase: 'THEN',
    title: '공개 가능한 결과물 만들기',
    description:
      '과정과 판단을 함께 설명할 수 있는 프로젝트를 완성해 이 포트폴리오에 소개하겠습니다.',
    state: 'planned',
  },
]

export const projects: Project[] = []

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: profile.githubUrl,
    ariaLabel: `${profile.name}의 GitHub 프로필 새 창에서 열기`,
  },
]
