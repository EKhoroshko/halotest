const body = document.querySelector('body');

export const blockScroll = () => {
  body.classList.add("scrollHiden");
}

export const unBlockScroll = () => {
  body.classList.remove("scrollHiden");
}

