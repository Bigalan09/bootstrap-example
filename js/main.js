! function($) {

	$(function() {

		var $window = $(window)
		$('[data-spy="scroll"]').each(function() {
			var $spy = $(this).scrollspy('refresh')
		})
		$('.carousel').carousel('pause')

		/*
		 * CanvasJS Chart example
		 */
		var chart = new CanvasJS.Chart("chartContainer", {
			title : {
				text : "Why you should hire me?"
			},
			theme : "theme3",
			data : [{
				type : "pie",
				indexLabelFontFamily : "Garamond",
				indexLabelFontSize : 14,
				startAngle : 90,
				showInLegend : true,
				toolTipContent : "{label}",
				dataPoints : [{
					y : 50,
					color : "#FFDC6C",
					legendText : "I love web development!",
					label : "Web Developer"
				}, {
					y : 25,
					color : "#368AFF",
					legendText : "I want to innovate and use the latest technologies!",
					label : "Creative"
				}, {
					y : 25,
					color : "#F04F92",
					legendText : "I am a quick learner!",
					label : "Learner"
				}]
			}]
		})

		chart.render()
	})
}(window.jQuery)
