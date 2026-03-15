document.addEventListener('DOMContentLoaded', () => {
    // 1. 탭 전환 기능
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            // 버튼 스타일 업데이트
            tabBtns.forEach(b => {
                b.classList.remove('active', 'bg-white', 'text-blue-600', 'shadow-sm');
                b.classList.add('text-slate-500');
            });
            btn.classList.add('active', 'bg-white', 'text-blue-600', 'shadow-sm');
            btn.classList.remove('text-slate-500');

            // 컨텐츠 표시 업데이트
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });

    // 2. 쿠팡 이동 안내 팝업 로직
    const coupangBtns = document.querySelectorAll('.btn-coupang');
    const redirectModal = document.getElementById('redirect-modal');

    coupangBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 실제 링크 이동을 잠시 막고 팝업 표시 (데모를 위해 1.5초 후 이동)
            if (btn.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetUrl = btn.getAttribute('href');
                
                // 모달 표시
                redirectModal.classList.remove('hidden');
                redirectModal.classList.add('flex');

                // 1.5초 후 실제 이동
                setTimeout(() => {
                    window.open(targetUrl, '_blank');
                    redirectModal.classList.add('hidden');
                    redirectModal.classList.remove('flex');
                }, 1500);
            } else {
                // 링크가 없는 경우 안내만
                e.preventDefault();
                alert('곧 실제 파트너스 링크가 연결될 예정입니다!');
            }
        });
    });

    // 3. 간단한 스크롤 애니메이션 (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('article, .bg-white.p-4').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
        observer.observe(el);
    });
});
