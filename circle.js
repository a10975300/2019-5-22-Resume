window.onload = function () {
one();
two();
three();
}
function one(){
var red = 85, total = 100
var percent = red / total
var right = document.getElementsByClassName('circle-right')[0]
var left = document.getElementsByClassName('circle-left')[0]
if (percent <= 0.5) {
right.style.transform = `rotate(${percent * 360}deg)`
} else {
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}
function two(){
var red = 70, total = 100
var percent = red / total
var right = document.getElementsByClassName('circle-right two')[0]
var left = document.getElementsByClassName('circle-left two')[0]
if (percent <= 0.5) {
right.style.transform = `rotate(${percent * 360}deg)`
} else {
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}
function three(){
var red = 45, total = 100
var percent = red / total
var right = document.getElementsByClassName('circle-right three')[0]
var left = document.getElementsByClassName('circle-left three')[0]
if (percent <= 0.5) {
right.style.transform = `rotate(${percent * 360}deg)`
} else {
right.style.transform = `rotate(180deg)`
right.style.transition = `opacity 0s step-end 1s, transform 1s linear`
right.style.opacity = 0
left.style.transition = `transform ${(percent - 0.5) / 0.5}s linear 1s`
left.style.transform = `rotate(${percent * 360 - 180}deg)`
}
}