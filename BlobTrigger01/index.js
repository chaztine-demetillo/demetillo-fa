module.exports = function (context) {
    context.bindings.outputBlob = context.bindings.inputBlob;
    context.done();
};