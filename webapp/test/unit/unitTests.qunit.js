/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comapp/zi_cali_clndr/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
