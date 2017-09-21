module.exports = [
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