 
 
$(document).ready(() =>  {

  $('.dropdown-trigger').dropdown();

});

// bubble properties
const minBubbles = 30;
const maxBubbles = minBubbles * 2;
const minSize = 10;
const maxSize = 28;
const minDelay = 10;
const maxDelay = 28;
const minPos = 0;
const maxPos = 100;
const minBlur = 0;
const maxBlur = 3;

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const $bubbles = document.querySelector('[class="bubbles"]');
const totalBubbles = getRandomIntInclusive(minBubbles, maxBubbles);
const bubbleElements = Array(totalBubbles).fill(null).map(() => {
    const bubbleSize = getRandomIntInclusive(minSize, maxSize);
    const bubblePos = getRandomIntInclusive(minPos, maxPos);
    const blurSize = getRandomIntInclusive(minBlur, maxBlur);
    const animationDelay = getRandomIntInclusive(minDelay, maxDelay);
    const $container = document.createElement('div');
    $container.className = 'bubble-container';
    $container.style.left = `${bubblePos}%`;
    $container.style.filter = `blur(${blurSize}px)`;
    $container.style.animationDuration = `${animationDelay}s`;
    const $bubble = document.createElement('div');
    $bubble.className = 'bubble';
    $bubble.style.width = `${bubbleSize}px`;
    $bubble.style.height = `${bubbleSize}px`;
    $container.appendChild($bubble);
    $bubbles.appendChild($container);
    return {
        $container: $container,
        $bubble: $bubble
    };
});

let ready = true;
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', e => {
    mouseX = e.pageX;
    mouseY = e.pageY;
}, false);

function calcDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}

const minDistanceMult = 2;
const maxDistanceMult = 4;

function updateElement(elem) {
    const width = parseInt(elem.$bubble.style.width, 10);
    const css = getComputedStyle(elem.$container);
    const computedWidth = parseInt(css.width, 10);
    const x = mouseX - (elem.$container.offsetLeft + computedWidth / 2);
    const y = mouseY - (elem.$container.offsetTop + parseInt(css.height, 10) / 2);
    const distance = calcDistance(x, y);
    if (distance <= computedWidth) {
        elem.$bubble.classList.add('bubbleHover');
        elem.$bubble.classList.remove('minDistance');
        elem.$bubble.classList.remove('maxDistance');
    } else {
        elem.$bubble.classList.remove('bubbleHover');
        if (distance <= width * minDistanceMult) {
            elem.$bubble.classList.add('minDistance');
            elem.$bubble.classList.remove('maxDistance');
        } else if (distance <= width * maxDistanceMult) {
            elem.$bubble.classList.remove('minDistance');
            elem.$bubble.classList.add('maxDistance');
        } else {
            elem.$bubble.classList.remove('minDistance');
            elem.$bubble.classList.remove('maxDistance');
        }
    }
}

function update() {
    if (ready) {
        ready = false;
        bubbleElements.forEach(updateElement);
        ready = true;
    }
}

const interval = 100;
let intervalId = document.hasFocus() && setInterval(update, interval);
document.addEventListener('mouseenter', () => {
    if (!intervalId) {
        update();
        intervalId = setInterval(update, interval);
    }
}, false);
document.addEventListener('mouseleave', () => {
    ready = false;
    intervalId = clearInterval(intervalId);
    bubbleElements.forEach(elem => elem.$bubble.className = 'bubble');
    ready = true;
}, false);