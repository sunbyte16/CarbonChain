interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export const StatCard = ({ value, label, suffix = "" }: StatCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
        {value}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};
