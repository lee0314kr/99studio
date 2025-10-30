# 99% Studio 웹사이트

마지막 1%를 완성하는 정밀 피드백 서비스의 공식 웹사이트입니다.

## 🚀 실행 방법

### 1. 간단한 방법 (브라우저로 직접 열기)
- `index.html` 파일을 더블클릭하거나
- 브라우저(Chrome, Safari 등)로 드래그 앤 드롭

### 2. 로컬 서버로 실행 (권장)

#### Python 사용 (Python 3)
```bash
# 프로젝트 폴더로 이동
cd "/Users/hano/Desktop/Web/99%_Studio"

# Python 3 서버 실행
python3 -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

#### Node.js 사용 (http-server)
```bash
# http-server 설치 (한 번만)
npm install -g http-server

# 프로젝트 폴더로 이동
cd "/Users/hano/Desktop/Web/99%_Studio"

# 서버 실행
http-server -p 8000

# 브라우저에서 http://localhost:8000 접속
```

#### VS Code Live Server 사용
1. VS Code 확장 프로그램에서 "Live Server" 설치
2. `index.html` 파일 우클릭
3. "Open with Live Server" 선택

## 📁 프로젝트 구조

```
99%_Studio/
├── index.html                          # 메인 HTML 파일
├── styles.css                          # 스타일시트
├── script.js                           # JavaScript 인터랙션
├── README.md                           # 프로젝트 설명서
├── 99% Studio 24fa1db7ac2a809988c0cb27895c16ee.md  # 원본 마크다운
└── 99% Studio 24fa1db7ac2a809988c0cb27895c16ee/   # 이미지 폴더
    ├── 99-1.png                        # 가격표 이미지 1
    ├── 99-2.png                        # 가격표 이미지 2
    ├── 99신청프로세스.png                # 신청 프로세스
    ├── image.png                       # 서비스 소개
    ├── image 1.png                     # 상세 설명
    ├── image 2.png                     # 서비스 상세
    └── 피드백가능_분야_추천.png           # 피드백 분야
```

## ✨ 주요 기능

### 1. 반응형 디자인
- 데스크톱, 태블릿, 모바일 모든 기기에서 최적화된 레이아웃
- 모바일 햄버거 메뉴 지원

### 2. 인터랙티브 요소
- 스크롤 애니메이션 (Intersection Observer 사용)
- 부드러운 네비게이션 스크롤
- 호버 효과 및 마이크로 인터랙션
- 스크롤 진행 표시바

### 3. 섹션 구성
- **히어로 섹션**: 서비스 핵심 가치 제안
- **문제 정의**: 타겟 고객의 페인 포인트
- **서비스 소개**: 99% Studio 플랫폼 설명
- **추천 대상**: 서비스 적합 대상
- **프로세스**: 3단계 신청 방법
- **가격표**: 서비스 요금 안내
- **피드백 샘플**: 실제 피드백 예시
- **FAQ**: 자주 묻는 질문
- **CTA**: 신청 유도

### 4. 디자인 특징
- 현대적인 그라디언트 색상
- 깔끔한 타이포그래피
- 그림자와 깊이감을 활용한 카드 디자인
- 부드러운 애니메이션 효과

## 🎨 색상 팔레트

- **Primary**: #6366f1 (인디고)
- **Secondary**: #8b5cf6 (보라)
- **Accent**: #ec4899 (핑크)
- **Dark Background**: #0f172a
- **Light Background**: #f8fafc

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **JavaScript (ES6+)**: Vanilla JS (라이브러리 없음)
- **Google Fonts**: Noto Sans KR, Montserrat

## 📱 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 🔗 외부 링크

모든 CTA 버튼은 실제 Google Forms 링크로 연결됩니다:
- https://forms.gle/DXcpnzof4Wp6hFgR8

## 🛠️ 커스터마이징

### 색상 변경
`styles.css` 파일 상단의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### 콘텐츠 수정
`index.html` 파일에서 직접 텍스트를 수정하거나
이미지를 교체하세요.

### 애니메이션 조정
`script.js` 파일에서 애니메이션 타이밍과 효과를 수정할 수 있습니다.

## 📝 할 일 (선택사항)

- [ ] SEO 메타 태그 추가
- [ ] OG 이미지 설정
- [ ] Google Analytics 통합
- [ ] 폼 제출 추적
- [ ] 이미지 최적화 (WebP 포맷)
- [ ] PWA 기능 추가

## 💡 팁

1. **이미지 최적화**: 페이지 로딩 속도 향상을 위해 이미지를 압축하세요
2. **호스팅**: Netlify, Vercel, GitHub Pages 등에서 무료로 호스팅 가능
3. **도메인**: 원하는 도메인을 구매하여 연결 가능

## 📞 문의

웹사이트 관련 문의사항이 있으시면 99% Studio로 연락주세요.

---

**99% Studio** - Almost Perfect, Now Complete.
