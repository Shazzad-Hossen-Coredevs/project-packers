// ? props => show: true | false, children: wrapped elements, onClose: closing function

import Icon from "../Icon/Icon";

const Modal = ({ show, children, onClose }) => {
  if (show) {
    return (
      <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#333333] opacity-80">
          {/* <div className="absulote top-0 left-0 right-0 bottom-0 bg-black"></div> */}
        </div>
        <div className="flex justify-center items-center h-screen w-screen z-30 fixed left-0 top-0">
          <div className=" relative z-20 p-[30px] bg-white rounded-[12px] min-w-[350px]">
            <div onClick={onClose} className="absolute top-[30px] right-[30px]">
              <Icon name="close" />
            </div>
            <div className="">{children}</div>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
