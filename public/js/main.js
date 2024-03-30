const globalObj={oldScroll:0,allSvgAnim:[],currSvg:null,currPos:function(){return window.innerHeight+window.scrollY;}}
const navbar=document.querySelector('nav.navbar');function init(){allSections();slideFun();switchBtn();boxContentTabs();popupFrame();}
function allSections(){headerSection();faqSection();pricingSection();if(document.querySelector('.dynamic-height')){document.querySelector('.dynamic-height').style.minHeight=(window.innerHeight-(document.querySelector('nav').offsetHeight+document.querySelector('footer').offsetHeight))+'px';}}
function headerSection(){const section=document.querySelector('header.header-section:not(.fixed-height)');if(section&&window.innerWidth>767){section.style.minHeight=window.innerHeight+'px';}else if(section&&window.innerWidth<=767){section.style.minHeight='820px';}}
function faqSection(){const section=document.querySelector('.faq-section2');if(section){section.querySelector('.text-content').addEventListener('click',function(e){if(e.target.closest('.btn-faq')){let faq=e.target.closest('.faq-item'),newBs=new bootstrap.Collapse(faq.querySelector('.faq-content'));if(!faq.classList.contains('active')&&section.querySelector('.faq-item.active')){let oldFaq=section.querySelector('.faq-item.active');oldFaq.classList.remove('active');let oldBs=new bootstrap.Collapse(oldFaq.querySelector('.faq-content'));oldBs.hide();faq.classList.add('active');newBs.show();}else if(!faq.classList.contains('active')){faq.classList.add('active');newBs.show();}else{faq.classList.remove('active');newBs.hide();}}});}}
function pricingSection(){if(document.querySelector('.all-plans')){const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]');const tooltipList=[...tooltipTriggerList].map(tooltipTriggerEl=>new bootstrap.Tooltip(tooltipTriggerEl));document.querySelector('.plans-btn').addEventListener('click',function(){document.querySelector('#headingOne button').click();});}}
window.addEventListener('resize',resizeEvents);window.addEventListener('scroll',scrollEvent);function resizeEvents(){headerSection();checkSvgResize();if(document.querySelector('.dynamic-height')){document.querySelector('.dynamic-height').style.minHeight=(window.innerHeight-(document.querySelector('nav').offsetHeight+document.querySelector('footer').offsetHeight))+'px';}
boxContentTabsMov();}
function scrollEvent(){if(this.scrollY<globalObj.oldScroll&&this.scrollY>300){navbar.classList.add('fixed-top');navbar.classList.remove('position-absolute');}else if(this.scrollY>globalObj.oldScroll||this.scrollY<300){navbar.classList.add('scroll-rev');setTimeout(function(){navbar.classList.add('position-absolute');navbar.classList.remove('fixed-top');navbar.classList.remove('scroll-rev');},160);}
globalObj.oldScroll=this.scrollY;if(this.innerWidth<=991&&!navbar.querySelector('.navbar-toggler').classList.contains('collapsed')){navbar.querySelector('.navbar-toggler').click();}
turnSvgAnimation();}
function slideFun(){if(document.querySelector('.slides-controler')){document.querySelectorAll('.slides-controler').forEach(item=>item.addEventListener('click',function(e){if(e.target.closest('.btn')&&!e.target.closest('.btn.active')){let getIndex=Array.prototype.slice.call(e.target.closest('ul').children).indexOf(e.target.closest('li')),container=e.target.closest('.container').querySelector('.slides-container'),oldBtn=this.querySelector('.active');if(window.innerWidth<=767&&e.target.closest('li').querySelector('.svg-animation')){let item=e.target.closest('li').querySelector('.svg-animation');setSvgPos();if(globalObj.currSvg!==null){globalObj.currSvg.pause();}
item.play();globalObj.currSvg=item;}else if(window.innerWidth>767&&e.target.closest('.slider-container').querySelector('.slides-container').children[getIndex].querySelector('.svg-animation')){setSvgPos();if(globalObj.currSvg!==null){globalObj.currSvg.pause();}
let item=e.target.closest('.slider-container').querySelector('.slides-container').children[getIndex].querySelector('.svg-animation');item.play();globalObj.currSvg=item;}
if(oldBtn.getAttribute('aria-expanded')=='true'){new bootstrap.Collapse(oldBtn.nextElementSibling);}
oldBtn.classList.remove('active');e.target.closest('.btn').classList.add('active');container.querySelector('.show').classList.add('process');setTimeout(function(){container.querySelector('.process').classList.remove('show');container.children[getIndex].classList.add('show');container.querySelector('.process').classList.remove('process');},250);}}));}}
function setSvgPos(){if(document.querySelector('.svg-animation')){const allSvg=document.querySelectorAll('.svg-animation');globalObj.allSvgAnim=[];allSvg.forEach((item)=>{item.setAttribute('pos',item.offsetTop+item.offsetHeight);globalObj.allSvgAnim.push([item,item.offsetTop,item.offsetHeight]);});turnSvgAnimation();}}
function turnSvgAnimation(){if(document.querySelector('.svg-animation')){let winPos=globalObj.currPos(),getEle=globalObj.allSvgAnim.filter(item=>((item[1]+item[2])<=(winPos+350)&&item[1]>=window.scrollY));if(globalObj.currSvg!==null&&getEle.length!==0){globalObj.currSvg.pause();}
if(getEle.length!==0){globalObj.currSvg=getEle[0][0];getEle[0][0].play();}}}
function checkSvgResize(){if((window.innerWidth<=767&&document.querySelector('.svg-animation'))&&(globalObj.currSvg!==null&&globalObj.currSvg.closest('.slider-container:not(.mob-active)'))){let container=globalObj.currSvg.closest('.slider-container');container.classList.add('mob-active');container.classList.remove('desk-active');setSvgPos();setSvgResize('.slides-controler');}else if((window.innerWidth>767&&document.querySelector('.svg-animation'))&&(globalObj.currSvg!==null&&globalObj.currSvg.closest('.slider-container:not(.desk-active)'))){let container=globalObj.currSvg.closest('.slider-container');container.classList.add('desk-active');container.classList.remove('mob-active');setSvgPos();setSvgResize('.slides-container');}}
function setSvgResize(name){let container=globalObj.currSvg.closest('.slider-container'),slidesContainer=globalObj.currSvg.closest('.slides-container')||globalObj.currSvg.closest('.slides-controler'),slidesChild=globalObj.currSvg.closest('li')||globalObj.currSvg.closest('.slide'),getIndex=Array.prototype.slice.call(slidesContainer.children).indexOf(slidesChild),mobSvg=container.querySelector(name).children[getIndex].querySelector('.svg-animation');globalObj.currSvg.pause();mobSvg.play();globalObj.currSvg=mobSvg;}
function switchBtn(){if(document.querySelector('.switch-container')){document.querySelectorAll('.switch-container').forEach(item=>item.addEventListener('click',switchBtnFun));}}
function switchBtnFun(e){if((e.target.closest('label')||e.target.closest('.form-check'))&&e.target.closest('.switch-container:not(.active)')){e.target.closest('.switch-container').classList.add('active');e.target.closest('.switch-container').querySelector('input').checked=true;switchBtnData();}else if((e.target.closest('label')||e.target.closest('.form-check'))&&e.target.closest('.switch-container.active')){e.target.closest('.switch-container').classList.remove('active');e.target.closest('.switch-container').querySelector('input').checked=false;switchBtnData();}}
function switchBtnData(){document.querySelectorAll('.pricing-container .inner-table:not(.show-table)').forEach(item=>{const monData=item.querySelector('.price').textContent,yearData=item.querySelector('.price').getAttribute('year-data');item.querySelector('.price').setAttribute('year-data',monData);item.querySelector('.price').textContent=yearData;item.querySelectorAll('.table-description-txt').forEach(txt=>{txt.textContent+=' ';txt.textContent=txt.textContent.replaceAll(/mois\s/g,'Année* ');txt.textContent=txt.textContent.replaceAll(/mensuellement\s/g,'annuellement* ');txt.textContent=txt.textContent.replaceAll(/Année\s/g,'mois* ');txt.textContent=txt.textContent.replaceAll(/annuellement\s/g,'mensuellement* ');txt.textContent=txt.textContent.replaceAll('*','');txt.textContent=txt.textContent.trim();txt.textContent=txt.textContent.replaceAll(yearData,monData);});});}
function boxContentTabs(){let container=document.querySelector('.content-box-container');if(container&&container.querySelector('.btn-container')){let btnList=container.querySelector('.btn-list'),contentList=container.querySelector('.content-list');btnList.firstElementChild.classList.add('active');contentList.firstElementChild.classList.add('active');btnList.addEventListener('click',function(e){if(e.target.closest('.txt')&&e.target.closest('.btn:not(.active)')){let btn=e.target.closest('.btn'),listNum=Array.prototype.slice.call(btnList.children).indexOf(btn);if(window.innerWidth<=575){$(btnList.querySelector('.btn.active .txt-content')).slideUp(300);}
btnList.querySelector('.btn.active').classList.remove('active');btn.classList.add('active');contentList.querySelector('.inner-list.active').classList.remove('active');contentList.children[listNum].classList.add('active');if(window.innerWidth<=575){$(btn.querySelector('.txt-content')).slideDown(300);}}});boxContentTabsMov();container.querySelector('.box-content').classList.add('showbox');}}
function boxContentTabsMov(){let container=document.querySelector('.content-box-container');if(container&&window.innerWidth<=575){if(!container.classList.contains('mob-layout')){let btnList=container.querySelectorAll('.btn-list .btn'),contentList=container.querySelector('.content-list');container.classList.add('mob-layout')
btnList.forEach((item,index)=>{item.querySelector('.txt-content').innerHTML=contentList.children[index].innerHTML;});$(container.querySelector('.btn.active .txt-content')).slideDown(300);}else if(container.classList.contains('slideup')){container.classList.remove('slideup');container.classList.add('slidedown');$(container.querySelector('.btn.active .txt-content')).slideDown(300);}}else if(container&&container.classList.contains('mob-layout')){if(!container.classList.contains('slideup')){container.classList.add('slideup');container.classList.remove('slidedown');$(container.querySelector('.btn.active .txt-content')).slideUp(0);}}}
function popupFrame(){if(document.querySelector('.popup-iframe-btn')){let btn=document.querySelector('.popup-iframe-btn'),popup=btn.querySelector('.popup-container'),iframe=popup.querySelector('iframe'),iframeSrc=iframe.src+"?autoplay=1";iframe.src='';btn.addEventListener('click',function(e){e.preventDefault();popup.classList.add('active');iframe.src=iframeSrc;});popup.addEventListener('click',function(e){if(e.target.closest('.close-btn-video')||!e.target.closest('iframe')){popup.classList.add('active2');setTimeout(()=>{iframe.src='';popup.classList.remove('active2');popup.classList.remove('active');},130);}})}}
(function(){'use strict';window.onload=function(){init();setSvgPos();}}());