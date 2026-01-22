# 김정윤 포트폴리오

현대적이고 전문적인 포트폴리오 랜딩 페이지입니다.

## 기술 스택

- React 18
- Vite
- Tailwind CSS
- Framer Motion (애니메이션)

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 주요 기능

- 다크 모드 디자인
- 반응형 레이아웃
- 스크롤 페이드인 애니메이션
- 인터랙티브 배경 애니메이션
- 경력 타임라인
- 자격증 및 기술 스택 시각화

## GitHub Pages 배포

### 1. Repository 설정

1. GitHub에서 repository를 생성하고 코드를 푸시합니다.

2. **vite.config.js** 파일에서 `base` 경로를 repository 이름에 맞게 수정합니다:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/repository-name/' : '/',
   ```
   - 예: repository 이름이 `my-portfolio`인 경우: `'/my-portfolio/'`
   - 예: repository 이름이 `username.github.io`인 경우: `'/'`

3. **.github/workflows/deploy.yml** 파일에서 기본 브랜치 이름을 확인합니다:
   - `main` 또는 `master` (실제 기본 브랜치 이름에 맞게 수정)

### 2. GitHub Pages 활성화

1. GitHub repository 페이지로 이동
2. **Settings** → **Pages** 메뉴 클릭
3. **Source**에서 **GitHub Actions** 선택
4. 저장

### 3. 자동 배포

- `main` (또는 `master`) 브랜치에 푸시하면 자동으로 빌드 및 배포됩니다
- 배포 완료 후 `https://username.github.io/repository-name/` 에서 확인 가능
- 배포 상태는 **Actions** 탭에서 확인할 수 있습니다

### 4. 수동 배포 (선택사항)

```bash
# 빌드
npm run build

# dist 폴더의 내용을 gh-pages 브랜치에 푸시
# (gh-pages 패키지 사용 시)
```
