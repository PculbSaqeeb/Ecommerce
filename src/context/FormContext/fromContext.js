// import React, { createContext, useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import RegisterSchema from "../../constant/formErrorSchema/schema";

// export const FormContext = createContext(null);

// const FormProvider = ({ children }) => {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(RegisterSchema),
//   });

//   return (
//     <FormContext.Provider
//       value={{
//         register,
//         errors,
//         reset,
//         handleSubmit,
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// };

// export default FormProvider;