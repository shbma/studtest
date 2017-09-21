const ejs = require('ejs');
const fs = require('fs');

var tasks_templates = require('./tasks');

var tickets_number = 30; // сколько вариантов делать
var tickets = []; //будущий список вариантов

//создаем контент
for(var t=0; t<tickets_number; t++){
    var tasks = []; // список заданий с заполненным шаблонами вопросов и ответов

    //заполняем вопросы-ответы случайными числами и собираем в список
    tasks_templates.forEach(function(task_bone, i){
        var data = task_bone.data_generator(i); //получаем числа для задания и ответа

        tasks.push({ 
            input: ejs.render(task_bone.input, data),
            answer: ejs.render(task_bone.answer, data)
        })
    })
    
    tickets.push(tasks);// сохраняем билет
}

//собираем все в красивую страницу
ejs.renderFile('testlist.ejs', {tickets: tickets}, function(err, page){
    fs.writeFile('test.html',page, (err) => {
        if (err) throw err;
        console.log('The file have been saved')
    })
})
//console.log(page)