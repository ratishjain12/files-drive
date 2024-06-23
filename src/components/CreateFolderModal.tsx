import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Input,
} from "@headlessui/react";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { User } from "../types";
import { addFolder } from "../redux/slices/fileFoldersSlice";

type folderModal = {
  FolderModal: boolean;
  setFolderModal: (b: boolean) => void;
};
const CreateFolderModal = ({ FolderModal, setFolderModal }: folderModal) => {
  const [foldername, setFolderName] = useState<string>("");
  const dispatch = useDispatch();
  const user: User = useSelector((state: RootState) => state.AuthSlice.user);
  const folders = useSelector((state: RootState) => state.FileFolderSlice);

  const checkForExistingFolder = (folderName: string): boolean => {
    const match = folders.userFolders.find(
      (folder) => folder.name === folderName
    );
    if (match) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (foldername.length >= 3) {
      if (checkForExistingFolder(foldername)) {
        alert("Folder Already Exists");
      } else {
        const data = {
          createdAt: new Date(),
          updatedAt: new Date(),
          name: foldername,
          userId: user.uid,
          createdBy: user.email,
          path: folders.currentFolder === "root" ? [] : ["parent folder path"],
          parent: folders.currentFolder,
          lastAccessed: null,
        };

        dispatch(addFolder(data));
        alert(`Folder created: ${foldername}`);
      }
    } else {
      alert("Folder name must be at least 3 characters");
    }
  };
  return (
    <Dialog
      open={FolderModal}
      onClose={() => setFolderModal(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold">Create Folder</DialogTitle>
          <Description>Enter Folder Name</Description>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="folder name..."
              className="border-2 p-2"
              value={foldername}
              onChange={(e) => setFolderName(e.target.value)}
            />
            <Button
              className="bg-blue-600 text-white p-2 "
              onClick={handleSubmit}
            >
              Create
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
export default CreateFolderModal;
