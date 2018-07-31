console.log("let's build some charts!")
//<!--Load the AJAX API-->

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawAllocationChart);
  google.charts.setOnLoadCallback(drawSemesterChart);
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
  function drawSemesterChart() {
    var data = google.visualization.arrayToDataTable([
      ['Semester', 'Number of Courses', { role: 'style' } ],
      ['Fall 2018', 0, 'color: #111E6C'],
      ['Spring 2019', 0, 'color: #1034A6'],
      ['Fall 2019', 1, 'color: #1D2951'],
      ['Spring 2020', 1, 'color: #4682B4'],
      ['Fall 2020', 3, 'color: #95C8D8'],
      ['Spring 2021', 3, 'color: #588BAE'],
      ['Fall 2021', 3, 'color: #0F52BA'],
      ['Spring 2022', 3, 'color: #6593F5'],
    ]);

    var options = {'title':'Courses taken each semester',
                   'width':400,
                   'height':300,
                 legend: { position: "none" }};

    var chart = new google.visualization.BarChart(document.getElementById('SemesterChart'));
    chart.draw(data, options);
  }

  // function drawChart() {
  //        var container = document.getElementById('timeline');
  //        var chart = new google.visualization.Timeline(container);
  //        var dataTable = new google.visualization.DataTable();
  //
  //        dataTable.addColumn({ type: 'string', id: 'President' });
  //        dataTable.addColumn({ type: 'date', id: 'Start' });
  //        dataTable.addColumn({ type: 'date', id: 'End' });
  //        dataTable.addRows([
  //          [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
  //          [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
  //          [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);
  //
  //        chart.draw(dataTable);
  //
  // function drawStudentVisualizationChart() {
  //   var data = new google.visualization.DataTable();
  //   data.addColumn('string', 'Expense');
  //   data.addColumn('number', 'Cents');
  //   data.addRows([
  //     ['administrative costs', 4],
  //     ['fundraising', 16],
  //     ['youth programs', 36],
  //     ['adult program', 44]
  //   ]);
  //
  //   var options = {'title':'Each Dollar Donated Goes To',
  //                  'width':400,
  //                  'height':300,
  //                  'pieHole': 0.5,
  //                  colors: ['#8AD1C2', '#9F8AD1', '#D18A99', '#BCD18A']};
  //
  //   var chart = new google.visualization.PieChart(document.getElementById('allocation'));
  //   chart.draw(data, options);
  // }
  // The product team would like a visualization that shows students a timeline of how their studies in major area will progress.
  // This will be for students who begin their studies in September of 2018.
  //   1. From Sept of 2018 to May of 2019, students will complete general education requirements.
  //   2. From June of 2019 to Aug of 2019, students will choose their major.
  //   3. From Sept of 2019 to May of 2020, students will complete two courses in their preferred area of study, one per semester.
  //   4. From Sept of 2020 to May of 2022, students will complete twelve courses in their preferred area of study, three per semester.
  // Build both a timeline visualization (https://developers.google.com/chart/interactive/docs/gallery/timeline)
  // showing phases of
  // study by date, as well as a bar chart (https://developers.google.com/chart/interactive/docs/gallery/barchart)
  //showing how many
  // classes in major area will be completed in each of the eight semesters
  //(fall and spring, 2019 through 2022) of their study.
  //
  // The colors used for the charts should be shades of blue.
