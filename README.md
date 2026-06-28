# Jungmin An Portfolio

실무에서 C#/.NET과 JavaScript를 다루고 Java를 학습하는 Software Developer Jungmin An의 한국어 원페이지 포트폴리오입니다.

- Live: [https://jminan01.github.io](https://jminan01.github.io)
- GitHub: [https://github.com/jminan01](https://github.com/jminan01)

## 포트폴리오에 소개하는 기술

- 실무에서 사용: C#, .NET, JavaScript
- 현재 학습: Java, 객체지향 기초

현재 참여 중인 프로젝트의 이름, 업무 데이터, 소스 코드처럼 공개할 수 없는 정보는 포함하지 않습니다. 직접 참여하거나 학습한 범위만 소개합니다.

## 이 사이트의 기술 구성

- React 19
- TypeScript
- Vite
- GitHub Pages
- GitHub Actions

## 로컬에서 실행하기

Node.js 24와 pnpm 11 환경을 기준으로 합니다.

```bash
pnpm install
pnpm dev
```

명령 실행 후 터미널에 표시되는 주소로 접속하면 됩니다. 기본 주소는 `http://localhost:5173`입니다.

## 검사와 빌드

```bash
pnpm typecheck
pnpm build
pnpm preview
```

프로덕션 빌드 결과는 `dist` 디렉터리에 생성되며 Git에는 포함하지 않습니다.

## 콘텐츠 수정

프로필, 기술 스택, 학습 여정, 프로젝트, 외부 링크는 `src/data/portfolio.ts`에서 관리합니다. 공개할 프로젝트가 준비되면 `projects` 배열에 `Project` 형식으로 추가할 수 있습니다.

검색·공유용 메타데이터는 `index.html`, 파비콘과 공유 이미지는 `public` 디렉터리에서 관리합니다.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 타입 검사와 정적 사이트 빌드를 수행한 뒤 GitHub Pages에 배포합니다.

## 개인정보와 데이터

- 런타임 GitHub API를 사용하지 않습니다.
- 방문자 분석 도구를 사용하지 않습니다.
- 비공개 저장소나 실무 프로젝트의 내부 정보를 노출하지 않습니다.
- 공개되지 않은 이메일이나 연락처를 저장하지 않습니다.
