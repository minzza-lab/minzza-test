document.addEventListener('DOMContentLoaded', () => {
    // 1. 카테고리 탭 전환 (데모용)
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white', 'shadow-md');
                b.classList.add('bg-white', 'text-slate-500', 'border', 'border-slate-200');
            });
            btn.classList.add('active', 'bg-blue-600', 'text-white', 'shadow-md');
            btn.classList.remove('bg-white', 'text-slate-500', 'border', 'border-slate-200');
            
            // 실제 구현 시 여기서 카테고리별 상품 필터링 로직 추가 가능
        });
    });

    // 2. 쿠팡 이동 안내 모달
    const coupangBtns = document.querySelectorAll('.btn-coupang');
    const redirectModal = document.getElementById('redirect-modal');

    coupangBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetUrl = btn.getAttribute('href');
            
            if (targetUrl !== '#') {
                e.preventDefault();
                
                // 모달 표시 및 애니메이션
                redirectModal.classList.remove('hidden');
                redirectModal.classList.add('flex');
                
                // 1.2초 후 이동 (사용자 경험 고려)
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 1200);
            } else {
                e.preventDefault();
                alert('실시간 최저가 링크를 불러오는 중입니다. 잠시만 기다려 주세요!');
            }
        });
    });

    // 3. 상품 카드 노출 애니메이션
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-4');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('article').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
        observer.observe(el);
    });
});
