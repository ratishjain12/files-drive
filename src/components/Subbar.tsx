import { FolderOpen, FilePlus, File } from "lucide-react";

const Subbar = () => {
  return (
    <div className="flex items-center justify-between px-3 py-4 flex-wrap">
      <p>Root</p>
      <div className="flex items-center gap-1">
        <button className="flex items-center gap-2 bg-transparent border-2 hover:bg-slate-200 border-slate-800  px-2 py-1 rounded">
          <span>
            <File size={15} />
          </span>
          <span>create file</span>
        </button>
        <button className="flex items-center gap-2 bg-transparent border-2 border-slate-800 hover:bg-slate-200 px-2 py-1 rounded">
          <span>
            <FolderOpen size={15} />
          </span>
          <span>create folder</span>
        </button>
        <button className="flex items-center gap-2 bg-transparent border-2 border-slate-800 hover:bg-slate-200 px-2 py-1 rounded">
          <span>
            <FilePlus size={15} />
          </span>
          <span>upload file</span>
        </button>
      </div>
    </div>
  );
};
export default Subbar;
