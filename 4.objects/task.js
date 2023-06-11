function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		for (mark of marks) {
			this.marks.push(mark);
		}
	}
}

Student.prototype.getAverage = function() {
	if (this.marks && this.marks.length > 0) {
		let sum = 0;
		for (mark of this.marks) {
			sum += mark;
		}
		return sum / this.marks.length;
	}
	return 0;
}

Student.prototype.exclude = function(reason) {
	if (this.marks) {
		delete this.marks;
	}
	if (this.subject) {
		delete this.subject;
	}
	this.excluded = reason;
}