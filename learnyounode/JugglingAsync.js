var http = require('http');
var argv1 = process.argv[2];
var argv2 = process.argv[3];
var argv3 = process.argv[4];

http.get(argv1, function (res1) {
	var output1 = "";
	res1.setEncoding("utf8");
	res1.on("data", function (data1) {
		output1 = output1 + data1;
	});
	res1.on("end", function () {
		http.get(argv2, function (res2) {
			var output2 = "";
			res2.setEncoding("utf8");
			res2.on("data", function (data2) {
				output2 = output2 + data2;
			});

			res2.on("end", function () {
				http.get(argv3, function (res3) {
					var output3 = "";
					res3.setEncoding("utf8");
					res3.on("data", function (data3) {
						output3 = output3 + data3;
					});
					res3.on("end", function () {
						console.log(output1);
						console.log(output2);
						console.log(output3);
					});
				});
			});
		});
	});	
});	



/* 
 * Official Solution 
 */

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3) // yay! we are the last one!
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)