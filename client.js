import { ManagementSDK } from '@hygraph/management-sdk';

export const  managementSDK = new ManagementSDK(
    process.env.NEXT_PUBLİC_HYGRAPH_URL,
   {
    headers: {}
   } 
)
