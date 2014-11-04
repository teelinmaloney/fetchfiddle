$(function() {

    $('#editor')
        .width($('.container').width());

    var tools = ace.require("ace/ext/language_tools");
    tools.addCompleter(ff.fetchCompleter);

    var editor = ace.edit('editor'),
        session = editor.getSession();

    session.setMode('ace/mode/xml');
    session.setTabSize(4);
    session.setUseSoftTabs(true);

    editor.setOptions({
        behavioursEnabled: true,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: false,
        printMarginColumn: false,
        theme: 'ace/theme/solarized_dark'
    });

    editor.setValue($('#fetchtemplate').text());
});