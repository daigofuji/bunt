$(document).ready(function() 
  {
    $('#datatable').DataTable( {
      "ajax": "/data/bunt.json",
      paging: false
    } );


    new Chartist.Line('.ct-chart', {
    labels: ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'],
    series: [
      [1651, 1540, 1526, 1635, 1544, 1667, 1479, 1383, 1343, 1200, 1025]
    ]
    }, {
    fullWidth: true,
    chartPadding: {
      right: 40
    },
    low: 0,
    showArea: true
    });

  }
).foundation();

