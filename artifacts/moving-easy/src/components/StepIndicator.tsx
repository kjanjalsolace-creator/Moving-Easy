import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function StepIndicator({ currentStep, totalSteps, labels }: StepIndicatorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="relative flex items-center justify-between">
        {/* Connecting line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted rounded-full overflow-hidden -z-10">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={index} className="flex flex-col items-center gap-2 relative z-10">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300
                  ${isCompleted ? 'bg-primary text-primary-foreground shadow-md' : ''}
                  ${isCurrent ? 'bg-background border-2 border-primary text-primary shadow-lg scale-110' : ''}
                  ${!isCompleted && !isCurrent ? 'bg-background border-2 border-muted text-muted-foreground' : ''}
                `}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <span 
                className={`absolute -bottom-6 whitespace-nowrap text-xs font-medium transition-colors duration-300
                  ${isCurrent ? 'text-primary' : 'text-muted-foreground hidden sm:block'}
                `}
              >
                {labels[index]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
