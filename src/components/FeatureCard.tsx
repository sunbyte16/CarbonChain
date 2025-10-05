import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};
