function binomioDeNewton(n) {
    let pascalTriangle = [[1]];
    let binomio = "";
    for (let i = 1; i <= n; i++) {
      pascalTriangle[i] = [1];
      for (let j = 1; j < i; j++) {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
      pascalTriangle[i].push(1);
    }
    for (let k = 0; k <= n; k++) {
      if (k !== n){
        binomio += pascalTriangle[n][k] + "a^" + (n-k) + "b^"
        + k + " + ";
      } else {
        binomio += pascalTriangle[n][k] + "a^" + (n-k) + "b^" + k;
      }
    }
    return binomio;
  }
  function calcularBinomio() {
    let binomio = document.getElementById("binomio").value;
    let n = binomio.split("^")[1];
    let resultado = binomioDeNewton(n);
    document.getElementById("resultado").innerHTML = "Binomio desarrollado: " + resultado;
  }