/* These functions deal with dynamic styling based on scrolling */

export function tempFixedScroll(ref, start, mid, end) {
  /* element follows page when scrolling, but once
  the page has scrolled down until "scrollEnd" the
  element */

  const scrollStart = start - mid; //when to fix when scrolling
  const scrollEnd = end - mid; //when to unfix when scrolling

  if (window.scrollY < scrollStart) {
    ref.current.style.position = "absolute";
    ref.current.style.top = start + "px";
  } else if (window.scrollY > scrollStart && window.scrollY < scrollEnd) {
    ref.current.style.position = "fixed";
    ref.current.style.top = mid + "px";
  } else {
    ref.current.style.position = "absolute";
    ref.current.style.top = end + "px";
  }
}

export function rescaleScroll(ref, start, mid, end, scale) {
  const scrollStart = start - mid; //when to fix when scrolling
  const scrollEnd = end - mid; //when to unfix when scrolling

  if (window.scrollY < scrollStart) {
    ref.current.style.width = start / 6 + "px";
  } else if (window.scrollY > scrollStart && window.scrollY < scrollEnd) {
    ref.current.style.width =
      scale * ((window.scrollY - scrollStart) / 800) + start / 6 + "px";
  } else {
    ref.current.style.width = scale + start / 6 + "px";
  }
}
