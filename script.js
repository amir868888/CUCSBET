// script.js
document.getElementById('playButton').addEventListener('click', function() {
    // تولید اعداد تصادفی بین 1 تا 9
    const slot1 = Math.floor(Math.random() * 10);
    const slot2 = Math.floor(Math.random() * 10);
    const slot3 = Math.floor(Math.random() * 10);

    // نمایش اعداد در اسلات‌ها
    document.getElementById('slot1').textContent = slot1;
    document.getElementById('slot2').textContent = slot2;
    document.getElementById('slot3').textContent = slot3;

    // بررسی برنده شدن
    if (slot1 === 7 && slot2 === 7 && slot3 === 7) {
        document.getElementById('message').textContent = "شما برنده شدید! 🎉";
    } else {
        document.getElementById('message').textContent = "متاسفم! سعی کنید دوباره.";
    }
});