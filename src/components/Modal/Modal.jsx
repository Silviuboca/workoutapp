import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../Contexts/modal.context';

const Modal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext);
  if (modal) {
    return ReactDOM.createPortal(
      <div
        className='fixed top-0 left-0 h-screen w-full flex items-center justify-center'
        style={{ background: 'rgba(0,0,0,0.8)' }}
      >
        <div className='bg-white relative p-5 shadow-lg rounded flex flex-col items-start text-lg text-gray-800'>
          <button
            className='absolute top-0 right-0 -mt-12 font-bold self-end rounded-full bg-red-200 mb-3 bg-white text-red-700 w-8 h-8'
            onClick={() => handleModal()}
          >
            &times;
          </button>
          <p>{modalContent}</p>
        </div>
      </div>,
      document.querySelector('#modal-root')
    );
  } else return null;
};

export default Modal;

// import React, { useContext } from 'react';
// import './Modular.styles.scss';
// import { ModalContext } from '../Contexts/V1modal.context';

// const Modular = ({ children }) => {
//   const { state } = useContext(ModalContext);
//   console.log(state);
//   const { component, props, showModal, hideModal } = state;

//   return (
//     <div>
//       <div className='overlay-wrapper'>
//         <div className='overlay-content'>
//           <span className='close' onClick={hideModal}>
//             &times;
//           </span>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modular;
