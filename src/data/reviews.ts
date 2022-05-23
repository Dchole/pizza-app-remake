export const reviews = [
  {
    id: 1,
    customer_name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis architecto tenetur incidunt atque expedita. Adipisci eum non quo consequatur. Velit eveniet unde sequi aut quasi nemo quo quis qui hic?"
  },
  {
    id: 2,
    customer_name: "Matina Terez",
    review:
      "Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
  },
  {
    id: 3,
    customer_name: "Chavez Perez",
    review:
      "Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta."
  },
  {
    id: 4,
    customer_name: "Dave Javiar",
    review:
      "Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo eget malesuada."
  }
]

export const transitionStyles = {
  reviewOffScreen: (mobile: boolean) => ({
    transform: !mobile ? "translateX(0)" : "translateX(100vw)",
    opacity: 0
  }),

  reviewEnteredScreen: {
    transform: "translateX(-50%)",
    opacity: 1
  },
  reviewExitedScreen: (mobile: boolean) => ({
    transform: !mobile ? "translateX(-25vw)" : "translateX(-100vw)",
    opacity: 0
  }),

  nameOffScreen: {
    transform: "translateY(100%)",
    opacity: 0
  },
  nameEnteredScreen: {
    transform: "translateY(0)",
    opacity: 1
  },
  nameExitedScreen: {
    transform: "translateY(-100%)",
    opacity: 0
  }
}
