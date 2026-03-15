document.addEventListener('DOMContentLoaded', () => {
    // 1. 추천인 코드 복사 기능
    const copyButtons = document.querySelectorAll('.btn-copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeText = button.parentElement.querySelector('strong').innerText;
            
            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = button.innerText;
                button.innerText = '복사됨!';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.innerText = originalText;
                    button.style.background = '#1a1c20';
                }, 2000);
            }).catch(err => {
                console.error('복사 실패:', err);
            });
        });
    });

    // 2. 스크롤 시 카드 애니메이션
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

    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
