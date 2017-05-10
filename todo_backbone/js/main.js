
$(document).ready(function() {
  var todoItems = new TodoItems();
  todoItems.fetch();

  // var todoItems = new TodoItems([
  //   new TodoItem({ id: 1, description: 'TodoItem 1'}),
  //   new TodoItem({ id: 2, description: 'TodoItem 2'}),
  //   new TodoItem({ id: 3, description: 'TodoItem 3'}),
  // ]);
  
  var todoItemsView = new TodoItemsView({ model: todoItems });
  $('body').append(todoItemsView.render().$el);
  // var todoItem = new TodoItem({ description: "TodoItem 1"});
  // 
  // var todoItemView = new TodoItemView({ model: todoItem });
  // $('body').append(todoItemView.render().$el);
});