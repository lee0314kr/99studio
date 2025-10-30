// 네비게이션 스크롤 효과
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// 모바일 메뉴 토글
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        // 햄버거 아이콘 애니메이션
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// 모바일에서 링크 클릭 시 메뉴 닫기
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 애니메이션을 적용할 요소들
const animateElements = document.querySelectorAll(`
    .problem-card,
    .audience-card,
    .step-card,
    .faq-item,
    .feedback-category,
    .gallery-img,
    .pricing-img
`);

animateElements.forEach(el => {
    observer.observe(el);
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // 외부 링크나 빈 해시가 아닌 경우만 처리
        if (href !== '#' && href.startsWith('#')) {
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 페이지 로드 시 히어로 섹션 애니메이션
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// 통계 숫자 카운트업 애니메이션
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// 히어로 섹션이 보일 때 카운터 애니메이션 실행
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.match(/\d+/));
                if (number) {
                    stat.textContent = '0';
                    animateCounter(stat, number, 1500);
                    setTimeout(() => {
                        stat.textContent = text;
                    }, 1500);
                }
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    heroObserver.observe(heroStats);
}

// 이미지 레이지 로딩 (최적화)
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease-in';

            img.onload = () => {
                img.style.opacity = '1';
            };

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// 스크롤 진행 표시 (선택사항)
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// FAQ 아코디언 효과 (선택사항 - 나중에 추가 가능)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.style.cursor = 'pointer';

    item.addEventListener('click', () => {
        item.style.transform = 'scale(1.02)';
        setTimeout(() => {
            item.style.transform = 'translateY(-3px)';
        }, 200);
    });
});

// 가용성 배지 깜빡임 효과
const availabilityBadge = document.querySelector('.availability-badge');
if (availabilityBadge) {
    setInterval(() => {
        availabilityBadge.style.transform = 'scale(1.05)';
        setTimeout(() => {
            availabilityBadge.style.transform = 'scale(1)';
        }, 300);
    }, 3000);
}

// CTA 버튼 호버 효과 개선
const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-large');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 콘솔에 메시지 출력
console.log('%c99% Studio', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c마지막 1%를 완성하는 정밀 피드백', 'font-size: 14px; color: #64748b;');
console.log('%c웹사이트가 성공적으로 로드되었습니다! 🎉', 'font-size: 12px; color: #10b981;');
