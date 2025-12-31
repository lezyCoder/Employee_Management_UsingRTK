import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopUp } from "../../store/features/popup/popup.slice";
const DeletePopUp = () => {
  const dispatch = useDispatch();
  const deletePopUp = useSelector((state) => state.popup.deletePopUp);

  if (!deletePopUp) return null;
  return (
    <div
      onClick={() => dispatch(closeDeletePopUp())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80 ">

      <dialog id="my_modal_1" className="modal" open onClick={(e) => e.stopPropagation()}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello !</h3>
          <p className="py-4">Are you sure you want to delete this employee ? </p>
          <div className="modal-action">
            <form method="dialog" className="gap-2 flex">
              {/* if there is a button in form, it will close the modal */}
              {/* here we will handle the delete operation */}
              <button className="btn bg-red-400" onClick={() => dispatch(closeDeletePopUp())}>Delete</button>
              <button className="btn" onClick={() => dispatch(closeDeletePopUp())}>Close</button>

            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeletePopUp;
