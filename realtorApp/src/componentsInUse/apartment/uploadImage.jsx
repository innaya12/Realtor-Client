// import React from 'react';
// import {uploadImages} from '../../data/images'


// class UploadImage extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             user: null,
//             file_name: ''
//         };
//     } 

//     fileSelectedHandle = event =>{
//         this.setState({
//             file_name: event.target.files[0]
//         })
//     }
    
//     fileUploadHandler = () => {
//         const fd = new FormData();
//         console.log("before", fd)
//         console.log("before file_name", this.state.file_name)

//         fd.append('files', this.state.file_name)
//         console.log("after file_name", this.state.file_name)
//         console.log("after", fd)
//         this.sendingFiles(fd);
//     }

//     async sendingFiles(fd){
//         try {
//             const uploadImage = await uploadImages(fd);
//             console.log("uploadImage",uploadImage)
//             this.setState({
//                 files: uploadImage
//             })
//         } catch(error){
//             console.log(error)
//         }
//     }

//     render() {
//         const inputWrapper = { paddingTop: "20px" };
//         const {handleChange} = this.props;

//         return (
//             <div>
//                 <div className={"d-flex col-4 col-md-5"} style={inputWrapper}>
//                     <input type="file" onChange={handleChange} name={"main_image"} style={{display:"none"}} ref={fileInput => this.fileInput = fileInput}/>
//                     <button  style={{backgroundColor: "#ffffff"}} onClick={() =>this.fileInput.click()}>Pick Image</button>
//                     <button style={{backgroundColor: "#ffffff"}} onClick={this.fileUploadHandler}>Upload</button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default UploadImage;