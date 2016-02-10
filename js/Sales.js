/**
 * Created by ssgonchar on 09.02.2016.
 */

/**
 * Create Sales collection.
 */
var sales = new app.collections.Sales();

/**
 * Fetch models in collection from server.
 */
sales.fetch();

/**
 * Set table sttings.
 * @type {*[]}
 */
var columns = [
    {
        name: "order_id",
        label: "Sale ID",
        editable: false,
        cell: 'string'
    },
    {
        name: "status_id",
        label: "Status ID",
        editable: false,
        cell: 'string'
    },
    {
        name: "invoicingtype_id",
        label: "Invoicing type ID",
        editable: false,
        cell: 'string'
    },
    {
        name: "paymenttype_id",
        label: "Invoicing type ID",
        editable: false,
        cell: 'string'
    }
];

/**
 * Initialize new table widget.
 */
var table = new app.ui.Table(columns, sales);

/**
 * Render the Table component and attach the Table's root to your HTML document
 */
$("#sales__table").append(table.render().$el);