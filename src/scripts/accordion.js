class Accordion {
  constructor() {
    this.lis = [...document.querySelectorAll('.accordion_item')];
    this.spans = [...document.querySelectorAll('.accordion_item span')];
    this.textDivs = [...document.querySelectorAll('.services_text')];
    this.spanTextContent = false;
    this.choosenLi = false;

    this.init();
  }

  init() {
    this.spanTextContent = document.querySelector("li.accordion_item span").textContent;
    if(this.spanTextContent) this.showTextForSpan();
    document.addEventListener('click', this.clickOnSpan.bind(this));
  }

  clickOnSpan(e) {
    if (this.spans.indexOf(e.target) < 0) return;

    this.choosenLi = e.target.parentNode;
    this.spanTextContent = e.target.textContent;
    this.deactiveAllLis();
    this.showTextForSpan();
  }

  deactiveAllLis(){
    this.lis.map(li => {
      li.classList.remove('active');
    });
    this.choosenLi.classList.add('active');
  }

  showTextForSpan() {
    let divToShow = document.querySelector(`[data-for="${this.spanTextContent}"]`);
    if (!divToShow) return;
    this.hideAllDivs();
    divToShow.classList.add('show');
  }

  hideAllDivs(){
    this.textDivs.map(textDiv => {
      textDiv.classList.remove('show');
    })
  }
}

export default Accordion;


