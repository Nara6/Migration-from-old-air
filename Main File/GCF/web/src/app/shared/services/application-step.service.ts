import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStepService {


  steps: any = [
    { step: 1, isConfig: 0 },
    { step: 2, isConfig: 0 },
    { step: 3, isConfig: 0 },
    { step: 4, isConfig: 0 }
  ];

  keyLcStep: string = 'Application_Step';
  hasPlate:boolean = false;

  constructor() { }

  getStep() {
    let steps: any = JSON.parse(localStorage.getItem(this.keyLcStep));
    return steps;
  }

  setStep() {
    localStorage.setItem(this.keyLcStep, JSON.stringify(this.steps));
  }

  updateStep(stepNumber: number) {
    let steps = this.getStep();
    if(steps[stepNumber - 1].isConfig == 0){
      steps[stepNumber - 1].isConfig = 1;
    }
    localStorage.setItem(this.keyLcStep, JSON.stringify(steps));
  }

  checkActiveStep() {
    let steps: any = JSON.parse(localStorage.getItem(this.keyLcStep));
    let activeStep: number = 0;
    if (steps && steps.length) {
      steps.forEach(setupStep => {
        if (!setupStep.isConfig) {
          if (activeStep == 0)
            activeStep = setupStep.step;
        }
      });
    }
    return activeStep - 1;
  }

}
