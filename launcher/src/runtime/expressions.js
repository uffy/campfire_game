var ls;
(function (ls) {
	ls.opening = function() {
		return {
			"%22tween%22": function() { return "tween" },
			"%22times%22": function() { return "times" },
			"%22n%22": function() { return "n" },
			"%22notEqualTo%22": function() { return "notEqualTo" },
			"%22supermario%22": function() { return "supermario" },
			"System.times": function() { return System.times },
			"%22backOut%22": function() { return "backOut" },
			"%22equalTo%22": function() { return "equalTo" }
		}
	};
	ls.supermario = function() {
		return {
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"kick1": function() { return kick1 },
			"%22yeah%22": function() { return "yeah" },
			"%22run%22": function() { return "run" },
			"fire": function() { return fire },
			"System.supermario_stop_run": function() { return System.supermario_stop_run },
			"%22%E6%88%91%E8%AE%A9%E4%BD%A0%E7%81%AD%22": function() { return "我让你灭" },
			"System.supermario_times": function() { return System.supermario_times },
			"%22jump%22": function() { return "jump" },
			"ghbt": function() { return ghbt },
			"%22supermario_stop_run%22": function() { return "supermario_stop_run" },
			"%22supermario_times%22": function() { return "supermario_times" },
			"%E9%A3%9E%E7%A0%96": function() { return 飞砖 },
			"player": function() { return player },
			"%22equalTo%22": function() { return "equalTo" }
		}
	};
})(ls || (ls = {}));