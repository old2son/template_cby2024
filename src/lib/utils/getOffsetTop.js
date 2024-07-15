const getOffsetTop = (element) => {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY;
    return rect.top + scrollTop;
}

export default getOffsetTop;