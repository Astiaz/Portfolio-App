import axios from "axios";

export const fileUpload = async(file) => {
  
    if(!file) throw new Error('No tenemos ningun archivo que subir');
    const api_key = '559827893125284';
    const cloudURL = 'https://api.cloudinary.com/v1_1/moralduke-cloud/upload';

    const data = new FormData();

    data.append('file', file);
    data.append('api_key', api_key);
    data.append('upload_preset', 'portfolio');

    try {
        const cloudResp = await axios.post(cloudURL, data, {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: function (e) {
              console.log(e.loaded / e.total)
            }
        })
        
        if(cloudResp.statusText !== 'OK') throw new Error('no se pudo subir la imagen');

        return (cloudResp.data.secure_url);

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

}
