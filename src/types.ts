export interface ActionButtonProps {
  iconClass: string;
  label: string;
  onClick: () => void;
  colorClass?: string;
}

export interface PropertyData {
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}