import { Upload } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  maxFiles?: number;
}

const UploadZone = ({ onFilesSelected, maxFiles = 10 }: UploadZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    ).slice(0, maxFiles);
    
    if (files.length > 0) {
      onFilesSelected(files);
    }
  }, [maxFiles, onFilesSelected]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, maxFiles);
    if (files.length > 0) {
      onFilesSelected(files);
    }
  }, [maxFiles, onFilesSelected]);

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement;
      const files = Array.from(target.files || []).slice(0, maxFiles);
      if (files.length > 0) {
        onFilesSelected(files);
      }
    };
    input.click();
  };

  return (
    <div
      className={cn(
        "relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200",
        "bg-upload-zone-bg border-upload-border",
        "hover:border-primary hover:bg-upload-zone-bg/80",
        isDragOver && "border-primary bg-upload-zone-bg/60 scale-[1.02]"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
          <Upload className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <p className="text-lg font-medium text-foreground">
            Click, paste, or drop up to {maxFiles} files here to start
          </p>
          <p className="text-sm text-muted-foreground">
            Supports JPG, PNG, WebP formats
          </p>
        </div>
      </div>
      
      <input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleFileInput}
      />
    </div>
  );
};

export default UploadZone;