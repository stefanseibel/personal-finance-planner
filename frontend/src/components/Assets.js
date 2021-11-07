import getAssetRequest from '../requests/getAssetRequest';
import deleteAssetRequest from '../requests/deleteAssetRequest';
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import AddAsset from './AddAsset';

const Assets = ({jwt}) => {

    const [assets, setAssets] = useState([]);

    const onDelete = async (id) => {
      await deleteAssetRequest(jwt,id)
      setAssets(await getAssetRequest(jwt))
    }

    useEffect(() => {
        const getAssets = async () => {
            const getAssetResponse = await getAssetRequest(jwt);
    
            console.log(getAssetResponse)
    
            setAssets(getAssetResponse)
        };
        getAssets();
    }, [jwt])
    
    const colums = [
      {
        title: 'Symbol',
        dataIndex: ['data','symbol'],
        key: 'symbol',
      },
      {
        title: 'Name',
        dataIndex: ['additionalData','shortName'],
        key: 'name',
      },
      {
        title: 'Type',
        dataIndex: ['additionalData','quoteType'],
        key: 'type',
      },
      {
        title: 'Price',
        dataIndex: ['additionalData','regularMarketPrice'],
        key: 'price',
      },
      {
        title: 'Currency',
        dataIndex: ['additionalData','currency'],
        key: 'currency',
      },
      {
        title: 'Change',
        dataIndex: ['additionalData','regularMarketChangePercent'],
        key: 'change',
        render: (change) => {
          const changeInt = parseFloat(change)
          let color = 'grey';
          if (changeInt > 0){
            color = 'green';
          } else if (changeInt < 0) {
            color = 'red';
          }

          return <span style={{color: color}}>{change.toFixed(3) + '%'}</span>
        }
      },
      {
        title: 'Amount',
        dataIndex: ['data','amount'],
        key: 'amount',
      },
      {
        title: 'Delete',
        dataIndex: ['data','id'],
        key: 'delete',
        render: id => <DeleteOutlined onClick={() => onDelete(id)} style={{color: 'red'}}/>
      },
    ]

    return (
        <div>
            <Table bordered
            dataSource={assets}
            columns={colums}
            footer={() => <AddAsset jwt={jwt} setAssets={setAssets}/>}
            />
        </div>
    )
}

export default Assets;
