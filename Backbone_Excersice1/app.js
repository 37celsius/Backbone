// SINGLE RECTANGLE

// // This is a private function, to make sure no leaking
// (function() {

// 	// This gives us a new type of rectangle which have no special capabilities
// 	// beyond what's provided by Backbone.Model
// 	var Rectangle = Backbone.Model.extend({});

// 	// When we have model, we need a view
// 	var RectangleView = Backbone.View.extend({

// 		// This is the type element that we want to be render to this view
// 		tagName: 'div',

// 		// We want a class name from the HTML
// 		className: 'rectangle',

// 		// Backbone.View is capable of responding to events
// 		// either events of Backbone.Models or events of the DOM
// 		events: {
// 			// We set up declarative bindings of events to function
// 			// so for our rectangle view, we are going to define
// 			// the click event to the move function
// 			'click': 'move' 
// 		},

// 		// Every Backbone.View can have render function
// 		// This is the function that will be call when we want to
// 		// take our view and render in the document

// 		render: function(){
// 			// Set the dimension of the rectangle
// 			this.setDimension();

// 			// Set the position of the rectangle
// 			this.setPosition();

// 			// Set the color
// 			this.setColor();

// 			// Return the view object of the function
// 			return this;
// 		},

// 		// Create the setDimension function
// 		setDimension: function(){
// 			// Access jQuery using $el
// 			this.$el.css({
// 				width: this.model.get('width') + 'px',
// 				height: this.model.get('height') + 'px'
// 			});
// 		},

// 		setPosition: function(){
// 			var position = this.model.get('position');
// 			this.$el.css({
// 				left: position.x,
// 				top: position.y
// 			});
// 		},

// 		setColor: function(){
// 			this.$el.css('background-color', this.model.get('color'));
// 		},

// 		move: function(){
// 			// read the current value and add 10 to that
// 			this.$el.css('left', this.$el.position().left + 10);
// 		}

// 	});

// 	// We have set the properties for the rectangle above,
// 	// now we are creating the rectangle model
// 	var myRectangle = new Rectangle({
// 		width: 100,
// 		height: 60,
// 		position: {
// 			x: 300,
// 			y: 150
// 		},
// 		color: '#ff0000'
// 	});

// 	// Now we have the rectangle model, we need to create an
// 	// instance for the view
// 	// When we create the new view object, it is important
// 	// to give the reference of the model object
// 	// so it's now which model responsible for rendering
// 	var myView = new RectangleView({model: myRectangle});

// 	// The next step is to render the view and 
// 	// add the resulting element to the html page
// 	// we can do that by jQuery selector
// 	$('div#canvas').append(myView.render().el);

// })();

// MULTIPLE RECTANGLES
// This is a private function, to make sure no leaking
(function() {

	// This gives us a new type of rectangle which have no special capabilities
	// beyond what's provided by Backbone.Model
	var Rectangle = Backbone.Model.extend({});

	// When we have model, we need a view
	var RectangleView = Backbone.View.extend({

		// This is the type element that we want to be render to this view
		tagName: 'div',

		// We want a class name from the HTML
		className: 'rectangle',

		// Backbone.View is capable of responding to events
		// either events of Backbone.Models or events of the DOM
		events: {
			// We set up declarative bindings of events to function
			// so for our rectangle view, we are going to define
			// the click event to the move function
			'click': 'move' 
		},

		// Every Backbone.View can have render function
		// This is the function that will be call when we want to
		// take our view and render in the document

		render: function(){
			// Set the dimension of the rectangle
			this.setDimension();

			// Set the position of the rectangle
			this.setPosition();

			// Set the color
			this.setColor();

			// Return the view object of the function
			return this;
		},

		// Create the setDimension function
		setDimension: function(){
			// Access jQuery using $el
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function(){
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function(){
			this.$el.css('background-color', this.model.get('color'));
		},

		move: function(){
			// read the current value and add 10 to that
			this.$el.css('left', this.$el.position().left + 10);
		}

	});

	// We can create as many instances as we like
	// by creating arrays containing rectangles
	var models = [
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 300,
				y: 150
			},
			color: '#ff0099'
		}),
		new Rectangle({
			width: 50,
			height: 80,
			position: {
				x: 360,
				y: 50
			},
			color: '#008800'
		}),
		new Rectangle({
			width: 300,
			height: 60,
			position: {
				x: 100,
				y: 180
			},
			color: '#000fff'
		})
	];

	// We use underscore.js to access the arrays
	// the underscore.js have each function, a short FOR loop
	_(models).each(function(model){
		// create a new rectangle view for the current model of the loop
		$('div#canvas').append(new RectangleView({model: model}).render().el);
	});

})();

















