// import React, { useState } from 'react';
// import { createContext } from 'react';

// export const ModalContext = createContext({
//   component: null,
//   props: {},
//   showModal: () => {},
//   hideModal: () => {},
// });

// const ModalProvider = ({ children }) => {
//   const showModal = (component, props = {}) => {
//     setState({
//       component,
//       props,
//     });
//   };

//   const hideModal = () =>
//     setState({
//       component: null,
//       props: {},
//     });

//   const [state, setState] = useState({
//     component: null,
//     props: {},
//     showModal: showModal,
//     hideModal: hideModal,
//   });

//   return (
//     <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
//   );
// };

// export default ModalProvider;
