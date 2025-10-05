import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

export const StepCard = ({ icon: Icon, number, title, description }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center text-center p-6">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <Icon className="w-10 h-10 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
