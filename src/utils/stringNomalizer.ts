const normalizeString = (str: string): string => {
  // Normaliza a string removendo acentos
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Substitui 'ç' e 'Ç'
  str = str.replace(/ç/g, "c").replace(/Ç/g, "C");

  // Mantém letras, números, espaços e hifens, removendo o resto
  return str.replace(/[^a-zA-Z0-9 \-]/g, "");
};

export { normalizeString };
