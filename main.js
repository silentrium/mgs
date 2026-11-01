document.addEventListener("DOMContentLoaded", () => {
    const glowBtn = document.getElementById("glowBtn");
    const interactiveMsg = document.getElementById("interactiveMsg");

    const messages = [
        "🌙 Chúc bạn có một buổi tối thật bình yên!",
        "🎧 Đeo tai nghe vào và thưởng thức một bản nhạc lo-fi nhé.",
        "✨ Mọi mệt mỏi hôm nay rồi cũng sẽ qua đi...",
        "🟣 Cảm ơn bạn đã ghé thăm Twilight Corner!"
    ];

    let index = 0;

    if (glowBtn) {
        glowBtn.addEventListener("click", () => {
            interactiveMsg.textContent = messages[index];
            index = (index + 1) % messages.length;
        });
    }
});