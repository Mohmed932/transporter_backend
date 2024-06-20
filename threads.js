// const ig_user_id = "17841459728072154";
// const access_token =
//   "EAANuufq2vWIBO0PxibgkzOHDYbuxhtg2GBxZB495sZBBTGKKCobwZAt2j7OFN4M9FDi8cGDvRBE4yEDn912bWpsLXjJZBKhOtlPMouXg5f4qaPry7HCaQueOAN99rN4ZChlTjr3vBzYX7XGLXJeDZAZBvpZBzXOrujjo14t3MIC8KWvUOQHF6DDOKio5W3oC0ZAnWZBEpGVogkoNZASd35RcHQ8VR985SZBE5uRboZAZBdw8IZD";
// const image_url = "https://img.youm7.com/large/202405190243264326.jpg";
// const text = "#BronzFonz this is post by nodejs";

// const url = `https://graph.threads.net/v1.0/${ig_user_id}/threads`;


// const params = new URLSearchParams({
//   image_url,
//   media_type: "IMAGE",
//   text,
//   access_token,
// });

// // Create the post using the fetch method
// fetch(`${url}?${params.toString()}`, {
//   method: "POST",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//     // Puplisher(data.id);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// // const Puplisher = async (creation_id) => {
// //   try {
// //     const req = await fetch(
// //       `https://graph.instagram.com/v20.0/${ig_user_id}/threads_publish?creation_id=${creation_id}&access_token=${access_token}`,
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );
// //     const res = await req.json();
// //     console.log("Success:", res);
// //   } catch (error) {
// //     console.error("Error:", error);
// //   }
// // };



const THREADS_USER_ID = "17841459728072154";
const ACCESS_TOKEN = "EAANuufq2vWIBO1QOuZBtOUjjCdyJ09ZBSom0ZA7H64HaJr1ZAnV8pGnUkQakiELhW2cX4Ye4PRwz2jyHatgk8cNkUW7RJ1VT4RUeHoU37izsZAKwXvwg3wO01N0N8ZBdYtdrxMMygGBt3ym4mV3VgXLFXX9ivzz2jVBulwO7PKu5GtoixTM1MvUBZA0v54oVmBZAGCrJTetOOoFcich05Dw9aOhoVCDZCAdfKqm8ULLUZD";
const url = `https://graph.threads.net/v1.0/${THREADS_USER_ID}/threads`;

const data = {
  media_type: "IMAGE",
  image_url: "https://img.youm7.com/large/202405190243264326.jpg",
  text: "#BronzFonz",
  access_token: ACCESS_TOKEN
};
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
