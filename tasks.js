//Блоки с заданиями.
//Блок должен состоять из близких, но все-же несколько варьирующихся по формулировкам задач.
module.exports = [
    { //начало блока
        topic_id: 3,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Найти проекцию вектора <i>a</i> = {<%= input.vector1.x %>,<%= input.vector1.y %>,<%= input.vector1.y %>} на вектор <i>b</i>{<%= input.vector2.x %>,<%= input.vector2.y %>,<%= input.vector2.y %>}, угол между этими векторами, их векторное произведение.
                    </p>
                `,
                answer: `
                    <p>
                        проекция = <%= answer.projection %>, угол = <%= answer.angle %>, вект.пр = <%= answer.multi %>
                    </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        vector1: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                            z: Math.round(Math.random()*10+1)
                        },
                        vector2: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                            z: Math.round(Math.random()*10+1)
                        }
                    };
                    var answer = {
                        projection: '?',
                        angle: '?',
                        multi: '?'
                    }

                    return {
                        input: input,
                        answer: answer
                    }
                }
            }
        ]
    },//конец блока
    { //начало блока
        topic_id: 2,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Записать общее уравнение плоскости проходящей через точку P(<%= input.dot.x %>,<%= input.dot.y %>,<%= input.dot.y %>) перпендикулярно вектору <i>n</i>{<%= input.vector.A %>, <%= input.vector.B %>, <%= input.vector.C %>}
                    </p>
                `,
                answer: `
                    <p>
                        <%= answer.plane.A %>x + <%= answer.plane.B %>y + <%= answer.plane.C %>z + <%= answer.plane.D %> = 0
                    </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        dot: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                            z: Math.round(Math.random()*10+1)
                        },
                        vector: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1)
                        }
                    };
                    var answer = {
                        plane: {
                            A: input.vector.A.toFixed(2),
                            B: input.vector.B.toFixed(2),
                            C: input.vector.C.toFixed(2),
                            D: (-input.vector.A*input.dot.x -input.vector.B*input.dot.y -input.vector.C*input.dot.z).toFixed(2)
                        }
                    }

                    return {
                        input: input,
                        answer: answer
                    }
                }
            }
        ]
    },//конец блока
    { //начало блока
        topic_id: 2,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Какие отрезки отсекает на осях координат плоскость <%= input.plane.A %>x + <%= input.plane.B %>y + <%= input.plane.C %>z + <%= input.plane.D %> = 0 ?
                    </p>
                `,
                answer: `
                    <p> a = <%= answer.a %>, b = <%= answer.b %>, c = <%= answer.c %>                   </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        plane: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1),
                            D: Math.round(Math.random()*10+1)
                        }
                    };
                    var answer = {
                        a: (-input.plane.D/input.plane.A).toFixed(2),
                        b: (-input.plane.D/input.plane.B).toFixed(2),
                        c: (-input.plane.D/input.plane.C).toFixed(2)
                    }

                    return {
                        input: input,
                        answer: answer
                    }
                }
            }
        ]
    },//конец блока
    { //начало блока
        topic_id: 2,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Определить, при каком значении <i>r</i> прямые
                        <%= input.line1.A %>x + <%= input.line1.B %>y + <%= input.line1.C %> = 0 и
                        r*x + <%= input.line2.B %>y + <%= input.line2.C %> = 0
                        будут <br>1) коллинеарны <br>2) перпендикулярны
                    </p>
                `,
                answer: `
                    <p>
                        1) <%= answer.r_colinear %>
                        2) <%= answer.r_normal %>
                    </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        line1: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1)
                        },
                        line2: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1)
                        }
                    };
                    var answer = {
                        r_colinear: ((input.line2.B / input.line1.B) * input.line1.A).toFixed(2) ,
                        r_normal: (- input.line1.B * input.line2.B / input.line1.A).toFixed(2)
                    }

                    return {
                        input: input,
                        answer: answer
                    }
                }
            }
        ]
    },//конец блока
    { //начало блока
        topic_id: 1,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Дано уравнение прямой <%= input.line.A %>x + <%= input.line.B %>y + <%= input.line.C %> = 0</p>
                    <p>Найти расстояние от точки P(<%= input.dot.x %>,<%= input.dot.y %>) до этой прямой.</p>
                `,
                answer: `
                    <p>Ответ к заданию №<%= input.number %> : <%= answer.distance %></p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        line: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1)
                        },
                        dot: {
                            x: Math.round(Math.random()*6+1),
                            y: Math.round(Math.random()*6+1)
                        }
                    };
                    var answer = {
                        distance: Math.abs(
                            (input.line.A*input.dot.x + input.line.B*input.dot.y + input.line.C) /
                            Math.sqrt(Math.pow(input.line.A,2) + Math.pow(input.line.B,2))
                        ).toFixed(2)
                    }

                    return {
                        input: input,
                        answer: answer
                    }
                }
            },
        ]
    },//конец блока
    { //начало блока
        topic_id: 1,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Определить, при каком значении <i>r</i> прямые
                        <%= input.line1.A %>x + <%= input.line1.B %>y + <%= input.line1.C %> = 0 и
                        r*x + <%= input.line2.B %>y + <%= input.line2.C %> = 0
                        будут <br>1) коллинеарны <br>2) перпендикулярны
                    </p>
                `,
                answer: `
                    <p>Ответ к заданию №<%= input.number %> :
                        1) <%= answer.r_colinear %>
                        2) <%= answer.r_normal %>
                    </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        line1: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1)
                        },
                        line2: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1)
                        }
                    };
                    var answer = {
                        r_colinear: ((input.line2.B / input.line1.B) * input.line1.A).toFixed(2) ,
                        r_normal: (- input.line1.B * input.line2.B / input.line1.A).toFixed(2)
                    }

                    return {
                        input: input,
                        answer: answer
                    }
                }
            }
        ]
    },//конец блока
]
