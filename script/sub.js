
function handleSubscription() {
    const subButtons = document.querySelectorAll(".section-sub .sub-plans .plan-card button");
    subButtons.forEach(button => {
        const freeSubcription = document.getElementById("free-sub");
        const basicSubcription = document.getElementById("basic-sub");
        const proSubcription = document.getElementById("pro-sub");

        button.addEventListener("click", () => {
            if (freeSubcription)
                window.location.href = "https://premier-lotto-babaijebu-results.visuallottoboard.com";
            if (basicSubcription || proSubcription) 
                window.location.href = "https://app.visuallottoboard.com/confirmation";
        })
    })  
}
handleSubscription();