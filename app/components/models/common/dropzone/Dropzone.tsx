import { Children, FC, PropsWithChildren, ReactNode, useEffect } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps extends PropsWithChildren {
  label: ReactNode;
  uploadContent: ReactNode;
  setFiles?: (files: File[]) => void;
}

export const Dropzone: FC<DropzoneProps> = ({
  label,
  uploadContent,
  setFiles,
  children,
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  useEffect(() => {
    if (setFiles) {
      setFiles(acceptedFiles);
    }
  }, [acceptedFiles]);

  return (
    <div>
      <div className="robin-variable text-sm">{label}</div>
      <div className="mb-3" />
      <div className="bg-gradient-to-b from-black to-green-950">
        <div
          {...getRootProps({
            className:
              "dropzone hover:cursor-pointer flex items-center border-primary rounded-lg justify-center p-3 min-h-[100px]",
            style: {
              borderStyle: "dashed",
            },
          })}
        >
          <input {...getInputProps()} />
          <p>{uploadContent}</p>
        </div>
      </div>
      {children}
    </div>
  );
};
