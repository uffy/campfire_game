var ls;
(function (ls) {
	ls.middlefire = function() {
		return {
			"%22supermario%22": function() { return "supermario" },
			"%22equalTo%22": function() { return "equalTo" },
			"%22times%22": function() { return "times" }
		}
	};
	ls.opening = function() {
		return {
			"%22run%22": function() { return "run" },
			"%22equalTo%22": function() { return "equalTo" },
			"%22times%22": function() { return "times" },
			"%22fire%22": function() { return "fire" }
		}
	};
	ls.fire = function() {
		return {
			"%E7%AF%9D%E7%81%AB": function() { return 篝火 },
			"%22equalTo%22": function() { return "equalTo" },
			"%22%E6%89%93%E9%A2%A4%22": function() { return "打颤" },
			"%22%E8%9E%8D%E5%8C%96%22": function() { return "融化" },
			"%22warm%22": function() { return "warm" },
			"%22middlefire%22": function() { return "middlefire" },
			"%22run%22": function() { return "run" },
			"%22times%22": function() { return "times" }
		}
	};
	ls.supermario = function() {
		return {
			"greenboy": function() { return greenboy },
			"%22notEqualTo%22": function() { return "notEqualTo" },
			"%22supermario_stop_run%22": function() { return "supermario_stop_run" },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"%22jump%22": function() { return "jump" },
			"System.supermario_times": function() { return System.supermario_times },
			"fire": function() { return fire },
			"%E9%A3%9E%E7%A0%96": function() { return 飞砖 },
			"%22%E6%88%91%E8%AE%A9%E4%BD%A0%E7%81%AD%22": function() { return "我让你灭" },
			"%22supermario_times%22": function() { return "supermario_times" },
			"%22equalTo%22": function() { return "equalTo" },
			"System.supermario_stop_run": function() { return System.supermario_stop_run },
			"%22run%22": function() { return "run" },
			"ghbt": function() { return ghbt },
			"%22yeah%22": function() { return "yeah" },
			"%22stand%22": function() { return "stand" },
			"player": function() { return player }
		}
	};
})(ls || (ls = {}));