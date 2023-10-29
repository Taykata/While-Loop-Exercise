function examPreparation(input) {

    let poorGrades = Number(input[0]);
    let index = 1;

    let command = input[index];
    index++;
    let grade = Number(input[index]);
    index++;

    let poorGradeCounter = 0;
    let problemsCounter = 0;
    let sumGrades = 0;

    let lastProblem = "";

    while (true) {

        if (command === "Enough") {
            console.log(`Average score: ${(sumGrades / problemsCounter).toFixed(2)}`);
            console.log(`Number of problems: ${problemsCounter}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        if (poorGradeCounter >= poorGrades) {
            console.log(`You need a break, ${poorGradeCounter} poor grades.`);
            break;
        }

        if (grade <= 4) {
            poorGradeCounter++;
        }

        problemsCounter++;
        sumGrades += grade;

        lastProblem = command;

        command = input[index];
        index++;
        grade = Number(input[index]);
        index++;
    }

}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);