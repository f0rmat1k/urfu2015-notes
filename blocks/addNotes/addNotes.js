require('./addNotes.css');

module.exports = function AddNotes(data){
    this.root = data.$root;
    this.submit = this.root.find('button');
    this.textarea = this.root.find('textarea');
    this.input = this.root.find('input');

    bindEvents.call(this);
};

function bindEvents(){
    this.root.on('submit', onSubmit.bind(this));
}

function onSubmit(e){
    e.preventDefault();

    var values = getValues.call(this);

    $.ajax({
        type: 'POST',
        url: '/notes',
        data: values,
        success: function (data) {
            location.reload();
        },
        error: function(data) {
            alert('Ошибка! ' + data.responseText);
        }
    });
}

function getValues(){
    return {
        name: this.input.val(),
        text: this.textarea.val()
    };
}
