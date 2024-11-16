export interface ImmigrationOpportunity {
  id: number;
  image: string; 
  title: string; 
  description: string; 
  action: {
    label: string; 
    link: string; 
  };
}
export interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}