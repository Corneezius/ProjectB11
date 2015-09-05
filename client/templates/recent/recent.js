Template.recent.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('products');
  }.bind(this));
};

Template.recent.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
      $("#tinderslide").jTinder({
        onDislike: function (item) {
            alert('Dislike image ' + (item.index()+1));
        },
        onLike: function (item) {
            alert('Like image ' + (item.index()+1));
        },
        animationRevertSpeed: 200,
        animationSpeed: 400,
        threshold: 1,
        likeSelector: '.like',
        dislikeSelector: '.dislike'
      });
      $(".item").click(function(mouseEvent){ 
        if ($(mouseEvent.currentTarget).hasClass("dragging")) {
          mouseEvent.preventDefault(); 
          $(mouseEvent.currentTarget).removeClass("dragging");
        }
      });
    }
  }.bind(this));
};

Template.recent.helpers({
  products: function () {
    return Products.find({}, {sort: {createdAt: -1, name: -1}});
  }
});

Template.recent.events({
  'dragstart .item': function(e, t) {
    $(e.currentTarget).addClass('dragging');
  }
});