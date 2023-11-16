export const animationScroll = (styles: { readonly [key: string]: string }) => {
  const animItems = document.querySelectorAll("#_anim-items");
  if (animItems.length > 0) {
    const animOnScroll = () => {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = (animItem as HTMLElement).offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add(`${styles._active}`);
        } else {
          if (!animItem.classList.contains(`${styles._anim_none__hide}`)) {
            animItem.classList.remove(`${styles._active}`);
          }
        }
      }
    };
    window.addEventListener("scroll", animOnScroll);
    const offset = (el: Element) => {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };
    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
};
