document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const agreement1 = document.getElementById('agreement1');
        const agreement2 = document.getElementById('agreement2');

        if (!name.value) {
            showModal('경고', '이름을 입력해주세요.', 'regi_end.png');
            name.focus();
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            showModal('경고', '유효한 이메일 주소를 입력해주세요.', 'regi_end.png');
            email.focus();
            return;
        }

        const phonePattern = /^\d{3}-\d{3,4}-\d{4}$/;
        if (!phonePattern.test(phone.value)) {
            showModal('경고', '유효한 연락처를 입력해주세요. 형식: 010-1234-5678', 'regi_end.png');
            phone.focus();
            return;
        }

        if (!agreement1.checked) {
            showModal('경고', '개인정보 수집/이용 동의를 체크해주세요.', 'regi_end.png');
            agreement1.focus();
            return;
        }

        if (!agreement2.checked) {
            showModal('경고', '개인정보 제3자 제공 동의를 체크해주세요.', 'regi_end.png');
            agreement2.focus();
            return;
        }

        showModal('성공', '등록이 완료되었습니다.', 'regi_complete.png', true);
    });

    function showModal(title, message, image, redirect = false) {
        const modalTitle = document.getElementById('registerModalLabel');
        const modalBody = document.getElementById('modalBodyContent');
        const modal = $('#registerModal');

        modalTitle.textContent = title;
        modalBody.innerHTML = `<img src="/images/${image}" alt="${title}" class="img-fluid"><p>${message}</p>`;
        modal.modal('show');

        if (redirect) {
            modal.on('hidden.bs.modal', function () {
                window.location.href = '/';
            });
        }
    }
});
