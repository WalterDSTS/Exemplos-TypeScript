// Se o decorator nao receber nenhum parâmetro, é possível omitir o seu wrapper
// como visto abaixo:
export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: Array<any>) {
    console.log(`--- Método ${propertyKey}`);
    console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
    const response = metodoOriginal.apply(this, args);
    console.log(`------ Retorno: ${JSON.stringify(response)}`);
    return response;
  }

  return descriptor;
}