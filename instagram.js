const ig_user_id = "17841459728072154";
const access_token =
  "EAANuufq2vWIBO0PxibgkzOHDYbuxhtg2GBxZB495sZBBTGKKCobwZAt2j7OFN4M9FDi8cGDvRBE4yEDn912bWpsLXjJZBKhOtlPMouXg5f4qaPry7HCaQueOAN99rN4ZChlTjr3vBzYX7XGLXJeDZAZBvpZBzXOrujjo14t3MIC8KWvUOQHF6DDOKio5W3oC0ZAnWZBEpGVogkoNZASd35RcHQ8VR985SZBE5uRboZAZBdw8IZD";
// Define the endpoint and parameters
const url = `https://graph.facebook.com/v20.0/${ig_user_id}/media`;
const params = new URLSearchParams({
  image_url: "https://img.youm7.com/large/202405190243264326.jpg",
  caption: "#BronzFonz this is post by nodejs",
  access_token, // Replace with your actual access token
});

// Create the post using the fetch method
fetch(`${url}?${params.toString()}`, {
  method: "POST",
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data.id);
    Puplisher(data.id);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const Puplisher = async (creation_id) => {
  try {
    const req = await fetch(
      `https://graph.facebook.com/v20.0/${ig_user_id}/media_publish?creation_id=${creation_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token,
        }),
      }
    );
    const res = await req.json();
    console.log("Success:", res);
  } catch (error) {
    console.error("Error:", error);
  }
};
