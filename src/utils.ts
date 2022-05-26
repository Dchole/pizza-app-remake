export const renderReview = {
  render: function (review: string) {
    return review.split(" ").slice(0, 24).join(" ")
  },
  isShortened: function (review: string) {
    return review !== this.render(review)
  }
}
