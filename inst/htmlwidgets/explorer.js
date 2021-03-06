HTMLWidgets.widget({

  name: 'explorer',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(rSettings) {

        console.log(rSettings)

        el.innerHTML = "";

        testjson1 = [{"row":1,"name":"alex"},{"row":2,"name":"george"}]
        testjson2 = [{"row":3,"name":"becca"},{"row":4,"name":"agustin"}]

        var testSettings  = {
          labelColumn:"Dataset",
          ignoredColumns:[],
          files:[
            {Dataset:"test1",json:testjson1},
            {Dataset:"test2",json:testjson2}
          ],
          meta:[]
        };

        //jsSettings = testSettings
        jsSettings = rSettings["settings"]

        chart = webcodebook.createExplorer(el, jsSettings);
        chart.init();
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
