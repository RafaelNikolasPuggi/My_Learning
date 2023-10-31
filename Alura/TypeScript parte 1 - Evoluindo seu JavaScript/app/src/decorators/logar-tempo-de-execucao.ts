export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const medodoOriginal = descriptor.value;
        descriptor.value = function () {
            const t1 = performance.now();
            const retorno = medodoOriginal();
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/1000} segundos.`)
        }


        return descriptor;
    }
}