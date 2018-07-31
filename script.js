console.log("let's build some charts!")
//<!--Load the AJAX API-->

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawAllocationChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Score Range');
    data.addColumn('number', 'Games');
    data.addRows([
      ['0-100', 2],
      ['100-200', 5],
      ['200-300', 3],
    ]);

    var options = {'title':'Bowling Score Incidences',
                   'width':400,
                   'height':300,
                   'pieHole': 0.5};

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  function drawAllocationChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Expense');
    data.addColumn('number', 'Cents');
    data.addRows([
      ['administrative costs', 4],
      ['fundraising', 16],
      ['youth programs', 36],
      ['adult program', 44]
    ]);

    var options = {'title':'Each Dollar Donated Goes To',
                   'width':400,
                   'height':300,
                   'pieHole': 0.5,
                   colors: ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A']};

    var chart = new google.visualization.PieChart(document.getElementById('allocation'));
    chart.draw(data, options);
  }
