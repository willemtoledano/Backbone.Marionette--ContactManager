
A LayoutView can be thought of as “a view containing other views”.

What do you need to actually render a view?
  - A ItemView (or similar) where to Construct it + a template
  - An instance from ItemView
  - optional: a container such as LayoutView or Regions
  - show/render it





















///////////////
//    1
///////////////
• Templates
– are basically HTML
– govern “how things should be displayed” (what HTML should be in the view, CSS
  styles, where data should be displayed, etc.)

• Views
– are javascript objects
– take care of “reacting to things that happen” (clicks, keeping track of a
  model, etc.)

  This is the VIEWS RESPONSABILITY in Marionette:
  it monitors the models it’s displaying,
  and if those models change, the view renders itself again (using the same template).

  And to follow the “separation of concerns” pattern, the “views” functionality
  has been separated into templates (how to display information) and views
  (how to react to changes in the environment).
