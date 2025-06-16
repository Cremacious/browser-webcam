import { LoaderIcon } from 'lucide-react';

function LoaderUI() {
  return (
    <div className="h-[calc(100vh-4rem-1px)] flex items-center justify-center">
      <LoaderIcon className="h-25 w-25 animate-spin text-muted-foreground" />
    </div>
  );
}
export default LoaderUI;
