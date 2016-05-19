function getViewport() {

  let viewPortWidth;
  let viewPortHeight;

  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerWidth != 'undefined') {
    viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
  }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
  else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
    viewPortWidth = document.documentElement.clientWidth,
      viewPortHeight = document.documentElement.clientHeight
  }

  // older versions of IE
  else {
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
  }
  return [viewPortWidth, viewPortHeight];
}


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
    if(getViewport()[0] <= 800 ) this.moveActiveToBottom();
  }

  moveActiveToBottom(){
    let active = document.querySelector('.accordion_list .active');
    let ul = document.querySelector('.accordion_list');
    ul.appendChild(active);
  }

  clickOnSpan(e) {
    if (this.spans.indexOf(e.target) < 0) return;

    this.choosenLi = e.target.parentNode;
    this.spanTextContent = e.target.textContent;
    this.deactiveAllLis();
    this.moveActiveToBottom();
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


