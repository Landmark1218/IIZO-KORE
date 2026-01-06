const iizo = new Audio(chrome.runtime.getURL("iizo.wav"));
const aaiisune = new Audio(chrome.runtime.getURL("iisune.wav"));
document.addEventListener("click", (event) => {
    const likeButton = event.target.closest('[data-testid="like"], [data-testid="unlike"]');
    const retweetConfirm = event.target.closest('[data-testid="retweetConfirm"]');
    if (likeButton) {
        iizo.currentTime = 0;
        iizo.play().catch(() => {});
        return; 
    }
    if (retweetConfirm) {
        aaiisune.currentTime = 0;
        aaiisune.play().catch(() => {});
        return;
    }
}, true);