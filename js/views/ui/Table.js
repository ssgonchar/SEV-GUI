/**
 * Created by ssgonchar on 10.02.2016.
 */

app.ui.Table = Backbone.View.extend({
    initialize: function(columns, collection) {
        this.collection = collection;

        this.grid = new Backgrid.Grid({
            columns: columns,
            collection: this.collection
        })
    },

    render: function() {
        this.$el.html(this.grid.render().$el);
        return this;
    }
});