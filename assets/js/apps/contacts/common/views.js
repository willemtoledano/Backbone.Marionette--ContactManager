App.module("ContactsApp.Common.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Form = Marionette.ItemView.extend({
    template: "#contact-form",

    // initialize: function(){
    //   this.title = "Edit " + this.model.get("firstName");
    //   this.title += " " + this.model.get("lastName");
    // },
    events: {
      "click button.js-submit" : "submitClicked",
      "click button.goBack"     : "goBackToContact"
    },

    submitClicked: function(e) {
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this)
      this.trigger("form:submit", data)
    },
    goBackToContact: function(e) {
      e.preventDefault();
      App.trigger("contacts:list")
    },
    onRender: function() {
      if (!this.options.asModal) {
        var $title = $("<h1>", {text: this.title})
        this.$el.prepend($title);
      }
    },
    onShow: function() {
      this.$el.dialog({
        modal: true,
        title: this.title,
        width: "auto"
      })
    },
    onFormDataInvalid: function(errors) {
      var $view = this.$el;

      var clearFormErrors = function() {
        var $form = $view.find("form");
        $form.find(".help-inline.error").each(function() {
          $(this).remove();
        })
        $form.find(".control-group.error").each(function() {
          $(this).removeClass("error");
        })
      }

      var markErrors = function(value, key) {
        var $controlGroup = $view.find("#contact-" + key).parent();
        var $errorEl = $("<span>", {class: "help-inline error", text: value})
        $controlGroup.append($errorEl).addClass("error")
      }
      clearFormErrors();
      _.each(errors, markErrors);
    },
  })
})
