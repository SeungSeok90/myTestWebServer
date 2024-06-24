document.addEventListener('DOMContentLoaded', function() {
    // 카운트다운 종료 날짜 설정
    const countDownDate = new Date("Jul 18, 2024 09:00:00").getTime();

    // 1초마다 업데이트
    const countdownFunction = setInterval(function() {
        // 현재 시간 가져오기
        const now = new Date().getTime();

        // 시간 차이 계산
        const distance = countDownDate - now;

        // 시간 계산
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 결과 출력
        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // 카운트다운이 끝난 경우
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-timer").innerHTML = "EXPIRED";
        }
    }, 1000);
});
