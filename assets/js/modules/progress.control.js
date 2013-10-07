var statusRef = {
		inProgress: {
			btn: '.btn .btn-warning',
			icon: '.glyphicon .glyphicon-refresh'
		},
		readyToGrade: {
			btn: '.btn .btn-info',
			icon: '.glyphicon .glyphicon-ok'
		},
		attained: {
			btn: '.btn .btn-success',
			icon: '.glyphicon .glyphicon-ok'
		}
	}
// sets all button and icon status with given class or default, plus config status state, one of the above

function Progress(el, config) {

	

}



module.exports = function(config) {
  return new Progress(config.container, config);
};