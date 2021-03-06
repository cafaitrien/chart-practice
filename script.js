console.log("let's build some charts!")
//<!--Load the AJAX API-->

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});
  google.charts.load("current", {packages:["timeline"]});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawTimelineChart);

  // google.charts.setOnLoadCallback(drawAllocationChart);
  // google.charts.setOnLoadCallback(drawSemesterChart);
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

  function drawTimelineChart() {
    var container = document.getElementById('TimelineChart');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Action' });
    dataTable.addColumn({ type: 'date', id: 'SemesterStart' });
    dataTable.addColumn({ type: 'date', id: 'SemesterEnd' });
    dataTable.addRows([
    [ 'Complete general education requirements', new Date(2018, 8, 1), new Date(2019, 4, 1) ],
    [ 'Choose major',      new Date(2019, 5, 1),  new Date(2019, 7, 1) ],
    [ 'Complete two courses in preferred area of study, one per semester',      new Date(2019, 8, 1),  new Date(2020, 4, 1) ],
    [ 'Complete twelve courses in preferred area of study, three per semester',  new Date(2020, 8, 1),  new Date(2022, 4, 1) ]]);

    var options = {colors: ['#6593F5', '#4682B4', '#111E6C', '#1034A6' ]};

    chart.draw(dataTable, options);
  }
  // The product team would like a visualization that shows students a timeline of how their studies in major area
  //will progress.
  // This will be for students who begin their studies in September of 2018.
  //   1. From Sept of 2018 to May of 2019, students will complete general education requirements.
  //   2. From June of 2019 to Aug of 2019, students will choose their major.
  //   3. From Sept of 2019 to May of 2020, students will complete two courses in their preferred area of study,
  //one per semester.
  //   4. From Sept of 2020 to May of 2022, students will complete twelve courses in their preferred area of study,
  //three per semester.
  // Build both a timeline visualization (https://developers.google.com/chart/interactive/docs/gallery/timeline)
  // showing phases of
  // study by date,
  //
  // The colors used for the charts should be shades of blue.

window.onload = function() {
  //Event Listeners for each button: clear all charts, redraw reauested one
  document.getElementById('bowling-trigger').addEventListener('click', function(){
  document.getElementById('chart_div').innerHTML = "";
  document.getElementById('allocation').innerHTML = "";
  document.getElementById('SemesterChart').innerHTML = "";
  document.getElementById('TimelineChart').innerHTML = "";
  drawChart()
  });

  document.getElementById('allocation-trigger').addEventListener('click', function(){
    document.getElementById('chart_div').innerHTML = "";
    document.getElementById('allocation').innerHTML = "";
    document.getElementById('SemesterChart').innerHTML = "";
    document.getElementById('TimelineChart').innerHTML = "";
    drawAllocationChart()
  });
  document.getElementById('timeline-trigger').addEventListener('click', function(){
    document.getElementById('chart_div').innerHTML = "";
    document.getElementById('allocation').innerHTML = "";
    document.getElementById('SemesterChart').innerHTML = "";
    document.getElementById('TimelineChart').innerHTML = "";
    drawTimelineChart()
  });
  document.getElementById('semester-trigger').addEventListener('click', function(){
    document.getElementById('chart_div').innerHTML = "";
    document.getElementById('allocation').innerHTML = "";
    document.getElementById('SemesterChart').innerHTML = "";
    document.getElementById('TimelineChart').innerHTML = "";
    drawSemesterChart()
  });
}
