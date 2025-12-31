import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopUp } from "../../store/features/popup/popup.slice";
const deletePopUp = () => {
  const dispatch = useDispatch();
  const deletePopUp = useSelector((state) => state.popup.deletePopUp);

  if (!deletePopUp) return null;
  return (
    <div
      onClick={() => dispatch(closeDeletePopUp())}
      className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black/80 ">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}>
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Delete</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default deletePopUp;
