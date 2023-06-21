class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	};

	addClock(startTime, doing) {
		if (!startTime || (typeof startTime === "undefined") || (typeof doing === "undefined")) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.findIndex(alarm => alarm.time === startTime) > 0) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback: doing,
			time: startTime,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(element => {
				if (element.time === this.getCurrentFormattedTime() && element.canCall) {
					element.canCall = false;
					element.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(element => {
			element.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}