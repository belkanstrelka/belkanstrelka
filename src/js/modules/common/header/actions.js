export const TOGGLE_MENU = 'TOGGLE_MENU';

const toggleMenu = (isOpen = false, menuId) => {
  document.body.classList.toggle('scroll-locked', isOpen)

  return {
    type: TOGGLE_MENU,
    payload: menuId ? { isOpen, menuId } : { isOpen }
  };
};

export default toggleMenu;
