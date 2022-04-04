export interface ITodoGroupButtonProps {
  onToggleAll: () => void;
  onChangeViewMode: (s: string) => (e: React.MouseEvent<HTMLElement>) => void;
  viewMode: string;
}