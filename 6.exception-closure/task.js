function parseCount(numPars){
    let parseNum = Number.parseFloat(numPars);
    if(isNaN(parseNum)){
        throw new Error("Невалидное значение");
    }

    return parseNum;
}

function validateCount(numPars){
    try {
        parseCount(numPars);
    } catch (error) {
        return error;
    }

    return parseCount(numPars);
}

class Triangle{
    constructor(a, b, c){
        if(a + b < c || a + c < b || c + b < a){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
	}

    get perimeter(){
        return this.a + this.b + this.c;
    }

    get area(){
        let p = 1 / 2 * (this.a + this.b + this.c);
        return  parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area () {return "Ошибка! Треугольник не существует"},
            get perimeter () {return "Ошибка! Треугольник не существует"}
            
        }
    }
}