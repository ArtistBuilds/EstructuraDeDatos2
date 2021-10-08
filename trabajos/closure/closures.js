// var abcd = function closure() {
//     let a = 1
//     let b = 2
//     let c = "Axel"
//     let d = "Chacón"
  
//     function suma() {
//       return a + b
//     }
  
//     function resta() {
//       return a - b
//     }
  
//     function nombres() {
//       return "hola" + c
//     }
  
//     function nombrecomp() {
//       return nombres + d
//     }
  
//     function sumacion();
//     sumacion(suma);
//     function restacion(resta);
//     restacion();
//     function nomb(nombres);
//     nomb();
//     function nombrecompl(nombrecomp);
//     nombrecompl();
//   };
  
  function closure(){
     
  function sum(a) {
    var sum = a
  }

    function f(b) {
    let sum = 3;
        sum += b
        return f
    }

    function f2() {
        return sum;
    }
    return  {
        sum,
        f,
        f2 
    }
  }

  var fenelchat = closure();