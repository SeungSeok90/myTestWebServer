// 아젠다 탭 스크립트
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const agendaContents = document.querySelectorAll('.agenda-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            agendaContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.querySelector(button.dataset.target).classList.add('active');
        });
    });

    // 기본적으로 첫 번째 탭을 활성화
    tabButtons[0].classList.add('active');
    agendaContents[0].classList.add('active');
});

// 스피커 섹션 스크립트
document.addEventListener('DOMContentLoaded', function () {
    const speakersContainer = document.querySelector('.speakers-container');
    const speakersWrapper = document.querySelector('.speakers-wrapper');
    const speakerCards = document.querySelectorAll('.speaker-card');
    
    let isDown = false;
    let startX;
    let scrollLeft;

    function moveSpeakers() {
        const firstCard = speakersWrapper.firstElementChild;
        speakersWrapper.style.transition = 'transform 0.5s ease';
        speakersWrapper.style.transform = `translateX(-${firstCard.offsetWidth}px)`;

        setTimeout(() => {
            speakersWrapper.style.transition = 'none';
            speakersWrapper.appendChild(firstCard);
            speakersWrapper.style.transform = 'translateX(0)';
        }, 500);
    }

    speakersContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - speakersContainer.offsetLeft;
        scrollLeft = speakersContainer.scrollLeft;
    });

    speakersContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    speakersContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    speakersContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - speakersContainer.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        speakersContainer.scrollLeft = scrollLeft - walk;
    });

    let scrollInterval = setInterval(moveSpeakers, 3000);

    speakersContainer.addEventListener('mouseover', () => {
        clearInterval(scrollInterval);
    });

    speakersContainer.addEventListener('mouseout', () => {
        scrollInterval = setInterval(moveSpeakers, 3000);
    });
});

// 지도 섹션 스크립트
document.addEventListener('DOMContentLoaded', function () {
    const locationImage = document.querySelector('.location-info img');

    // 지도 API를 초기화합니다.
    const map = L.map('map').setView([37.50430727981071, 126.98086551550762], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([37.50430727981071, 126.98086551550762]).addTo(map)
        .bindPopup('JW 메리어트 호텔')
        .openPopup();

    locationImage.addEventListener('click', function () {
        document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
    });
});

// 팝업 스크립트
document.addEventListener('DOMContentLoaded', function () {
    // 팝업 요소 선택
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    // 페이지 로드 후 팝업 표시
    window.onload = function() {
        popup.style.display = 'block';
    };

    // 팝업 닫기 버튼 클릭 이벤트
    closeBtn.onclick = function() {
        popup.style.display = 'none';
    };

    // 팝업 외부 클릭 시 닫기
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    };
});
