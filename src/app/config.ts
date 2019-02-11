export const currentTeam = [

]

export const currentPartners = [

]

export const modelChart = {
    chart: {
        backgroundColor: '#181818',
        type: 'column',
        plotShadow: false
    },
    title: {
        text: '',
        style: { "color": "white", "fontSize": "1.8em", "font-weight": "500", "font-family": "'Montserrat', sans-serif"}
    },
    credits: {
        enabled: false
    },
    series: [
        {
            name: '',
            data: [0.131,0.20],
            color: '#3e3e3e'
        },
        {
            name: '',
            data: [0.09, 0.15],
            color: '#fcca60'
        }
    ],
    xAxis: {
        categories: [''],
        style: {'color' : 'white', "font-family": "'Montserrat', sans-serif"}
    },
    yAxis: {
        title: {
            text: '',
            style: {'color' : 'white', "font-family": "'Montserrat', sans-serif"}
        }
    },
    legend: {
        itemStyle: {'color' : 'white', 
                    "font-family": "'Montserrat', sans-serif", 
                    "font-weight": "400",
                    '-webkit-transition': 'all .2s linear',
                    '-moz-transition': 'all .2s linear',
                    'transition': 'all .2s linear'},
        itemHoverStyle: {'color' : '#ffeb91'}
    }
}

export const marketChart2007 = {
    chart: {
        backgroundColor: '#161616',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2007',
        style: { "color": "#fcca60", "fontSize": "25px", "font-weight": "700", "font-family": "'Montserrat', sans-serif"}
    },
    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<b>{point.percentage:.1f}%</b> of {series.name}'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Annural Revenue',
        showInLegend: true,
        data: [{
            name: 'Net Profit',
            sliced: true,
            y: 25,
            color: '#fcca60'
        }, {
            name: 'Expenditures',
            y: 75,
            color: '#3e3e3e'
        }]
    }],
    legend: {
        style: {"color": "white", "fontSize": "14px", "font-weight": "500", "font-family": "'Montserrat', sans-serif" },
    }
}

export const marketChart2017 = {
    chart: {
        backgroundColor: '#161616',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2017',
        style: { "color": "#fcca60", "fontSize": "25px", "font-weight": "700", "font-family": "'Montserrat', sans-serif"}
    },
    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<b>{point.percentage:.1f}%</b> of {series.name}'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Annural Revenue',
        data: [{
            name: 'Net Profit',
            sliced: true,
            y: 10,
            color: '#fcca60'
        }, {
            name: 'Expenditures',
            y: 90,
            color: '#3e3e3e'
        }]
    }]
}


