import calcularSalario from "./CalculaSalario"
import Colaborador from "./Colaborador"

export default class GerarRelatorioJSON {
    constructor(private _colaboradores: Colaborador[], private servicoCalculaSalario: calcularSalario) {}

    gerarEmJSON() {

        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.servicoCalculaSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}