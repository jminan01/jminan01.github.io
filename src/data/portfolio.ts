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
  role: 'Software Developer',
  eyebrow: 'SOFTWARE DEVELOPER · BUILDING WITH FUNDAMENTALS',
  headline: '기초를 이해하고,\n단단한 코드를 향해.',
  summary:
    '실무에서 C#/.NET과 JavaScript를 다루고, Java를 학습하며 개발의 기본기를 함께 넓혀가고 있습니다.',
  introduction: [
    '현재 C#과 .NET, JavaScript를 사용하는 실무 프로젝트에 참여하고 있습니다. 맡은 영역의 코드를 이해하고 실제 문제를 해결하는 경험을 쌓으며, 기술을 이유와 맥락까지 설명할 수 있는 개발자가 되려 합니다.',
    '실무 경험과 함께 Java의 문법과 객체지향 기초를 차근차근 학습하고 있습니다. 빠르게 기술 목록을 늘리기보다 직접 사용하고 이해한 것만 제 역량으로 소개합니다.',
  ],
  githubUsername: 'jminan01',
  githubUrl: 'https://github.com/jminan01',
}

export const focusItems: FocusItem[] = [
  {
    number: '01',
    title: 'C# & .NET',
    description:
      '현재 참여 중인 실무 프로젝트에서 C#과 .NET을 다루며 기존 코드와 서비스의 흐름을 이해해 나가고 있습니다.',
    keywords: ['C#', '.NET', 'In Practice'],
  },
  {
    number: '02',
    title: 'JavaScript in Practice',
    description:
      '실무 프로젝트에서 JavaScript 코드를 다루며 동작과 실행 흐름을 이해하는 경험을 쌓고 있습니다.',
    keywords: ['JavaScript', 'Runtime', 'Practice'],
  },
  {
    number: '03',
    title: 'Java Fundamentals',
    description:
      '문법과 객체지향 개념을 직접 코드로 확인하며, Java 백엔드 개발로 확장할 수 있는 기본기를 학습합니다.',
    keywords: ['Java', 'OOP', 'Learning'],
  },
]

export const timeline: TimelineEntry[] = [
  {
    phase: 'NOW',
    title: '실무 프로젝트 경험 쌓기',
    description:
      'C#과 .NET, JavaScript 기반 프로젝트에 참여하며 기존 코드를 읽고 맡은 영역을 이해하는 경험을 쌓고 있습니다.',
    state: 'active',
  },
  {
    phase: 'LEARN',
    title: 'Java 기본기 학습',
    description:
      '실무와 병행해 Java의 핵심 문법과 객체지향 개념을 직접 코드로 확인하며 기초 체력을 다지고 있습니다.',
    state: 'next',
  },
  {
    phase: 'NEXT',
    title: '설명할 수 있는 결과물 만들기',
    description:
      '실무에서 배운 관점과 학습한 개념을 연결해, 과정과 판단을 함께 설명할 수 있는 프로젝트를 만들겠습니다.',
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
