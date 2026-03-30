const bttsBox = document.querySelectorAll(".boxframe")

function clicked(btt) {
    if (btt && btt.dataset) {
        window.location.href = "/games/" + btt.dataset.click
    }
}

bttsBox.forEach(btt => {
    btt.addEventListener("click", () => {
        clicked(btt)
    })
})