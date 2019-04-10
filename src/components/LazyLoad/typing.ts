export interface LazyLoadProps extends KUI.BaseProps {
  loading?: string;
  error?: string;
  onError?: (value: object) => void;
  onSuccess?: (value: object) => void;
}
