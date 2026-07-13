// ==========================================================
// 1. CONFIGURAÇÕES E MAPEAMENTO DA ESTRUTURA DA GRADE
// ==========================================================
// ==========================================================
// 1. CONFIGURAÇÕES E GERAÇÃO DE CORES ÚNICAS (NUNCA SE REPETEM)
// ==========================================================
const diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira"];
const horarios = ["08h00", "10h00", "13h30", "15h30", "19h00", "21h00"];

const mapeamentoCores = {};

function obterCorMateria(codigo) {
    if (mapeamentoCores[codigo]) {
        return mapeamentoCores[codigo];
    }

    // Transforma o texto do código em um número inteiro único (Hash)
    let hash = 0;
    const strCodigo = String(codigo);
    for (let i = 0; i < strCodigo.length; i++) {
        hash = strCodigo.charCodeAt(i) + ((hash << 5) - hash);
    }

    // O "Matiz" (Hue) vai de 0 a 360 no círculo cromático, gerando cores únicas
    const matriz = Math.abs(hash) % 360;

    // Saturação 75% e Luminosidade 92% geram tons pastéis claros perfeitos para o fundo
    const estiloCorEstatico = `style="background-color: hsl(${matriz}, 75%, 92%); border-color: hsl(${matriz}, 70%, 80%); color: hsl(${matriz}, 90%, 25%);"`;

    mapeamentoCores[codigo] = estiloCorEstatico;
    return estiloCorEstatico;
}

