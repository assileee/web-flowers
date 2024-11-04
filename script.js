const buttons = document.getElementById("buttons")
console.log(buttons)

buttons.addEventListener("click", () => {
	document.querySelector(".navbar").classList.toggle("show")
})
