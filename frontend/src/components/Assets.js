import getAssetRequest from '../requests/getAssetRequest';
import { useState, useEffect } from 'react';

const Assets = ({jwt}) => {

    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const getAssets = async () => {
            const getAssetResponse = await getAssetRequest(jwt);
    
            console.log(getAssetResponse)
    
            setAssets(getAssetResponse)
        };
        getAssets();
    }, [jwt])

    return (
        <div>
            <ul>
                {assets.map((asset) => {
                    return <li key={asset.symbol}>{asset.symbol + ' ' + asset.amount}</li>
                })}
            </ul>
        </div>
    )
}

export default Assets;
