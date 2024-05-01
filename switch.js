var marks = 95;
switch (true) {
	case marks > 85:
		result = "gradeA";
		break;
	case marks > 60:
		result = "gradeB";
		break;
	case marks > 50:
		result = "gradeC";
		break;
	case marks > 35:
		result = "gradeE";
		break;
	default:
		result = "f";
		break;

}
console.log(result);