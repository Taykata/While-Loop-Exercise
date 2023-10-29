function walking(input) {

    let stepCounter = 0;
    let index = 0;
    
    let command = input[index];
    index++;

    while (true) {

        if (stepCounter >= 10000) {
            let extraSteps = stepCounter - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${extraSteps} steps over the goal!`);
            break;
        }
        
        if (command === "Going home") {
            command = Number(input[index]);
            stepCounter += Number(command);
            let neededSteps = 10000 - stepCounter;

            if (stepCounter >= 10000) {
                let extraSteps = stepCounter - 10000;
                console.log(`Goal reached! Good job!`);
                console.log(`${extraSteps} steps over the goal!`);
                break;
            }

            console.log(`${neededSteps} more steps to reach goal.`);
            break;
        }

        stepCounter += Number(command);

        command = (input[index]);
        index++;

    }

}

walking(["1000", "1500", "2000", "6500"]);