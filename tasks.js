//Блоки с заданиями.
//Блок должен состоять из близких, но все-же несколько варьирующихся по формулировкам задач.
module.exports = [
    { //начало блока
        topic_id: 6,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Записать общее уравнение прямой проходящей через точку P(<%= input.dot.x %>,<%= input.dot.y %>) перпендикулярно вектору <i>n</i>{<%= input.vector.A %>, <%= input.vector.B %>}. Сделать схематичный чертеж.
                    </p>
                `,
                answer: `
                    <p>
                        <%= answer.plane.A %>x + <%= answer.plane.B %>y + <%= answer.plane.C %> = 0
                    </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        dot: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        vector: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                        }
                    };
                    var answer = {
                        plane: {
                            A: input.vector.A.toFixed(2),
                            B: input.vector.B.toFixed(2),
                            С: (-input.vector.A*input.dot.x -input.vector.B*input.dot.y).toFixed(2)
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
        topic_id: 6,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Записать каноническое уравнение прямой проходящей через точку P(<%= input.dot.x %>,<%= input.dot.y %>) параллельно вектору <i>a</i>{<%= input.vector.A %>, <%= input.vector.B %>}. Сделать схематичный чертеж.
                    </p>
                `,
                answer: `
                        (x-<%= input.dot.x %>)/<%= input.vector.A %> = (y-<%= input.dot.y %>)/<%= input.vector.B %>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        dot: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        vector: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                        }
                    };
                    var answer = {}

                    return {
                        input: input,
                        answer: answer
                    }
                }
            }
        ]
    },//конец блока
    { //начало блока
        topic_id: 6,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Найти точку B симметричную точке A(<%= input.dot.x %>, <%= input.dot.y %>) относительно прямой заданной уравнением <%= input.line.A %>x + <%= input.line.B %>y + <%= input.line.C %> = 0. Сделать схематичный чертеж.
                    </p>
                `,
                answer: `
                     A (<%= answer.dot.x %>, <%= answer.dot.y %>)
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        dot: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        line: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1),
                        }
                    };
                    var answer = {
                        dot: {
                            x: '?',
                            y: '?'
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
        topic_id: 6,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Даны координаты вершин треугольника ABC: A(<%= input.A.x %>, <%= input.A.y %>), B(<%= input.B.x %>, <%= input.B.y %>) и C(<%= input.C.x %>, <%= input.C.y %>). <br>
                    а) Найти общее уравнение медианы, проведенной из точки А. Сделать черетеж. <br>
                    б) Найти длину стороны BC.
                    </p>
                `,
                answer: `
                     <%= answer.line.A %>x + <%= answer.line.B %>y + <%= answer.line.C %> = 0
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        A: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        B: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        C: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                    };
                    var answer = {
                        line: {
                            A: '?',
                            B: '?',
                            C: '?'
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
        topic_id: 6,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Даны координаты вершин треугольника ABC: A(<%= input.A.x %>, <%= input.A.y %>), B(<%= input.B.x %>, <%= input.B.y %>) и C(<%= input.C.x %>, <%= input.C.y %>). <br>
                    a) Найти общее уравнение высоты, опущенной из точки А. Сделать черетеж.<br>
                    б) Найти расстояние от точки А до противолежащей стороны.
                    </p>
                `,
                answer: `
                     <%= answer.line.A %>x + <%= answer.line.B %>y + <%= answer.line.C %> = 0
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        A: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        B: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        C: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                    };
                    var answer = {
                        line: {
                            A: '?',
                            B: '?',
                            C: '?'
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
        topic_id: 6,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Даны координаты вершин треугольника ABC: A(<%= input.A.x %>, <%= input.A.y %>), B(<%= input.B.x %>, <%= input.B.y %>) и C(<%= input.C.x %>, <%= input.C.y %>). <br>
                    a) Найти общее уравнение биссектрисы треугольника, проведенной из точки А. Сделать черетеж. <br>
                    б) Найти величину угла BAC.
                    </p>
                `,
                answer: `
                     <%= answer.line.A %>x + <%= answer.line.B %>y + <%= answer.line.C %> = 0
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        A: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        B: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                        C: {
                            x: Math.round(Math.random()*10+1),
                            y: Math.round(Math.random()*10+1),
                        },
                    };
                    var answer = {
                        line: {
                            A: '?',
                            B: '?',
                            C: '?'
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
        topic_id: 5,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Найти произведение матриц A*B, где
                        <br>A=<br>
                        <%= input.A.a11 %> <%= input.A.a12 %> <br>
                        <%= input.A.a21 %> <%= input.A.a22 %> <br>
                        <br>B=<br>
                        <%= input.B.b11 %> <%= input.B.b12 %> <br>
                        <%= input.B.b21 %> <%= input.B.b22 %> <br>
                    </p>
                `,
                answer: `
                        <%= answer.C.c11 %> <%= answer.C.c12 %> <br>
                        <%= answer.C.c21 %> <%= answer.C.c22 %> <br>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        A: {
                            a11: Math.ceil(Math.random()*10+1),
                            a12: Math.ceil(Math.random()*10+1),
                            a21: Math.ceil(Math.random()*10+1),
                            a22: Math.ceil(Math.random()*10+1),
                        },
                        B: {
                            b11: Math.ceil(Math.random()*10+1),
                            b12: Math.ceil(Math.random()*10+1),
                            b21: Math.ceil(Math.random()*10+1),
                            b22: Math.ceil(Math.random()*10+1),
                        }
                    };
                    var answer = {
                        C: {
                            c11: input.A.a11*input.B.b11 +input.A.a12*input.B.b21.toFixed(0),
                            c12: input.A.a11*input.B.b21 +input.A.a12*input.B.b22.toFixed(0),
                            c21: input.A.a21*input.B.b11 +input.A.a22*input.B.b21.toFixed(0),
                            c22: input.A.a21*input.B.b21 +input.A.a22*input.B.b22.toFixed(0)
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
        topic_id: 5,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Найти |С|, где
                        <br>С=<br>
                        <%= input.A.a11 %> <%= input.A.a12 %> <br>
                        <%= input.A.a21 %> <%= input.A.a22 %> <br>
                    </p>
                `,
                answer: `
                        <%= answer.det %>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        A: {
                            a11: Math.ceil(Math.random()*10+1),
                            a12: Math.ceil(Math.random()*10+1),
                            a21: Math.ceil(Math.random()*10+1),
                            a22: Math.ceil(Math.random()*10+1),
                        },
                    };
                    var answer = {
                        det: input.A.a11*input.A.a22 - input.A.a12*input.A.a21
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
        topic_id: 5,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Найти |D|, где
                        <br>D=<br>
                        <%= input.A.a11 %> <%= input.A.a12 %> <%= input.A.a13 %> <br>
                        <%= input.A.a21 %> <%= input.A.a22 %> <%= input.A.a23 %> <br>          <%= input.A.a31 %> <%= input.A.a32 %> <%= input.A.a33 %> <br>
                    </p>
                `,
                answer: `
                    <%= answer.det %>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        A: {
                            a11: Math.ceil(Math.random()*10+1),
                            a12: Math.ceil(Math.random()*10+1),
                            a13: Math.ceil(Math.random()*10+1),
                            a21: Math.ceil(Math.random()*10+1),
                            a22: Math.ceil(Math.random()*10+1),
                            a23: Math.ceil(Math.random()*10+1),
                            a31: Math.ceil(Math.random()*10+1),
                            a32: Math.ceil(Math.random()*10+1),
                            a33: Math.ceil(Math.random()*10+1),
                        },
                    };
                    var answer = {
                        det: input.A.a11*(input.A.a22*input.A.a33 - input.A.a32*input.A.a23)
                            -input.A.a12*(input.A.a21*input.A.a33 - input.A.a31*input.A.a23)
                            +input.A.a13*(input.A.a21*input.A.a32 - input.A.a31*input.A.a22)
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
        topic_id: 4,
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
        topic_id: 4,
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
        topic_id: 4,
        tasks: [ //массив заданий блока
            {
                input: `
                    <p>Найти косинус угла между плоскостями
                        <%= input.plane1.A %>x + <%= input.plane1.B %>y + <%= input.plane1.C %>z + <%= input.plane1.D %> = 0 и
                        <%= input.plane2.A %>x + <%= input.plane2.B %>y + <%= input.plane2.C %>z + <%= input.plane2.D %> = 0
                    </p>
                `,
                answer: `
                    <p>
                        <%= answer.cos %>
                    </p>
                `,
                data_generator: function(number){ //создает случайный набор входных данных, высчитывает ответ
                    var input = {
                        number: number,
                        plane1: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1),
                            D: Math.round(Math.random()*10+1)
                        },
                        plane2: {
                            A: Math.round(Math.random()*10+1),
                            B: Math.round(Math.random()*10+1),
                            C: Math.round(Math.random()*10+1),
                            D: Math.round(Math.random()*10+1)
                        }
                    };
                    var answer = {
                        cos: ((input.plane1.A*input.plane2.A + input.plane1.B*input.plane2.B + input.plane1.C*input.plane2.C)/(Math.sqrt(Math.pow(input.plane1.A,2)+Math.pow(input.plane1.B,2)+Math.pow(input.plane1.C,2))*Math.sqrt(Math.pow(input.plane2.A,2)+Math.pow(input.plane2.B,2)+Math.pow(input.plane2.C,2)))).toFixed(2)
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
