export function getVisibleScrollPercentage(body) {
    const totalHeight = body.scrollHeight - body.clientHeight;
    const scrollPosition = window.scrollY;
    return Math.round((scrollPosition / totalHeight) * 100);
}

export function isElementVisible(element, body) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visiblePercentage = getVisibleScrollPercentage(body);
    const elementHeight = rect.bottom - rect.top;
    // eslint-disable-next-line no-unused-vars
    const visibleHeight = windowHeight * (visiblePercentage / 100);
    const buffer = 100;
    return rect.bottom >= 0 && rect.bottom <= windowHeight + elementHeight / 2 - buffer;
}
