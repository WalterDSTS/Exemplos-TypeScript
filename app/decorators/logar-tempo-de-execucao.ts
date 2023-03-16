export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: Array<any>) {
      let divisor = 1;
      let unidade = 'milisegundos'

      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }

      const t1 = performance.now();
      const response = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução do método: ${
        (t2 - t1) / divisor
      } ${unidade}.`);
      response;
    };

    return descriptor;
  };
}
