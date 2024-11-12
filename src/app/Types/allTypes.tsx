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
