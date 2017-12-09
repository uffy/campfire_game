var ls;
(function (ls) {
	ls.opening = function() {
		return {
			"%22backOut%22": function() { return "backOut" },
			"%22equalTo%22": function() { return "equalTo" },
			"System.times": function() { return System.times },
			"%22tween%22": function() { return "tween" },
			"%22notEqualTo%22": function() { return "notEqualTo" },
			"%22supermario%22": function() { return "supermario" },
			"%22times%22": function() { return "times" },
			"%22n%22": function() { return "n" }
		}
	};
	ls.supermario = function() {
		return {
			"%22supermario_stop_run%22": function() { return "supermario_stop_run" },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"System.supermario_stop_run": function() { return System.supermario_stop_run },
			"ghbt": function() { return ghbt },
			"System.supermario_times": function() { return System.supermario_times },
			"greenboy": function() { return greenboy },
			"%22equalTo%22": function() { return "equalTo" },
			"%22yeah%22": function() { return "yeah" },
			"%22supermario_times%22": function() { return "supermario_times" },
			"%22notEqualTo%22": function() { return "notEqualTo" },
			"fire": function() { return fire },
			"%22run%22": function() { return "run" },
			"%22jump%22": function() { return "jump" },
			"%E9%A3%9E%E7%A0%96": function() { return 飞砖 },
			"%22%E6%88%91%E8%AE%A9%E4%BD%A0%E7%81%AD%22": function() { return "我让你灭" },
			"player": function() { return player },
			"%22trancate%22": function() { return "trancate" }
		}
	};
})(ls || (ls = {}));