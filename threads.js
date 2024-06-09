const ig_user_id = "17841459728072154";
const access_token =
  "EAANuufq2vWIBO5jOLAJsK9LOw6oF4nKrBv5pxNLLyDMXR7HmQv3X4SrIZB93dwA7i5Vwg8YCRDKTznUCwMJHwznih457ZBFqIosZCvCBRPDJTZBe40OrjSLb1KBr9WBfspZCRI7uCQszRUMb2UUZAtKGXtthRujG7isH3csUYs40ctxfU3PXM9Q2KMtqXj4MDcbR0NuWK46JaLEDB9vzIs83Kjtq5ZBiDA2DNyaSfrF";
const image_url = "https://img.youm7.com/large/202405190243264326.jpg";
const text = "#BronzFonz this is post by nodejs";

const url = `https://graph.instagram.com/v20.0/${ig_user_id}/threads`;
const params = new URLSearchParams({
  image_url,
  media_type: "IMAGE",
  text,
  access_token,
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
      `https://graph.instagram.com/v20.0/${ig_user_id}/threads_publish?creation_id=${creation_id}&access_token=${access_token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await req.json();
    console.log("Success:", res);
  } catch (error) {
    console.error("Error:", error);
  }
};
