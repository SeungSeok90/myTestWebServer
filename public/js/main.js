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
