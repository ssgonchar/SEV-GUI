/**
 * Created by ssgonchar on 10.02.2016.
 */
var app = app || {};

app.collections.Sales = Backbone.Collection.extend({
    model: app.models.Sale,
    url: 'json/sales.json'
});