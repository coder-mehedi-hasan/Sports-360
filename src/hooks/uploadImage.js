export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const url = process.env.NEXT_PUBLIC_image_BB_URL;
    const res = await fetch(url, { method: "POST", body: formData });
    const data = res.json();
    return data;
}