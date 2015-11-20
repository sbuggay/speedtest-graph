$.get("data/", function (data) {

  var date = [];
  var ping = [];
  var download = [];
  var upload = [];

  for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    date.push(obj.date);
    ping.push(obj.ping);
    download.push(obj.download);
    upload.push(obj.upload);
  }

  var data = {
    labels: date,
    datasets: [{
      label: "ping",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: ping
    },
    {
      label: "download",
      fillColor: "rgba(220,100,100,0.2)",
      strokeColor: "rgba(220,100,100,1)",
      pointColor: "rgba(220,100,100,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: download
    },
    {
      label: "upload",
      fillColor: "rgba(100,220,100,0.2)",
      strokeColor: "rgba(100,220,100,1)",
      pointColor: "rgba(100,220,100,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: upload
    }]
  }

  var ctx = document.getElementById("chart").getContext("2d");
  var myLineChart = new Chart(ctx).Line(data, {});

});
