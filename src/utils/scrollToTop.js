function scrollToTop() {
    const htmlElement = document.querySelector("html");
    htmlElement.scrollTo({behavior: "instant", top: 0});
};



export default scrollToTop;