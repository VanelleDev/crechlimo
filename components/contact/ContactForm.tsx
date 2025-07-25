"use client";
import { useState } from 'react';
import Image from 'next/image';

const options = [
  'Investir dans la colocation',
  'Recherche locataires',
  'Travaux pour micro-crèches',
  'Demande de devis',
  'Autre demande',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    alert(`Merci ${form.name}, votre message est en cours d'envoi. Veuillez patienter.`);
    setStatus('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message envoyé !');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setStatus(`Erreur : ${data.error || 'échec de l’envoi'}`);
      }
    } catch (err) {
      setStatus('Erreur réseau');
    }
  };

  return (
    <section className="w-full py-8 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20 bg-white">
      <div className='flex flex-col justify-between lg:flex-row gap-8 lg:gap-20 bg-white '>

        <div className='w-full lg:w-auto lg:flex-shrink-0'>
          <div className="w-full max-w-[400px] mx-auto lg:w-[400px] rounded-xl border border-[#DCDCDC] p-5 gap-5 flex flex-col">
            {options.map((option, idx) => (
              <button
                key={idx}
                className={'w-full px-4 py-3 sm:px-6 lg:px-9 rounded-[60px] text-base sm:text-lg font-dmsans cursor-pointer text-[#000000]   font-normal xl:w-full   bg-[#EFEFEF] hover:bg-[#FFCD05]'}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className='w-full lg:flex-1'>
          <div className='w-full max-w-[780px]'>
            <form action=" " className='flex flex-col gap-[30px]'>

              <div className='flex flex-col gap-2.5'>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom et prénom"
                  className="w-full text-[#989898]  focus:outline-none focus:ring-0 bg-[#EFEFEF] p-5 h-[54px]  rounded-xl border-none "
                />
              </div>

              <div className='flex flex-col gap-2.5'>
                <input
                  placeholder="Entrez votre e-mail"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full text-[#989898]  focus:outline-none focus:ring-0 bg-[#EFEFEF] p-5  h-[54px]  rounded-xl border-none "
                />
              </div>


              <div className='flex flex-col gap-2.5'>
                <input
                  placeholder="Entrez votre numéro de téléphone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full text-[#989898] focus:outline-none focus:ring-0 bg-[#EFEFEF] p-5  h-[54px]  rounded-xl border-none "
                />
              </div>


              <div className='flex flex-col gap-2.5'>
                <input
                  placeholder="Entrez l'objet de votre demande"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full text-[#989898]  focus:outline-none focus:ring-0 bg-[#EFEFEF] p-5  h-[54px]  rounded-xl border-none "
                />

              </div>


              <div className='flex flex-col gap-2.5'>
                <textarea
                  placeholder="Écrivez votre message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full text-[#989898]  focus:outline-none focus:ring-0 bg-[#EFEFEF] p-5  h-[300px]  rounded-xl border-none"
                ></textarea>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={!form.name || !form.email || !form.message}
                  className="flex items-center gap-2 -mt-4 text-[#000000]  leading-5 sm:leading-7 bg-[#FFCD05] px-3 sm:px-4 font-semibold py-2 rounded-xl"
                >
                  <span>Envoyer</span>
                  <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
                </button>
              </div>



            </form>
          </div>
        </div>

      </div>

      {status && <p className="text-sm text-gray-600 mt-4">{status}</p>}
    </section>
  );
}






  //     <div className="flex flex-col md:flex-row xl:w-full mx-0 xl:justify-between gap-6 sm:gap-25">
  //       <div className="w-full max-w-[400px] mx-auto lg:w-[400px] rounded-xl border border-[#DCDCDC] p-5 gap-5 flex flex-col">

  //         {options.map((option, idx) => (
  //           <button
  //             key={idx}
  //             className={'w-full px-4 py-3 sm:px-6 lg:px-9 rounded-[60px] text-base sm:text-lg font-dmsans  text-[#000000]   font-normal xl:w-full   bg-[#EFEFEF] hover:bg-[#FFCD05]'}
  //           >
  //             {option}
  //           </button>
  //         ))}
  //       </div>
  //       <form className="space-y-4 sm:space-y-8 max-w-[780px] lg:h-[738px] xl:w-full" onSubmit={handleSubmit}>
  //         <input
  //           name="name"
  //           value={form.name}
  //           onChange={handleChange}
  //           placeholder="Entrez votre nom et prénom"
  //           className="w-full text-[#989898] leading-5 sm:leading-7 focus:outline-none focus:ring-0 bg-[#EFEFEF] rounded-lg px-3 sm:px-4 h-[50px] sm:h-[60px]"
  //         />
  //         <input
  //           placeholder="Entrez votre e-mail"
  //           name="email"
  //           value={form.email}
  //           onChange={handleChange}
  //           className="w-full text-[#989898] leading-5 sm:leading-7 focus:outline-none focus:ring-0 bg-[#EFEFEF]  rounded px-3 sm:px-4 h-[50px] sm:h-[60px]"
  //         />
  //         <input
  //           placeholder="Entrez votre numéro de téléphone"
  //           name="phone"
  //           value={form.phone}
  //           onChange={handleChange}
  //           className="w-full text-[#989898] focus:outline-none focus:ring-0 bg-[#EFEFEF] leading-5 sm:leading-7  rounded px-3 sm:px-4 h-[50px] sm:h-[60px]"
  //         />
  //         <input
  //           placeholder="Entrez l'objet de votre demande"
  //           name="subject"
  //           value={form.subject}
  //           onChange={handleChange}
  //           className="w-full text-[#989898] leading-5 sm:leading-7 focus:outline-none focus:ring-0 bg-[#EFEFEF]  rounded px-3 sm:px-4 h-[50px] sm:h-[60px]"
  //         />
  //         <textarea
  //           placeholder="Écrivez votre message"
  //           name="message"
  //           value={form.message}
  //           onChange={handleChange}
  //           className="w-full text-[#989898] leading-5 sm:leading-7 focus:outline-none focus:ring-0 bg-[#EFEFEF]  rounded px-3 sm:px-4 h-[200px] sm:h-[300px]"
  //         ></textarea>
  //         <button
  //           type="submit"
  //           disabled={!form.name || !form.email || !form.message}
  //           className="flex items-center gap-2 -mt-4 text-[#000000]  leading-5 sm:leading-7 bg-[#FFCD05] px-3 sm:px-4 font-semibold py-2 rounded-xl"
  //         >
  //             <span>Envoyer</span>
  // <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
  //         </button>
  //         {status && <p className="text-sm text-gray-600">{status}</p>}
  //       </form>
  //     </div>

// "use client";
// import { useState } from 'react';
// import Image from 'next/image';

// const options = [
//   'Investir dans la colocation',
//   'Recherche locataires',
//   'Travaux pour micro-crèches',
//   'Demande de devis',
//   'Autre demande',
// ];

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
    
//   alert(`Merci ${form.name}, votre message est en cours d'envoi. Veuillez patienter.`);
//     setStatus('');

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         setStatus('Message envoyé !');
//         setForm({ name: '', email: '', phone: '', subject: '', message: '' });
//       } else {
//         const data = await res.json();
//         setStatus(`Erreur : ${data.error || 'échec de l’envoi'}`);
//       }
//     } catch (err) {
//       setStatus('Erreur réseau');
//     }
//   };

//   return (
//     <section className="py-20 mx-20   ">
//       <div className="flex flex-col  md:flex-row xl:w-full mx-0 xl:justify-between xl:gap:10 gap-5  lg:gap-25 ">
//         <div className="space-y-4  rounded-xl border border-[#DCDCDC] min-h-[295px] w-full lg:h-[420px] lg:w-[400px] sm:w-full sm:py-5 xl:w-full sm:h-[420px]  flex flex-col items-stretch justify-center ">

//           {options.map((option, idx) => (
//             <button
//               key={idx}
//               className={'text-sm text-center w-full px-[40px] h-[60px]  xl:w-full  leading-7 rounded-[60px] font-normal font-dmsans bg-[#EFEFEF]  hover:bg-[#FFCD05] '}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//         <form className="space-y-8 max-w-[780px] lg:h-[738px]  xl:w-full " onSubmit={handleSubmit}>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Entrez votre nom et prénom"
//             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded-lg px-4 h-[60px]"
//           />
//           <input
//             placeholder="Entrez votre e-mail"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0 bg-[#EFEFEF] border rounded px-4 h-[60px]"
//           />
//           <input
//             placeholder="Entrez votre numéro de téléphone"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             className="w-full text-[#989898]  focus:outline-none focus:ring-0   bg-[#EFEFEF] leading-7 border rounded px-4 h-[60px]"
//           />
//           <input
//             placeholder="Entrez l’objet de votre demande"
//             name="subject"
//             value={form.subject}
//             onChange={handleChange}
//             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded px-4 h-[60px]"
//           />
//           <textarea
//             placeholder="Écrivez votre message"
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded px-4  h-[300px]"
//           ></textarea>
//           <button
//             type="submit"
//             disabled={!form.name || !form.email || !form.message}
//             className="flex items-center gap-2 -mt-4 text-black leading-7 bg-[#FFCD05] px-4 font-semibold py-2 rounded-xl"
//           >
//               <span>Envoyer</span>
//   <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
//           </button>
//           {status && <p className="text-sm text-gray-600">{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }



// // "use client";
// // import { useState } from 'react';
// // import Image from 'next/image';

// // const options = [
// //   'Investir dans la colocation',
// //   'Recherche locataires',
// //   'Travaux pour micro-crèches',
// //   'Demande de devis',
// //   'Autre demande',
// // ];

// // export default function ContactForm() {
// //   const [form, setForm] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     subject: '',
// //     message: '',
// //   });

// //   const [status, setStatus] = useState('');

// //   const handleChange = (e: any) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: any) => {
// //     e.preventDefault();
    
// //   alert(`Merci ${form.name}, votre message est en cours d'envoi. Veuillez patienter.`);
// //     setStatus('');

// //     try {
// //       const res = await fetch('/api/contact', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });

// //       if (res.ok) {
// //         setStatus('Message envoyé !');
// //         setForm({ name: '', email: '', phone: '', subject: '', message: '' });
// //       } else {
// //         const data = await res.json();
// //         setStatus(`Erreur : ${data.error || 'échec de l’envoi'}`);
// //       }
// //     } catch (err) {
// //       setStatus('Erreur réseau');
// //     }
// //   };

// //   return (
// //     <section className="p-20 max-w-[1200px] mx-auto">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //         <div className="space-y-4 rounded-xl border border-[#DCDCDC] h-[295px] w-full max-w-[400px] lg:h-[420px] flex flex-col items-center justify-center">
// //           {options.map((option, idx) => (
// //             <button
// //               key={idx}
// //               className={`text-sm text-center h-[60px] w-full max-w-[260px] leading-7 rounded-full font-medium ${
// //                 option === 'Autre demande'
// //                   ? 'bg-[#FFCD05]'
// //                   : 'bg-[#EFEFEF] hover:bg-gray-100'
// //               }`}
// //             >
// //               {option}
// //             </button>
// //           ))}
// //         </div>
// //         <form className="space-y-8 w-full max-w-[780px] lg:h-[730px]" onSubmit={handleSubmit}>
// //           <input
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             placeholder="Entrez votre nom et prénom"
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded-lg px-4 py-3"
// //           />
// //           <input
// //             placeholder="Entrez votre e-mail"
// //             name="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0 bg-[#EFEFEF] border rounded px-4 py-3"
// //           />
// //           <input
// //             placeholder="Entrez votre numéro de téléphone"
// //             name="phone"
// //             value={form.phone}
// //             onChange={handleChange}
// //             className="w-full text-[#989898]  focus:outline-none focus:ring-0   bg-[#EFEFEF] leading-7 border rounded px-4 py-3"
// //           />
// //           <input
// //             placeholder="Entrez l’objet de votre demande"
// //             name="subject"
// //             value={form.subject}
// //             onChange={handleChange}
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded px-4 py-3"
// //           />
// //           <textarea
// //             placeholder="Écrivez votre message"
// //             name="message"
// //             value={form.message}
// //             onChange={handleChange}
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded px-4 py-3 h-32"
// //           ></textarea>
// //           <button
// //             type="submit"
// //             disabled={!form.name || !form.email || !form.message}
// //             className="flex items-center gap-2 text-black leading-7 bg-[#FFCD05] px-4 font-semibold py-2 rounded-full"
// //           >
// //               <span>Envoyer</span>
// //   <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
// //           </button>
// //           {status && <p className="text-sm text-gray-600">{status}</p>}
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }




// // "use client";
// // import { useState } from 'react';
// // import Image from 'next/image';

// // const options = [
// //   'Investir dans la colocation',
// //   'Recherche locataires',
// //   'Travaux pour micro-crèches',
// //   'Demande de devis',
// //   'Autre demande',
// // ];

// // export default function ContactForm() {
// //   const [form, setForm] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     subject: '',
// //     message: '',
// //   });

// //   const [status, setStatus] = useState('');

// //   const handleChange = (e: any) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: any) => {
// //     e.preventDefault();
    
// //   alert(`Merci ${form.name}, votre message est en cours d'envoi. Veuillez patienter.`);
// //     setStatus('');

// //     try {
// //       const res = await fetch('/api/contact', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(form),
// //       });

// //       if (res.ok) {
// //         setStatus('Message envoyé !');
// //         setForm({ name: '', email: '', phone: '', subject: '', message: '' });
// //       } else {
// //         const data = await res.json();
// //         setStatus(`Erreur : ${data.error || 'échec de l’envoi'}`);
// //       }
// //     } catch (err) {
// //       setStatus('Erreur réseau');
// //     }
// //   };

// //   return (
// //     <section className="p-20 max-w-[1200px]  mx-auto ">
// //       <div className="flex flex-col  md:flex-row xl:max-w-full   gap-25 ">
// //         <div className="space-y-4  rounded-xl border border-[#DCDCDC] h-[295px] w-full lg:h-[420px] lg:w-[400px] flex flex-col items-center justify-center">
// //           {options.map((option, idx) => (
// //             <button
// //               key={idx}
// //               className={`text-sm text-center h-[60px] w-full max-w-[260px] leading-7 rounded-full font-medium ${
// //                 option === 'Autre demande'
// //                   ? 'bg-[#FFCD05]'
// //                   : 'bg-[#EFEFEF] hover:bg-gray-100'
// //               }`}
// //             >
// //               {option}
// //             </button>
// //           ))}
// //         </div>
// //         <form className="space-y-8 max-w-[780px] lg:h-[730px] xl:max-w-full " onSubmit={handleSubmit}>
// //           <input
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             placeholder="Entrez votre nom et prénom"
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded-lg px-4 py-3"
// //           />
// //           <input
// //             placeholder="Entrez votre e-mail"
// //             name="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0 bg-[#EFEFEF] border rounded px-4 py-3"
// //           />
// //           <input
// //             placeholder="Entrez votre numéro de téléphone"
// //             name="phone"
// //             value={form.phone}
// //             onChange={handleChange}
// //             className="w-full text-[#989898]  focus:outline-none focus:ring-0   bg-[#EFEFEF] leading-7 border rounded px-4 py-3"
// //           />
// //           <input
// //             placeholder="Entrez l’objet de votre demande"
// //             name="subject"
// //             value={form.subject}
// //             onChange={handleChange}
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded px-4 py-3"
// //           />
// //           <textarea
// //             placeholder="Écrivez votre message"
// //             name="message"
// //             value={form.message}
// //             onChange={handleChange}
// //             className="w-full text-[#989898] leading-7  focus:outline-none focus:ring-0  bg-[#EFEFEF] border rounded px-4 py-3 h-32"
// //           ></textarea>
// //           <button
// //             type="submit"
// //             disabled={!form.name || !form.email || !form.message}
// //             className="flex items-center gap-2 text-black leading-7 bg-[#FFCD05] px-4 font-semibold py-2 rounded-full"
// //           >
// //               <span>Envoyer</span>
// //   <Image src="/Arrow-link.svg" alt="Envoyer" width={20} height={20} />
// //           </button>
// //           {status && <p className="text-sm text-gray-600">{status}</p>}
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }
