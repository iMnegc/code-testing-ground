window.onload = () => {
    let cardItems = document.getElementsByClassName("streaming-card");
    console.log('cardItems', cardItems);
    if (cardItems.length > 0) {
        for (let i = 0; i < cardItems.length; i++) {
            cardItems[i].onmousemove = (e) => {
                // 使用 clientX 和 clientY 属性获取鼠标相对于视口的坐标
                // 然后减去元素的 offsetLeft 和 offsetTop 来获取相对于元素的坐标
                let x = e.clientX - cardItems[i].getBoundingClientRect().left;
                let y = e.clientY - cardItems[i].getBoundingClientRect().top;
                e.stopPropagation(); // 阻止事件冒泡，如果需要的话
                cardItems[i].style.setProperty('--streamingX', `${x}px`); // 注意单位使用 "px"
                cardItems[i].style.setProperty('--streamingY', `${y}px`); // 注意单位使用 "px"
            }
        }
    }
}