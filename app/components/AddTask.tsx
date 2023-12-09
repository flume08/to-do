"use client"
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
  const router = useRouter();
  const[modalOpen, setModalOpen] = useState<boolean>(false);
  const[newTaskValue, setNewTaskValue] = useState<string>('');
  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue
  })
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  }
  return (
    <div>
    <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
        Add new task <FaPlus  className="ml-2" size ={18} />
    </button>
    <Modal  setModalOpen={setModalOpen} modalOpen ={modalOpen}>
      <form onSubmit ={handleSubmitTodo}>
        <h3 className="font-bold text-lg">Add newtask</h3>
        <div className="modal-action">
        <input value={newTaskValue} onChange={e => setNewTaskValue(e.target.value)}
        type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
        <button type="submit" className="btn">SUBMIT</button>
        </div>
      </form>
    </Modal>
    </div>
  );
}

export default AddTask;
