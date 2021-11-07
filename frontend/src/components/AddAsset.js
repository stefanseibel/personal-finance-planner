import getAssetRequest from '../requests/getAssetRequest';
import postAssetRequest from '../requests/postAssetRequest';
import getAutoCompleteRequest from '../requests/getAutoCompleteRequest';
import { useState } from 'react';
import { Input, Button, Form, AutoComplete } from 'antd';

const AddAsset = ({jwt, setAssets}) => {

    const [autoComplete, setAutoComplete] = useState([]);

    const onAdd = async (values) => {
        await postAssetRequest(jwt,values);
        setAssets(await getAssetRequest(jwt));
    }

    const onAutoComplete = async (input) => {
      if (!input){
        setAutoComplete([]);
      } else {
        const res = await getAutoCompleteRequest(jwt,input);

        setAutoComplete(res);
      }
    }
    return (<Form
      name="basic"
      onFinish={onAdd}
      //onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Symbol"
        name="symbol"
        rules={[
          {
            required: true,
            message: 'Symbol of the Stock.',
          },
        ]}
      >
        <AutoComplete 
        options={autoComplete.map(e=>{
          return {
            value:e.symbol,
            label:
              <>
                <span style={{float:'left'}}>{e.shortname}</span>
                <span style={{float:'right'}}>{e.exchDisp + ':' + e.symbol}</span>
              </>
            }
          })} 
        onChange={onAutoComplete}
        />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            message: 'Amount',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>)
}

export default AddAsset;
