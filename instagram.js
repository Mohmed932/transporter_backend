const ig_user_id = "17841459728072154";
const access_token =
  "EAANuufq2vWIBO07YSgC5KZAkC3N01nAfwGgkbxBenkZBZCggdfoyK0UgtEQJpLVtrjNSJcH7bBDygobQKNnalWHarZBZAkKER685FX7bhqqyJrlsi3Fe1bbSXDnilqUZBIHlsOuFQo0qbOfdMCrW2ADXTehcmcDU5W3LUqAuJaUoH2zbZC5G3TnI2nOPWw005dZBXTituJ6RvIL0bRwcslM6w71jsTGqJZBDUFjIFSHg7";
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
