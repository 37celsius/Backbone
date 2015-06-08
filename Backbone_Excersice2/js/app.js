// http://code.tutsplus.com/tutorials/build-a-contacts-manager-using-backbonejs-part-1--net-24277

(function ($) {
 
    // Using local data store for this part as it allow me to get some script up and running without worrying to much about syncing with a server
    var contacts = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];

    // A model represent the data of an application
    // In our app this will be an individual contact
    var Contact = Backbone.Model.extend({

        // The default property allow us
        // to configure dafault values for any attribute that we would like our model to have.
        // Set a placeholder image as the default value of the photo attribute
        // for model instances. Any model that don't have this attribute when defined will be given the default photo.
        defaults: {
            photo: "img/profile.jpg"
        }
    });

    // A collection is a class for managing groups of models.
    // We'll use a simple one in this example to store all of our contacts.
    var Directory = Backbone.Collection.extend({

        // Like a model, a collection is a backbone class that we extend to add custom
        // functionality specific to our application.
        // We use the model property to tell the collection what class each item
        // in the collection should built from, which in this case is an instance of our contact model.
        model: Contact
    });
 
    // View are responsible for displaying the data of the application in an HTML page.
    // We'll use a couple of views in our application, the first of which should be added directly after the Directory class
    var ContactView = Backbone.View.extend({

        // tagName property is used to specify the container for the view
        tagName: 'article',
        // The className property specifies a class name that is added to this container
        className: 'contact-container',
        // template property store a cached reference to the template, which we select from the page using jQuery
        template: $('#contactTemplate').html(),

        // Within the render method we store a reference to Underscore template() method and pass to it the stored tempate
        render: function(){
            var tmpl = _.template(this.template);

            // We then set the HTML content of the article element created by the view to the interpolated template using
            // jQuery HTML method for convenience. This is done by calling the templating function that Underscore returned previously
            // and passing it the data to interpolate.
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    // The view is not self rendering and we have not invoked it yet.
    // What we need is a view that maps 1:1 to our collection, a master view that will render the right number
    // of contact views to display each of our contacts
    var DirectoryView = Backbone.View.extend({
        // We select the element with jQuery and set is as the el property
        el: $('#contacts'),

        // Then we define a simple initialize function which creates an instance of our collection
        // class and then calls its own render() method, making this view self rendering.
        initialize: function(){
            this.collection = new Directory(contacts);
            this.render();
        },

        // we define the render() method for our master view.
        // Within the function we store a reference to the view so that we can
        // access it within a callback function, and then use Underscore's each() method to
        // iterate over each model in our collection.
        render: function(){
            var that = this;
            _.each(this.collection.models, function(item){
                that.renderContact(item);
            }, this);
        },

        // Lastly we define the renderContact() method. In this method
        // we create a new instance of our ContactView class ( remember, the ContactView class represent s
        // an individual contact ) and set its model property to the item passed into the method.
        renderContact: function(item){
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    //create instance of master view
    var directory = new DirectoryView();

} (jQuery));