// ==========================================================
// 2. BASE DE DADOS EXTRAÍDA E NORMALIZADA DO PDF
// ==========================================================
const materiasOfertadas = [
    // TERMO 2// TERMO 2
    { id: 1, termo: "Termo 2", codigo: "5870", nome: "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)", turma: "IA", professor: "Pereira", dia: "Terça-feira", horario: "10h00" },
    { id: 2, termo: "Termo 2", codigo: "5870", nome: "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)", turma: "IB", professor: "Pereira", dia: "Terça-feira", horario: "13h30" },
    { id: 3, termo: "Termo 2", codigo: "5870", nome: "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)", turma: "IC", professor: "Evandro", dia: "Sexta-feira", horario: "13h30" },
    { id: 4, termo: "Termo 2", codigo: "5870", nome: "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)", turma: "ID", professor: "Walter", dia: "Terça-feira", horario: "15h30" },
    { id: 5, termo: "Termo 2", codigo: "5870", nome: "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)", turma: "NA", professor: "Walter", dia: "Terça-feira", horario: "19h00" },
    { id: 6, termo: "Termo 2", codigo: "5870", nome: "Ciência, Tecnologia, Sociedade e Ambiente (CTSA)", turma: "NB", professor: "Evandro", dia: "Segunda-feira", horario: "21h00" },
    
    { id: 7, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "IA", professor: "Thaciana", dia: "Terça-feira", horario: "13h30" },
    { id: 8, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "IA", professor: "Thaciana", dia: "Quarta-feira", horario: "13h30" },
    { id: 9, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "IB", professor: "Thaciana", dia: "Segunda-feira", horario: "10h00" },
    { id: 10, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "IB", professor: "Thaciana", dia: "Quarta-feira", horario: "10h00" },
    { id: 11, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "IC", professor: "Antonelli", dia: "Quarta-feira", horario: "10h00" },
    { id: 12, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "IC", professor: "Antonelli", dia: "Sexta-feira", horario: "10h00" },
    { id: 13, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "ID", professor: "Espirito", dia: "Segunda-feira", horario: "15h30" },
    { id: 14, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "ID", professor: "Espirito", dia: "Quarta-feira", horario: "15h30" },
    { id: 15, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "NA", professor: "Espirito", dia: "Segunda-feira", horario: "19h00" },
    { id: 16, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "NA", professor: "Espirito", dia: "Quarta-feira", horario: "19h00" },
    { id: 17, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "NB", professor: "Manuel", dia: "Segunda-feira", horario: "21h00" },
    { id: 18, termo: "Termo 2", codigo: "4369", nome: "Fenômenos Mecânicos", turma: "NB", professor: "Manuel", dia: "Quarta-feira", horario: "21h00" },

    { id: 19, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "IA", professor: "Hugo", dia: "Sexta-feira", horario: "13h30" },
    { id: 20, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "IA", professor: "Hugo", dia: "Sexta-feira", horario: "15h30" },
    { id: 21, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "IB", professor: "Hugo", dia: "Terça-feira", horario: "13h30" },
    { id: 22, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "IB", professor: "Hugo", dia: "Terça-feira", horario: "15h30" },
    { id: 23, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "NA", professor: "Maraisa", dia: "Sexta-feira", horario: "19h00" },
    { id: 24, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "NA", professor: "Maraisa", dia: "Sexta-feira", horario: "21h00" },
    { id: 25, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "NB", professor: "Maraisa", dia: "Terça-feira", horario: "19h00" },
    { id: 26, termo: "Termo 2", codigo: "4370", nome: "Química Geral Exp.", turma: "NB", professor: "Maraisa", dia: "Terça-feira", horario: "21h00" },

    { id: 27, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IA", professor: "Angelo", dia: "Segunda-feira", horario: "13h30" },
    { id: 28, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IA", professor: "Angelo", dia: "Quarta-feira", horario: "13h30" },
    { id: 29, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IB", professor: "Angelo", dia: "Segunda-feira", horario: "15h30" },
    { id: 30, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IB", professor: "Angelo", dia: "Quarta-feira", horario: "15h30" },
    { id: 31, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IC", professor: "Castilho", dia: "Terça-feira", horario: "15h30" },
    { id: 32, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IC", professor: "Castilho", dia: "Quinta-feira", horario: "15h30" },
    { id: 33, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "NB", professor: "Castilho", dia: "Terça-feira", horario: "19h00" },
    { id: 34, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "NB", professor: "Castilho", dia: "Quinta-feira", horario: "19h00" },
    { id: 35, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "NA", professor: "Daniela Oliveira", dia: "Segunda-feira", horario: "19h00" },
    { id: 36, termo: "Termo 2", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "NA", professor: "Daniela Oliveira", dia: "Quarta-feira", horario: "19h00" },

    { id: 37, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "IA", professor: "Renato", dia: "Segunda-feira", horario: "13h30" },
    { id: 38, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "IA", professor: "Renato", dia: "Quarta-feira", horario: "13h30" },
    { id: 39, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "IB", professor: "Renato", dia: "Segunda-feira", horario: "15h30" },
    { id: 40, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "IB", professor: "Renato", dia: "Quarta-feira", horario: "15h30" },
    { id: 41, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "IC", professor: "Vanessa", dia: "Terça-feira", horario: "08h00" },
    { id: 42, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "IC", professor: "Vanessa", dia: "Quinta-feira", horario: "08h00" },
    { id: 43, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "NA", professor: "AnaMoreira", dia: "Terça-feira", horario: "19h00" },
    { id: 44, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "NA", professor: "AnaMoreira", dia: "Quinta-feira", horario: "19h00" },
    { id: 45, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "NB", professor: "Thadeu", dia: "Terça-feira", horario: "21h00" },
    { id: 46, termo: "Termo 2", codigo: "2650", nome: "Geometria Analítica", turma: "NB", professor: "Thadeu", dia: "Sexta-feira", horario: "19h00" },

    { id: 47, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "IA", professor: "Erwin", dia: "Terça-feira", horario: "15h30" },
    { id: 48, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "IA", professor: "Erwin", dia: "Sexta-feira", horario: "13h30" },
    { id: 49, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "IB", professor: "Erwin", dia: "Terça-feira", horario: "13h30" },
    { id: 50, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "IB", professor: "Erwin", dia: "Quinta-feira", horario: "13h30" },
    { id: 51, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "IC", professor: "Felipe", dia: "Quarta-feira", horario: "08h00" },
    { id: 52, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "IC", professor: "Felipe", dia: "Sexta-feira", horario: "08h00" },
    { id: 53, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "NA", professor: "Robson", dia: "Terça-feira", horario: "21h00" },
    { id: 54, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "NA", professor: "Robson", dia: "Sexta-feira", horario: "19h00" },
    { id: 55, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "NB", professor: "Macedo", dia: "Quinta-feira", horario: "21h00" },
    { id: 56, termo: "Termo 2", codigo: "2201", nome: "Matemática Discreta", turma: "NB", professor: "Macedo", dia: "Sexta-feira", horario: "21h00" },

    { id: 57, termo: "Termo 2", codigo: "5844", nome: "Matemática Geral", turma: "I", professor: "Karen", dia: "Segunda-feira", horario: "15h30" },
    { id: 58, termo: "Termo 2", codigo: "5844", nome: "Matemática Geral", turma: "I", professor: "Karen", dia: "Quarta-feira", horario: "15h30" },
    { id: 59, termo: "Termo 2", codigo: "5844", nome: "Matemática Geral", turma: "N", professor: "Daniela Oliveira", dia: "Segunda-feira", horario: "21h00" },
    { id: 60, termo: "Termo 2", codigo: "5844", nome: "Matemática Geral", turma: "N", professor: "Daniela Oliveira", dia: "Quarta-feira", horario: "21h00" },

    { id: 61, termo: "Termo 2", codigo: "2832", nome: "Algoritmos e Estruturas de Dados I", turma: "IA", professor: "Regina", dia: "Quinta-feira", horario: "15h30" },
    { id: 62, termo: "Termo 2", codigo: "2832", nome: "Algoritmos e Estruturas de Dados I", turma: "IA", professor: "Regina", dia: "Sexta-feira", horario: "15h30" },
    { id: 63, termo: "Termo 2", codigo: "2832", nome: "Algoritmos e Estruturas de Dados I", turma: "IB", professor: "Arlindo", dia: "Terça-feira", horario: "13h30" },
    { id: 64, termo: "Termo 2", codigo: "2832", nome: "Algoritmos e Estruturas de Dados I", turma: "IB", professor: "Arlindo", dia: "Quinta-feira", horario: "13h30" },
    { id: 65, termo: "Termo 2", codigo: "2832", nome: "Algoritmos e Estruturas de Dados I", turma: "NA", professor: "Regina", dia: "Quinta-feira", horario: "21h00" },
    { id: 66, termo: "Termo 2", codigo: "2832", nome: "Algoritmos e Estruturas de Dados I", turma: "NA", professor: "Regina", dia: "Sexta-feira", horario: "21h00" },
    { id: 67, termo: "Termo 2", codigo: "2852", nome: "Algoritmos e Estruturas de Dados I", turma: "NB", professor: "Luis", dia: "Segunda-feira", horario: "21h00" },
    { id: 68, termo: "Termo 2", codigo: "2852", nome: "Algoritmos e Estruturas de Dados I", turma: "NB", professor: "Luis", dia: "Quarta-feira", horario: "21h00" },

    { id: 69, termo: "Termo 2", codigo: "5542", nome: "Bioquímica I", turma: "I", professor: "Martin", dia: "Quinta-feira", horario: "15h30" },
    { id: 70, termo: "Termo 2", codigo: "5542", nome: "Bioquímica I", turma: "I", professor: "Martin", dia: "Sexta-feira", horario: "15h30" },
    { id: 71, termo: "Termo 2", codigo: "5842", nome: "Bioquímica I", turma: "N", professor: "Martin", dia: "Quinta-feira", horario: "21h00" },
    { id: 72, termo: "Termo 2", codigo: "5842", nome: "Bioquímica I", turma: "N", professor: "Martin", dia: "Sexta-feira", horario: "21h00" },

    { id: 73, termo: "Termo 2", codigo: "5843", nome: "Biologia Molecular do Gene", turma: "I", professor: "Luciane", dia: "Terça-feira", horario: "15h30" },
    { id: 74, termo: "Termo 2", codigo: "5843", nome: "Biologia Molecular do Gene", turma: "I", professor: "Luciane", dia: "Sexta-feira", horario: "13h30" },
    { id: 75, termo: "Termo 2", codigo: "5843", nome: "Biologia Molecular do Gene", turma: "N", professor: "Luciane", dia: "Terça-feira", horario: "21h00" },
    { id: 76, termo: "Termo 2", codigo: "5843", nome: "Biologia Molecular do Gene", turma: "N", professor: "Luciane", dia: "Sexta-feira", horario: "19h00" },

    { id: 77, termo: "Termo 2", codigo: "5120", nome: "Microbiologia Geral", turma: "I", professor: "Elisa", dia: "Segunda-feira", horario: "13h30" },
    { id: 78, termo: "Termo 2", codigo: "5120", nome: "Microbiologia Geral", turma: "I", professor: "Elisa", dia: "Quarta-feira", horario: "13h30" },
    { id: 79, termo: "Termo 2", codigo: "5120", nome: "Microbiologia Geral", turma: "N", professor: "Fernando", dia: "Terça-feira", horario: "19h00" },
    { id: 80, termo: "Termo 2", codigo: "5120", nome: "Microbiologia Geral", turma: "N", professor: "Fernando", dia: "Quinta-feira", horario: "19h00" },

    { id: 81, termo: "Termo 2", codigo: "4760", nome: "Introdução a Biotecnologia", turma: "I", professor: "Dayane", dia: "Sexta-feira", horario: "10h00" },
    { id: 82, termo: "Termo 2", codigo: "4760", nome: "Introdução a Biotecnologia", turma: "N", professor: "Dayane", dia: "Sexta-feira", horario: "19h00" },

    { id: 83, termo: "Termo 2", codigo: "4373", nome: "Introdução à Engenharia de Materiais", turma: "I", professor: "Passador", dia: "Quinta-feira", horario: "13h30" },
    { id: 84, termo: "Termo 2", codigo: "4373", nome: "Introdução à Engenharia de Materiais", turma: "N", professor: "Albers", dia: "Quinta-feira", horario: "21h00" },

    { id: 85, termo: "Termo 2", codigo: "5124", nome: "Anatomia", turma: "I", professor: "Fernando", dia: "Terça-feira", horario: "13h30" },
    { id: 86, termo: "Termo 2", codigo: "5124", nome: "Anatomia", turma: "N", professor: "Fernando", dia: "Quinta-feira", horario: "21h00" },

    { id: 87, termo: "Termo 2", codigo: "5900", nome: "Desenho Técnico Básico", turma: "IA", professor: "Shida", dia: "Terça-feira", horario: "15h30" },
    { id: 88, termo: "Termo 2", codigo: "5900", nome: "Desenho Técnico Básico", turma: "IB", professor: "Shida", dia: "Quinta-feira", horario: "13h30" },
    { id: 89, termo: "Termo 2", codigo: "5900", nome: "Desenho Técnico Básico", turma: "NA", professor: "Shida", dia: "Terça-feira", horario: "19h00" },
    { id: 90, termo: "Termo 2", codigo: "5900", nome: "Desenho Técnico Básico", turma: "NB", professor: "Shida", dia: "Terça-feira", horario: "21h00" },

    // TERMO 4
    { id: 91, termo: "Termo 4", codigo: "4770", nome: "Mecânica Geral", turma: "I", professor: "Eudes", dia: "Terça-feira", horario: "13h30" },
    { id: 92, termo: "Termo 4", codigo: "4770", nome: "Mecânica Geral", turma: "I", professor: "Eudes", dia: "Quinta-feira", horario: "13h30" },
    { id: 93, termo: "Termo 4", codigo: "4770", nome: "Mecânica Geral", turma: "N", professor: "Eudes", dia: "Terça-feira", horario: "19h00" },
    { id: 94, termo: "Termo 4", codigo: "4770", nome: "Mecânica Geral", turma: "N", professor: "Eudes", dia: "Quinta-feira", horario: "19h00" },

    { id: 95, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "IA", professor: "Kelly", dia: "Terça-feira", horario: "10h00" },
    { id: 96, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "IA", professor: "Kelly", dia: "Quinta-feira", horario: "10h00" },
    { id: 97, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "IB", professor: "Kelly", dia: "Terça-feira", horario: "08h00" },
    { id: 98, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "IB", professor: "Kelly", dia: "Quinta-feira", horario: "08h00" },
    { id: 99, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "NA", professor: "Nirton", dia: "Segunda-feira", horario: "19h00" },
    { id: 100, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "NA", professor: "Nirton", dia: "Quarta-feira", horario: "19h00" },
    { id: 101, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "NB", professor: "Nirton", dia: "Segunda-feira", horario: "21h00" },
    { id: 102, termo: "Termo 4", codigo: "4748", nome: "Fenômenos Eletromagnéticos", turma: "NB", professor: "Nirton", dia: "Quarta-feira", horario: "21h00" },

    { id: 103, termo: "Termo 4", codigo: "5364", nome: "Fenômenos do Continuo Experimental", turma: "I", professor: "Fabiano", dia: "Quinta-feira", horario: "15h30" },
    { id: 104, termo: "Termo 4", codigo: "5364", nome: "Fenômenos do Continuo Experimental", turma: "N", professor: "Fabiano", dia: "Segunda-feira", horario: "19h00" },

    { id: 105, termo: "Termo 4", codigo: "4773", nome: "Termodinâmica Química", turma: "I", professor: "Silvia", dia: "Segunda-feira", horario: "15h30" },
    { id: 106, termo: "Termo 4", codigo: "4773", nome: "Termodinâmica Química", turma: "I", professor: "Silvia", dia: "Quarta-feira", horario: "15h30" },
    { id: 107, termo: "Termo 4", codigo: "4773", nome: "Termodinâmica Química", turma: "N", professor: "Silvia", dia: "Segunda-feira", horario: "19h00" },
    { id: 108, termo: "Termo 4", codigo: "4773", nome: "Termodinâmica Química", turma: "N", professor: "Silvia", dia: "Quarta-feira", horario: "19h00" },

    { id: 109, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "IA", professor: "Felipe", dia: "Quarta-feira", horario: "10h00" },
    { id: 110, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "IA", professor: "Felipe", dia: "Sexta-feira", horario: "10h00" },
    { id: 111, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "IB", professor: "Lobosco", dia: "Segunda-feira", horario: "13h30" },
    { id: 112, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "IB", professor: "Lobosco", dia: "Quarta-feira", horario: "13h30" },
    { id: 113, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "NA", professor: "Leduino", dia: "Terça-feira", horario: "21h00" },
    { id: 114, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "NA", professor: "Leduino", dia: "Sexta-feira", horario: "19h00" },
    { id: 115, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "NB", professor: "Lobosco", dia: "Segunda-feira", horario: "19h00" },
    { id: 116, termo: "Termo 4", codigo: "2828", nome: "Cálculo Numérico", turma: "NB", professor: "Lobosco", dia: "Quarta-feira", horario: "19h00" },

    { id: 117, termo: "Termo 4", codigo: "3163", nome: "Probabilidade", turma: "I", professor: "Samia", dia: "Segunda-feira", horario: "15h30" },
    { id: 118, termo: "Termo 4", codigo: "3163", nome: "Probabilidade", turma: "I", professor: "Samia", dia: "Quarta-feira", horario: "15h30" },
    { id: 119, termo: "Termo 4", codigo: "3163", nome: "Probabilidade", turma: "N", professor: "Samia", dia: "Segunda-feira", horario: "21h00" },
    { id: 120, termo: "Termo 4", codigo: "3163", nome: "Probabilidade", turma: "N", professor: "Samia", dia: "Quarta-feira", horario: "21h00" },

    { id: 121, termo: "Termo 4", codigo: "3584", nome: "Funções Analíticas", turma: "I", professor: "Leandro", dia: "Quarta-feira", horario: "08h00" },
    { id: 122, termo: "Termo 4", codigo: "3584", nome: "Funções Analíticas", turma: "I", professor: "Leandro", dia: "Sexta-feira", horario: "08h00" },
    { id: 123, termo: "Termo 4", codigo: "3584", nome: "Funções Analíticas", turma: "N", professor: "AnaMoreira", dia: "Terça-feira", horario: "21h00" },
    { id: 124, termo: "Termo 4", codigo: "3584", nome: "Funções Analíticas", turma: "N", professor: "AnaMoreira", dia: "Sexta-feira", horario: "19h00" },

    { id: 125, termo: "Termo 4", codigo: "4406", nome: "Teoria dos Números e Criptografia", turma: "I", professor: "Grasiele", dia: "Quinta-feira", horario: "15h30" },
    { id: 126, termo: "Termo 4", codigo: "4406", nome: "Teoria dos Números e Criptografia", turma: "I", professor: "Grasiele", dia: "Sexta-feira", horario: "15h30" },
    { id: 127, termo: "Termo 4", codigo: "4406", nome: "Teoria dos Números e Criptografia", turma: "N", professor: "Robson", dia: "Quinta-feira", horario: "21h00" },
    { id: 128, termo: "Termo 4", codigo: "4406", nome: "Teoria dos Números e Criptografia", turma: "N", professor: "Robson", dia: "Sexta-feira", horario: "21h00" },

    { id: 129, termo: "Termo 4", codigo: "2831", nome: "Banco de Dados", turma: "I", professor: "Musa", dia: "Quinta-feira", horario: "15h30" },
    { id: 130, termo: "Termo 4", codigo: "2831", nome: "Banco de Dados", turma: "I", professor: "Musa", dia: "Sexta-feira", horario: "15h30" },
    { id: 131, termo: "Termo 4", codigo: "2831", nome: "Banco de Dados", turma: "N", professor: "Musa", dia: "Quinta-feira", horario: "21h00" },
    { id: 132, termo: "Termo 4", codigo: "2831", nome: "Banco de Dados", turma: "N", professor: "Musa", dia: "Sexta-feira", horario: "21h00" },

    { id: 133, termo: "Termo 4", codigo: "3579", nome: "Projeto e Análise de Algoritmos", turma: "IA", professor: "Sanderson", dia: "Terça-feira", horario: "13h30" },
    { id: 134, termo: "Termo 4", codigo: "3579", nome: "Projeto e Análise de Algoritmos", turma: "IA", professor: "Sanderson", dia: "Quinta-feira", horario: "13h30" },
    { id: 135, termo: "Termo 4", codigo: "3579", nome: "Projeto e Análise de Algoritmos", turma: "IB", professor: "Reginaldo", dia: "Terça-feira", horario: "13h30" },
    { id: 136, termo: "Termo 4", codigo: "3579", nome: "Projeto e Análise de Algoritmos", turma: "IB", professor: "Reginaldo", dia: "Quinta-feira", horario: "13h30" },
    { id: 137, termo: "Termo 4", codigo: "3579", nome: "Projeto e Análise de Algoritmos", turma: "N", professor: "Reginaldo", dia: "Terça-feira", horario: "19h00" },
    { id: 138, termo: "Termo 4", codigo: "3579", nome: "Projeto e Análise de Algoritmos", turma: "N", professor: "Reginaldo", dia: "Quinta-feira", horario: "19h00" },

    { id: 139, termo: "Termo 4", codigo: "2471", nome: "Programação Orientada a Objetos", turma: "T", professor: "Otavio", dia: "Segunda-feira", horario: "15h30" },
    { id: 140, termo: "Termo 4", codigo: "2471", nome: "Programação Orientada a Objetos", turma: "T", professor: "Otavio", dia: "Quarta-feira", horario: "15h30" },
    { id: 141, termo: "Termo 4", codigo: "2471", nome: "Programação Orientada a Objetos", turma: "N", professor: "Rodrigo", dia: "Terça-feira", horario: "21h00" },
    { id: 142, termo: "Termo 4", codigo: "2471", nome: "Programação Orientada a Objetos", turma: "N", professor: "Rodrigo", dia: "Sexta-feira", horario: "19h00" },

    { id: 143, termo: "Termo 4", codigo: "3519", nome: "Arquitetura e organização de Computadores", turma: "I", professor: "Cappabianco", dia: "Terça-feira", horario: "15h30" },
    { id: 144, termo: "Termo 4", codigo: "3519", nome: "Arquitetura e organização de Computadores", turma: "I", professor: "Cappabianco", dia: "Sexta-feira", horario: "13h30" },
    { id: 145, termo: "Termo 4", codigo: "3518", nome: "Arquitetura e organização de Computadores", turma: "N", professor: "Denise", dia: "Segunda-feira", horario: "21h00" },
    { id: 146, termo: "Termo 4", codigo: "3518", nome: "Arquitetura e organização de Computadores", turma: "N", professor: "Denise", dia: "Quarta-feira", horario: "21h00" },

    { id: 147, termo: "Termo 4", codigo: "5928", nome: "Lab. De Sistemas Computacionais (Circuitos Digitais)", turma: "IA", professor: "Sérgio", dia: "Segunda-feira", horario: "13h30" },
    { id: 148, termo: "Termo 4", codigo: "5928", nome: "Lab. De Sistemas Computacionais (Circuitos Digitais)", turma: "IB", professor: "Marcorin", dia: "Quinta-feira", horario: "15h30" },
    { id: 149, termo: "Termo 4", codigo: "5928", nome: "Lab. De Sistemas Computacionais (Circuitos Digitais)", turma: "N", professor: "Marcorin", dia: "Quinta-feira", horario: "19h00" },

    { id: 150, termo: "Termo 4", codigo: "8533", nome: "Métodos matemáticos para engenharia", turma: "I", professor: "Paiva", dia: "Segunda-feira", horario: "08h00" },
    { id: 151, termo: "Termo 4", codigo: "8533", nome: "Métodos matemáticos para engenharia", turma: "I", professor: "Paiva", dia: "Sexta-feira", horario: "08h00" },

    { id: 152, termo: "Termo 4", codigo: "5902", nome: "Circuitos Elétricos I", turma: "IA", professor: "Henrique", dia: "Segunda-feira", horario: "13h30" },
    { id: 153, termo: "Termo 4", codigo: "5902", nome: "Circuitos Elétricos I", turma: "IA", professor: "Henrique", dia: "Quarta-feira", horario: "13h30" },
    { id: 154, termo: "Termo 4", codigo: "5902", nome: "Circuitos Elétricos I", turma: "IB", professor: "Henrique", dia: "Segunda-feira", horario: "15h30" },
    { id: 155, termo: "Termo 4", codigo: "5902", nome: "Circuitos Elétricos I", turma: "IB", professor: "Henrique", dia: "Quarta-feira", horario: "15h30" },
    { id: 156, termo: "Termo 4", codigo: "5902", nome: "Circuitos Elétricos I", turma: "N", professor: "Edson", dia: "Quinta-feira", horario: "21h00" },
    { id: 157, termo: "Termo 4", codigo: "5902", nome: "Circuitos Elétricos I", turma: "N", professor: "Edson", dia: "Sexta-feira", horario: "21h00" },

    { id: 158, termo: "Termo 4", codigo: "8272", nome: "Fisiologia Humana II", turma: "1A", professor: "Tatiana", dia: "Segunda-feira", horario: "13h30" },
    { id: 159, termo: "Termo 4", codigo: "8272", nome: "Fisiologia Humana II", turma: "1A", professor: "Tatiana", dia: "Quarta-feira", horario: "13h30" },
    { id: 160, termo: "Termo 4", codigo: "8272", nome: "Fisiologia Humana II", turma: "IB", professor: "Tatiana", dia: "Segunda-feira", horario: "10h00" },
    { id: 161, termo: "Termo 4", codigo: "8272", nome: "Fisiologia Humana II", turma: "IB", professor: "Tatiana", dia: "Quarta-feira", horario: "10h00" },
    { id: 162, termo: "Termo 4", codigo: "1272", nome: "Fisiologia Humana II", turma: "N", professor: "Flavio", dia: "Segunda-feira", horario: "21h00" },
    { id: 163, termo: "Termo 4", codigo: "1272", nome: "Fisiologia Humana II", turma: "N", professor: "Flavio", dia: "Quarta-feira", horario: "21h00" },

    { id: 164, termo: "Termo 4", codigo: "4764", nome: "Ciência e Tecnologia dos Materiais", turma: "I", professor: "Gisele", dia: "Terça-feira", horario: "15h30" },
    { id: 165, termo: "Termo 4", codigo: "4764", nome: "Ciência e Tecnologia dos Materiais", turma: "I", professor: "Gisele", dia: "Quinta-feira", horario: "15h30" },
    { id: 166, termo: "Termo 4", codigo: "4764", nome: "Ciência e Tecnologia dos Materiais", turma: "N", professor: "Leonardo", dia: "Segunda-feira", horario: "19h00" },
    { id: 167, termo: "Termo 4", codigo: "4764", nome: "Ciência e Tecnologia dos Materiais", turma: "N", professor: "Leonardo", dia: "Quarta-feira", horario: "19h00" },

    { id: 168, termo: "Termo 4", codigo: "5119", nome: "Fundamentos da Eng. Bioquímica", turma: "I", professor: "Saraiva", dia: "Terça-feira", horario: "13h30" },
    { id: 169, termo: "Termo 4", codigo: "5119", nome: "Fundamentos da Eng. Bioquímica", turma: "I", professor: "Saraiva", dia: "Quinta-feira", horario: "13h30" },
    { id: 170, termo: "Termo 4", codigo: "5119", nome: "Fundamentos da Eng. Bioquímica", turma: "N", professor: "Elisabeth", dia: "Terça-feira", horario: "19h00" },
    { id: 171, termo: "Termo 4", codigo: "5119", nome: "Fundamentos da Eng. Bioquímica", turma: "N", professor: "Elisabeth", dia: "Quinta-feira", horario: "19h00" },

    { id: 172, termo: "Termo 4", codigo: "5740", nome: "Biologia Geral", turma: "I", professor: "Villaverde", dia: "Terça-feira", horario: "10h00" },
    { id: 173, termo: "Termo 4", codigo: "5740", nome: "Biologia Geral", turma: "I", professor: "Villaverde", dia: "Quinta-feira", horario: "10h00" },
    { id: 174, termo: "Termo 4", codigo: "5740", nome: "Biologia Geral", turma: "N", professor: "Michael", dia: "Segunda-feira", horario: "19h00" },
    { id: 175, termo: "Termo 4", codigo: "5740", nome: "Biologia Geral", turma: "N", professor: "Michael", dia: "Quarta-feira", horario: "19h00" },

    { id: 176, termo: "Termo 4", codigo: "5847", nome: "Bioquímica II", turma: "I", professor: "Conceição", dia: "Terça-feira", horario: "15h30" },
    { id: 177, termo: "Termo 4", codigo: "5847", nome: "Bioquímica II", turma: "I", professor: "Conceição", dia: "Quinta-feira", horario: "15h30" },
    { id: 178, termo: "Termo 4", codigo: "5847", nome: "Bioquímica II", turma: "N", professor: "Conceição", dia: "Terça-feira", horario: "21h00" },
    { id: 179, termo: "Termo 4", codigo: "5847", nome: "Bioquímica II", turma: "N", professor: "Conceição", dia: "Quinta-feira", horario: "21h00" },

    { id: 180, termo: "Termo 4", codigo: "4375", nome: "Lab. Biologia Molecular e Celular", turma: "I", professor: "Claudia", dia: "Sexta-feira", horario: "13h30" },
    { id: 181, termo: "Termo 4", codigo: "4375", nome: "Lab. Biologia Molecular e Celular", turma: "I", professor: "Claudia", dia: "Sexta-feira", horario: "15h30" },
    { id: 182, termo: "Termo 4", codigo: "4375", nome: "Lab. Biologia Molecular e Celular", turma: "N", professor: "Claudia", dia: "Sexta-feira", horario: "19h00" },

    { id: 183, termo: "Termo 4", codigo: "5848", nome: "Laboratório de Microbiologia", turma: "I", professor: "Elisa", dia: "Quarta-feira", horario: "15h30" },
    { id: 184, termo: "Termo 4", codigo: "5848", nome: "Laboratório de Microbiologia", turma: "I", professor: "Elisa", dia: "Sexta-feira", horario: "15h30" },
    { id: 185, termo: "Termo 4", codigo: "5848", nome: "Laboratório de Microbiologia", turma: "N", professor: "Elisa", dia: "Quarta-feira", horario: "19h00" },
    { id: 186, termo: "Termo 4", codigo: "5848", nome: "Laboratório de Microbiologia", turma: "N", professor: "Elisa", dia: "Sexta-feira", horario: "21h00" },

    // TERMO 5
    { id: 187, termo: "Termo 5", codigo: "9793", nome: "Introdução à Economia", turma: "IA", professor: "Scriptore", dia: "Terça-feira", horario: "08h00" },
    { id: 188, termo: "Termo 5", codigo: "9793", nome: "Introdução à Economia", turma: "IB", professor: "Scriptore", dia: "Terça-feira", horario: "10h00" },
    { id: 189, termo: "Termo 5", codigo: "9793", nome: "Introdução à Economia", turma: "NA", professor: "Scriptore", dia: "Quinta-feira", horario: "19h00" },
    { id: 190, termo: "Termo 5", codigo: "9793", nome: "Introdução à Economia", turma: "NB", professor: "Scriptore", dia: "Quinta-feira", horario: "21h00" },

    // TERMO 6
    { id: 191, termo: "Termo 6", codigo: "5398", nome: "Sistemas Mecânicos", turma: "I", professor: "Kunkel", dia: "Terça-feira", horario: "13h30" },
    { id: 192, termo: "Termo 6", codigo: "5398", nome: "Sistemas Mecânicos", turma: "I", professor: "Kunkel", dia: "Quinta-feira", horario: "15h30" },
    { id: 193, termo: "Termo 6", codigo: "5398", nome: "Sistemas Mecânicos", turma: "N", professor: "Kunkel", dia: "Terça-feira", horario: "19h00" },
    { id: 194, termo: "Termo 6", codigo: "5398", nome: "Sistemas Mecânicos", turma: "N", professor: "Kunkel", dia: "Quinta-feira", horario: "19h00" },

    { id: 195, termo: "Termo 6", codigo: "5930", nome: "Laboratório de Eletrônica Digital", turma: "IA", professor: "Karina", dia: "Terça-feira", horario: "13h30" },
    { id: 196, termo: "Termo 6", codigo: "5930", nome: "Laboratório de Eletrônica Digital", turma: "IB", professor: "Karina", dia: "Sexta-feira", horario: "15h30" },
    { id: 197, termo: "Termo 6", codigo: "5930", nome: "Laboratório de Eletrônica Digital", turma: "IC", professor: "Gurjão", dia: "Quarta-feira", horario: "10h00" },
    { id: 198, termo: "Termo 6", codigo: "5930", nome: "Laboratório de Eletrônica Digital", turma: "NA", professor: "Karina", dia: "Quinta-feira", horario: "19h00" },
    { id: 199, termo: "Termo 6", codigo: "5930", nome: "Laboratório de Eletrônica Digital", turma: "NB", professor: "Karina", dia: "Sexta-feira", horario: "19h00" },

    { id: 200, termo: "Termo 6", codigo: "8218", nome: "Processamento de Sinais", turma: "I", professor: "Martini", dia: "Quarta-feira", horario: "15h30" },
    { id: 201, termo: "Termo 6", codigo: "8218", nome: "Processamento de Sinais", turma: "N", professor: "Martini", dia: "Quarta-feira", horario: "21h00" },

    { id: 202, termo: "Termo 6", codigo: "8521", nome: "Eletrônica", turma: "T", professor: "Gurjão", dia: "Segunda-feira", horario: "13h30" },
    { id: 203, termo: "Termo 6", codigo: "8521", nome: "Eletrônica", turma: "T", professor: "Gurjão", dia: "Quarta-feira", horario: "13h30" },
    { id: 204, termo: "Termo 6", codigo: "8521", nome: "Eletrônica", turma: "N", professor: "Aoki", dia: "Terça-feira", horario: "21h00" },
    { id: 205, termo: "Termo 6", codigo: "8521", nome: "Eletrônica", turma: "N", professor: "Aoki", dia: "Quinta-feira", horario: "21h00" },

    { id: 206, termo: "Termo 6", codigo: "5453", nome: "Introdução à Eletrotécnica", turma: "I", professor: "Fabiano", dia: "Quinta-feira", horario: "13h30" },
    { id: 207, termo: "Termo 6", codigo: "5453", nome: "Introdução à Eletrotécnica", turma: "N", professor: "Fabiano", dia: "Segunda-feira", horario: "21h00" },

    { id: 208, termo: "Termo 6", codigo: "5401", nome: "Termodinâmica dos Sólidos", turma: "I", professor: "Gisele", dia: "Terça-feira", horario: "13h30" },
    { id: 209, termo: "Termo 6", codigo: "5401", nome: "Termodinâmica dos Sólidos", turma: "I", professor: "Gisele", dia: "Quinta-feira", horario: "13h30" },
    { id: 210, termo: "Termo 6", codigo: "5401", nome: "Termodinâmica dos Sólidos", turma: "N", professor: "Capella", dia: "Segunda-feira", horario: "21h00" },
    { id: 211, termo: "Termo 6", codigo: "5401", nome: "Termodinâmica dos Sólidos", turma: "N", professor: "Capella", dia: "Quarta-feira", horario: "21h00" },

    { id: 212, termo: "Termo 6", codigo: "5387", nome: "Ensaio de Materiais", turma: "I", professor: "Dilermando", dia: "Sexta-feira", horario: "13h30" },
    { id: 213, termo: "Termo 6", codigo: "5387", nome: "Ensaio de Materiais", turma: "I", professor: "Dilermando", dia: "Sexta-feira", horario: "15h30" },
    { id: 214, termo: "Termo 6", codigo: "5387", nome: "Ensaio de Materiais", turma: "N", professor: "Dilermando", dia: "Terça-feira", horario: "19h00" },
    { id: 215, termo: "Termo 6", codigo: "5387", nome: "Ensaio de Materiais", turma: "N", professor: "Dilermando", dia: "Terça-feira", horario: "21h00" },

    { id: 216, termo: "Termo 6", codigo: "9799", nome: "Seleção de Materiais", turma: "I", professor: "Quinteiro", dia: "Segunda-feira", horario: "15h30" },
    { id: 217, termo: "Termo 6", codigo: "9799", nome: "Seleção de Materiais", turma: "I", professor: "Quinteiro", dia: "Quarta-feira", horario: "15h30" },
    { id: 218, termo: "Termo 6", codigo: "9799", nome: "Seleção de Materiais", turma: "N", professor: "Quinteiro", dia: "Segunda-feira", horario: "19h00" },
    { id: 219, termo: "Termo 6", codigo: "9799", nome: "Seleção de Materiais", turma: "N", professor: "Quinteiro", dia: "Quarta-feira", horario: "19h00" },

    { id: 220, termo: "Termo 6", codigo: "5373", nome: "Álgebra Linear II", turma: "I", professor: "Abbas", dia: "Terça-feira", horario: "13h30" },
    { id: 221, termo: "Termo 6", codigo: "5373", nome: "Álgebra Linear II", turma: "I", professor: "Abbas", dia: "Quinta-feira", horario: "13h30" },
    { id: 222, termo: "Termo 6", codigo: "5373", nome: "Álgebra Linear II", turma: "N", professor: "Macedo", dia: "Terça-feira", horario: "21h00" },
    { id: 223, termo: "Termo 6", codigo: "5373", nome: "Álgebra Linear II", turma: "N", professor: "Macedo", dia: "Sexta-feira", horario: "19h00" },

    { id: 224, termo: "Termo 6", codigo: "5918", nome: "Análise Real II", turma: "I", professor: "Vanessa", dia: "Segunda-feira", horario: "15h30" },
    { id: 225, termo: "Termo 6", codigo: "5918", nome: "Análise Real II", turma: "I", professor: "Vanessa", dia: "Quarta-feira", horario: "15h30" },
    { id: 226, termo: "Termo 6", codigo: "5918", nome: "Análise Real II", turma: "N", professor: "Claudia Aline", dia: "Segunda-feira", horario: "21h00" },
    { id: 227, termo: "Termo 6", codigo: "5918", nome: "Análise Real II", turma: "N", professor: "Claudia Aline", dia: "Quarta-feira", horario: "21h00" },

    { id: 232, termo: "Termo 6", codigo: "4401", nome: "Inferência e Análise de Regressão", turma: "I", professor: "Luzia", dia: "Terça-feira", horario: "15h30" },
    { id: 233, termo: "Termo 6", codigo: "4401", nome: "Inferência e Análise de Regressão", turma: "I", professor: "Luzia", dia: "Quinta-feira", horario: "15h30" },
    { id: 234, termo: "Termo 6", codigo: "4401", nome: "Inferência e Análise de Regressão", turma: "N", professor: "Luzia", dia: "Terça-feira", horario: "19h00" },
    { id: 235, termo: "Termo 6", codigo: "4401", nome: "Inferência e Análise de Regressão", turma: "N", professor: "Luzia", dia: "Quinta-feira", horario: "19h00" },

    { id: 236, termo: "Termo 6", codigo: "2617", nome: "Redes de Computadores", turma: "I", professor: "Kimura", dia: "Terça-feira", horario: "13h30" },
    { id: 237, termo: "Termo 6", codigo: "2617", nome: "Redes de Computadores", turma: "I", professor: "Kimura", dia: "Quinta-feira", horario: "13h30" },
    { id: 238, termo: "Termo 6", codigo: "2617", nome: "Redes de Computadores", turma: "N", professor: "Arlindo", dia: "Terça-feira", horario: "19h00" },
    { id: 239, termo: "Termo 6", codigo: "2617", nome: "Redes de Computadores", turma: "N", professor: "Arlindo", dia: "Quinta-feira", horario: "19h00" },

    { id: 240, termo: "Termo 6", codigo: "2614", nome: "Engenharia de Software", turma: "I", professor: "Fabio", dia: "Terça-feira", horario: "10h00" },
    { id: 241, termo: "Termo 6", codigo: "2614", nome: "Engenharia de Software", turma: "I", professor: "Fabio", dia: "Quinta-feira", horario: "10h00" },
    { id: 242, termo: "Termo 6", codigo: "2614", nome: "Engenharia de Software", turma: "N", professor: "Otavio", dia: "Segunda-feira", horario: "21h00" },
    { id: 243, termo: "Termo 6", codigo: "2614", nome: "Engenharia de Software", turma: "N", professor: "Otavio", dia: "Quarta-feira", horario: "21h00" },

    { id: 244, termo: "Termo 6", codigo: "3051", nome: "Computação Gráfica", turma: "I", professor: "Ana", dia: "Quinta-feira", horario: "15h30" },
    { id: 245, termo: "Termo 6", codigo: "3051", nome: "Computação Gráfica", turma: "I", professor: "Ana", dia: "Sexta-feira", horario: "15h30" },
    { id: 246, termo: "Termo 6", codigo: "3051", nome: "Computação Gráfica", turma: "N", professor: "Ana", dia: "Quinta-feira", horario: "21h00" },
    { id: 247, termo: "Termo 6", codigo: "3051", nome: "Computação Gráfica", turma: "N", professor: "Ana", dia: "Sexta-feira", horario: "21h00" },

    { id: 248, termo: "Termo 6", codigo: "3580", nome: "Programação Concorrente e Distribuída", turma: "T", professor: "Alvaro", dia: "Segunda-feira", horario: "13h30" },
    { id: 249, termo: "Termo 6", codigo: "3580", nome: "Programação Concorrente e Distribuída", turma: "T", professor: "Alvaro", dia: "Quarta-feira", horario: "13h30" },
    { id: 250, termo: "Termo 6", codigo: "3580", nome: "Programação Concorrente e Distribuída", turma: "N", professor: "Denise", dia: "Segunda-feira", horario: "19h00" },
    { id: 251, termo: "Termo 6", codigo: "3580", nome: "Programação Concorrente e Distribuída", turma: "N", professor: "Denise", dia: "Quarta-feira", horario: "19h00" },

    { id: 252, termo: "Termo 6", codigo: "2615", nome: "Compiladores", turma: "I", professor: "Rodrigo", dia: "Terça-feira", horario: "15h30" },
    { id: 253, termo: "Termo 6", codigo: "2615", nome: "Compiladores", turma: "I", professor: "Rodrigo", dia: "Sexta-feira", horario: "13h30" },
    { id: 254, termo: "Termo 6", codigo: "2615", nome: "Compiladores", turma: "N", professor: "Galvão", dia: "Terça-feira", horario: "21h00" },
    { id: 255, termo: "Termo 6", codigo: "2615", nome: "Compiladores", turma: "N", professor: "Galvão", dia: "Sexta-feira", horario: "19h00" },

    { id: 256, termo: "Termo 6", codigo: "5386", nome: "Controle de Sistemas Dinâmicos", turma: "I", professor: "Paiva", dia: "Segunda-feira", horario: "10h00" },
    { id: 257, termo: "Termo 6", codigo: "5386", nome: "Controle de Sistemas Dinâmicos", turma: "I", professor: "Paiva", dia: "Sexta-feira", horario: "10h00" },
    { id: 258, termo: "Termo 6", codigo: "5386", nome: "Controle de Sistemas Dinâmicos", turma: "N", professor: "Sérgio", dia: "Segunda-feira", horario: "19h00" },
    { id: 259, termo: "Termo 6", codigo: "5386", nome: "Controle de Sistemas Dinâmicos", turma: "N", professor: "Sérgio", dia: "Quarta-feira", horario: "19h00" },

    { id: 260, termo: "Termo 6", codigo: "9803", nome: "Fundamentos de Eletrônica Aplicada", turma: "I", professor: "Fernanda", dia: "Segunda-feira", horario: "15h30" },
    { id: 261, termo: "Termo 6", codigo: "9803", nome: "Fundamentos de Eletrônica Aplicada", turma: "N", professor: "Fernanda", dia: "Segunda-feira", horario: "19h00" },

    { id: 262, termo: "Termo 6", codigo: "6095", nome: "Laboratório de Sistemas Computacionais - Eng. de Si", turma: "I", professor: "Silva", dia: "Quarta-feira", horario: "15h30" },
    { id: 263, termo: "Termo 6", codigo: "6095", nome: "Laboratório de Sistemas Computacionais - Eng. de Si", turma: "N", professor: "Silva", dia: "Quarta-feira", horario: "19h00" },

    { id: 264, termo: "Termo 6", codigo: "5851", nome: "Engenharia Bioquímica II", turma: "I", professor: "Elisabeth", dia: "Terça-feira", horario: "13h30" },
    { id: 265, termo: "Termo 6", codigo: "5851", nome: "Engenharia Bioquímica II", turma: "I", professor: "Elisabeth", dia: "Quinta-feira", horario: "13h30" },

    { id: 266, termo: "Termo 6", codigo: "5390", nome: "Introdução à Biologia de Sistemas", turma: "I", professor: "André", dia: "Segunda-feira", horario: "15h30" },
    { id: 267, termo: "Termo 6", codigo: "5390", nome: "Introdução à Biologia de Sistemas", turma: "I", professor: "André", dia: "Quarta-feira", horario: "15h30" },
    { id: 268, termo: "Termo 6", codigo: "5390", nome: "Introdução à Biologia de Sistemas", turma: "N", professor: "André", dia: "Segunda-feira", horario: "19h00" },
    { id: 269, termo: "Termo 6", codigo: "5390", nome: "Introdução à Biologia de Sistemas", turma: "N", professor: "André", dia: "Quarta-feira", horario: "19h00" },

    { id: 270, termo: "Termo 6", codigo: "5857", nome: "Biotecnologia Ambiental I", turma: "I", professor: "Danielle", dia: "Terça-feira", horario: "15h30" },
    { id: 271, termo: "Termo 6", codigo: "5857", nome: "Biotecnologia Ambiental I", turma: "I", professor: "Danielle", dia: "Quinta-feira", horario: "15h30" },
    { id: 272, termo: "Termo 6", codigo: "5857", nome: "Biotecnologia Ambiental I", turma: "N", professor: "Danielle", dia: "Terça-feira", horario: "19h00" },
    { id: 273, termo: "Termo 6", codigo: "5857", nome: "Biotecnologia Ambiental I", turma: "N", professor: "Danielle", dia: "Quinta-feira", horario: "19h00" },

    { id: 274, termo: "Termo 6", codigo: "5850", nome: "Laboratório de Bioquímica Analítica", turma: "I", professor: "Conceição", dia: "Quinta-feira", horario: "08h00" },
    { id: 275, termo: "Termo 6", codigo: "5850", nome: "Laboratório de Bioquímica Analítica", turma: "I", professor: "Conceição", dia: "Quinta-feira", horario: "10h00" },

    { id: 276, termo: "Termo 6", codigo: "5852", nome: "Laboratório de Engenharia Bioquímica", turma: "I", professor: "Elisabeth", dia: "Segunda-feira", horario: "08h00" },
    { id: 277, termo: "Termo 6", codigo: "5852", nome: "Laboratório de Engenharia Bioquímica", turma: "I", professor: "Elisabeth", dia: "Segunda-feira", horario: "10h00" },

    // TERMO 8
    { id: 278, termo: "Termo 8", codigo: "6928", nome: "Metalurgia Mecânica", turma: "I", professor: "Danieli", dia: "Terça-feira", horario: "08h00" },
    { id: 279, termo: "Termo 8", codigo: "6928", nome: "Metalurgia Mecânica", turma: "I", professor: "Danieli", dia: "Terça-feira", horario: "10h00" },

    { id: 280, termo: "Termo 8", codigo: "9800", nome: "Tratamentos Térmicos", turma: "I", professor: "Capella", dia: "Segunda-feira", horario: "13h30" },
    { id: 281, termo: "Termo 8", codigo: "9800", nome: "Tratamentos Térmicos", turma: "I", professor: "Capella", dia: "Segunda-feira", horario: "15h30" },

    { id: 282, termo: "Termo 8", codigo: "5785", nome: "Reologia", turma: "I", professor: "Lilia", dia: "Quinta-feira", horario: "13h30" },

    { id: 283, termo: "Termo 8", codigo: "9801", nome: "Processamento de Termorrigidos e Elastômeros", turma: "I", professor: "Passador", dia: "Quinta-feira", horario: "15h30" },

    { id: 284, termo: "Termo 8", codigo: "5873", nome: "Processamento de Materiais Cerâmicos", turma: "I", professor: "Leonardo", dia: "Quarta-feira", horario: "13h30" },
    { id: 285, termo: "Termo 8", codigo: "5873", nome: "Processamento de Materiais Cerâmicos", turma: "I", professor: "Leonardo", dia: "Quarta-feira", horario: "15h30" },

    { id: 286, termo: "Termo 8", codigo: "5875", nome: "Cerâmicas Refratárias", turma: "I", professor: "Albers", dia: "Sexta-feira", horario: "10h00" },

    { id: 287, termo: "Termo 8", codigo: "6085", nome: "Introdução à Geometria Diferencial", turma: "I", professor: "Patricia", dia: "Segunda-feira", horario: "13h30" },
    { id: 288, termo: "Termo 8", codigo: "6085", nome: "Introdução à Geometria Diferencial", turma: "I", professor: "Patricia", dia: "Quarta-feira", horario: "13h30" },

    { id: 289, termo: "Termo 8", codigo: "6104", nome: "Métodos Numéricos para Eq. Diferenciais", turma: "I", professor: "Thadeu", dia: "Terça-feira", horario: "15h30" },
    { id: 290, termo: "Termo 8", codigo: "6104", nome: "Métodos Numéricos para Eq. Diferenciais", turma: "I", professor: "Thadeu", dia: "Sexta-feira", horario: "15h30" },

    { id: 291, termo: "Termo 8", codigo: "5102", nome: "Otimização Inteira", turma: "I", professor: "Horácio", dia: "Quarta-feira", horario: "15h30" },
    { id: 292, termo: "Termo 8", codigo: "5102", nome: "Otimização Inteira", turma: "I", professor: "Horácio", dia: "Sexta-feira", horario: "15h30" },

    { id: 293, termo: "Termo 8", codigo: "8288", nome: "Segurança da Informação", turma: "I", professor: "Cappabianco", dia: "Segunda-feira", horario: "15h30" },

    { id: 294, termo: "Termo 8", codigo: "6102", nome: "Lab. de Sistemas Computacionais: SO", turma: "I", professor: "Tiago", dia: "Segunda-feira", horario: "15h30" },
    { id: 295, termo: "Termo 8", codigo: "6102", nome: "Lab. de Sistemas Computacionais: SO", turma: "I", professor: "Tiago", dia: "Quarta-feira", horario: "15h30" },
    { id: 296, termo: "Termo 8", codigo: "6102", nome: "Lab. de Sistemas Computacionais: SO", turma: "N", professor: "Tiago", dia: "Segunda-feira", horario: "19h00" },
    { id: 297, termo: "Termo 8", codigo: "6102", nome: "Lab. de Sistemas Computacionais: SO", turma: "N", professor: "Tiago", dia: "Quarta-feira", horario: "19h00" },

    { id: 298, termo: "Termo 8", codigo: "5933", nome: "Biossensores", turma: "I", professor: "Marli", dia: "Terça-feira", horario: "13h30" },
    { id: 299, termo: "Termo 8", codigo: "5933", nome: "Biossensores", turma: "I", professor: "Marli", dia: "Quinta-feira", horario: "13h30" },

    { id: 300, termo: "Termo 8", codigo: "6107", nome: "Engenharia Clínica Hospitalar Aplicada", turma: "I", professor: "Matheus", dia: "Sexta-feira", horario: "13h30" },
    { id: 300, termo: "Termo 8", codigo: "6107", nome: "Engenharia Clínica Hospitalar Aplicada", turma: "I", professor: "Matheus", dia: "Sexta-feira", horario: "15h30" },

    { id: 301, termo: "Termo 8", codigo: "9794", nome: "Fundamentos de Administração", turma: "I", professor: "Iraci", dia: "Quarta-feira", horario: "10h00" },
    { id: 302, termo: "Termo 8", codigo: "9794", nome: "Fundamentos de Administração", turma: "I", professor: "Iraci", dia: "Sexta-feira", horario: "15h30" },

    { id: 303, termo: "Termo 8", codigo: "8273", nome: "Instrumentos Biomédicos", turma: "I", professor: "Saraiva", dia: "Terça-feira", horario: "15h30" },
    { id: 304, termo: "Termo 8", codigo: "8273", nome: "Instrumentos Biomédicos", turma: "I", professor: "Saraiva", dia: "Quinta-feira", horario: "15h30" },

    { id: 305, termo: "Termo 8", codigo: "6033", nome: "Sistemas Embarcados", turma: "I", professor: "Fernanda", dia: "Segunda-feira", horario: "13h30" },
    { id: 306, termo: "Termo 8", codigo: "6033", nome: "Sistemas Embarcados", turma: "I", professor: "Fernanda", dia: "Quarta-feira", horario: "13h30" },
    { id: 307, termo: "Termo 8", codigo: "6033", nome: "Sistemas Embarcados", turma: "N", professor: "Aoki", dia: "Terça-feira", horario: "19h00" },
    { id: 308, termo: "Termo 8", codigo: "6033", nome: "Sistemas Embarcados", turma: "N", professor: "Aoki", dia: "Quinta-feira", horario: "19h00" },

    { id: 309, termo: "Termo 8", codigo: "4374", nome: "Metodologia da Pesquisa e Comunicação Científica", turma: "I", professor: "Gurjão", dia: "Segunda-feira", horario: "15h30" },

    // TERMO 10
    { id: 310, termo: "Termo 10", codigo: "9795", nome: "Projetos em Engenharia Biomédica", turma: "I", professor: "Urban", dia: "Segunda-feira", horario: "13h30" },
    { id: 311, termo: "Termo 10", codigo: "9795", nome: "Projetos em Engenharia Biomédica", turma: "I", professor: "Urban", dia: "Quarta-feira", horario: "15h30" },
    { id: 312, termo: "Termo 10", codigo: "9795", nome: "Projetos em Engenharia Biomédica", turma: "N", professor: "Urban", dia: "Segunda-feira", horario: "21h00" },
    { id: 313, termo: "Termo 10", codigo: "9795", nome: "Projetos em Engenharia Biomédica", turma: "N", professor: "Urban", dia: "Quarta-feira", horario: "21h00" },

    { id: 314, termo: "Termo 10", codigo: "6112", nome: "Engenharia Médica Aplicada", turma: "I", professor: "Adenauer", dia: "Segunda-feira", horario: "15h30" },
    { id: 315, termo: "Termo 10", codigo: "6112", nome: "Engenharia Médica Aplicada", turma: "I", professor: "Adenauer", dia: "Quarta-feira", horario: "15h30" },
    { id: 316, termo: "Termo 10", codigo: "6112", nome: "Engenharia Médica Aplicada", turma: "N", professor: "Adenauer", dia: "Segunda-feira", horario: "19h00" },
    { id: 317, termo: "Termo 10", codigo: "6112", nome: "Engenharia Médica Aplicada", turma: "N", professor: "Adenauer", dia: "Quarta-feira", horario: "19h00" },

    // ELETIVAS E REOFERECIMENTOS
    { id: 318, termo: "Termo 8", codigo: "10517", nome: "Experimentando a Engenharia de Materiais", turma: "I", professor: "Albers", dia: "Sexta-feira", horario: "13h30" },
    { id: 319, termo: "Termo 8", codigo: "10517", nome: "Experimentando a Engenharia de Materiais", turma: "I", professor: "Albers", dia: "Sexta-feira", horario: "15h30" },

    { id: 320, termo: "Termo 8", codigo: "9689", nome: "Engenharia de Microestrutura de Metais e Ligas", turma: "I", professor: "Kátia", dia: "Segunda-feira", horario: "08h00" },
    { id: 321, termo: "Termo 8", codigo: "9689", nome: "Engenharia de Microestrutura de Metais e Ligas", turma: "I", professor: "Kátia", dia: "Quarta-feira", horario: "08h00" },

    { id: 322, termo: "Termo 8", codigo: "0001", nome: "Projetos Sustentáveis em Polímeros", turma: "I", professor: "Lemes", dia: "Terça-feira", horario: "10h00" },
    { id: 323, termo: "Termo 8", codigo: "0001", nome: "Projetos Sustentáveis em Polímeros", turma: "I", professor: "Lemes", dia: "Quinta-feira", horario: "10h00" },

    { id: 324, termo: "Termo 6", codigo: "5402", nome: "Vidros, Vitrocerâmicos e Vidrados", turma: "N", professor: "Eliandra", dia: "Quinta-feira", horario: "19h00" },
    { id: 325, termo: "Termo 6", codigo: "5402", nome: "Vidros, Vitrocerâmicos e Vidrados", turma: "N", professor: "Eliandra", dia: "Quinta-feira", horario: "21h00" },

    { id: 326, termo: "Termo 6", codigo: "5782", nome: "Tecnologia de Tintas e Vernizes", turma: "N", professor: "Mauricio", dia: "Sexta-feira", horario: "19h00" },
    { id: 327, termo: "Termo 6", codigo: "5782", nome: "Tecnologia de Tintas e Vernizes", turma: "N", professor: "Mauricio", dia: "Sexta-feira", horario: "21h00" },

    { id: 328, termo: "Termo 6", codigo: "5859", nome: "Botânica e Fisiologia Vegetal", turma: "I", professor: "Michael", dia: "Segunda-feira", horario: "13h30" },
    { id: 329, termo: "Termo 6", codigo: "5859", nome: "Botânica e Fisiologia Vegetal", turma: "I", professor: "Michael", dia: "Quarta-feira", horario: "13h30" },

    { id: 330, termo: "Termo 6", codigo: "5858", nome: "Biotecnologia Animal", turma: "N", professor: "Loures", dia: "Segunda-feira", horario: "21h00" },
    { id: 331, termo: "Termo 6", codigo: "5858", nome: "Biotecnologia Animal", turma: "N", professor: "Loures", dia: "Quarta-feira", horario: "21h00" },

    { id: 332, termo: "Termo 6", codigo: "5063", nome: "Biotecnologia de Energias Renováveis II", turma: "N", professor: "Danielle", dia: "Terça-feira", horario: "21h00" },
    { id: 333, termo: "Termo 6", codigo: "5063", nome: "Biotecnologia de Energias Renováveis II", turma: "N", professor: "Danielle", dia: "Quinta-feira", horario: "21h00" },

    { id: 334, termo: "Termo 8", codigo: "5864", nome: "Imunologia Aplicada", turma: "N", professor: "Loures", dia: "Segunda-feira", horario: "19h00" },
    { id: 335, termo: "Termo 8", codigo: "5864", nome: "Imunologia Aplicada", turma: "N", professor: "Loures", dia: "Quarta-feira", horario: "19h00" },

    { id: 336, termo: "Termo 8", codigo: "5869", nome: "Ecologia Avançada", turma: "I", professor: "Amado", dia: "Segunda-feira", horario: "15h30" },
    { id: 337, termo: "Termo 8", codigo: "5869", nome: "Ecologia Avançada", turma: "I", professor: "Amado", dia: "Quarta-feira", horario: "15h30" },

    { id: 338, termo: "Termo 4", codigo: "0003", nome: "Introdução à Nanotecnologia", turma: "I", professor: "Elias", dia: "Quinta-feira", horario: "15h30" },
    { id: 339, termo: "Termo 4", codigo: "0003", nome: "Introdução à Nanotecnologia", turma: "N", professor: "Elias", dia: "Quinta-feira", horario: "19h00" },

    { id: 340, termo: "Termo 4", codigo: "0005", nome: "Mudança do Clima e Sociedade", turma: "I", professor: "Amado", dia: "Segunda-feira", horario: "13h30" },
    { id: 341, termo: "Termo 4", codigo: "0005", nome: "Mudança do Clima e Sociedade", turma: "N", professor: "Amado", dia: "Quarta-feira", horario: "19h00" },

    { id: 342, termo: "Termo 6", codigo: "0007", nome: "Química Analítica", turma: "I", professor: "Elias", dia: "Quarta-feira", horario: "13h30" },
    { id: 343, termo: "Termo 6", codigo: "0007", nome: "Química Analítica", turma: "I", professor: "Elias", dia: "Quarta-feira", horario: "15h30" },

    { id: 344, termo: "Termo 6", codigo: "0009", nome: "Química Orgânica Experimental", turma: "N", professor: "João", dia: "Quarta-feira", horario: "19h00" },
    { id: 345, termo: "Termo 6", codigo: "0009", nome: "Química Orgânica Experimental", turma: "N", professor: "João", dia: "Quarta-feira", horario: "21h00" },

    { id: 346, termo: "Termo 4", codigo: "0011", nome: "Práticas em Projetos Extensionistas II", turma: "I", professor: "Marli", dia: "Sexta-feira", horario: "13h30" },
    { id: 347, termo: "Termo 4", codigo: "0011", nome: "Práticas em Projetos Extensionistas II", turma: "I", professor: "Marli", dia: "Sexta-feira", horario: "15h30" },
    { id: 348, termo: "Termo 4", codigo: "0011", nome: "Práticas em Projetos Extensionistas II", turma: "N", professor: "Marli", dia: "Sexta-feira", horario: "19h00" },
    { id: 349, termo: "Termo 4", codigo: "0011", nome: "Práticas em Projetos Extensionistas II", turma: "N", professor: "Marli", dia: "Sexta-feira", horario: "21h00" },

    { id: 350, termo: "Termo 4", codigo: "0015", nome: "Introdução aos PEPICTS II", turma: "I", professor: "Edson", dia: "Sexta-feira", horario: "15h30" },
    { id: 351, termo: "Termo 4", codigo: "0015", nome: "Introdução aos PEPICTS II", turma: "N", professor: "Edson", dia: "Sexta-feira", horario: "19h00" },

    { id: 352, termo: "Termo 6", codigo: "5095", nome: "Análise de Investimentos e Riscos", turma: "I", professor: "Sato", dia: "Terça-feira", horario: "13h30" },
    { id: 353, termo: "Termo 6", codigo: "5095", nome: "Análise de Investimentos e Riscos", turma: "I", professor: "Sato", dia: "Quinta-feira", horario: "13h30" },
    { id: 354, termo: "Termo 6", codigo: "5095", nome: "Análise de Investimentos e Riscos", turma: "N", professor: "Sato", dia: "Terça-feira", horario: "19h00" },
    { id: 355, termo: "Termo 6", codigo: "5095", nome: "Análise de Investimentos e Riscos", turma: "N", professor: "Sato", dia: "Quinta-feira", horario: "19h00" },

    { id: 356, termo: "Termo 6", codigo: "5886", nome: "Gestão de projetos", turma: "I", professor: "Iraci", dia: "Quarta-feira", horario: "13h30" },

    { id: 357, termo: "Termo 5", codigo: "0017", nome: "Farmacologia Molecular", turma: "I", professor: "Flavio", dia: "Segunda-feira", horario: "15h30" },
    { id: 358, termo: "Termo 5", codigo: "0017", nome: "Farmacologia Molecular", turma: "I", professor: "Flavio", dia: "Quarta-feira", horario: "15h30" },

    { id: 359, termo: "Termo 5", codigo: "0019", nome: "Aplicações de Redes Neurais de Aprendizado Profundo", turma: "N", professor: "Matheus", dia: "Sexta-feira", horario: "19h00" },
    { id: 360, termo: "Termo 5", codigo: "0019", nome: "Aplicações de Redes Neurais de Aprendizado Profundo", turma: "N", professor: "Matheus", dia: "Sexta-feira", horario: "21h00" },

    { id: 361, termo: "Termo 4", codigo: "0021", nome: "TECNOLOGIA SOCIAL: PRÁXIS E CONTRA-HEGEMONIA", turma: "N", professor: "Evandro", dia: "Sexta-feira", horario: "15h30" },
    { id: 362, termo: "Termo 4", codigo: "0021", nome: "TECNOLOGIA SOCIAL: PRÁXIS E CONTRA-HEGEMONIA", turma: "I", professor: "Evandro", dia: "Terça-feira", horario: "19h00" },

    { id: 363, termo: "Termo 4", codigo: "0023", nome: "Cultura dos Jogos Digitais", turma: "I", professor: "Pereira", dia: "Sexta-feira", horario: "13h30" },
    { id: 364, termo: "Termo 4", codigo: "8536", nome: "Desenvolvimento de Games", turma: "I", professor: "Cappabianco", dia: "Terça-feira", horario: "21h00" },
    { id: 365, termo: "Termo 4", codigo: "0024", nome: "Cultura dos Jogos Digitais (Noturno)", turma: "N", professor: "Pereira", dia: "Sexta-feira", horario: "19h00" },

    { id: 366, termo: "Termo 4", codigo: "4352", nome: "Modelagem Computacional", turma: "I", professor: "Lobosco", dia: "Segunda-feira", horario: "15h30" },
    { id: 367, termo: "Termo 4", codigo: "4352", nome: "Modelagem Computacional", turma: "N", professor: "Lobosco", dia: "Segunda-feira", horario: "21h00" },

    { id: 368, termo: "Termo 8", codigo: "0025", nome: "Introdução à Pesquisa Operacional", turma: "I", professor: "Chaves", dia: "Segunda-feira", horario: "19h00" },
    { id: 369, termo: "Termo 8", codigo: "0025", nome: "Introdução à Pesquisa Operacional", turma: "I", professor: "Chaves", dia: "Quarta-feira", horario: "19h00" },

    { id: 370, termo: "Termo 8", codigo: "0027", nome: "Neurociência", turma: "I", professor: "Elbert", dia: "Segunda-feira", horario: "08h00" },
    { id: 371, termo: "Termo 8", codigo: "0027", nome: "Neurociência", turma: "I", professor: "Elbert", dia: "Quarta-feira", horario: "08h00" },

    { id: 372, termo: "Termo 8", codigo: "0029", nome: "Competições em Ciências de Dados", turma: "I", professor: "Marcio", dia: "Terça-feira", horario: "10h00" },
    { id: 373, termo: "Termo 8", codigo: "0029", nome: "Competições em Ciências de Dados", turma: "I", professor: "Marcio", dia: "Quinta-feira", horario: "10h00" },

    { id: 374, termo: "Termo 8", codigo: "0031", nome: "Introdução à Redes Neurais Artificiais", turma: "I", professor: "Quiles", dia: "Segunda-feira", horario: "13h30" },
    { id: 375, termo: "Termo 8", codigo: "0031", nome: "Introdução à Redes Neurais Artificiais", turma: "I", professor: "Quiles", dia: "Quarta-feira", horario: "13h30" },

    { id: 376, termo: "Termo 6", codigo: "0033", nome: "Tópicos - Acessibilidade Digital", turma: "I", professor: "Silva", dia: "Quinta-feira", horario: "13h30" },
    { id: 377, termo: "Termo 6", codigo: "0034", nome: "Tópicos - Acessibilidade Digital", turma: "N", professor: "Silva", dia: "Quinta-feira", horario: "19h00" },

    { id: 378, termo: "Termo 6", codigo: "0035", nome: "RPVMM", turma: "N", professor: "Leduino", dia: "Terça-feira", horario: "19h00" },
    { id: 379, termo: "Termo 6", codigo: "0035", nome: "RPVMM", turma: "N", professor: "Leduino", dia: "Sexta-feira", horario: "21h00" },

    { id: 380, termo: "Termo 6", codigo: "0037", nome: "RBVMM", turma: "I", professor: "Horácio", dia: "Segunda-feira", horario: "10h00" },
    { id: 381, termo: "Termo 6", codigo: "0037", nome: "RBVMM", turma: "I", professor: "Horácio", dia: "Quarta-feira", horario: "10h00" },

    { id: 382, termo: "Termo 6", codigo: "9881", nome: "Internet das Coisas", turma: "I", professor: "Gabriel", dia: "Segunda-feira", horario: "13h30" },
    { id: 383, termo: "Termo 6", codigo: "9881", nome: "Internet das Coisas", turma: "I", professor: "Gabriel", dia: "Quarta-feira", horario: "13h30" },
    { id: 384, termo: "Termo 6", codigo: "9881", nome: "Internet das Coisas", turma: "N", professor: "Gabriel", dia: "Terça-feira", horario: "19h00" },
    { id: 385, termo: "Termo 6", codigo: "9881", nome: "Internet das Coisas", turma: "N", professor: "Gabriel", dia: "Quinta-feira", horario: "19h00" },

    // REOFERECIMENTOS ADICIONAIS
    { id: 386, termo: "Termo 9", codigo: "5879", nome: "Reof - Processamento de Termoplásticos", turma: "I", professor: "Passador", dia: "Terça-feira", horario: "13h30" },
    { id: 387, termo: "Termo 9", codigo: "5879", nome: "Reof - Processamento de Termoplásticos", turma: "I", professor: "Passador", dia: "Terça-feira", horario: "15h30" },

    { id: 388, termo: "Termo 5", codigo: "6674", nome: "Reciclagem de Materiais (Reof)", turma: "N", professor: "Lilia", dia: "Terça-feira", horario: "10h00" },

    { id: 389, termo: "Termo 1", codigo: "0050", nome: "Química Geral", turma: "I", professor: "Raquel", dia: "Segunda-feira", horario: "08h00" },
    { id: 390, termo: "Termo 1", codigo: "0050", nome: "Química Geral", turma: "I", professor: "Raquel", dia: "Quarta-feira", horario: "08h00" },

    { id: 391, termo: "Termo 1", codigo: "9394", nome: "Lógica de Programação", turma: "I", professor: "Didier", dia: "Segunda-feira", horario: "15h30" },
    { id: 392, termo: "Termo 1", codigo: "9394", nome: "Lógica de Programação", turma: "I", professor: "Didier", dia: "Quarta-feira", horario: "15h30" },
    { id: 393, termo: "Termo 1", codigo: "9394", nome: "Lógica de Programação", turma: "N", professor: "Didier", dia: "Segunda-feira", horario: "19h00" },
    { id: 394, termo: "Termo 1", codigo: "9394", nome: "Lógica de Programação", turma: "N", professor: "Didier", dia: "Quarta-feira", horario: "19h00" },

    { id: 395, termo: "Termo 3", codigo: "2833", nome: "Algoritmos e Estruturas de Dados II", turma: "I", professor: "Berton", dia: "Segunda-feira", horario: "15h30" },
    { id: 396, termo: "Termo 3", codigo: "2833", nome: "Algoritmos e Estruturas de Dados II", turma: "I", professor: "Berton", dia: "Quarta-feira", horario: "15h30" },
    { id: 397, termo: "Termo 3", codigo: "2833", nome: "Algoritmos e Estruturas de Dados II", turma: "N", professor: "Berton", dia: "Segunda-feira", horario: "19h00" },
    { id: 398, termo: "Termo 3", codigo: "2833", nome: "Algoritmos e Estruturas de Dados II", turma: "N", professor: "Berton", dia: "Quarta-feira", horario: "19h00" },

    { id: 399, termo: "Termo 5", codigo: "2975", nome: "Teoria de Grafos", turma: "I", professor: "Luis", dia: "Segunda-feira", horario: "15h30" },
    { id: 400, termo: "Termo 5", codigo: "2975", nome: "Teoria de Grafos", turma: "I", professor: "Luis", dia: "Quarta-feira", horario: "15h30" },

    { id: 401, termo: "Termo 1", codigo: "5703", nome: "Fundamentos de Biologia Moderna", turma: "IA", professor: "Villaverde", dia: "Terça-feira", horario: "08h00" },
    { id: 402, termo: "Termo 1", codigo: "5703", nome: "Fundamentos de Biologia Moderna", turma: "IA", professor: "Villaverde", dia: "Quinta-feira", horario: "08h00" },
    { id: 403, termo: "Termo 1", codigo: "5703", nome: "Fundamentos de Biologia Moderna", turma: "IB", professor: "Villaverde", dia: "Terça-feira", horario: "13h30" },
    { id: 404, termo: "Termo 1", codigo: "5703", nome: "Fundamentos de Biologia Moderna", turma: "IB", professor: "Villaverde", dia: "Quinta-feira", horario: "13h30" },

    { id: 405, termo: "Termo 9", codigo: "6106", nome: "TCC-I-EC", turma: "I", professor: "Marcorin", dia: "Sexta-feira", horario: "19h00" },

    { id: 406, termo: "Termo 7", codigo: "0055", nome: "Laboratório de Circuitos Elétricos", turma: "I", professor: "Gabriel", dia: "Terça-feira", horario: "15h30" },
    { id: 407, termo: "Termo 7", codigo: "0055", nome: "Laboratório de Circuitos Elétricos", turma: "N", professor: "Gabriel", dia: "Terça-feira", horario: "21h00" },
    { id: 408, termo: "Termo 6", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "ID", professor: "Gama", dia: "Segunda-feira", horario: "13h30" },
    { id: 409, termo: "Termo 6", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "ID", professor: "Gama", dia: "Quarta-feira", horario: "13h30" },
    { id: 410, termo: "Termo 6", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IE", professor: "Gama", dia: "Segunda-feira", horario: "15h30" },
    { id: 411, termo: "Termo 6", codigo: "4328", nome: "Séries e Equações Diferenciais Ordinárias", turma: "IE", professor: "Gama", dia: "Quarta-feira", horario: "15h30" }
];

// Onde salvamos as escolhas do usuário usando apenas o ID único da matéria
let gradeSalvaIds = JSON.parse(localStorage.getItem('minhaGradeIds_2026')) || [];

// ==========================================================
// 3. FUNÇÃO PARA RENDERIZAR A INTERFACE DA GRADE HORÁRIA
// ==========================================================
function desenharGrade() {
    const container = document.getElementById('grade-container');

    let html = `<div class="grid grid-cols-6 border border-gray-300 rounded shadow-sm bg-white overflow-hidden">`;
    
    // Topo cinza com os dias da semana
    html += `<div class="bg-gray-200 p-3 border border-gray-300 flex items-center justify-center font-bold text-xs text-gray-600">Horário</div>`;
    diasSemana.forEach(dia => {
        html += `<div class="bg-gray-200 p-3 border border-gray-300 font-bold text-center text-xs text-gray-700">${dia}</div>`;
    });
    
    // Linhas de Horários e Células
    horarios.forEach(horario => {
        // Coluna Lateral de Horário
        html += `<div class="bg-gray-100 p-2 font-bold text-center flex flex-col items-center justify-center border border-gray-300 text-xs text-gray-600 h-24">
                    <span>${horario}</span>
                 </div>`;
        
        // Células dos dias
        diasSemana.forEach(dia => {
            const materiaNaCelula = materiasOfertadas.find(m => 
                gradeSalvaIds.includes(m.id) && m.dia === dia && m.horario === horario
            );
            
            let conteudoCelula = "";
            let estiloDesign = "bg-white hover:bg-blue-50/40 cursor-pointer";
            
            if (materiaNaCelula) {
                // Mantemos as classes estruturais limpas, pois a cor vem do atributo 'style' agora
                estiloDesign = `cursor-pointer border-2 transition-all shadow-sm`;
                conteudoCelula = `
                    <div class="text-center p-1">
                        <p class="font-bold text-[11px] leading-tight">${materiaNaCelula.nome}</p>
                        <p class="text-[10px] opacity-90 font-medium mt-0.5">T: ${materiaNaCelula.turma} - ${materiaNaCelula.professor}</p>
                        <p class="text-[9px] opacity-75 font-mono">Cod: ${materiaNaCelula.codigo}</p>
                    </div>
                `;
        } else {
            const busca = document.getElementById('busca-materia') ? document.getElementById('busca-materia').value.toLowerCase() : "";
            
            const possuiOfertaNesseHorario = materiasOfertadas.some(m => 
                m.dia === dia && 
                m.horario === horario && 
                (m.nome.toLowerCase().includes(busca) || m.codigo.includes(busca)) // Filtra apenas pelo campo de texto
            );
                if (possuiOfertaNesseHorario) {
                    conteudoCelula = `<span class="text-blue-400 font-bold text-lg opacity-0 hover:opacity-100 transition-opacity">+</span>`;
                }
            }
            
        // Se houver uma matéria na célula, ela pega a cor HSL única. Se não, fica vazia.
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

function celulaClicada(dia, horario) {
    diaAtualSelecionado = dia;
    horarioAtualSelecionado = horario;
    
    const busca = document.getElementById('busca-materia') ? document.getElementById('busca-materia').value.toLowerCase() : "";

    const opcoesDisponiveis = materiasOfertadas.filter(m => 
        m.dia === dia && 
        m.horario === horario && 
        (m.nome.toLowerCase().includes(busca) || m.codigo.includes(busca)) // Filtra apenas pelo campo de texto
    );
    
    document.getElementById('modal-titulo').innerText = `Matérias para ${dia} às ${horario}`;
    
    // Vinculado ao ID correto sem o erro de digitação
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
            const estiloHtmlCor = obterCorMateria(materia.codigo); // Guarda a string style="background-color:..."
            
            const btn = document.createElement('button');
            // Removemos 'corEstilo' da classe e deixamos o Tailwind gerenciar o restante do botão
            btn.className = `w-full text-left p-3 border rounded-lg transition-all flex justify-between items-center ${jaEstaNaGrade ? 'ring-2 ring-offset-2 ring-gray-700 font-bold' : 'hover:scale-[1.01]'}`;
            
            // Limpa os delimitadores da string e injeta como um atributo style nativo no botão
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
function alternarMateria(materia) {
    // Busca todas as instâncias da mesma matéria/turma selecionada
    const todasInstanciasDaTurma = materiasOfertadas.filter(m => 
        m.codigo === materia.codigo && m.turma === materia.turma
    );
    
    const idsInstancias = todasInstanciasDaTurma.map(m => m.id);
    const estaAtiva = gradeSalvaIds.includes(materia.id);
    
    // Se a matéria JÁ ESTÁ ativa, o clique serve para removê-la da grade
    if (estaAtiva) {
        gradeSalvaIds = gradeSalvaIds.filter(id => !idsInstancias.includes(id));
    } else {
        // --- NOVO BLOQUEIO DE DUPLICIDADE POR CÓDIGO ---
        // Procura se o aluno já adicionou ESSA disciplina, mas de OUTRA turma em qualquer outro horário
        const jaPossuiMesmoCodigo = materiasOfertadas.some(m => 
            gradeSalvaIds.includes(m.id) && m.codigo === materia.codigo && m.turma !== materia.turma
        );

        if (jaPossuiMesmoCodigo) {
            alert(`Bloqueio: Você já incluiu a matéria "${materia.nome}" em sua grade! Não é permitido matricular-se na mesma disciplina em duas turmas ou horários diferentes.`);
            return; // Interrompe a execução e não adiciona nada
        }
        // -----------------------------------------------

        // Caso não haja duplicidade de código, remove conflitos físicos de colisão de horário
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
        
        // Adiciona de forma segura as novas instâncias horárias
        gradeSalvaIds.push(...idsInstancias);
    }
    
    localStorage.setItem('minhaGradeIds_2026', JSON.stringify(gradeSalvaIds));
    fecharModal();
    desenharGrade();
}

function removerMateriaPorId(id) {
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

// FUNÇÃO PARA LIMPAR TODA A GRADE SALVA
function limparTodaGrade() {
    if (confirm("Tem certeza que deseja apagar todas as matérias selecionadas da sua grade?")) {
        gradeSalvaIds = [];
        localStorage.setItem('minhaGradeIds_2026', JSON.stringify(gradeSalvaIds));
        desenharGrade();
    }
}

function filtrarGrade() {
    desenharGrade();
}

function fecharModal() {
    document.getElementById('modal').classList.add('hidden');
}

// ==========================================================
// 6. CONTADOR DE ACESSOS GLOBAL (VIA COUNT.CO)
// ==========================================================
function contabilizarAcessoPlataforma() {
    // Este link é um contador público e estável
    // O ID "grade-faculdade-milo" criará um contador único para o seu projeto
    fetch("https://count.co/hit/grade-faculdade-milo/acessos-globais")
        .then(response => response.json())
        .then(data => {
            // O serviço retorna o valor atualizado no campo 'hits'
            document.getElementById('contador-global').innerText = data.hits;
        })
        .catch(error => {
            console.error("Erro ao conectar no contador:", error);
            // Se falhar, tentamos exibir algo mais amigável ou escondemos
            document.getElementById('contador-global').innerText = "1";
        });
}

function baixarGradeImagem() {
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
// NEW: NOVA LÓGICA DE PESQUISA POR NOME COM JANELA DE HORÁRIOS
// ==========================================================

function buscarMateriasGerais() {
    const input = document.getElementById('busca-materia');
    const containerResultados = document.getElementById('resultados-busca');
    const busca = input.value.toLowerCase().trim();
    
    if (busca.length < 2) {
        containerResultados.innerHTML = "";
        containerResultados.classList.add('hidden');
        return;
    }
    
    const materiasUnicas = [];
    const nomesRastreados = new Set();
    
    materiasOfertadas.forEach(m => {
        const chaveIdentificacao = `${m.codigo}-${m.nome}-${m.turma}`;
        
        // Procura em toda a base de dados apenas pela correspondência do texto digitado
        if (!nomesRastreados.has(chaveIdentificacao) && (m.nome.toLowerCase().includes(busca) || m.codigo.includes(busca))) {
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

function mostrarHorariosDaMateria(codigo, turma) {
    // Localiza todos os horários associados a essa mesma matéria e turma na base de dados
    const todasInstancias = materiasOfertadas.filter(m => m.codigo === codigo && m.turma === turma);
    if (todasInstancias.length === 0) return;
    
    const primeira = todasInstancias[0];
    
    // Configura o título do Modal existente para exibir os dados gerais da matéria
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
    
    // Cria um botão descritivo mostrando cada dia/hora que ela ocupa
    todasInstancias.forEach(instancia => {
        const itemHorario = document.createElement('div');
        itemHorario.className = "w-full p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-medium text-blue-800 flex justify-between items-center mb-1.5";
        itemHorario.innerHTML = `
            <span>📅 ${instancia.dia}</span>
            <span class="font-mono bg-blue-100 px-2 py-0.5 rounded font-bold">${instancia.horario}</span>
        `;
        listaContainer.appendChild(itemHorario);
    });

    // Adiciona o botão definitivo para incluir/remover essa matéria da grade completa
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
    
    // Abre a janela flutuante na tela
    document.getElementById('modal').classList.remove('hidden');
}

// Fecha a caixinha se clicar em qualquer outra parte da tela
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
contabilizarAcessoPlataforma(); 
desenharGrade();

desenharGrade(); 
try {
    contabilizarAcessoPlataforma();
} catch (e) {
    console.error("Incapaz de computar acessos remotamente:", e);
}