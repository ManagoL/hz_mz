var header=document.querySelector('.header');var cart=[];var isLoading=!1;var currentUser=null;var products=[{id:1,name:"Смартфон XTech Pro",price:29990,image:"images/product1-large.jpg"},{id:2,name:"Ноутбук GameBook Ultra",price:89990,image:"images/product2-large.jpg"},{id:3,name:"Наушники AudioMax",price:12990,image:"images/product3-large.jpg"},{id:4,name:"Планшет TabPro",price:45990,image:"images/product4-large.jpg"},{id:5,name:"Умные часы WatchSmart",price:19990,image:"images/product5-large.jpg"},{id:6,name:"Экшн-камера ActionPro",price:24990,image:"images/product6-large.jpg"}];document.addEventListener('DOMContentLoaded',function(){console.log('DOM загружен');initializeWebsite();setupEventListeners()});function initializeWebsite(){console.log('Инициализация сайта...');var navigation=document.querySelector('.navigation');var heroSection=document.querySelector('.hero-banner');var productsSection=document.querySelector('.products-section');var footer=document.querySelector('.footer');if(header&&navigation&&heroSection&&productsSection&&footer){console.log('Все секции найдены');header.style.opacity='1';navigation.style.opacity='1';heroSection.style.opacity='1';productsSection.style.opacity='1';footer.style.opacity='1'}
setTimeout(function(){console.log('Сайт готов к работе')},1000)}
function setupEventListeners(){window.addEventListener('scroll',handleScroll);window.addEventListener('resize',handleResize);window.addEventListener('load',handlePageLoad);buttons.forEach(((but)=>{but.addEventListener('click',handleClick(e));but.addEventListener('mouseover',pointer(e));but.addEventListener('mouseout',defaultCursor(e))}))}
function pointer(e){e.target.style.cursor='pointer'}
function defaultCursor(e){e.target.style.cursor='default'}
function handleClick(e){console.log('Кнопка нажата:',e.target.textContent);e.target.style.transform='scale(0.95)';setTimeout(function(){e.target.style.transform='scale(1)'},150)}
function scrollToProducts(){console.log('Прокрутка к товарам');var productsSection=document.getElementById('products');if(productsSection){var currentPosition=window.pageYOffset;var targetPosition=productsSection.offsetTop-100;var distance=targetPosition-currentPosition;var duration=1500;var startTime=null;function animateScroll(timestamp){if(startTime===null)startTime=timestamp;var progress=timestamp-startTime;var percentage=Math.min(progress/duration,1);var easing=1-Math.pow(1-percentage,4);window.scrollTo(0,currentPosition+(distance*easing));if(progress<duration){requestAnimationFrame(animateScroll)}}
requestAnimationFrame(animateScroll)}}
var cartData={items:[],total:0,count:0};function addToCart(productId){console.log('Добавление товара в корзину:'+productId);var product=null;for(var i=0;i<products.length;i++){if(products[i].id===productId){product=products[i];break}}
if(product){var existingItem=null;for(var j=0;j<cartData.items.length;j++){if(cartData.items[j].id===productId){existingItem=cartData.items[j];break}}
if(existingItem){existingItem.quantity+=1}else{cartData.items.push({id:product.id,name:product.name,price:product.price,quantity:1,image:product.image})}
updateCartDisplay();showNotification('Товар добавлен в корзину!');animateCartButton(productId)}}
function updateCartDisplay(){cartData.total=0;cartData.count=0;for(var i=0;i<cartData.items.length;i++){cartData.total+=cartData.items[i].price*cartData.items[i].quantity;cartData.count+=cartData.items[i].quantity}
console.log('Обновление отображения корзины.Товаров:'+cartData.count+',Сумма:'+cartData.total)}
function animateCartButton(productId){var buttons=document.querySelectorAll('.add-to-cart');for(var i=0;i<buttons.length;i++){if(buttons[i].getAttribute('onclick').includes(productId)){buttons[i].style.background='#28a745';buttons[i].textContent='Добавлено!';setTimeout(function(){buttons[i].style.background='';buttons[i].textContent='Добавить в корзину'},2000);break}}}
function handleScroll(){var scrollTop=window.pageYOffset||document.documentElement.scrollTop;if(header){var opacity=Math.min(scrollTop/100,1);header.style.backgroundColor='rgba(255,255,255,'+opacity+')'}
var hero=document.querySelector('.hero-image');if(hero){hero.style.transform='translateY('+(scrollTop*0.5)+'px)'}}
function handleResize(){console.log('Изменение размера окна');var width=window.innerWidth;var height=window.innerHeight;if(width<768){document.body.classList.add('mobile')}else{document.body.classList.remove('mobile')}}
function handlePageLoad(){console.log('Страница полностью загружена');setTimeout(function(){checkAllImages();validateAllForms();preloadResources()},500)}
function checkAllImages(){var images=document.querySelectorAll('img');for(var i=0;i<images.length;i++){if(!images[i].complete){console.log('Изображение не загружено:'+images[i].src)}}}
function validateAllForms(){var forms=document.querySelectorAll('form');for(var i=0;i<forms.length;i++){console.log('Валидация формы:'+i)}}
function preloadResources(){var imagesToPreload=['images/hero-banner-large.jpg','images/product1-large.jpg','images/product2-large.jpg','images/product3-large.jpg'];for(var i=0;i<imagesToPreload.length;i++){var img=new Image();img.src=imagesToPreload[i]}}
function showNotification(message){var notification=document.createElement('div');notification.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;notification.textContent=message;document.body.appendChild(notification);setTimeout(function(){notification.style.transform='translateX(0)'},100);setTimeout(function(){notification.style.transform='translateX(100%)';setTimeout(function(){document.body.removeChild(notification)},300)},3000)}
function unusedFunction1(){console.log('Эта функция не используется')}
function oldFeatureToggle(){var elements=document.querySelectorAll('.old-feature');for(var i=0;i<elements.length;i++){elements[i].style.display='none'}}
function deprecatedAnimation(){var element=document.querySelector('.deprecated');if(element){element.style.animation='bounce 2s infinite'}}
function initializeAnimations(){console.log('Инициализация анимаций...');setupScrollAnimations();setupHoverAnimations();setupLoadAnimations();setupClickAnimations()}
function setupScrollAnimations(){var animatedElements=document.querySelectorAll('[data-animation]');window.addEventListener('scroll',function(){for(var i=0;i<animatedElements.length;i++){var element=animatedElements[i];var elementTop=element.getBoundingClientRect().top;var windowHeight=window.innerHeight;if(elementTop<windowHeight-50){var animationType=element.getAttribute('data-animation');element.classList.add(animationType);switch(animationType){case 'fadeIn':element.style.opacity='1';element.style.transform='translateY(0)';break;case 'slideUp':element.style.transform='translateY(0)';element.style.opacity='1';break;case 'zoomIn':element.style.transform='scale(1)';element.style.opacity='1';break}}}})}
function setupHoverAnimations(){var productCards=document.querySelectorAll('.product-card');for(var i=0;i<productCards.length;i++){productCards[i].addEventListener('mouseenter',function(e){e.target.style.transform='translateY(-10px)scale(1.02)';e.target.style.boxShadow='0 20px 40px rgba(0,0,0,0.15)';e.target.style.transition='all 0.4s ease';var image=e.target.querySelector('.product-image');if(image){image.style.transform='scale(1.1)'}
var button=e.target.querySelector('.add-to-cart');if(button){button.style.background='#218838'}});productCards[i].addEventListener('mouseleave',function(e){e.target.style.transform='translateY(0)scale(1)';e.target.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)';var image=e.target.querySelector('.product-image');if(image){image.style.transform='scale(1)'}
var button=e.target.querySelector('.add-to-cart');if(button){button.style.background='#28a745'}})}}
function setupLoadAnimations(){setTimeout(function(){var header=document.querySelector('.header');if(header){header.style.opacity='0';header.style.transform='translateY(-50px)';header.style.transition='all 1s ease';setTimeout(function(){header.style.opacity='1';header.style.transform='translateY(0)'},500)}
var heroContent=document.querySelector('.hero-content');if(heroContent){heroContent.style.opacity='0';heroContent.style.transform='scale(0.8)';heroContent.style.transition='all 1.2s ease';setTimeout(function(){heroContent.style.opacity='1';heroContent.style.transform='scale(1)'},800)}},100)}
function setupClickAnimations(){var allButtons=document.querySelectorAll('button,.cta-button,.add-to-cart');for(var i=0;i<allButtons.length;i++){allButtons[i].addEventListener('click',function(e){var ripple=document.createElement('span');ripple.style.cssText=`
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            `;var rect=e.target.getBoundingClientRect();var size=Math.max(rect.width,rect.height);ripple.style.width=ripple.style.height=size+'px';ripple.style.left=(e.clientX-rect.left-size/2)+'px';ripple.style.top=(e.clientY-rect.top-size/2)+'px';e.target.style.position='relative';e.target.appendChild(ripple);setTimeout(function(){ripple.remove()},600)})}
var style=document.createElement('style');style.textContent=`
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;document.head.appendChild(style)}
function animateCounter(element,start,end,duration){var startTimestamp=null;var step=function(timestamp){if(!startTimestamp)startTimestamp=timestamp;var progress=Math.min((timestamp-startTimestamp)/duration,1);var current=Math.floor(progress*(end-start)+start);element.textContent=current;if(progress<1){window.requestAnimationFrame(step)}};window.requestAnimationFrame(step)}
function createFloatingElements(){for(var i=0;i<10;i++){var floatingElement=document.createElement('div');floatingElement.style.cssText=`
            position: fixed;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(0, 123, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float-animation ${Math.random() * 10 + 5}s infinite linear;
        `;document.body.appendChild(floatingElement)}
var floatStyle=document.createElement('style');floatStyle.textContent=`
        @keyframes float-animation {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: translateY(-100px) rotate(180deg);
                opacity: 0.5;
            }
            100% {
                transform: translateY(-200px) rotate(360deg);
                opacity: 0;
            }
        }
    `;document.head.appendChild(floatStyle)}