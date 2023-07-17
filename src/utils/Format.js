export const MaskCurrency = (e) => {
  const formatter = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const input = e.target;
  // elimina tudo que não é dígito
  input.value = input.value.replace(/\D+/g, '');
  if (input.value.length === 0) // se não tem nada preenchido, não tem o que fazer
      return;
  // verifica se ultrapassou a quantidade máxima de dígitos (pegar o valor no dataset)
  const maxDigits = parseInt(input.dataset.maxDigits);
  if (input.value.length > maxDigits) {
      // O que fazer nesse caso? Decidi pegar somente os primeiros dígitos
      input.value = input.value.substring(0, maxDigits);
  }
  // lembrando que o valor é a quantidade de centavos, então precisa dividir por 100
  input.value = formatter.format(parseInt(input.value) / 100);
}

export const MaskNumber = (e) => {
  const input = e.target;
  input.value = input.value.replace(/\D+/g, '');
  if (input.value.length === 0)
      return;
}