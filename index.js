const ejs = require('ejs');
const fs = require('fs');

var tasks_blocks_templates = require('./tasks');

var tickets_number = 30; // сколько вариантов делать
var topic_id = 2; //какую тему обслуживаем

var tickets = []; //будущий список вариантов

//создаем контент
for(var t=0; t<tickets_number; t++){
    var tasks = []; // список заданий с заполненным шаблонами вопросов и ответов

    //заполняем вопросы-ответы случайными числами и собираем в список
    tasks_blocks_templates.forEach(function(task_block, i){
        if (task_block.topic_id === topic_id){  //некрасиво

            var task_bone = task_block.tasks[Math.floor(Math.random()*task_block.tasks.length)] //берем случайную задачу из блока

            var data = task_bone.data_generator(i); //получаем числа для задания и ответа

            tasks.push({
                input: ejs.render(task_bone.input, data),
                answer: ejs.render(task_bone.answer, data)
            })
        }
    })
    
    if (tasks.length > 0) tickets.push(tasks);// сохраняем билет
}

//собираем все в красивую страницу
ejs.renderFile('testlist.ejs', {tickets: tickets}, function(err, page){
    fs.writeFile('./tests_collection/test.html',page, (err) => {
        if (err) throw err;
        console.log('The file have been saved')
    })
})
//console.log(page)
