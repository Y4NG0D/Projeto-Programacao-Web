function calcularRaiz(numero) {
    const resultado = Math.sqrt(numero);
    document.getElementById('resultado').textContent = `A raiz quadrada de ${numero} é ${resultado.toFixed(2)}`;
}
