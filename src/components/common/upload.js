import React from 'react';
import { Upload } from 'antd';
import imgBaseUrl from '@/utils/img'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
export default class myUpload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: false,
        };
    }
    handleChange(info){
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
          }
          if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.setState({ loading: false });
            this.props.onChange(info.file.response.data.url)
        }
    }
   render(){
        const uploadButton = (
            <div>
            {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">Upload</div>
            </div>
        );
       let {value} = this.props
        return(
            <Upload
                name="file"
                action="http://localhost:9200/api/v1/upload/img"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                onChange={this.handleChange.bind(this)}
            >
                {value ? <img src={imgBaseUrl+value} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        )
   }
}