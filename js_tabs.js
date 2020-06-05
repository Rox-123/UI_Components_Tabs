let tabButtonLink = document.getElementsByClassName("btn-style");
let tabContent = document.getElementsByClassName("tab-content");


function openTabContent(elementIndex) {
	displayNone();
	neuterLinkColor()
	tabContent[elementIndex].style.display = "block";
	tabButtonLink[elementIndex].classList.add("active");

}
function displayNone() {
	for(let i=0; i<tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
}

function neuterLinkColor() {
	for(let i=0; i<tabButtonLink.length; i++) {
		tabButtonLink[i].classList.remove("active");
	}
}