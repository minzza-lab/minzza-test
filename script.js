document.addEventListener('DOMContentLoaded', () => {
    // 1. 모바일 메뉴 토글
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // 메뉴 열림/닫힘 시각화 (간단한 스타일 변경)
            menuToggle.classList.toggle('open');
        });
    }

    // 2. 스크롤 애니메이션 (Intersection Observer 활용)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 포스트 카드들에 초기 스타일 부여 및 관찰 시작
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // 3. 구독 폼 제출 핸들러 (실제 동작은 아니지만 피드백 제공)
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = subscribeForm.querySelector('input').value;
            alert(`${email}님, 구독해주셔서 감사합니다! (데모 기능)`);
            subscribeForm.reset();
        });
    }
});
