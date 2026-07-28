// ==========================================================
// 1. CONFIGURAÇÕES E MAPEAMENTO DA ESTRUTURA DA GRADE
// ==========================================================
const diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
const horarios = ["08h00", "10h00", "13h30", "15h30", "19h00", "21h00"];

const mapeamentoCores = {};

// ==========================================================
// FUNÇÃO PARA REMOVER ACENTOS E IGNORAR MAIÚSCULAS
// ==========================================================
const normalizar = (str) => {
    if (!str) return "";
    return str.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
};

function obterCorMateria(codigo) {
    if (mapeamentoCores[codigo]) {
        return mapeamentoCores[codigo];
    }

    let hash = 0;
    const strCodigo = String(codigo);
    for (let i = 0; i < strCodigo.length; i++) {
        hash = strCodigo.charCodeAt(i) + ((hash << 5) - hash);
    }

    const matriz = Math.abs(hash) % 360;
    const estiloCorEstatico = `style="background-color: hsl(${matriz}, 75%, 92%); border-color: hsl(${matriz}, 70%, 80%); color: hsl(${matriz}, 90%, 25%);"`;

    mapeamentoCores[codigo] = estiloCorEstatico;
    return estiloCorEstatico;
}

// ==========================================================
// 2. BASE DE DADOS EM FORMATO JSON
// ==========================================================
// COLE SUA BASE JSON COMPLETA DENTRO DESTE ARRAY:
const novaBaseJson = [
    {
        "id": 0,
        "name": "Álgebra Linear II",
        "code": 5373,
        "short_code": "ALII",
        "teacher": "Abbas",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/algebra-linear-ii"
    },
    {
        "id": 1,
        "name": "Álgebra Linear II",
        "code": 5373,
        "short_code": "ALII",
        "teacher": "Macedo",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/algebra-linear-ii"
    },
    {
        "id": 2,
        "name": "Algoritmos e Estruturas de Dados I",
        "code": 2832,
        "short_code": "AEDI",
        "teacher": "Regina Coelho",
        "class": "IA",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/algoritmos-estruturas-dados-i"
    },
    {
        "id": 3,
        "name": "Algoritmos e Estruturas de Dados I",
        "code": 2832,
        "short_code": "AEDI",
        "teacher": "Arlindo",
        "class": "IB",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/algoritmos-estruturas-dados-i"
    },
    {
        "id": 4,
        "name": "Algoritmos e Estruturas de Dados I",
        "code": 2832,
        "short_code": "AEDI",
        "teacher": "Regina Coelho",
        "class": "NA",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/algoritmos-estruturas-dados-i"
    },
    {
        "id": 5,
        "name": "Algoritmos e Estruturas de Dados I",
        "code": 2832,
        "short_code": "AEDI",
        "teacher": "Luis Pereira",
        "class": "NB",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/algoritmos-estruturas-dados-i"
    },
    {
        "id": 6,
        "name": "Algoritmos e Estruturas de Dados II",
        "code": 2833,
        "short_code": "AEDII",
        "teacher": "Berton",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/algoritmos-estruturas-dados-ii"
    },
    {
        "id": 7,
        "name": "Algoritmos e Estruturas de Dados II",
        "code": 2833,
        "short_code": "AEDII",
        "teacher": "Berton",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/algoritmos-estruturas-dados-ii"
    },
    {
        "id": 8,
        "name": "Analise de Investimentos e Riscos",
        "code": 5095,
        "short_code": "AIR",
        "teacher": "Sato",
        "class": "I",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/analise-investimentos-riscos"
    },
    {
        "id": 9,
        "name": "Analise de Investimentos e Riscos",
        "code": 5095,
        "short_code": "AIR",
        "teacher": "Sato",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/analise-investimentos-riscos"
    },
    {
        "id": 10,
        "name": "Análise Real II",
        "code": 5918,
        "short_code": "ARII",
        "teacher": "Vanessa Paschoa",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/analise-real-ii"
    },
    {
        "id": 11,
        "name": "Análise Real II",
        "code": 5918,
        "short_code": "ARII",
        "teacher": "Cláudia Aline",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/analise-real-ii"
    },
    {
        "id": 12,
        "name": "Anatomia",
        "code": 5124,
        "short_code": "ANATOMIA",
        "teacher": "Fernando",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/anatomia"
    },
    {
        "id": 13,
        "name": "Anatomia",
        "code": 5124,
        "short_code": "ANATOMIA",
        "teacher": "Fernando",
        "class": "N",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/anatomia"
    },
    {
        "id": 14,
        "name": "Aplicações de Redes Neurais de Aprendizado Profundo em Sinais e Imagens Médicas",
        "code": 10015,
        "short_code": "ARNAPS",
        "teacher": "Matheus",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": ""
    },
    {
        "id": 15,
        "name": "Arquitetura e organização de Computadores",
        "code": 3519,
        "short_code": "AOC",
        "teacher": "Cappabianco",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/arquitetura-organizacao-computadores"
    },
    {
        "id": 16,
        "name": "Arquitetura e organização de Computadores",
        "code": 3519,
        "short_code": "AOC",
        "teacher": "Denise",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/arquitetura-organizacao-computadores"
    },
    {
        "id": 17,
        "name": "Banco de Dados",
        "code": 2831,
        "short_code": "BD",
        "teacher": "Musa",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/banco-dados"
    },
    {
        "id": 18,
        "name": "Banco de Dados",
        "code": 2831,
        "short_code": "BD",
        "teacher": "Musa",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/banco-dados"
    },
    {
        "id": 19,
        "name": "Biologia Geral",
        "code": 5740,
        "short_code": "BIOG",
        "teacher": "Vilaverde",
        "class": "I",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/biologia-geral"
    },
    {
        "id": 20,
        "name": "Biologia Geral",
        "code": 5740,
        "short_code": "BIOG",
        "teacher": "Michael",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/biologia-geral"
    },
    {
        "id": 21,
        "name": "Biologia Molecular do Gene",
        "code": 5843,
        "short_code": "BMC",
        "teacher": "Luciane",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/biologia-molecular-do-gene"
    },
    {
        "id": 22,
        "name": "Biologia Molecular do Gene",
        "code": 5843,
        "short_code": "BMC",
        "teacher": "Luciane",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/biologia-molecular-do-gene"
    },
    {
        "id": 23,
        "name": "Bioquímica I",
        "code": 5842,
        "short_code": "BIOQI",
        "teacher": "Martin",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/bioquimica-i"
    },
    {
        "id": 24,
        "name": "Bioquímica I",
        "code": 5842,
        "short_code": "BIOQI",
        "teacher": "Martin",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/bioquimica-i"
    },
    {
        "id": 25,
        "name": "Bioquímica II",
        "code": 5847,
        "short_code": "BIOQII",
        "teacher": "Katia Conceicao",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/bioquimica-ii"
    },
    {
        "id": 26,
        "name": "Bioquímica II",
        "code": 5847,
        "short_code": "BIOQII",
        "teacher": "Katia Conceicao",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/bioquimica-ii"
    },
    {
        "id": 27,
        "name": "Biossensores",
        "code": 5933,
        "short_code": "BIOSEN",
        "teacher": "Marli",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/biossensores"
    },
    {
        "id": 28,
        "name": "Biotecnologia Ambiental I",
        "code": 5857,
        "short_code": "BAI",
        "teacher": "Danielle",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/biotecnologia-ambiental-i"
    },
    {
        "id": 29,
        "name": "Biotecnologia Ambiental I",
        "code": 5857,
        "short_code": "BAI",
        "teacher": "Danielle",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/biotecnologia-ambiental-i"
    },
    {
        "id": 30,
        "name": "Biotecnologia Animal",
        "code": 5858,
        "short_code": "BIOTECANI",
        "teacher": "Loures",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/biotecnologia-animal"
    },
    {
        "id": 31,
        "name": "Biotecnologia de Energias Renováveis II",
        "code": 5063,
        "short_code": "BIOENERII",
        "teacher": "Danielle",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/biotecnologia-de-energias-renovaveis-ii"
    },
    {
        "id": 32,
        "name": "Botânica e Fisiologia Vegetal",
        "code": 5859,
        "short_code": "BFVPPC",
        "teacher": "Michael",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/botanica-e-fisiologia-vegetal-ppc"
    },
    {
        "id": 33,
        "name": "Cálculo Numérico",
        "code": 2828,
        "short_code": "CN",
        "teacher": "Felipe",
        "class": "IA",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Quarta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/calculo-numerico"
    },
    {
        "id": 34,
        "name": "Cálculo Numérico",
        "code": 2828,
        "short_code": "CN",
        "teacher": "Lobosco",
        "class": "IB",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/calculo-numerico"
    },
    {
        "id": 35,
        "name": "Cálculo Numérico",
        "code": 2828,
        "short_code": "CN",
        "teacher": "Leduíno",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/calculo-numerico"
    },
    {
        "id": 36,
        "name": "Cálculo Numérico",
        "code": 2828,
        "short_code": "CN",
        "teacher": "Lobosco",
        "class": "NB",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/calculo-numerico"
    },
    {
        "id": 37,
        "name": "Cerâmicas Refratárias",
        "code": 5875,
        "short_code": "CREF",
        "teacher": "Albers",
        "class": "I",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Sexta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/ceramicas-refratarias"
    },
    {
        "id": 38,
        "name": "Ciência e Tecnologia dos Materiais",
        "code": 4764,
        "short_code": "CTM",
        "teacher": "Gisele",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-materiais"
    },
    {
        "id": 39,
        "name": "Ciência e Tecnologia dos Materiais",
        "code": 4764,
        "short_code": "CTM",
        "teacher": "Leonardo",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-materiais"
    },
    {
        "id": 40,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Vanessa Pereira",
        "class": "IA",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 41,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Vanessa Pereira",
        "class": "IB",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 42,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Evandro",
        "class": "IC",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 43,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Walter",
        "class": "ID",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 44,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Walter",
        "class": "NA",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 45,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Evandro",
        "class": "NB",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 46,
        "name": "Circuitos Elétricos I",
        "code": 5902,
        "short_code": "CE",
        "teacher": "Henrique Amorim",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/circuitos-eletricos-i"
    },
    {
        "id": 47,
        "name": "Circuitos Elétricos I",
        "code": 5902,
        "short_code": "CE",
        "teacher": "Henrique Amorim",
        "class": "IB",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/circuitos-eletricos-i"
    },
    {
        "id": 48,
        "name": "Circuitos Elétricos I",
        "code": 5902,
        "short_code": "CE",
        "teacher": "Edson Fernandes",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/circuitos-eletricos-i"
    },
    {
        "id": 49,
        "name": "Compiladores",
        "code": 2615,
        "short_code": "COMP",
        "teacher": "Rodrigo Contreras",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/compiladores"
    },
    {
        "id": 50,
        "name": "Compiladores",
        "code": 2615,
        "short_code": "COMP",
        "teacher": "Galvão",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/compiladores"
    },
    {
        "id": 51,
        "name": "Computação Gráfica",
        "code": 3051,
        "short_code": "CG",
        "teacher": "Ana",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/computacao-grafica"
    },
    {
        "id": 52,
        "name": "Computação Gráfica",
        "code": 3051,
        "short_code": "CG",
        "teacher": "Ana",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/computacao-grafica"
    },
    {
        "id": 53,
        "name": "Controle de Sistemas Dinâmicos",
        "code": 5386,
        "short_code": "CSD",
        "teacher": "Paiva",
        "class": "I",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Segunda",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/controle-sistemas-dinamicos"
    },
    {
        "id": 54,
        "name": "Controle de Sistemas Dinâmicos",
        "code": 5386,
        "short_code": "CSD",
        "teacher": "Sérgio",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/controle-sistemas-dinamicos"
    },
    {
        "id": 55,
        "name": "Cultura dos Jogos Digitais",
        "code": 6076,
        "short_code": "CJD",
        "teacher": "Vanessa Pereira",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/cultura-jogos-digitais"
    },
    {
        "id": 56,
        "name": "Desenho Técnico Básico",
        "code": 5900,
        "short_code": "DT",
        "teacher": "Shida",
        "class": "IA",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/desenho-tecnico-basico"
    },
    {
        "id": 57,
        "name": "Desenho Técnico Básico",
        "code": 5900,
        "short_code": "DT",
        "teacher": "Shida",
        "class": "IB",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/desenho-tecnico-basico"
    },
    {
        "id": 58,
        "name": "Desenho Técnico Básico",
        "code": 5900,
        "short_code": "DT",
        "teacher": "Shida",
        "class": "NA",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/desenho-tecnico-basico"
    },
    {
        "id": 59,
        "name": "Desenho Técnico Básico",
        "code": 5900,
        "short_code": "DT",
        "teacher": "Shida",
        "class": "NB",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/desenho-tecnico-basico"
    },
    {
        "id": 60,
        "name": "Desenvolvimento de Games",
        "code": 8536,
        "short_code": "DG",
        "teacher": "Vanessa Pereira",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/desenvolvimento-games"
    },
    {
        "id": 61,
        "name": "Desenvolvimento de Games",
        "code": 8536,
        "short_code": "DG",
        "teacher": "Cappabianco",
        "class": "N",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/desenvolvimento-games"
    },
    {
        "id": 62,
        "name": "Ecologia Avançada",
        "code": 5869,
        "short_code": "ECOAVAN",
        "teacher": "Amado",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/ecologia-avancada"
    },
    {
        "id": 65,
        "name": "ECOS EC",
        "code": null,
        "short_code": "EE",
        "teacher": "Marcorin",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00",
            "08h00 - 10h00",
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta"
        ],
        "course": "CFE-I",
        "term": "10",
        "description_url": ""
    },
    {
        "id": 67,
        "name": "Eletrônica",
        "code": 8521,
        "short_code": "ELE",
        "teacher": "Gurjão",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/eletronica"
    },
    {
        "id": 68,
        "name": "Eletrônica",
        "code": 8521,
        "short_code": "ELE",
        "teacher": "Aoki",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/eletronica"
    },
    {
        "id": 69,
        "name": "Engenharia Bioquímica II",
        "code": 5851,
        "short_code": "EBIOIIPPC",
        "teacher": "Elisabeth",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/engenharia-bioquimica-ii-ppc"
    },
    {
        "id": 70,
        "name": "Engenharia Clínica Hospitalar Aplicada",
        "code": 6107,
        "short_code": "ECHA",
        "teacher": "Matheus",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/engenharia-clinica-hospitalar-aplicada"
    },
    {
        "id": 71,
        "name": "Engenharia de Microestrutura de Metais e Ligas",
        "code": 9689,
        "short_code": "EMML",
        "teacher": "Katia Cardoso",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/engenharia-de-microestrutura-de-metais-e-ligas"
    },
    {
        "id": 72,
        "name": "Engenharia de Software",
        "code": 2614,
        "short_code": "ES",
        "teacher": "Fabio Silveira",
        "class": "I",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/engenharia-software"
    },
    {
        "id": 73,
        "name": "Engenharia de Software",
        "code": 2614,
        "short_code": "ES",
        "teacher": "Otávio",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/engenharia-software"
    },
    {
        "id": 74,
        "name": "Engenharia Médica Aplicada",
        "code": 6112,
        "short_code": "EMEDA",
        "teacher": "Adenauer",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "10",
        "description_url": "https://ajudauni.com/subject/engenharia-medica-aplicada"
    },
    {
        "id": 75,
        "name": "Engenharia Médica Aplicada",
        "code": 6112,
        "short_code": "EMEDA",
        "teacher": "Adenauer",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-N",
        "term": "10",
        "description_url": "https://ajudauni.com/subject/engenharia-medica-aplicada"
    },
    {
        "id": 76,
        "name": "Ensaio de Materiais",
        "code": 5387,
        "short_code": "ENSMAT",
        "teacher": "Dilermando",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/ensaios-de-materiais"
    },
    {
        "id": 77,
        "name": "Ensaio de Materiais",
        "code": 5387,
        "short_code": "ENSMAT",
        "teacher": "Dilermando",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/ensaios-de-materiais"
    },
    {
        "id": 78,
        "name": "Equações Diferenciais Ordinárias",
        "code": 6094,
        "short_code": "EDO",
        "teacher": "Karen",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/equacoes-diferenciais-ordinarias"
    },
    {
        "id": 79,
        "name": "Equações Diferenciais Ordinárias",
        "code": 6094,
        "short_code": "EDO",
        "teacher": "Cláudia Aline",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/equacoes-diferenciais-ordinarias"
    },
    {
        "id": 80,
        "name": "Experimentando a Engenharia de Materiais",
        "code": 10012,
        "short_code": "EEM",
        "teacher": "Albers",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": ""
    },
    {
        "id": 81,
        "name": "Farmacologia Molecular",
        "code": 5140,
        "short_code": "FM",
        "teacher": "Flavio Aimbire",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/farmacologia-molecular"
    },
    {
        "id": 82,
        "name": "Fenômenos do Contínuo Experimental",
        "code": 5364,
        "short_code": "FECONTE",
        "teacher": "Fabiano",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fenomenos-continuo-experimental"
    },
    {
        "id": 83,
        "name": "Fenômenos do Contínuo Experimental",
        "code": 5364,
        "short_code": "FECONTE",
        "teacher": "Fabiano",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fenomenos-continuo-experimental"
    },
    {
        "id": 84,
        "name": "Fenômenos Eletromagnéticos",
        "code": 4748,
        "short_code": "FEMAG",
        "teacher": "Kelly",
        "class": "IA",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fenomenos-eletromagneticos"
    },
    {
        "id": 85,
        "name": "Fenômenos Eletromagnéticos",
        "code": 4748,
        "short_code": "FEMAG",
        "teacher": "Kelly",
        "class": "IB",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fenomenos-eletromagneticos"
    },
    {
        "id": 86,
        "name": "Fenômenos Eletromagnéticos",
        "code": 4748,
        "short_code": "FEMAG",
        "teacher": "Nirton",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fenomenos-eletromagneticos"
    },
    {
        "id": 87,
        "name": "Fenômenos Eletromagnéticos",
        "code": 4748,
        "short_code": "FEMAG",
        "teacher": "Nirton",
        "class": "NB",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fenomenos-eletromagneticos"
    },
    {
        "id": 88,
        "name": "Fenômenos Mecânicos",
        "code": 4369,
        "short_code": "FEMEC",
        "teacher": "Thaciana",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fenomenos-mecanicos"
    },
    {
        "id": 89,
        "name": "Fenômenos Mecânicos",
        "code": 4369,
        "short_code": "FEMEC",
        "teacher": "Thaciana",
        "class": "IB",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fenomenos-mecanicos"
    },
    {
        "id": 90,
        "name": "Fenômenos Mecânicos",
        "code": 4369,
        "short_code": "FEMEC",
        "teacher": "Antonelli",
        "class": "IC",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Quarta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fenomenos-mecanicos"
    },
    {
        "id": 91,
        "name": "Fenômenos Mecânicos",
        "code": 4369,
        "short_code": "FEMEC",
        "teacher": "Espírito",
        "class": "ID",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fenomenos-mecanicos"
    },
    {
        "id": 92,
        "name": "Fenômenos Mecânicos",
        "code": 4369,
        "short_code": "FEMEC",
        "teacher": "Espírito",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fenomenos-mecanicos"
    },
    {
        "id": 93,
        "name": "Fenômenos Mecânicos",
        "code": 4369,
        "short_code": "FEMEC",
        "teacher": "Manuel",
        "class": "NB",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fenomenos-mecanicos"
    },
    {
        "id": 94,
        "name": "Fisiologia Humana II",
        "code": 8272,
        "short_code": "FHII",
        "teacher": "Tatiana",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fisiologia-humana-ii"
    },
    {
        "id": 95,
        "name": "Fisiologia Humana II",
        "code": 8272,
        "short_code": "FHII",
        "teacher": "Tatiana",
        "class": "IB",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fisiologia-humana-ii"
    },
    {
        "id": 96,
        "name": "Fisiologia Humana II",
        "code": 8272,
        "short_code": "FHII",
        "teacher": "Flavio Aimbire",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fisiologia-humana-ii"
    },
    {
        "id": 97,
        "name": "Funções Analíticas",
        "code": 3584,
        "short_code": "FUAN",
        "teacher": "Leandro",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Quarta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/funcoes-analiticas"
    },
    {
        "id": 98,
        "name": "Funções Analíticas",
        "code": 3584,
        "short_code": "FUAN",
        "teacher": "Ana Moreira",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/funcoes-analiticas"
    },
    {
        "id": 99,
        "name": "Fundamentos da Eng. Bioquímica",
        "code": 5119,
        "short_code": "FEB",
        "teacher": "Saraiva",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fundamentos-de-engenharia-bioquimica"
    },
    {
        "id": 100,
        "name": "Fundamentos da Eng. Bioquímica",
        "code": 5119,
        "short_code": "FEB",
        "teacher": "Elisabeth",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/fundamentos-de-engenharia-bioquimica"
    },
    {
        "id": 101,
        "name": "Fundamentos de Administração",
        "code": 9794,
        "short_code": "FDA",
        "teacher": "Iraci",
        "class": "I",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/fundamentos-administração"
    },
    {
        "id": 102,
        "name": "Fundamentos de Biologia Moderna",
        "code": 5703,
        "short_code": "FBM",
        "teacher": "Vilaverde",
        "class": "IA",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fundamentos-biologia-moderna"
    },
    {
        "id": 103,
        "name": "Fundamentos de Biologia Moderna",
        "code": 5703,
        "short_code": "FBM",
        "teacher": "Vilaverde",
        "class": "IB",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/fundamentos-biologia-moderna"
    },
    {
        "id": 104,
        "name": "Fundamentos de Eletrônica Aplicada",
        "code": 9803,
        "short_code": "FEA",
        "teacher": "Fernanda",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/fundamentos-eletronica-aplicada"
    },
    {
        "id": 105,
        "name": "Fundamentos de Eletrônica Aplicada",
        "code": 9803,
        "short_code": "FEA",
        "teacher": "Fernanda",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/fundamentos-eletronica-aplicada"
    },
    {
        "id": 106,
        "name": "Geometria Analítica",
        "code": 2650,
        "short_code": "GA",
        "teacher": "Renato Martins",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/geometria-analitica"
    },
    {
        "id": 107,
        "name": "Geometria Analítica",
        "code": 2650,
        "short_code": "GA",
        "teacher": "Renato Martins",
        "class": "IB",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/geometria-analitica"
    },
    {
        "id": 108,
        "name": "Geometria Analítica",
        "code": 2650,
        "short_code": "GA",
        "teacher": "Vanessa Paschoa",
        "class": "IC",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/geometria-analitica"
    },
    {
        "id": 109,
        "name": "Geometria Analítica",
        "code": 2650,
        "short_code": "GA",
        "teacher": "Ana Moreira",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/geometria-analitica"
    },
    {
        "id": 110,
        "name": "Geometria Analítica",
        "code": 2650,
        "short_code": "GA",
        "teacher": "Thadeu",
        "class": "NB",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/geometria-analitica"
    },
    {
        "id": 111,
        "name": "Gestão de projetos",
        "code": 5886,
        "short_code": "GESTPROJ",
        "teacher": "Iraci",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/gestao-de-projetos"
    },
    {
        "id": 112,
        "name": "Imunologia Aplicada",
        "code": 5864,
        "short_code": "IMUNOAP",
        "teacher": "Loures",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-N",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/imunologia-aplicada"
    },
    {
        "id": 113,
        "name": "Inferência e Análise de Regressão",
        "code": 4401,
        "short_code": "IAR",
        "teacher": "Luzia",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/inferencia-e-analise-de-regressao"
    },
    {
        "id": 114,
        "name": "Inferência e Análise de Regressão",
        "code": 4401,
        "short_code": "IAR",
        "teacher": "Luzia",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/inferencia-e-analise-de-regressao"
    },
    {
        "id": 115,
        "name": "Iniciação aos PEPICTs II",
        "code": 9820,
        "short_code": "IPEPICTII",
        "teacher": "Edson Fernandes",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/iniciacao-aos-pepict-ii"
    },
    {
        "id": 116,
        "name": "Iniciação aos PEPICTs II",
        "code": 9820,
        "short_code": "IPEPICTII",
        "teacher": "Edson Fernandes",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/iniciacao-aos-pepict-ii"
    },
    {
        "id": 117,
        "name": "Instrumentos Biomédicos",
        "code": 8273,
        "short_code": "INSTRUMED",
        "teacher": "Saraiva",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/instrumentos-biomedicos"
    },
    {
        "id": 118,
        "name": "Internet das Coisas",
        "code": 9881,
        "short_code": "IOT",
        "teacher": "Gabriel",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/internet-coisas"
    },
    {
        "id": 119,
        "name": "Internet das Coisas",
        "code": 9881,
        "short_code": "IOT",
        "teacher": "Gabriel",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/internet-coisas"
    },
    {
        "id": 120,
        "name": "Introdução à Biologia de Sistemas",
        "code": 5390,
        "short_code": "INTROBDS",
        "teacher": "André",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-biologia-de-sistemas"
    },
    {
        "id": 121,
        "name": "Introdução à Biologia de Sistemas",
        "code": 5390,
        "short_code": "INTROBDS",
        "teacher": "André",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-biologia-de-sistemas"
    },
    {
        "id": 122,
        "name": "Introdução a Biotecnologia",
        "code": 4760,
        "short_code": "IBIO",
        "teacher": "Dayane",
        "class": "I",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/introducao-biotecnologia"
    },
    {
        "id": 123,
        "name": "Introdução a Biotecnologia",
        "code": 4760,
        "short_code": "IBIO",
        "teacher": "Dayane",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/introducao-biotecnologia"
    },
    {
        "id": 124,
        "name": "Introdução à Economia",
        "code": 9793,
        "short_code": "IE",
        "teacher": "Scriptore",
        "class": "IA",
        "hours": [
            "08h00 - 10h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-economia"
    },
    {
        "id": 125,
        "name": "Introdução à Economia",
        "code": 9793,
        "short_code": "IE",
        "teacher": "Scriptore",
        "class": "IB",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-economia"
    },
    {
        "id": 126,
        "name": "Introdução à Economia",
        "code": 9793,
        "short_code": "IE",
        "teacher": "Scriptore",
        "class": "NA",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-economia"
    },
    {
        "id": 127,
        "name": "Introdução à Economia",
        "code": 9793,
        "short_code": "IE",
        "teacher": "Scriptore",
        "class": "NB",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-economia"
    },
    {
        "id": 128,
        "name": "Introdução à Eletrotécnica",
        "code": 5453,
        "short_code": "IELETRO",
        "teacher": "Fabiano",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-eletrotecnica"
    },
    {
        "id": 129,
        "name": "Introdução à Eletrotécnica",
        "code": 5453,
        "short_code": "IELETRO",
        "teacher": "Fabiano",
        "class": "N",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/introducao-eletrotecnica"
    },
    {
        "id": 130,
        "name": "Introdução à Engenharia de Materiais",
        "code": 4373,
        "short_code": "IENGM",
        "teacher": "Passador",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/engenharia-materiais"
    },
    {
        "id": 131,
        "name": "Introdução à Engenharia de Materiais",
        "code": 4373,
        "short_code": "IENGM",
        "teacher": "Albers",
        "class": "N",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/engenharia-materiais"
    },
    {
        "id": 132,
        "name": "Introdução à Geometria Diferencial",
        "code": 6085,
        "short_code": "IGD",
        "teacher": "Patrícia",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/geometria-diferencial"
    },
    {
        "id": 133,
        "name": "Introdução à Nanotecnologia",
        "code": 5169,
        "short_code": "INANO",
        "teacher": "Elias",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/introducao-nanotecnologia"
    },
    {
        "id": 134,
        "name": "Introdução à Nanotecnologia",
        "code": 5169,
        "short_code": "INANO",
        "teacher": "Elias",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/introducao-nanotecnologia"
    },
    {
        "id": 135,
        "name": "Introdução à Pesquisa Operacional",
        "code": 4409,
        "short_code": "IPESQOP",
        "teacher": "Chaves",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-N",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/introducao-pesquisa-operacional"
    },
    {
        "id": 136,
        "name": "Introdução à Redes Neurais Artificiais",
        "code": 3489,
        "short_code": "IRN",
        "teacher": "Quiles",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/introducao-redes-neurais"
    },
    {
        "id": 137,
        "name": "Lab. Biologia Molecular e Celular",
        "code": 4375,
        "short_code": "LABBMC",
        "teacher": "Claudia Campos",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-biologia-molecular-celular"
    },
    {
        "id": 138,
        "name": "Lab. Biologia Molecular e Celular",
        "code": 4375,
        "short_code": "LABBMC",
        "teacher": "Claudia Campos",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-biologia-molecular-celular"
    },
    {
        "id": 139,
        "name": "Lab. De Sistemas Computacionais (Circuitos Digitais)",
        "code": 5928,
        "short_code": "LABCD",
        "teacher": "Sérgio",
        "class": "IA",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-circuitos-digitais"
    },
    {
        "id": 140,
        "name": "Lab. De Sistemas Computacionais (Circuitos Digitais)",
        "code": 5928,
        "short_code": "LABCD",
        "teacher": "Marcorin",
        "class": "IB",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-circuitos-digitais"
    },
    {
        "id": 141,
        "name": "Lab. De Sistemas Computacionais (Circuitos Digitais)",
        "code": 5928,
        "short_code": "LABCD",
        "teacher": "Marcorin",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-circuitos-digitais"
    },
    {
        "id": 142,
        "name": "Lab.de Sistemas Computacionais: SO",
        "code": 6102,
        "short_code": "LABSO",
        "teacher": "Tiago Oliveira",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/laboratorio-sistemas-operacionais"
    },
    {
        "id": 143,
        "name": "Lab.de Sistemas Computacionais: SO",
        "code": 6102,
        "short_code": "LABSO",
        "teacher": "Tiago Oliveira",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-N",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/laboratorio-sistemas-operacionais"
    },
    {
        "id": 144,
        "name": "Laboratório de Bioquímica Analítica",
        "code": 5850,
        "short_code": "LABBA",
        "teacher": "Katia Conceicao",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Quinta",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-bioquimica-analitica"
    },
    {
        "id": 145,
        "name": "Laboratório de Circuitos Elétricos",
        "code": 6089,
        "short_code": "LABCE",
        "teacher": "Gabriel",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Terça"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/laboratorio-circuitos-eletricos"
    },
    {
        "id": 146,
        "name": "Laboratório de Circuitos Elétricos",
        "code": 6089,
        "short_code": "LABCE",
        "teacher": "Gabriel",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda"
        ],
        "course": "CFE-N",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/laboratorio-circuitos-eletricos"
    },
    {
        "id": 147,
        "name": "Laboratório de Eletrônica Digital",
        "code": 5930,
        "short_code": "LABED",
        "teacher": "Karina",
        "class": "IA",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-eletrônica-digital"
    },
    {
        "id": 148,
        "name": "Laboratório de Eletrônica Digital",
        "code": 5930,
        "short_code": "LABED",
        "teacher": "Karina",
        "class": "IB",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-eletrônica-digital"
    },
    {
        "id": 149,
        "name": "Laboratório de Eletrônica Digital",
        "code": 5930,
        "short_code": "LABED",
        "teacher": "Gurjão",
        "class": "IC",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-eletrônica-digital"
    },
    {
        "id": 150,
        "name": "Laboratório de Eletrônica Digital",
        "code": 5930,
        "short_code": "LABED",
        "teacher": "Karina",
        "class": "NA",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-eletrônica-digital"
    },
    {
        "id": 151,
        "name": "Laboratório de Eletrônica Digital",
        "code": 5930,
        "short_code": "LABED",
        "teacher": "Karina",
        "class": "NB",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-eletrônica-digital"
    },
    {
        "id": 152,
        "name": "Laboratório de Engenharia Bioquímica",
        "code": 5852,
        "short_code": "LABEB",
        "teacher": "Elisabeth",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Segunda",
            "Segunda"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-engenharia-bioquimica"
    },
    {
        "id": 153,
        "name": "Laboratório de Microbiologia",
        "code": 5848,
        "short_code": "LABMICROB",
        "teacher": "Elisa",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-microbiologia"
    },
    {
        "id": 154,
        "name": "Laboratório de Microbiologia",
        "code": 5848,
        "short_code": "LABMICROB",
        "teacher": "Elisa",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/laboratorio-microbiologia"
    },
    {
        "id": 155,
        "name": "Laboratório de Sistemas computacionais - Eng.de Sistemas",
        "code": 6095,
        "short_code": "LABES",
        "teacher": "Tiago Silva",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-engenharia-sistemas"
    },
    {
        "id": 156,
        "name": "Laboratório de Sistemas computacionais - Eng.de Sistemas",
        "code": 6095,
        "short_code": "LABES",
        "teacher": "Tiago Silva",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/laboratorio-engenharia-sistemas"
    },
    {
        "id": 157,
        "name": "Lógica de Programação",
        "code": 9394,
        "short_code": "LP",
        "teacher": "Didier",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/logica-programacao"
    },
    {
        "id": 158,
        "name": "Lógica de Programação",
        "code": 9394,
        "short_code": "LP",
        "teacher": "Didier",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/logica-programacao"
    },
    {
        "id": 159,
        "name": "Matemática Discreta",
        "code": 2201,
        "short_code": "MD",
        "teacher": "Erwin",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-discreta"
    },
    {
        "id": 160,
        "name": "Matemática Discreta",
        "code": 2201,
        "short_code": "MD",
        "teacher": "Erwin",
        "class": "IB",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-discreta"
    },
    {
        "id": 161,
        "name": "Matemática Discreta",
        "code": 2201,
        "short_code": "MD",
        "teacher": "Felipe",
        "class": "IC",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Quarta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-discreta"
    },
    {
        "id": 162,
        "name": "Matemática Discreta",
        "code": 2201,
        "short_code": "MD",
        "teacher": "Robson",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-discreta"
    },
    {
        "id": 163,
        "name": "Matemática Discreta",
        "code": 2201,
        "short_code": "MD",
        "teacher": "Macedo",
        "class": "NB",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-discreta"
    },
    {
        "id": 164,
        "name": "Matemática Geral",
        "code": 5844,
        "short_code": "MGI",
        "teacher": "Karen",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-geral"
    },
    {
        "id": 165,
        "name": "Matemática Geral",
        "code": 5844,
        "short_code": "MGI",
        "teacher": "Daniela Oliveira",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/matematica-geral"
    },
    {
        "id": 166,
        "name": "Mecânica Geral",
        "code": 4770,
        "short_code": "MECG",
        "teacher": "Eudes",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/mecanica-geral"
    },
    {
        "id": 167,
        "name": "Mecânica Geral",
        "code": 4770,
        "short_code": "MECG",
        "teacher": "Eudes",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/mecanica-geral"
    },
    {
        "id": 168,
        "name": "Metalurgia Mecânica",
        "code": 6928,
        "short_code": "METM",
        "teacher": "Danieli",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Terça",
            "Terça"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/metalurgia-mecanica"
    },
    {
        "id": 169,
        "name": "Metodologia da Pesquisa e Comunicação Científica",
        "code": 4374,
        "short_code": "MPCC",
        "teacher": "Gurjão",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/metodologia-pesquisa-comunicacao-cientifica"
    },
    {
        "id": 170,
        "name": "Métodos matemáticos para engenharia",
        "code": 8533,
        "short_code": "MME",
        "teacher": "Paiva",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Segunda",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/metodos-matematicos-engenharia"
    },
    {
        "id": 171,
        "name": "Métodos Numéricos para Eq. Diferenciais",
        "code": 6104,
        "short_code": "MNED",
        "teacher": "Thadeu",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Sexta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/metodos-numericos-para-equacoes-diferenciais"
    },
    {
        "id": 172,
        "name": "Microbiologia Geral",
        "code": 5120,
        "short_code": "MBG",
        "teacher": "Elisa",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/microbiologia-geral"
    },
    {
        "id": 173,
        "name": "Microbiologia Geral",
        "code": 5120,
        "short_code": "MBG",
        "teacher": "Fernando",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/microbiologia-geral"
    },
    {
        "id": 174,
        "name": "Modelagem Computacional",
        "code": 4352,
        "short_code": "MC",
        "teacher": "Lobosco",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/modelagem-computacional"
    },
    {
        "id": 175,
        "name": "Modelagem Computacional",
        "code": 4352,
        "short_code": "MC",
        "teacher": "Lobosco",
        "class": "N",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/modelagem-computacional"
    },
    {
        "id": 176,
        "name": "Mudança do Clima e Sociedade",
        "code": 4774,
        "short_code": "MCS",
        "teacher": "Amado",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/mudanca-clima-sociedade"
    },
    {
        "id": 177,
        "name": "Mudança do Clima e Sociedade",
        "code": 4774,
        "short_code": "MCS",
        "teacher": "Amado",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/mudanca-clima-sociedade"
    },
    {
        "id": 178,
        "name": "Otimização Inteira",
        "code": 5102,
        "short_code": "OI",
        "teacher": "Horácio",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/otimizacao-inteira"
    },
    {
        "id": 179,
        "name": "Praticas em Projetos Extensionistas II",
        "code": 8251,
        "short_code": "PPEII",
        "teacher": "Marli",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/pratica-projetos-extensionistas-ii"
    },
    {
        "id": 180,
        "name": "Praticas em Projetos Extensionistas II",
        "code": 8251,
        "short_code": "PPEII",
        "teacher": "Marli",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/pratica-projetos-extensionistas-ii"
    },
    {
        "id": 181,
        "name": "Probabilidade",
        "code": 3163,
        "short_code": "PROB",
        "teacher": "Sâmia",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/probabilidade"
    },
    {
        "id": 182,
        "name": "Probabilidade",
        "code": 3163,
        "short_code": "PROB",
        "teacher": "Sâmia",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/probabilidade"
    },
    {
        "id": 183,
        "name": "Processamento de Materiais Cerâmicos",
        "code": 5873,
        "short_code": "PMC",
        "teacher": "Leonardo",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Quarta",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/processamento-materiais-ceramicos"
    },
    {
        "id": 184,
        "name": "Processamento de Sinais",
        "code": 8218,
        "short_code": "PS",
        "teacher": "Martini",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/processamento-sinais"
    },
    {
        "id": 185,
        "name": "Processamento de Sinais",
        "code": 8218,
        "short_code": "PS",
        "teacher": "Martini",
        "class": "N",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/processamento-sinais"
    },
    {
        "id": 186,
        "name": "Processamento de Termoplásticos",
        "code": 5879,
        "short_code": "PTERMO",
        "teacher": "Passador",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Terça"
        ],
        "course": "CFE-I",
        "term": "10",
        "description_url": "https://ajudauni.com/subject/processamento-termoplasticos"
    },
    {
        "id": 187,
        "name": "Processamento de Termorrígidos e Elastômeros",
        "code": 9801,
        "short_code": "PDTEE",
        "teacher": "Passador",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/processamento-de-termorrigidos-e-elastomeros"
    },
    {
        "id": 188,
        "name": "Programação Concorrente e Distribuída",
        "code": 3580,
        "short_code": "PCD",
        "teacher": "Álvaro",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/programacao-concorrente"
    },
    {
        "id": 189,
        "name": "Programação Concorrente e Distribuída",
        "code": 3580,
        "short_code": "PCD",
        "teacher": "Denise",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/programacao-concorrente"
    },
    {
        "id": 190,
        "name": "Programação Orientada a Objetos",
        "code": 2471,
        "short_code": "POO",
        "teacher": "Otávio",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/programacao-objeto"
    },
    {
        "id": 191,
        "name": "Programação Orientada a Objetos",
        "code": 2471,
        "short_code": "POO",
        "teacher": "Rodrigo Contreras",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/programacao-objeto"
    },
    {
        "id": 192,
        "name": "Projeto e Análise de Algoritmos",
        "code": 3579,
        "short_code": "PAA",
        "teacher": "Sanderson",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/projeto-analise-algoritmos"
    },
    {
        "id": 193,
        "name": "Projeto e Análise de Algoritmos",
        "code": 3579,
        "short_code": "PAA",
        "teacher": "Reginaldo",
        "class": "IB",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/projeto-analise-algoritmos"
    },
    {
        "id": 194,
        "name": "Projeto e Análise de Algoritmos",
        "code": 3579,
        "short_code": "PAA",
        "teacher": "Reginaldo",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/projeto-analise-algoritmos"
    },
    {
        "id": 195,
        "name": "Projetos em Engenharia Biomédica",
        "code": 6110,
        "short_code": "PEB",
        "teacher": "Urban",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "10",
        "description_url": "https://ajudauni.com/subject/projetos-engenharia-biomedica"
    },
    {
        "id": 196,
        "name": "Projetos em Engenharia Biomédica",
        "code": 6110,
        "short_code": "PEB",
        "teacher": "Urban",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-N",
        "term": "10",
        "description_url": "https://ajudauni.com/subject/projetos-engenharia-biomedica"
    },
    {
        "id": 197,
        "name": "Projetos Sustentáveis em Polímeros",
        "code": 8519,
        "short_code": "PSP",
        "teacher": "Lemes",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Quinta",
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/projetos-sustentaveis-em-polimeros"
    },
    {
        "id": 198,
        "name": "Química Analítica",
        "code": 5883,
        "short_code": "QA",
        "teacher": "Elias",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Quarta",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/quimica-analitica"
    },
    {
        "id": 199,
        "name": "Química Geral",
        "code": 5704,
        "short_code": "QG",
        "teacher": "Raquel",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/quimica-geral"
    },
    {
        "id": 200,
        "name": "Química Geral Experimental",
        "code": 4370,
        "short_code": "QGE",
        "teacher": "Hugo",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/quimica-geral-experimental"
    },
    {
        "id": 201,
        "name": "Química Geral Experimental",
        "code": 4370,
        "short_code": "QGE",
        "teacher": "Hugo",
        "class": "IB",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/quimica-geral-experimental"
    },
    {
        "id": 202,
        "name": "Química Geral Experimental",
        "code": 4370,
        "short_code": "QGE",
        "teacher": "Maraísa",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Sexta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/quimica-geral-experimental"
    },
    {
        "id": 203,
        "name": "Química Geral Experimental",
        "code": 4370,
        "short_code": "QGE",
        "teacher": "Maraísa",
        "class": "NB",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/quimica-geral-experimental"
    },
    {
        "id": 204,
        "name": "Química Orgânica Experimental",
        "code": 4536,
        "short_code": "QOE",
        "teacher": "Joao Batista",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quarta",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/quimica-organica-experimental"
    },
    {
        "id": 205,
        "name": "Reciclagem de Materiais",
        "code": 6674,
        "short_code": "RM",
        "teacher": "Lilia",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/reciclagem-materiais"
    },
    {
        "id": 206,
        "name": "Redes de Computadores",
        "code": 2617,
        "short_code": "RC",
        "teacher": "Kimura",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/redes-computadores"
    },
    {
        "id": 207,
        "name": "Redes de Computadores",
        "code": 2617,
        "short_code": "RC",
        "teacher": "Arlindo",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/redes-computadores"
    },
    {
        "id": 208,
        "name": "Reologia dos Materiais",
        "code": 5785,
        "short_code": "REOM",
        "teacher": "Lilia",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/reologia-materiais"
    },
    {
        "id": 209,
        "name": "RPVMM II",
        "code": 10002,
        "short_code": "R",
        "teacher": "Horácio",
        "class": "I",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": ""
    },
    {
        "id": 210,
        "name": "RPVMM II",
        "code": 10003,
        "short_code": "R",
        "teacher": "Leduíno",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Terça",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": ""
    },
    {
        "id": 211,
        "name": "Segurança da Informação",
        "code": 8288,
        "short_code": "SI",
        "teacher": "Cappabianco",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/seguranca-informacao"
    },
    {
        "id": 212,
        "name": "Seleção de Materiais",
        "code": 9799,
        "short_code": "SELMAT",
        "teacher": "Quinteiro",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/selecao-materiais"
    },
    {
        "id": 213,
        "name": "Seleção de Materiais",
        "code": 9799,
        "short_code": "SELMAT",
        "teacher": "Quinteiro",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/selecao-materiais"
    },
    {
        "id": 214,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Angelo",
        "class": "IA",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 215,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Angelo",
        "class": "IB",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 216,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Castilho",
        "class": "IC",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 217,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Gama",
        "class": "ID",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 218,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Gama",
        "class": "IE",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 219,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Daniela Oliveira",
        "class": "NA",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 220,
        "name": "Séries e Equações Diferenciais Ordinárias",
        "code": 4328,
        "short_code": "SEDO",
        "teacher": "Castilho",
        "class": "NB",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/series-equacoes-diferenciais-ordinarias"
    },
    {
        "id": 221,
        "name": "Sistemas Embarcados",
        "code": 6033,
        "short_code": "SE",
        "teacher": "Fernanda",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/sistemas-embarcados"
    },
    {
        "id": 222,
        "name": "Sistemas Embarcados",
        "code": 6033,
        "short_code": "SE",
        "teacher": "Aoki",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "CFE-N",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/sistemas-embarcados"
    },
    {
        "id": 223,
        "name": "Sistemas Mecânicos",
        "code": 5398,
        "short_code": "SM",
        "teacher": "Kunkel",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Terça"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/sistemas-mecanicos"
    },
    {
        "id": 224,
        "name": "Sistemas Mecânicos",
        "code": 5398,
        "short_code": "SM",
        "teacher": "Kunkel",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/sistemas-mecanicos"
    },
    {
        "id": 235,
        "name": "Tecnologia de Tintas e Vernizes",
        "code": 5782,
        "short_code": "TECTV",
        "teacher": "Maurício",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Quarta",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/tecnologia-tintas-vernizes"
    },
    {
        "id": 236,
        "name": "TECNOLOGIA SOCIAL: PRÁXIS E CONTRA-HEGEMONIA",
        "code": 6072,
        "short_code": "TSPEC",
        "teacher": "Evandro",
        "class": "I",
        "hours": [
            "15h30 - 17h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/tecnologia-social-praxis-e-contra-hegemonia"
    },
    {
        "id": 237,
        "name": "TECNOLOGIA SOCIAL: PRÁXIS E CONTRA-HEGEMONIA",
        "code": 6072,
        "short_code": "TSPEC",
        "teacher": "Evandro",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/tecnologia-social-praxis-e-contra-hegemonia"
    },
    {
        "id": 238,
        "name": "Teoria de Grafos",
        "code": 2975,
        "short_code": "TG",
        "teacher": "Luis Pereira",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/teoria-grafos"
    },
    {
        "id": 239,
        "name": "Teoria dos Números e Criptografia",
        "code": 4406,
        "short_code": "TNC",
        "teacher": "Grasiele",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/teoria-numeros-criptografia"
    },
    {
        "id": 240,
        "name": "Teoria dos Números e Criptografia",
        "code": 4406,
        "short_code": "TNC",
        "teacher": "Robson",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Sexta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/teoria-numeros-criptografia"
    },
    {
        "id": 241,
        "name": "Termodinâmica dos Sólidos",
        "code": 5401,
        "short_code": "TS",
        "teacher": "Gisele",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "13h30 - 15h30"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "BCT-I",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/termodinamica-solidos"
    },
    {
        "id": 242,
        "name": "Termodinâmica dos Sólidos",
        "code": 5401,
        "short_code": "TS",
        "teacher": "Capella",
        "class": "N",
        "hours": [
            "21h00 - 23h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/termodinamica-solidos"
    },
    {
        "id": 243,
        "name": "Termodinâmica Química",
        "code": 4773,
        "short_code": "TQ",
        "teacher": "Sílvia",
        "class": "I",
        "hours": [
            "15h30 - 17h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-I",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/termodinamica-quimica"
    },
    {
        "id": 244,
        "name": "Termodinâmica Química",
        "code": 4773,
        "short_code": "TQ",
        "teacher": "Sílvia",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "19h00 - 21h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "BCT-N",
        "term": "4",
        "description_url": "https://ajudauni.com/subject/termodinamica-quimica"
    },
    {
        "id": 247,
        "name": "Tópicos Interdisciplinares em Computação V (Neurociência Computacional)",
        "code": 10001,
        "short_code": "TIC(C",
        "teacher": "Elbert",
        "class": "I",
        "hours": [
            "08h00 - 10h00",
            "08h00 - 10h00"
        ],
        "days": [
            "Segunda",
            "Quarta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": ""
    },
    {
        "id": 248,
        "name": "Tópicos Interdisciplinares em Computação VII (Acessibilidade Digital)",
        "code": 10004,
        "short_code": "TICV(D",
        "teacher": "Sílvia",
        "class": "I",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": ""
    },
    {
        "id": 249,
        "name": "Tópicos Interdisciplinares em Computação VII (Acessibilidade Digital)",
        "code": 10005,
        "short_code": "TICV(D",
        "teacher": "Sílvia",
        "class": "N",
        "hours": [
            "19h00 - 21h00"
        ],
        "days": [
            "Quinta"
        ],
        "course": "CFE-N",
        "term": "8",
        "description_url": ""
    },
    {
        "id": 250,
        "name": "Tópicos Interdisciplinas em Computação VI (Competições em Ciências de Dados)",
        "code": 10013,
        "short_code": "TICV(C",
        "teacher": "Márcio",
        "class": "I",
        "hours": [
            "10h00 - 12h00",
            "10h00 - 12h00"
        ],
        "days": [
            "Terça",
            "Quinta"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": ""
    },
    {
        "id": 251,
        "name": "Tratamentos Térmicos",
        "code": 5876,
        "short_code": "TRATER",
        "teacher": "Capella",
        "class": "I",
        "hours": [
            "13h30 - 15h30",
            "15h30 - 17h30"
        ],
        "days": [
            "Segunda",
            "Segunda"
        ],
        "course": "CFE-I",
        "term": "8",
        "description_url": "https://ajudauni.com/subject/tratamentos-termicos"
    },
    {
        "id": 252,
        "name": "Vidros, Vitrocerâmicos e Vidrados",
        "code": 5402,
        "short_code": "VVV",
        "teacher": "Eliandra",
        "class": "N",
        "hours": [
            "19h00 - 21h00",
            "21h00 - 23h00"
        ],
        "days": [
            "Quinta",
            "Quinta"
        ],
        "course": "BCT-N",
        "term": "6",
        "description_url": "https://ajudauni.com/subject/vidros-vitroceramicos-e-vidrados"
    },
    {
        "id": 253,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Raiane",
        "class": "IE",
        "hours": [
            "10h00 - 12h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 254,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Raiane",
        "class": "IF",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 255,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Raiane",
        "class": "IG",
        "hours": [
            "13h30 - 15h30"
        ],
        "days": [
            "Sexta"
        ],
        "course": "BCT-I",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },
    {
        "id": 256,
        "name": "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)",
        "code": 5870,
        "short_code": "CTSA",
        "teacher": "Raiane",
        "class": "NC",
        "hours": [
            "21h00 - 23h00"
        ],
        "days": [
            "Terça"
        ],
        "course": "BCT-N",
        "term": "2",
        "description_url": "https://ajudauni.com/subject/ciencia-tecnologia-sociedad-ambiente"
    },

];

// Função para adaptar os dias da semana
const formatarDia = (diaOriginal) => {
    const diasMap = {
        "segunda": "Segunda-feira",
        "terça": "Terça-feira",
        "quarta": "Quarta-feira",
        "quinta": "Quinta-feira",
        "sexta": "Sexta-feira"
    };
    const diaLimpo = diaOriginal.toLowerCase().split('-')[0].trim();
    return diasMap[diaLimpo] || diaOriginal;
};

const materiasOfertadas = [];

// Adapta o JSON para o formato lido pela interface
novaBaseJson.forEach(item => {
    item.days.forEach((dia, index) => {
        const horarioStart = item.hours[index].split(' - ')[0].trim();
        
        // Verificação de segurança para o código da matéria
        const codigoSeguro = item.code ? item.code.toString() : "S/N";
        
        materiasOfertadas.push({
            id: parseInt(`${item.id}${index}`), 
            termo: `Termo ${item.term}`,
            codigo: codigoSeguro,
            nome: item.name,
            turma: item.class,
            professor: item.teacher,
            dia: formatarDia(dia),
            horario: horarioStart
        });
    });
});

let gradeSalvaIds = JSON.parse(localStorage.getItem('minhaGradeIds_2026')) || [];
let notasSalvas = JSON.parse(localStorage.getItem('minhasNotas_2026')) || {};

// ==========================================================
// 3. FUNÇÃO PARA RENDERIZAR A INTERFACE DA GRADE HORÁRIA
// ==========================================================
function desenharGrade() {
    const container = document.getElementById('grade-container');

    let html = `<div class="grid grid-cols-6 border border-gray-300 rounded shadow-sm bg-white overflow-hidden">`;
    
    html += `<div class="bg-gray-200 p-3 border border-gray-300 flex items-center justify-center font-bold text-xs text-gray-600">Horário</div>`;
    diasSemana.forEach(dia => {
        html += `<div class="bg-gray-200 p-3 border border-gray-300 font-bold text-center text-xs text-gray-700">${dia}</div>`;
    });
    
    horarios.forEach(horario => {
        html += `<div class="bg-gray-100 p-2 font-bold text-center flex flex-col items-center justify-center border border-gray-300 text-xs text-gray-600 h-24">
                    <span>${horario}</span>
                 </div>`;
        
        diasSemana.forEach(dia => {
            const materiaNaCelula = materiasOfertadas.find(m => 
                gradeSalvaIds.includes(m.id) && m.dia === dia && m.horario === horario
            );
            
            let conteudoCelula = "";
            let estiloDesign = "bg-white hover:bg-blue-50/40 cursor-pointer";
            
            if (materiaNaCelula) {
                estiloDesign = `cursor-pointer border-2 transition-all shadow-sm relative`;
                
                const notaAtual = notasSalvas[materiaNaCelula.id] || "";
                
                const htmlNota = notaAtual 
                    ? `<div onclick="editarNota(event, ${materiaNaCelula.id})" class="text-[10.5px] text-gray-900 mt-1 font-medium hover:underline break-words">📌 ${notaAtual}</div>` 
                    : `<div onclick="editarNota(event, ${materiaNaCelula.id})" class="text-[9px] text-gray-500 mt-1 hover:text-gray-900 underline font-medium transition-colors">Adicionar nota</div>`;
            
                conteudoCelula = `
                    <div class="text-center p-1 w-full flex flex-col items-center justify-center h-full">
                        <p class="font-bold text-[11px] leading-tight px-1">${materiaNaCelula.nome}</p>
                        <p class="text-[10px] opacity-90 font-medium mt-0.5">T: ${materiaNaCelula.turma} - ${materiaNaCelula.professor}</p>
                        <p class="text-[9px] opacity-75 font-mono mb-0.5">Cod: ${materiaNaCelula.codigo}</p>
                        ${htmlNota}
                    </div>
                `;
            } else {
                const inputBusca = document.getElementById('busca-materia');
                const busca = inputBusca ? normalizar(inputBusca.value) : "";
                
                const possuiOfertaNesseHorario = materiasOfertadas.some(m => 
                    m.dia === dia && 
                    m.horario === horario && 
                    (normalizar(m.nome).includes(busca) || normalizar(m.codigo).includes(busca))
                );
                if (possuiOfertaNesseHorario) {
                    conteudoCelula = `<span class="text-blue-400 font-bold text-lg opacity-0 hover:opacity-100 transition-opacity">+</span>`;
                }
            }
            
            const atributoStyleColor = materiaNaCelula ? obterCorMateria(materiaNaCelula.codigo) : "";

            html += `
                <div 
                    onclick="celulaClicada('${dia}', '${horario}')" 
                    class="h-24 p-1 border border-gray-200 flex flex-col items-center justify-center transition-colors ${estiloDesign}"
                    ${atributoStyleColor}
                >
                    ${conteudoCelula}
                </div>
            `;
        });
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// ==========================================================
// 4. LÓGICA DO CLIQUE NAS CÉLULAS E EXIBIÇÃO DO MODAL
// ==========================================================
let diaAtualSelecionado = "";
let horarioAtualSelecionado = "";

window.celulaClicada = function(dia, horario) {
    diaAtualSelecionado = dia;
    horarioAtualSelecionado = horario;
    
    const inputBusca = document.getElementById('busca-materia');
    const busca = inputBusca ? normalizar(inputBusca.value) : "";

    const opcoesDisponiveis = materiasOfertadas.filter(m => 
        m.dia === dia && 
        m.horario === horario && 
        (normalizar(m.nome).includes(busca) || normalizar(m.codigo).includes(busca))
    );

    document.getElementById('modal-titulo').innerText = `Matérias para ${dia} às ${horario}`;
    
    const listaContainer = document.getElementById('lista-materias');
    listaContainer.innerHTML = "";
    
    const materiaJaSelecionada = materiasOfertadas.find(m => 
        gradeSalvaIds.includes(m.id) && m.dia === dia && m.horario === horario
    );
    
    if (opcoesDisponiveis.length === 0 && !materiaJaSelecionada) {
        listaContainer.innerHTML = `<p class="text-gray-500 text-sm italic py-4 text-center">Nenhuma matéria ofertada neste termo para este horário.</p>`;
    } else {
        opcoesDisponiveis.forEach(materia => {
            const jaEstaNaGrade = gradeSalvaIds.includes(materia.id);
            const estiloHtmlCor = obterCorMateria(materia.codigo); 
            
            const btn = document.createElement('button');
            btn.className = `w-full text-left p-3 border rounded-lg transition-all flex justify-between items-center ${jaEstaNaGrade ? 'ring-2 ring-offset-2 ring-gray-700 font-bold' : 'hover:scale-[1.01]'}`;
            
            btn.setAttribute('style', estiloHtmlCor.replace('style="', '').slice(0, -1));
            btn.innerHTML = `
                <div class="flex flex-col">
                    <span class="text-sm font-bold">${materia.nome} (Turma ${materia.turma})</span>
                    <span class="text-xs opacity-90">Prof: ${materia.professor} | Código: ${materia.codigo}</span>
                    <span class="text-[10px] font-semibold opacity-75 mt-0.5 uppercase">${materia.termo}</span>
                </div>
                ${jaEstaNaGrade ? '<span class="text-xs font-bold bg-gray-800 text-white px-2 py-0.5 rounded">Ativa</span>' : '<span class="text-xs opacity-60">Selecionar</span>'}
            `;
            
            btn.onclick = () => alternarMateria(materia);
            listaContainer.appendChild(btn);
        });
    }
    
    if (materiaJaSelecionada) {
        const divisor = document.createElement('div');
        divisor.className = "border-t border-gray-200 my-3 pt-3";
        listaContainer.appendChild(divisor);
        
        const btnRemover = document.createElement('button');
        btnRemover.className = "w-full bg-red-50 text-red-600 font-bold p-2.5 rounded-lg border border-red-200 hover:bg-red-100 text-sm transition-colors text-center";
        btnRemover.innerHTML = `Remover <strong>${materiaJaSelecionada.nome}</strong> da Grade`;
        btnRemover.onclick = () => removerMateriaPorId(materiaJaSelecionada.id);
        listaContainer.appendChild(btnRemover);
    }
    
    document.getElementById('modal').classList.remove('hidden');
}

// ==========================================================
// 5. INCLUSÃO, REMOÇÃO E TRATAMENTO DE CONFLITOS DE HORÁRIO
// ==========================================================
window.alternarMateria = function(materia) {
    const todasInstanciasDaTurma = materiasOfertadas.filter(m => 
        m.codigo === materia.codigo && m.turma === materia.turma
    );
    
    const idsInstancias = todasInstanciasDaTurma.map(m => m.id);
    const estaAtiva = gradeSalvaIds.includes(materia.id);
    
    if (estaAtiva) {
        gradeSalvaIds = gradeSalvaIds.filter(id => !idsInstancias.includes(id));
    } else {
        const jaPossuiMesmoCodigo = materiasOfertadas.some(m => 
            gradeSalvaIds.includes(m.id) && m.codigo === materia.codigo && m.turma !== materia.turma
        );

        if (jaPossuiMesmoCodigo) {
            alert(`Bloqueio: Você já incluiu a matéria "${materia.nome}" em sua grade! Não é permitido matricular-se na mesma disciplina em duas turmas ou horários diferentes.`);
            return; 
        }

        todasInstanciasDaTurma.forEach(novaInstancia => {
            const colisao = materiasOfertadas.find(m => 
                gradeSalvaIds.includes(m.id) && m.dia === novaInstancia.dia && m.horario === novaInstancia.horario
            );
            if (colisao) {
                const turmaColisao = materiasOfertadas.filter(m => m.codigo === colisao.codigo && m.turma === colisao.turma);
                const idsColisao = turmaColisao.map(m => m.id);
                gradeSalvaIds = gradeSalvaIds.filter(id => !idsColisao.includes(id));
            }
        });
        
        gradeSalvaIds.push(...idsInstancias);
    }
    
    localStorage.setItem('minhaGradeIds_2026', JSON.stringify(gradeSalvaIds));
    fecharModal();
    desenharGrade();
}

window.removerMateriaPorId = function(id) {
    const materia = materiasOfertadas.find(m => m.id === id);
    if (materia) {
        const todasInstancias = materiasOfertadas.filter(m => m.codigo === materia.codigo && m.turma === materia.turma);
        const idsInstancias = todasInstancias.map(m => m.id);
        
        gradeSalvaIds = gradeSalvaIds.filter(id => !idsInstancias.includes(id));
        localStorage.setItem('minhaGradeIds_2026', JSON.stringify(gradeSalvaIds));
    }
    fecharModal();
    desenharGrade();
}

window.limparTodaGrade = function() {
    if (confirm("Tem certeza que deseja apagar todas as matérias selecionadas da sua grade?")) {
        gradeSalvaIds = [];
        localStorage.setItem('minhaGradeIds_2026', JSON.stringify(gradeSalvaIds));
        desenharGrade();
    }
}

window.fecharModal = function() {
    document.getElementById('modal').classList.add('hidden');
}

// ==========================================================
// 6. CONTADOR DE ACESSOS GLOBAL (VIA COUNT.CO) E EXPORTAÇÃO DE IMAGEM
// ==========================================================
function contabilizarAcessoPlataforma() {
    fetch("https://count.co/hit/grade-faculdade-milo/acessos-globais")
        .then(response => response.json())
        .then(data => {
            const contador = document.getElementById('contador-global');
            if(contador) contador.innerText = data.hits;
        })
        .catch(error => {
            console.error("Erro ao conectar no contador:", error);
            const contador = document.getElementById('contador-global');
            if(contador) contador.innerText = "1";
        });
}

window.baixarGradeImagem = function() {
    const container = document.getElementById('grade-container');
    const clone = container.cloneNode(true);
    
    clone.style.width = "1100px"; 
    clone.style.padding = "20px";
    clone.style.background = "#ffffff";
    
    const celulas = clone.querySelectorAll('.grid > div');
    let colunasComDados = new Set([0]); 
    let linhasComDados = new Set([0]);  
    
    celulas.forEach((celula, index) => {
        if (index < 6) return; 
        const coluna = index % 6;
        const linha = Math.floor(index / 6);
        
        if (celula.querySelector('p')) {
            colunasComDados.add(coluna);
            linhasComDados.add(linha);
        }
    });

    if (colunasComDados.size === 1 && linhasComDados.size === 1) {
        alert("Sua grade está totalmente vazia! Adicione matérias antes de exportar a imagem.");
        return;
    }

    celulas.forEach((celula, index) => {
        const coluna = index % 6;
        const linha = Math.floor(index / 6);
        
        if (!colunasComDados.has(coluna) || !linhasComDados.has(linha)) {
            celula.style.display = 'none';
        }
        
        celula.className = celula.className.replace('hover:bg-blue-50/40', '').replace('cursor-pointer', '');
        const spanBotao = celula.querySelector('span');
        if (spanBotao && spanBotao.innerText === "+") {
            spanBotao.style.display = 'none';
        }
        
        const btnAddNota = celula.querySelector('div[onclick^="editarNota"]');
        if (btnAddNota && btnAddNota.innerText.includes("Adicionar nota")) {
            btnAddNota.style.display = 'none';
        }
    });

    const gridPai = clone.querySelector('.grid');
    gridPai.style.display = 'grid';
    gridPai.style.gridTemplateColumns = `repeat(${colunasComDados.size}, minmax(0, 1fr))`;

    clone.style.position = 'fixed';
    clone.style.top = '-9999px';
    document.body.appendChild(clone);

    html2canvas(clone, {
        scale: 2, 
        useCORS: true,
        logging: false
    }).then(canvas => {
        const imagemUrl = canvas.toDataURL('image/png');
        const linkDownload = document.createElement('a');
        linkDownload.download = 'minha_grade_horaria_2026.png';
        linkDownload.href = imagemUrl;
        linkDownload.click();
        document.body.removeChild(clone);
    }).catch(err => {
        console.error("Erro ao gerar imagem:", err);
        document.body.removeChild(clone);
    });
}

// ==========================================================
// FUNÇÃO PARA EDITAR ANOTAÇÕES (SALA/LAB)
// ==========================================================
window.editarNota = function(event, idMateria) {
    event.stopPropagation(); 
    
    let notaAtual = notasSalvas[idMateria] || "";
    let novaNota = prompt("Anotação para este horário (ex: Sala 302, Lab. Informática):", notaAtual);
    
    if (novaNota !== null) { 
        if (novaNota.trim() === "") {
            delete notasSalvas[idMateria];
        } else {
            notasSalvas[idMateria] = novaNota.trim().substring(0, 30);
        }
        localStorage.setItem('minhasNotas_2026', JSON.stringify(notasSalvas));
        desenharGrade(); 
    }
};

// ==========================================================
// NEW: NOVA LÓGICA DE PESQUISA POR NOME COM JANELA DE HORÁRIOS
// ==========================================================

window.buscarMateriasGerais = function() {
    const input = document.getElementById('busca-materia');
    const containerResultados = document.getElementById('resultados-busca');
    const busca = normalizar(input.value.trim());
    
    if (busca.length < 2) {
        containerResultados.innerHTML = "";
        containerResultados.classList.add('hidden');
        return;
    }
    
    const materiasUnicas = [];
    const nomesRastreados = new Set();
    
    materiasOfertadas.forEach(m => {
        const chaveIdentificacao = `${m.codigo}-${m.nome}-${m.turma}`;
        
        if (!nomesRastreados.has(chaveIdentificacao) && (normalizar(m.nome).includes(busca) || normalizar(m.codigo).includes(busca))) {
            nomesRastreados.add(chaveIdentificacao);
            materiasUnicas.push(m);
        }
    });
    
    containerResultados.innerHTML = "";
    
    if (materiasUnicas.length === 0) {
        containerResultados.innerHTML = `<p class="p-3 text-xs text-gray-500 italic">Nenhuma matéria encontrada neste termo.</p>`;
    } else {
        materiasUnicas.forEach(materia => {
            const divItem = document.createElement('div');
            divItem.className = "p-2.5 hover:bg-blue-50 cursor-pointer text-xs border-b border-gray-100 transition-colors flex flex-col";
            divItem.innerHTML = `
                <span class="font-bold text-gray-800">${materia.nome}</span>
                <span class="text-gray-500 mt-0.5">Turma: ${materia.turma} | Prof: ${materia.professor} (${materia.termo})</span>
            `;
            divItem.onclick = () => {
                mostrarHorariosDaMateria(materia.codigo, materia.turma);
                containerResultados.classList.add('hidden');
                input.value = "";
            };
            containerResultados.appendChild(divItem);
        });
    }
    
    containerResultados.classList.remove('hidden');
}

window.mostrarHorariosDaMateria = function(codigo, turma) {
    const todasInstancias = materiasOfertadas.filter(m => m.codigo === codigo && m.turma === turma);
    if (todasInstancias.length === 0) return;
    
    const primeira = todasInstancias[0];
    
    document.getElementById('modal-titulo').innerText = `${primeira.nome} (Turma ${primeira.turma})`;
    
    const listaContainer = document.getElementById('lista-materias');
    listaContainer.innerHTML = `
        <div class="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs text-gray-600 mb-4 flex flex-col gap-1">
            <p><strong>Professor:</strong> ${primeira.professor}</p>
            <p><strong>Código UC:</strong> ${primeira.codigo}</p>
            <p><strong>Período:</strong> ${primeira.termo}</p>
        </div>
        <p class="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Horários de Oferta no PDF:</p>
    `;
    
    todasInstancias.forEach(instancia => {
        const itemHorario = document.createElement('div');
        itemHorario.className = "w-full p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-medium text-blue-800 flex justify-between items-center mb-1.5";
        itemHorario.innerHTML = `
            <span>📅 ${instancia.dia}</span>
            <span class="font-mono bg-blue-100 px-2 py-0.5 rounded font-bold">${instancia.horario}</span>
        `;
        listaContainer.appendChild(itemHorario);
    });

    const jaEstaNaGrade = gradeSalvaIds.includes(primeira.id);
    const btnAcao = document.createElement('button');
    
    if (jaEstaNaGrade) {
        btnAcao.className = "w-full bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded-lg shadow text-sm mt-4 transition-all";
        btnAcao.innerText = "Remover Matéria da Minha Grade";
        btnAcao.onclick = () => { removerMateriaPorId(primeira.id); fecharModal(); };
    } else {
        btnAcao.className = "w-full bg-green-600 hover:bg-green-700 text-white font-bold p-3 rounded-lg shadow text-sm mt-4 transition-all";
        btnAcao.innerText = "Adicionar Essa Grade de Horários";
        btnAcao.onclick = () => { alternarMateria(primeira); fecharModal(); };
    }
    
    listaContainer.appendChild(btnAcao);
    
    document.getElementById('modal').classList.remove('hidden');
}

document.addEventListener('click', function(e) {
    const container = document.getElementById('resultados-busca');
    const input = document.getElementById('busca-materia');
    if (container && e.target !== container && e.target !== input) {
        container.classList.add('hidden');
    }
});

// ==========================================================
// 7. INICIALIZAÇÃO INVERSA SEGURA (ANTI-TRAVAMENTO)
// ==========================================================
desenharGrade(); 
try {
    contabilizarAcessoPlataforma();
} catch (e) {
    console.error("Incapaz de computar acessos remotamente:", e);
}