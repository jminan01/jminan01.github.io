# Jungmin An Portfolio

Java 백엔드 개발자로 성장하는 Jungmin An의 한국어 원페이지 포트폴리오입니다.

## 기술 구성

- React 19
- TypeScript
- Vite
- GitHub Pages / GitHub Actions

## 로컬 실행

```bash
pnpm install
pnpm dev
```

`http://localhost:5173`에서 확인할 수 있습니다.

## 검사와 빌드

```bash
pnpm typecheck
pnpm build
pnpm preview
```

## 콘텐츠 수정

프로필, 학습 분야, 학습 여정, 프로젝트, 외부 링크는 `src/data/portfolio.ts`에서 관리합니다. 프로젝트를 공개할 준비가 되면 `projects` 배열에 `Project` 형식의 항목을 추가하세요.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 정적 사이트를 빌드해 GitHub Pages에 배포합니다.

- 공개 주소: [https://jminan01.github.io](https://jminan01.github.io)
- GitHub 프로필: [https://github.com/jminan01](https://github.com/jminan01)

## 개인정보 원칙

이 사이트는 런타임 GitHub API, 분석 도구, 비공개 저장소 데이터 또는 공개되지 않은 연락처를 사용하지 않습니다.
