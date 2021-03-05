export function dataAtualFormatada(data) {
    const monthNames = ["January", "February", "Março", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    
    let dataInformation = new Date(data * 1000),
        dia = dataInformation.getDate().toString(),
        diaSemana = days[dia],
        diaF = (dia.length === 1) ? '0' + dia : dia,
        mesName = monthNames[dataInformation.getMonth().toString()],
        anoF = dataInformation.getFullYear()
    return diaSemana + ", " + diaF + " de " + mesName + " de " + anoF;
}

export function horaFormatada(data) {
    let dataInformation = new Date(data * 1000);
    // let hourBrasil = new Date(dataInformation.valueOf() - dataInformation.getTimezoneOffset() * 60000)
    return dataInformation.getHours() + ':' + dataInformation.getMinutes()
}